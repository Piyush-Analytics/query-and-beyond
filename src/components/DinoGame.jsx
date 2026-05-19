import React, { useState, useCallback } from "react";

const WIN_LINES = [
  [0,1,2],[3,4,5],[6,7,8], // rows
  [0,3,6],[1,4,7],[2,5,8], // cols
  [0,4,8],[2,4,6],          // diags
];

const checkWinner = (board) => {
  for (const [a,b,c] of WIN_LINES) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], line: [a,b,c] };
    }
  }
  if (board.every(Boolean)) return { winner: 'draw', line: [] };
  return null;
};

const minimax = (board, isMax, depth = 0) => {
  const result = checkWinner(board);
  if (result) {
    if (result.winner === 'O') return 10 - depth;
    if (result.winner === 'X') return depth - 10;
    return 0;
  }
  const scores = [];
  for (let i = 0; i < 9; i++) {
    if (!board[i]) {
      const next = [...board];
      next[i] = isMax ? 'O' : 'X';
      scores.push(minimax(next, !isMax, depth + 1));
    }
  }
  return isMax ? Math.max(...scores) : Math.min(...scores);
};

const getBestMove = (board) => {
  let best = -Infinity, move = -1;
  for (let i = 0; i < 9; i++) {
    if (!board[i]) {
      const next = [...board];
      next[i] = 'O';
      const score = minimax(next, false);
      if (score > best) { best = score; move = i; }
    }
  }
  return move;
};

