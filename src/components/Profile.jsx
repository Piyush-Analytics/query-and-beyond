import React from 'react';
import { AvatarElectricEffect } from "../components/AvatarElectricEffect";

const Profile = () => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <div style={{ borderColor: 'var(--border-color)' }} className="border-b">
        <div
          style={{ borderColor: 'var(--border-color)' }}
          className="border border-t-0 border-b-0 flex mx-[5%] sm:mx-[10%] md:mx-[15%] lg:mx-[19.5%] min-h-[15vh] sm:min-h-[24vh]"
        >
          <div
            style={{ borderColor: 'var(--border-color)' }}
            className="border-r relative flex items-center justify-center pt-2 w-[36%] sm:w-auto sm:min-w-46 sm:max-w-46 sm:min-h-46 sm:max-h-46"
          >
            <AvatarElectricEffect>
              <img
                src="https://i.pinimg.com/736x/bb/77/72/bb7772074ede4af7dd24a843856c691a.jpg"
                alt="profile"
                style={{ borderColor: 'var(--border-color)' }}
                className="rounded-full border-2 p-1 w-full aspect-square object-cover sm:h-46 sm:min-w-46"
              />
            </AvatarElectricEffect>
          </div>

          <div className="w-[64%] sm:w-auto sm:flex-1 flex flex-col justify-end align-bottom">
            <div
              style={{
                borderColor: 'var(--border-color)',
                backgroundColor: 'var(--cover-bg)',
                backgroundImage: 'repeating-linear-gradient(-45deg, var(--cover-dot) 0px, var(--cover-dot) 1px, transparent 1px, transparent 8px)',
                transition: 'background-color 0.4s ease, background-image 0.4s ease',
              }}
              className="border-b-2 min-h-[6rem] max-h-[6rem] w-full flex items-end p-1 pl-4 text-zinc-400 text-xs sm:text-sm"
            >
              console.log("Hello, World !")
            </div>

            <div
              style={{ borderColor: 'var(--border-color)' }}
              className="border-b-2 min-h-8 pl-4 text-xl sm:text-2xl font-bold flex items-center"
            >
              Piyush Kumar
            </div>

            <div className="ml-5 pt-1 text-zinc-400 italic text-xs sm:text-sm font-light">
              <span className="relative inline-block h-4 sm:h-6 overflow-hidden">
                <span className="animate-slideText block">
                  <span>Data Analyst</span>
                  <br />
                  <span>SQL &amp; Data Analytics</span>
                  <br />
                  <span>Python &amp; Visualization</span>
                  <br />
                  <span>Fresher · Available for Opportunities</span>
                  <br />
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          borderColor: 'var(--border-color)',
          backgroundColor: 'var(--cover-bg)',
          backgroundImage: 'repeating-linear-gradient(-45deg, var(--cover-dot) 0px, var(--cover-dot) 1px, transparent 1px, transparent 8px)',
          transition: 'background-color 0.4s ease, background-image 0.4s ease',
        }}
        className="min-w-screen min-h-10 border-b-2"
      ></div>
    </div>
  );
};

export default Profile;