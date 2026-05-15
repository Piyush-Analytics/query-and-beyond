// updated by piyush
export const projects = [
  {
    id: "strayniya-website",
    title: "Strayniya Website",
    description: "A responsive and visually appealing website built to highlight Strayniya's mission.",
    image: "https://strayniya.in/wp-content/uploads/2026/01/Untitled-design-4-1536x860.png",
    link: "https://strayniya.in/",
    tech: ["HTML", "CSS", "JavaScript"],
    details: [
      {
        heading: "Overview",
        content: "Designed a responsive and visually appealing interface to highlight Strayniya's mission with a modern, mobile-first approach."
      },
      {
        heading: "Features",
        content: "• Responsive design across all devices\n• Mobile-first approach\n• Modern design principles\n• Accessibility focused"
      },
      {
        heading: "Technologies Used",
        content: "HTML, CSS, JavaScript"
      }
    ],
  },
  {
    id: "hhfc-website",
    title: "HHFC Website",
    description: "A user-friendly and visually appealing frontend for hhfc.in using HTML, CSS, JavaScript, Figma and Canva.",
    image: "https://hhfc.in/assets/image-1-BUOCEJYI.webp",
    link: "https://hhfc.in/",
    tech: ["HTML", "CSS", "JavaScript", "Figma", "Canva"],
    details: [
      {
        heading: "Overview",
        content: "Developed and implemented a user-friendly and visually appealing Frontend for the website hhfc.in."
      },
      {
        heading: "Features",
        content: "• Custom UI designs with Figma\n• Visual assets created in Canva\n• Clean, intuitive navigation\n• Fully responsive layout"
      },
      {
        heading: "Technologies Used",
        content: "HTML, CSS, JavaScript, Figma, Canva"
      }
    ],
  },
  {
    id: "bookstore-sql",
    title: "Bookstore Sales Analysis (SQL)",
    description: "A SQL project to manage bookstore data and generate business insights using advanced queries.",
    image: "https://i.pinimg.com/1200x/70/16/98/70169861d6395dc1438d2ce63343e6c0.jpg",
    link: "https://github.com/Piyush-Analytics/Bookstore-sales-analysis-SQL",
    tech: ["SQL", "MySQL", "Database Design"],
    details: [
      {
        heading: "Overview",
        content: "Developed a SQL project to manage bookstore data and generate business insights through structured database design."
      },
      {
        heading: "Features",
        content: "• Advanced queries using JOIN, GROUP BY, HAVING\n• Sales and customer analysis\n• Data handling and reporting efficiency\n• Structured database design"
      },
      {
        heading: "Technologies Used",
        content: "SQL, MySQL, Database Design"
      }
    ],
  },
  {
    id: "superstore-sales-dashboard",
    title: "Superstore Sales Dashboard (Power BI)",
    description: "Interactive Power BI dashboard analysing 10K+ sales orders across 4 regions and 3 years using DAX measures, Power Query, and cross-filtering slicers.",
    image: "https://i.imgur.com/Uz8qNC7.png",
    link: "https://github.com/Piyush-Analytics/superstore-sales-dashboard",
    tech: ["Power BI", "DAX", "Power Query", "Data Visualization"],
    details: [
      {
        heading: "Overview",
        content: "Built an end-to-end interactive sales dashboard in Power BI analysing the US Superstore dataset (9,994 orders, 2014–2017). Includes data cleaning in Power Query, 7 custom DAX measures, and 6 interactive charts with cross-filtering slicers."
      },
      {
        heading: "Key Insights",
        content: "• West region drives highest revenue but has the lowest profit margin\n• Orders with 20%+ discount consistently generate negative profit\n• Technology is the top revenue category at ~$836K total sales\n• Tables sub-category is the only product line with consistent losses\n• Consumer segment accounts for the largest share of total orders"
      },
      {
        heading: "Features",
        content: "• 6 interactive charts — line, bar, treemap, scatter, horizontal bar\n• 3 slicers — filter by Year, Region, and Customer Segment\n• 4 KPI cards — Total Sales, Total Profit, Profit Margin %, Total Orders\n• 7 custom DAX measures including YoY Growth % and Profit Margin %\n• Cross-filtering — clicking any chart filters all other visuals"
      },
      {
        heading: "Technologies Used",
        content: "Power BI Desktop, DAX, Power Query, Microsoft Excel"
      }
    ],
  },
  {
    id: "covid19-powerbi-dashboard",
    title: "COVID-19 Data Analysis Dashboard (Power BI)",
    description: "An interactive 5-page Power BI dashboard analyzing 1M+ COVID-19 patient records — covering mortality, ICU admissions, comorbidities and demographics.",
    image: "https://raw.githubusercontent.com/Piyush-Analytics/COVID19-PowerBI-Dashboard/main/covid_dashboard_portfolio.png",
    link: "https://github.com/Piyush-Analytics/COVID19-PowerBI-Dashboard",
    tech: ["Power BI", "DAX", "Power Query", "Data Analysis"],
    gallery: [
      "https://raw.githubusercontent.com/Piyush-Analytics/COVID19-PowerBI-Dashboard/main/02_demographics.png",
      "https://raw.githubusercontent.com/Piyush-Analytics/COVID19-PowerBI-Dashboard/main/03_severity_icu.png",
      "https://raw.githubusercontent.com/Piyush-Analytics/COVID19-PowerBI-Dashboard/main/04_comorbidities.png",
      "https://raw.githubusercontent.com/Piyush-Analytics/COVID19-PowerBI-Dashboard/main/05_mortality_deep_dive.png",
    ],
    details: [
      {
        heading: "Overview",
        content: "Built an interactive 5-page Power BI dashboard from a 1,048,575-row COVID-19 patient dataset. Translated a complete Python EDA (Pandas, Matplotlib, Seaborn) into live filterable visuals with DAX measures, slicers, and cross-page navigation."
      },
      {
        heading: "Page 1 — Executive Summary",
        content: "• 6 KPI cards: Total Patients (1M), COVID Positive (392K), COVID Positive % (37.4%), Total Deaths (77K), Mortality Rate % (7.3%), ICU Rate % (1.6%)\n• COVID Positive vs Negative donut — 62.62% Negative vs 37.38% Positive\n• Patient Survival vs Mortality donut — 92.66% Survived vs 7.34% Died\n• Cases by Age Group bar chart — 30-44 age group had the highest cases"
      },
      {
        heading: "Page 2 — Demographics",
        content: "• Age Distribution column chart — peak in 30-44 Adult age group\n• Gender Distribution donut — near equal split (Female 49.93% / Male 50.07%)\n• Age Group vs Patient Outcome — elderly groups show higher mortality\n• Gender vs Patient Outcome — both genders analyzed for survival vs death trends"
      },
      {
        heading: "Page 3 — Severity & ICU",
        content: "• ICU Admission Rate — only 1.6% of 1M patients required ICU\n• Age Distribution by ICU Admission box plot — older patients more likely to need ICU\n• Pneumonia vs ICU Admission — pneumonia patients 10x more likely to need ICU"
      },
      {
        heading: "Page 4 — Comorbidities",
        content: "• Diabetes vs Patient Outcome — diabetic patients show significantly higher mortality\n• Pneumonia vs Patient Outcome — 15K died vs 5K survived among pneumonia patients\n• Conditions vs Outcome Heatmap matrix with red/green conditional color formatting\n• Obesity vs Patient Outcome — obese patients show elevated death rates"
      },
      {
        heading: "Page 5 — Mortality Deep Dive",
        content: "• Mortality by Age Group — elderly 75+ highest: Male 8.7K / Female 6.1K deaths\n• Deaths by Gender — Male 8.7K vs Female 6.1K total deaths\n• Diabetes vs Deaths — Male 5.9K / Female 3.6K deaths among diabetic patients\n• Pneumonia vs Deaths — Male 6.0K / Female 4.2K deaths among pneumonia patients"
      },
      {
        heading: "Key Insights",
        content: "• Elderly patients (75+) showed significantly higher mortality rates\n• Pneumonia was strongly associated with ICU admission\n• Diabetes and obesity correlated with worse patient outcomes\n• Only 1.6% of 1M patients required ICU admission\n• Middle-age groups (30-44) had the highest case counts\n• Near equal gender distribution — 49.93% Female vs 50.07% Male"
      },
      {
        heading: "Technologies Used",
        content: "Power BI Desktop, DAX, Power Query (M Language), Python (Pandas, Matplotlib, Seaborn)"
      }
    ],
  },
  {
    id: "hr-analytics-eda",
    title: "HR Analytics — Employee Attrition EDA (Python)",
    description: "Exploratory Data Analysis on IBM HR dataset of 1,470 employees — uncovering key attrition drivers, workforce diversity patterns, and salary insights across 11 charts built with Pandas, Matplotlib and Seaborn.",
    image: "https://raw.githubusercontent.com/Piyush-Analytics/HR-analytics-eda/main/HR_Analytics_Dashboard_Summary.png",
    link: "https://github.com/Piyush-Analytics/HR-analytics-eda",
    tech: ["Python", "Pandas", "Seaborn", "Matplotlib", "EDA"],
    details: [
      {
        heading: "Overview",
        content: "Performed a full Exploratory Data Analysis on the IBM HR Analytics Employee Attrition dataset containing 1,470 employee records and 35 features. Engineered 4 new features including Age Groups, Salary Bands and Tenure Groups, then built 11 visualisations covering attrition overview, department analysis, salary distribution, overtime impact, job satisfaction, work-life balance, gender diversity and a correlation heatmap."
      },
      {
        heading: "Key Insights",
        content: "• Overall attrition rate: 16.1% — 237 out of 1,470 employees left\n• Overtime is the #1 risk factor — overtime workers leave at 30.5% vs 10.4% (no overtime)\n• Sales department has the highest attrition rate among all departments\n• 18–25 age group has the highest attrition — early career employees leave most\n• Low salary band employees have critically high attrition rates\n• Employees with 0–2 years tenure are at highest risk of leaving"
      },
      {
        heading: "Features",
        content: "• 11 charts — bar, pie, box plot, heatmap, horizontal bar\n• 4 engineered features — Age Groups, Salary Bands, Tenure Groups, Attrition Flag\n• Correlation heatmap across 10 key HR metrics\n• Gender diversity analysis — distribution and attrition by gender\n• Key Insights summary printed programmatically from data"
      },
      {
        heading: "Business Recommendations",
        content: "• Reduce overtime — mandatory OT is the single biggest attrition driver\n• Focus retention on 18–25 age group with mentorship & career growth programs\n• Review Sales department compensation — highest attrition needs urgent attention\n• Improve onboarding — 0–2 year employees leave most, invest in early engagement\n• Salary benchmarking — low salary band has critical attrition levels"
      },
      {
        heading: "Technologies Used",
        content: "Python 3.13, Pandas, NumPy, Matplotlib, Seaborn, VS Code, Jupyter Notebook"
      }
    ],
  },
  {
    id: "hr-analytics-powerbi",
    title: "HR Analytics Dashboard (Power BI)",
    description: "Interactive Power BI dashboard analysing IBM HR Employee Attrition dataset — 1,470 employees, 5 KPI cards, 6 charts and 3 slicers covering attrition, department, overtime, tenure and gender diversity using DAX measures.",
    image: "https://github.com/Piyush-Analytics/HR-Analytics-PowerBI/blob/main/HR_Analytics_PowerBI_Dashboard(1).png?raw=true",
    link: "https://github.com/Piyush-Analytics/HR-Analytics-PowerBI",
    tech: ["Power BI", "DAX", "Power Query", "Data Visualization"],
    details: [
      {
        heading: "Overview",
        content: "Built an interactive Power BI dashboard analysing the IBM HR Analytics Employee Attrition dataset (1,470 employees, 35 features). Features 5 KPI cards, 6 interactive charts and 3 slicers with full cross-filtering capability — covering attrition by department, age group, job role, overtime impact, tenure and gender diversity."
      },
      {
        heading: "Key Metrics",
        content: "• Total Employees: 1,470\n• Attrition Count: 237\n• Attrition Rate: 16.1%\n• Avg Monthly Income: $6,503\n• Avg Tenure: 7.01 years"
      },
      {
        heading: "Key Insights",
        content: "• Overtime workers leave at 30.5% vs 10.4% — 3x higher risk\n• Sales department has highest attrition (92 employees left)\n• Laboratory Technicians are the most at-risk job role (62 left)\n• 60% Male vs 40% Female workforce split\n• Employees with 0–2 years tenure leave most frequently"
      },
      {
        heading: "Features",
        content: "• 5 KPI cards — Total Employees, Attrition Count, Attrition Rate %, Avg Income, Avg Tenure\n• 6 interactive charts — bar, column, donut, horizontal bar\n• 3 slicers — Department, Gender, Job Role\n• Cross-filtering — clicking any chart filters all other visuals\n• Custom icons on KPI cards for professional look"
      },
      {
        heading: "DAX Measures",
        content: "• Total Employees = COUNTROWS(table)\n• Attrition Count = CALCULATE(COUNTROWS, Attrition = Yes)\n• Attrition Rate % = DIVIDE([Attrition Count], [Total Employees])\n• Avg Monthly Income = AVERAGE(MonthlyIncome)\n• Avg Tenure = AVERAGE(YearsAtCompany)"
      },
      {
        heading: "Technologies Used",
        content: "Power BI Desktop, DAX, Power Query"
      }
    ],
  },
  {
    id: "stock-market-pipeline",
    title: "Real-Time Stock Market Pipeline(Python)",
    description:"Real-time Python pipeline fetching live stock prices via Yahoo Finance API — stored in SQLite and visualised in an auto-updating Plotly Dash dashboard with KPI cards, trend and volume charts.",
    image: "https://raw.githubusercontent.com/Piyush-Analytics/stock-market-pipeline/main/dashboard_preview.png",
    link: "https://github.com/Piyush-Analytics/stock-market-pipeline",
    tech: ["Plotly Dash", "SQLite", "yfinance", "Pandas", "API"],
    details: [
      {
        heading: "Overview",
        content: "Built an end-to-end real-time stock market data pipeline using Python. The pipeline ingests live stock prices every 30 seconds via Yahoo Finance API, transforms and stores data in SQLite, and visualises it in a live auto-updating Plotly Dash dashboard — covering 5 major stocks: AAPL, GOOGL, MSFT, AMZN, TSLA."
      },
      {
        heading: "Pipeline Architecture",
        content: "Yahoo Finance API → Python Ingestion → SQLite Storage → Plotly Dash Dashboard"
      },
      {
        heading: "Key Insights (Sample)",
        content: "• TSLA had highest trading volume at 75.8M shares\n• TSLA showed strongest daily gain at +5.41%\n• GOOGL and AMZN showed slight decline (-1.34%, -0.31%)\n• MSFT and AAPL showed steady positive movement\n• Dashboard auto-refreshes every 30 seconds with latest data"
      },
      {
        heading: "Features",
        content: "• Live data ingestion — fetches prices every 30 seconds automatically\n• 5 KPI cards — real-time price + daily change % with green/red indicators\n• Price Trend chart — tracks all 5 stocks over time\n• Daily Change % chart — green/red bars showing gainers vs losers\n• Trading Volume chart — compares volume across all stocks\n• Data table — full metrics including Open, High, Low, Volume, Change %\n• SQLite storage — all data saved locally for historical analysis"
      },
      {
        heading: "Technologies Used",
        content: "Python 3.13, yfinance (Yahoo Finance API), Pandas, SQLite, Plotly Dash, SQLAlchemy"
      }
    ],
  },
  {
    id: "stock-market-powerbi",
    title: "Stock Market Dashboard (Power BI)",
    description: "Interactive Power BI dashboard visualising real-time stock data for AAPL, GOOGL, MSFT, AMZN, TSLA — featuring sparkline KPI cards, price trends, volume analysis and daily change % with a purple gradient theme.",
    image: "https://raw.githubusercontent.com/Piyush-Analytics/stock-market-pipeline/main/Stock_Market_PowerBI.png",
    link: "https://github.com/Piyush-Analytics/stock-market-pipeline",
    tech: ["Power BI", "DAX", "Data Visualization", "Financial Analysis"],
    details: [
      {
        heading: "Overview",
        content: "Built an interactive Power BI dashboard on top of the real-time stock market pipeline — visualising live price data for 5 major stocks (AAPL, GOOGL, MSFT, AMZN, TSLA). Features sparkline KPI cards, price comparison, volume analysis, daily change % and price trend charts with a professional purple gradient theme."
      },
      {
        heading: "Key Metrics",
        content: "• AAPL: $292.68 (+0.24%)\n• MSFT: $412.66 (+1.20%)\n• GOOGL: $388.64 (-1.34%)\n• AMZN: $268.99 (-0.31%)\n• TSLA: $445.00 (+5.41%) — highest daily gain"
      },
      {
        heading: "Features",
        content: "• 5 KPI cards with sparklines — real-time price + trend indicator\n• Latest Price by Stock bar chart\n• Daily Change % with green/red conditional colors\n• Trading Volume comparison chart\n• Price Trend Over Time line chart\n• Full data table with High, Low, Volume, Change %\n• 2 slicers — Symbol and Timestamp filters"
      },
      {
        heading: "DAX Measures",
        content: "• Latest Price per stock — LASTNONBLANK measure\n• Avg Change % — AVERAGE(change_pct)\n• Total Volume — SUM(volume)\n• Max Price — MAX(price)\n• Min Price — MIN(price)"
      },
      {
        heading: "Technologies Used",
        content: "Power BI Desktop, DAX, CSV data from Python pipeline"
      }
    ],
  },
  {
    id: "bank-fraud-detection-sql",
    title: "Bank Transaction Fraud Detection (PostgreSQL)",
    description: "End-to-end fraud detection system in PostgreSQL — 44+ queries across 6 complexity levels analysing 1.2M+ credit card transactions using window functions, CTEs, correlated subqueries and geographic anomaly detection.",
    image: "https://raw.githubusercontent.com/Piyush-Analytics/bank-fraud-detection-sql/main/Screenshot%20(118)(1).png",
    link: "https://github.com/Piyush-Analytics/bank-fraud-detection-sql",
    tech: ["PostgreSQL", "SQL", "Window Functions", "CTEs", "Fraud Detection"],
    details: [
      {
        heading: "Overview",
        content: "Built an end-to-end Bank Transaction Fraud Detection system in PostgreSQL — wrote 44+ queries across 6 complexity levels covering basic exploration, intermediate analysis, window functions, CTEs, subqueries and advanced fraud detection logic on 1.2M+ credit card transactions."
      },
      {
        heading: "Fraud Detection Logic",
        content: "• Velocity Check — flags 3+ transactions within same hour\n• Geographic Anomaly — calculates distance between customer & merchant\n• Spending Anomaly — flags transactions 3x above customer average\n• Risk Scorecard — labels customers as HIGH/MEDIUM/LOW risk\n• Time Pattern Analysis — night vs day, weekday vs weekend fraud rates\n• Rapid Transaction Detection — flags < 5 minute gaps between transactions"
      },
      {
        heading: "Key Findings",
        content: "• Overall fraud rate: ~0.58% of all transactions\n• Night time (12AM–6AM) has highest fraud rate\n• Shopping/misc categories show highest fraud counts\n• Customers spending 3x their average flagged as high risk\n• Rapid successive transactions (< 5 min gap) strong fraud indicator"
      },
      {
        heading: "SQL Concepts Covered",
        content: "• Window Functions — ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD, NTILE, PERCENT_RANK\n• CTEs — Simple, Multi-level, Recursive CTEs\n• Subqueries — Correlated, EXISTS, NOT EXISTS, Scalar\n• Date Functions — DATE_PART, DATE_TRUNC, AGE, EXTRACT\n• Export — COPY TO CSV"
      },
      {
        heading: "Technologies Used",
        content: "PostgreSQL 16, pgAdmin, SQL — 44+ queries across 6 complexity levels"
      }
    ],
  },
  {
    id: "bank-fraud-detection-powerbi",
    title: "Bank Fraud Detection Dashboard (Power BI)",
    description: "Interactive Power BI dashboard visualising credit card fraud patterns — dark navy theme with KPI cards, fraud by category, state map, trend analysis and top merchant insights.",
    image: "https://raw.githubusercontent.com/Piyush-Analytics/bank-fraud-detection-sql/main/fraud_dashboard_preview.png",
    link: "https://github.com/Piyush-Analytics/bank-fraud-detection-sql",
    tech: ["Power BI", "DAX", "Data Visualization", "Fraud Analytics"],
    details: [
      {
        heading: "Overview",
        content: "Built an interactive Power BI dashboard on top of the Bank Fraud Detection SQL project — visualising fraud patterns across categories, states, merchants, gender and time using a professional dark navy theme with 6 KPI cards and 6 interactive charts."
      },
      {
        heading: "Key Metrics",
        content: "• Total Transactions analysed\n• Total Fraud Cases detected\n• Overall Fraud Rate %\n• Total Transaction Amount\n• Total Fraud Amount\n• Average Fraud Amount"
      },
      {
        heading: "Features",
        content: "• 6 KPI cards — Total Transactions, Fraud Count, Fraud Rate %, Total Amount, Fraud Amount, Avg Fraud Amount\n• Fraud by Category bar chart\n• Fraud Rate % by Category column chart\n• Fraud Trend Over Time line chart\n• Fraud by Gender donut chart\n• Top 10 Fraud Merchants bar chart\n• Fraud by State map visual\n• 3 slicers — Category, Gender, Date range"
      },
      {
        heading: "Technologies Used",
        content: "Power BI Desktop, DAX, Power Query"
      }
    ],
  },
  {
    id: "hospital-sql-analysis",
    title: "Hospital Data Analysis (SQL)",
    description: "30-Day SQL Micro Course project analyzing real-world hospital data using advanced SQL queries.",
    image: "https://i.pinimg.com/736x/e6/e9/e2/e6e9e27421c7392a0f4187cf6a961ae6.jpg",
    link: "https://github.com/Piyush-Analytics/Hospital-SQL-Data-Analysis/tree/16fefcd6e3f0335b374fe32461039ffbc9f57723#-outcome",
    tech: ["SQL", "Data Analysis", "PostgreSQL"],
    details: [
      {
        heading: "Overview",
        content: "Completed a hands-on 30-Day SQL Micro Course, analyzing real-world hospital data using advanced SQL queries."
      },
      {
        heading: "Features",
        content: "• Aggregation functions & GROUP BY\n• JOINs, date functions, and subqueries\n• Patient trends analysis\n• Hospital performance metrics\n• Medical expense reports"
      },
      {
        heading: "Technologies Used",
        content: "SQL, PostgreSQL, Data Analysis"
      }
    ],
  },
];