const MODES = ['pvp', 'pvc'];
const MODE_LABELS = { pvp: '⚔ PVP', pvc: '🤖 VS AI' };
const MODE_HINT = { pvp: 'two players — take turns', pvc: 'play against AI' };

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const [mode, setMode] = useState('pvc');
  const [scores, setScores] = useState({ X: 0, O: 0, draw: 0 });
  const [thinking, setThinking] = useState(false);

  const result = checkWinner(board);

  const handleClick = useCallback((i) => {
    if (board[i] || result || thinking) return;
    if (mode === 'pvc' && !isX) return;

    const next = [...board];
    next[i] = isX ? 'X' : 'O';
    setBoard(next);
    setIsX(!isX);

    const res = checkWinner(next);
    if (res) {
      setScores(s => ({ ...s, [res.winner]: (s[res.winner] || 0) + 1 }));
      return;
    }

    // AI move
    if (mode === 'pvc') {
      setThinking(true);
      setTimeout(() => {
        const aiMove = getBestMove(next);
        if (aiMove !== -1) {
          const aiBoard = [...next];
          aiBoard[aiMove] = 'O';
          setBoard(aiBoard);
          setIsX(true);
          const aiRes = checkWinner(aiBoard);
          if (aiRes) setScores(s => ({ ...s, [aiRes.winner]: (s[aiRes.winner] || 0) + 1 }));
        }
        setThinking(false);
      }, 400);
    }
  }, [board, isX, mode, result, thinking]);

  const reset = () => {
    setBoard(Array(9).fill(null));
    setIsX(true);
  };

  const resetAll = () => {
    setBoard(Array(9).fill(null));
    setIsX(true);
    setScores({ X: 0, O: 0, draw: 0 });
  };

  const getStatus = () => {
    if (result) {
      if (result.winner === 'draw') return '— DRAW —';
      if (mode === 'pvc') return result.winner === 'X' ? '🎉 YOU WIN!' : '🤖 AI WINS!';
      return `🏆 PLAYER ${result.winner} WINS!`;
    }
    if (thinking) return '🤖 AI THINKING...';
    if (mode === 'pvc') return isX ? '▶ YOUR TURN  (X)' : '⏳ AI TURN  (O)';
    return `▶ PLAYER ${isX ? 'X' : 'O'} TURN`;
  };

  const winLine = result?.line || [];

  return (
    <div
      className="w-full border-b-2"
      style={{ borderColor: "var(--border-color)", fontFamily: "'JetBrains Mono','Fira Code',monospace" }}
    >
      {/* Header */}
      <div className="w-full border-b-2 flex justify-center" style={{ borderColor: "var(--border-color)" }}>
        <div
          className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[61.5%] flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 border-x-2"
          style={{ borderColor: "var(--border-color)", color: "var(--text-color)" }}
        >
          <span className="text-xl sm:text-2xl font-bold tracking-tight">Tic Tac Toe</span>
          <span className="text-[10px] font-medium tracking-widest uppercase opacity-40">
            X: {scores.X} · O: {scores.O} · Draw: {scores.draw}
          </span>
        </div>
      </div>

      {/* Mode toolbar */}
      <div className="flex justify-center border-b-2 bg-[var(--bg-color)]" style={{ borderColor: "var(--border-color)" }}>
        <div
          className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[61.5%] flex flex-wrap items-center gap-2 px-4 py-3 border-x-2"
          style={{ borderColor: "var(--border-color)" }}
        >
          <div className="flex flex-wrap gap-2">
            {MODES.map(m => (
              <button
                key={m}
                onClick={() => { setMode(m); resetAll(); }}
                className={`px-3 py-1.5 text-[10px] sm:text-[11px] font-bold tracking-widest uppercase transition-all duration-200 border rounded-sm ${
                  mode === m
                    ? "bg-[var(--text-color)] text-[var(--bg-color)] border-[var(--text-color)] shadow-sm"
                    : "bg-transparent text-[var(--text-color)] border-[var(--border-color)] opacity-60 hover:opacity-100"
                }`}
              >
                {MODE_LABELS[m]}
              </button>
            ))}
          </div>

          <div className="flex-1 min-w-[10px]" />

          <div className="flex gap-2 ml-auto">
            <button
              onClick={reset}
              className="px-3 py-1.5 text-[10px] sm:text-[11px] font-bold tracking-widest uppercase transition-all duration-200 border rounded-sm bg-transparent text-[var(--text-color)] border-[var(--border-color)] opacity-60 hover:opacity-100 hover:bg-[var(--icon-bg)]"
            >
              ↺ RESET
            </button>
            <button
              onClick={resetAll}
              className="px-4 py-1.5 text-[10px] sm:text-[11px] font-bold tracking-widest uppercase transition-all duration-200 border rounded-sm bg-transparent text-[#ef4444] border-[var(--border-color)] opacity-60 hover:opacity-100 hover:border-[#ef4444] hover:bg-[#ef4444]/10"
            >
              CLEAR
            </button>
          </div>
        </div>
      </div>

      {/* Game Area */}
      <div className="flex justify-center">
        <div
          className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[61.5%] border-x-2"
          style={{ borderColor: "var(--border-color)" }}
        >
          <div
            style={{
              background: "#0a0a0a",
              position: "relative",
              minHeight: "52vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "24px",
              padding: "32px 16px",
            }}
          >
            {/* Status */}
            <div style={{
              color: result ? (result.winner === 'draw' ? 'rgba(255,200,50,0.9)' : 'rgba(100,200,255,0.9)') : 'rgba(255,255,255,0.5)',
              fontSize: "13px",
              fontWeight: "bold",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              minHeight: "20px",
            }}>
              {getStatus()}
            </div>

            {/* Board */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "6px",
              width: "min(280px, 80vw)",
            }}>
              {board.map((cell, i) => {
                const isWinCell = winLine.includes(i);
                return (
                  <button
                    key={i}
                    onClick={() => handleClick(i)}
                    style={{
                      aspectRatio: "1",
                      background: isWinCell
                        ? "rgba(100,180,255,0.15)"
                        : "rgba(255,255,255,0.04)",
                      border: isWinCell
                        ? "1px solid rgba(100,180,255,0.5)"
                        : "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "6px",
                      fontSize: "clamp(28px, 6vw, 48px)",
                      fontWeight: "bold",
                      color: cell === 'X'
                        ? "rgba(100,180,255,0.9)"
                        : "rgba(255,100,100,0.9)",
                      cursor: cell || result || thinking ? "default" : "pointer",
                      transition: "all 0.15s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "monospace",
                    }}
                    onMouseEnter={e => {
                      if (!cell && !result && !thinking) {
                        e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                      }
                    }}
                    onMouseLeave={e => {
                      if (!isWinCell) e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                      else e.currentTarget.style.background = "rgba(100,180,255,0.15)";
                    }}
                  >
                    {cell}
                  </button>
                );
              })}
            </div>

            {/* Score board */}
            <div style={{
              display: "flex",
              gap: "24px",
              marginTop: "8px",
            }}>
              {[
                { label: mode === 'pvc' ? 'YOU' : 'X', value: scores.X, color: "rgba(100,180,255,0.8)" },
                { label: 'DRAW', value: scores.draw, color: "rgba(255,200,50,0.8)" },
                { label: mode === 'pvc' ? 'AI' : 'O', value: scores.O, color: "rgba(255,100,100,0.8)" },
              ].map(({ label, value, color }) => (
                <div key={label} style={{ textAlign: "center" }}>
                  <div style={{ color, fontSize: "22px", fontWeight: "bold" }}>{value}</div>
                  <div style={{ color: "rgba(255,255,255,0.25)", fontSize: "9px", letterSpacing: "0.15em" }}>{label}</div>
                </div>
              ))}
            </div>

            {/* Play again button */}
            {result && (
              <button
                onClick={reset}
                style={{
                  marginTop: "4px",
                  padding: "8px 24px",
                  border: "1px solid rgba(100,180,255,0.4)",
                  borderRadius: "4px",
                  background: "rgba(100,180,255,0.1)",
                  color: "rgba(100,180,255,0.9)",
                  fontSize: "11px",
                  fontWeight: "bold",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
              >
                ▶ PLAY AGAIN
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="w-full min-h-10 border-y-2 flex items-center justify-center"
        style={{
          borderColor: "var(--border-color)",
          backgroundImage: `repeating-linear-gradient(-45deg, var(--cover-dot) 0px, var(--cover-dot) 1px, transparent 1px, transparent 8px)`,
        }}
      >
        <span className="text-[10px] font-bold tracking-[0.15em] uppercase opacity-40" style={{ color: "var(--text-color)" }}>
          {MODE_HINT[mode]}
        </span>
      </div>
    </div>
  );
}
