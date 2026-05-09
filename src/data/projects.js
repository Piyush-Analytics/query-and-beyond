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
    tech: ["Power BI", "DAX", "Power Query", "Data Analysis",],
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
