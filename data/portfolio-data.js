/**
 * PORTFOLIO DATA CONFIGURATION
 * -------------------------------------------------------------
 * Custom profile configuration for Deepak Bourai.
 * Modeled directly on the editorial engineering style of Ankit Singh's portfolio.
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Deepak Bourai",
    handle: "deepak-bourai / data",
    role: "Data Scientist & Analytics Engineer",
    kicker: "Fig. 01 // Data Scientist & Analytics Engineer",
    heroHeadline: {
      pre: "I turn raw data into",
      highlight: "intelligent systems",
      post: "that drive decisions."
    },
    heroSubtitle: "Data Scientist with expertise building scalable ETL pipelines, automated data workflows, and predictive BI solutions on live production data — from lakehouse architecture to executive dashboards.",
    location: "Noida, India",
    status: "Available for Data Science & Analytics Engineering roles",
    isAvailable: true,
    resumeUrl: "assets/Deepak_Bourai_Resume.pdf",
    avatarUrl: "assets/deepak.jpg",
    email: "deepakbourai@gmail.com",
    phone: "+91 9015910374",
    socials: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/deepak-bourai",
        handle: "in/deepak-bourai"
      },
      {
        label: "GitHub",
        href: "https://github.com",
        handle: "@deepakbourai"
      },
      {
        label: "Certifications",
        href: "https://learn.microsoft.com",
        handle: "Microsoft AI-900 & PL-300"
      }
    ],
    bio: [
      "I'm Deepak — a Data Scientist in Noida who builds end-to-end ETL pipelines, automates data workflows, and delivers decision-grade BI solutions on live production datasets across inventory, invoicing, and supply chain operations.",
      "I work end to end. On a typical engagement, I architect the ingestion pipelines in Azure Data Factory, write PySpark and Pandas transformations in Databricks, enforce automated reconciliation checks to guarantee 99%+ accuracy, and develop high-impact Power BI dashboards with advanced DAX measures.",
      "The challenges I enjoy most live at the intersection of data engineering and machine learning: forecasting demand with XGBoost, building computer vision CCTV models that process live footfall in real time, and deploying GenAI classification pipelines to eliminate repetitive manual reviews."
    ],
    facts: [
      { label: "Based in", value: "Noida, India" },
      { label: "Currently", value: "VoiceBack Analytics" },
      { label: "Experience", value: "1+ years production data" },
      { label: "Credentials", value: "Microsoft AI-900 · PL-300" }
    ],
    numbers: [
      { value: "40%", label: "manual effort reduced", note: "Automated ADF & Databricks ETL" },
      { value: "99%+", label: "production accuracy", note: "Automated pre-deploy reconciliation" },
      { value: "30%", label: "faster report turnaround", note: "Advanced DAX & dynamic KPIs" },
      { value: "85%", label: "CV detection accuracy", note: "YOLO footfall & demographic model" }
    ]
  },

  toolkit: {
    layers: [
      { id: "bi", index: "L1", title: "BI & Visualization", caption: "What decision-makers see — interactive executive reports & KPIs" },
      { id: "analytics", index: "L2", title: "Data Processing", caption: "Feature engineering, statistical modeling, and data manipulation" },
      { id: "etl", index: "L3", title: "ETL & Orchestration", caption: "Cloud ingestion, distributed transformations, and automated workflows" },
      { id: "data", index: "L4", title: "Data Architecture & SQL", caption: "Relational schemas, dimensional modeling, and lakehouse storage" },
      { id: "ml", index: "L5", title: "AI & Machine Learning", caption: "Predictive forecasting, computer vision, and Generative AI APIs" }
    ],
    tools: [
      // L1 - BI & Visualization
      {
        name: "Power BI Desktop",
        layer: "bi",
        use: "High-impact interactive dashboards, multi-page analytical drilldowns, row-level security, and executive KPI cards.",
        seenIn: ["VoiceBack Analytics", "Demand Forecasting", "EV Market Study"]
      },
      {
        name: "DAX Measures",
        layer: "bi",
        use: "Complex time intelligence calculations, rolling 30/90-day averages, YTD/MTD metrics, and dynamic filter context calculations.",
        seenIn: ["VoiceBack Analytics"]
      },
      {
        name: "Power Query (M)",
        layer: "bi",
        use: "Data shaping, unpivoting complex transactional structures, merging disparate files, and automated data cleaning.",
        seenIn: ["VoiceBack Analytics", "Conduent India"]
      },
      {
        name: "Data Visualization",
        layer: "bi",
        use: "Designing clean, decision-oriented dashboards with visual hierarchy, drill-through paths, and clear data storytelling.",
        seenIn: ["All Analytical Solutions"]
      },

      // L2 - Data Processing
      {
        name: "Python",
        layer: "analytics",
        use: "Core language for end-to-end data science pipelines, automated scripts, API integrations, and model development.",
        seenIn: ["VoiceBack Analytics", "Demand Forecasting"]
      },
      {
        name: "Pandas & NumPy",
        layer: "analytics",
        use: "High-speed in-memory data manipulation, vectorized mathematical operations, SKU standardization, and missing value imputation.",
        seenIn: ["VoiceBack Analytics", "FMCG Demand Model"]
      },
      {
        name: "PySpark",
        layer: "analytics",
        use: "Distributed transformations on large-scale production datasets, partition optimization, and fast cluster data preparation.",
        seenIn: ["VoiceBack Analytics Databricks Pipelines"]
      },
      {
        name: "Exploratory Data Analysis",
        layer: "analytics",
        use: "Uncovering outliers, correlation matrices, seasonal trends, and feature distributions before machine learning training.",
        seenIn: ["EV Market Analysis"]
      },

      // L3 - ETL & Orchestration
      {
        name: "Azure Data Factory (ADF)",
        layer: "etl",
        use: "Building scalable cloud ETL pipelines, trigger-based ingestions, copy activities, and automated validation workflows.",
        seenIn: ["VoiceBack Production Pipelines", "Inventory Data Pipeline"]
      },
      {
        name: "Azure Databricks",
        layer: "etl",
        use: "Managed Apache Spark clusters executing automated data cleaning, aggregation, and pre-dashboard data preparation.",
        seenIn: ["VoiceBack Analytics"]
      },
      {
        name: "Microsoft Fabric",
        layer: "etl",
        use: "Lakehouse ingestion, unified OneLake data integration, and pipeline configuration for centralized analytics.",
        seenIn: ["VoiceBack Analytics R&D"]
      },
      {
        name: "Power Automate",
        layer: "etl",
        use: "Automating scheduled workflow notifications, error dispatch, and cross-application file synchronization.",
        seenIn: ["VoiceBack Analytics", "Conduent India"]
      },
      {
        name: "Azure Blob Storage",
        layer: "etl",
        use: "Secure cloud data lake storage for raw source files, staging tables, and partitioned analytical parquets.",
        seenIn: ["VoiceBack Analytics", "Inventory Pipeline"]
      },

      // L4 - Data Architecture & SQL
      {
        name: "MySQL & T-SQL",
        layer: "data",
        use: "Writing complex queries, multi-table joins, subqueries, indexing strategies, and automated stored procedures.",
        seenIn: ["Conduent India", "VoiceBack Analytics"]
      },
      {
        name: "Data Modelling",
        layer: "data",
        use: "Designing normalized Star and Snowflake schemas, fact and dimension relationships, and cardinality optimization.",
        seenIn: ["VoiceBack Analytics", "Power BI Dashboards"]
      },
      {
        name: "SKU Normalization & Reconciliation",
        layer: "data",
        use: "Standardizing messy invoice datasets, matching SKU identifiers, and catching numerical discrepancies before reporting.",
        seenIn: ["VoiceBack Analytics"]
      },

      // L5 - AI & Machine Learning
      {
        name: "Scikit-learn & XGBoost",
        layer: "ml",
        use: "Training predictive regression and classification models, hyperparameter tuning, cross-validation, and feature importance.",
        seenIn: ["Demand Forecasting & Price Optimization"]
      },
      {
        name: "Computer Vision (YOLO & OpenCV)",
        layer: "ml",
        use: "Analyzing real-time CCTV video streams for retail footfall estimation and demographic classification with 85% accuracy.",
        seenIn: ["VoiceBack Analytics Retail AI"]
      },
      {
        name: "OpenAI API & GenAI",
        layer: "ml",
        use: "Automating unstructured document filtering and classification across invoices and sourcing files via prompt engineering.",
        seenIn: ["VoiceBack Analytics GenAI Pipeline"]
      }
    ]
  },

  workshop: {
    headline: "Follow a pipeline through the stack.",
    subhead: "Three production journeys from systems I've built. Select one, then play or step through it — inspect what actually happens to raw data at each layer.",
    nodes: [
      { id: "source", label: "Data Source", sub: "Blob / Invoices / CCTV", role: "Raw transactional data, supplier invoices, or video stream input." },
      { id: "ingest", label: "Ingestion Engine", sub: "Azure Data Factory", role: "Extracts raw files, handles scheduled triggers, and stages into data lake." },
      { id: "transform", label: "Transformation", sub: "Databricks & PySpark", role: "Cleanses data, harmonizes SKUs, computes aggregations, and checks parity." },
      { id: "ml", label: "Analytics / ML", sub: "XGBoost & OpenAI", role: "Runs forecasting models, computer vision inference, or LLM classification." },
      { id: "bi", label: "Consumption Layer", sub: "Power BI & Dashboards", role: "Refreshes dimensional models and serves dynamic DAX KPI dashboards to leadership." }
    ],
    journeys: [
      {
        id: "etl-pipeline",
        title: "Automated ADF & Databricks ETL Pipeline",
        project: "VoiceBack · Live Production Ingestion",
        tag: "ADF · PySpark · Databricks · SQL",
        steps: [
          {
            from: "source",
            to: "ingest",
            label: "Blob Storage Trigger on file arrival",
            code: "adf.trigger('on_blob_upload', container='incoming-invoices')",
            detail: "Daily inventory and invoice files arrive from multiple vendor sources into Azure Blob Storage. Storage event triggers ADF pipeline."
          },
          {
            from: "ingest",
            to: "transform",
            label: "ADF Copy Activity → Databricks Cluster",
            code: "databricks_job.run({ cluster_id: 'standard-ds3-v2' })",
            detail: "ADF validates schema headers and invokes Databricks PySpark notebook for distributed transformation."
          },
          {
            from: "transform",
            to: "transform",
            label: "SKU Normalization & Discrepancy Cleaning",
            code: "df = df.withColumn('standard_sku', clean_sku(col('raw_sku')))",
            detail: "PySpark scripts clean SKU-level records, normalize currency symbols, handle null values, and resolve supplier format discrepancies."
          },
          {
            from: "transform",
            to: "ml",
            label: "Automated Data Parity Reconciliation",
            code: "assert abs(source_total - staging_total) < 0.01, 'Reconciliation failure'",
            detail: "Pre-deployment validation reconciles row counts and balance sums, achieving 99%+ production data accuracy."
          },
          {
            from: "ml",
            to: "bi",
            label: "Stage into Lakehouse / SQL Fact Tables",
            code: "df.write.format('delta').mode('overwrite').saveAsTable('fact_inventory')",
            detail: "Cleaned data written into curated Star Schema tables ready for downstream reporting."
          },
          {
            from: "bi",
            to: "bi",
            label: "Power BI Dataset Auto-Refresh",
            code: "powerbi.refreshDataset(workspaceId, datasetId)",
            detail: "Power BI service pulls latest data. Advanced DAX time-intelligence measures calculate MTD/YTD margins automatically."
          }
        ]
      },
      {
        id: "demand-forecast",
        title: "Demand Forecasting & Pricing Model",
        project: "FMCG Analytics · ML Optimization",
        tag: "Python · XGBoost · Power BI",
        steps: [
          {
            from: "source",
            to: "transform",
            label: "Historical Sales & Pricing Ingestion",
            code: "pd.read_sql('SELECT * FROM fmcg_historical_sales', connection)",
            detail: "Loads multi-year transactional records across retail locations and pricing tiers."
          },
          {
            from: "transform",
            to: "ml",
            label: "Feature Engineering & Lag Variables",
            code: "df['sales_lag_7d'] = df.groupby('sku')['sales'].shift(7)",
            detail: "Generates rolling 7/14/30-day demand averages, promotional flags, price elasticity coefficients, and seasonal variables."
          },
          {
            from: "ml",
            to: "ml",
            label: "XGBoost Regression Model Training",
            code: "model = xgb.XGBRegressor(max_depth=6, n_estimators=300).fit(X_train, y_train)",
            detail: "Trains gradient boosted trees to predict future order quantities while optimizing revenue curves."
          },
          {
            from: "ml",
            to: "bi",
            label: "Model Evaluation (RMSE & R-Squared)",
            code: "rmse = np.sqrt(mean_squared_error(y_test, preds)) # R² = 0.89",
            detail: "Validates model performance across test partitions before publishing predictions to staging."
          },
          {
            from: "bi",
            to: "bi",
            label: "Interactive Power BI Scenario Simulation",
            code: "DAX: SimulatedRevenue = [SelectedPrice] * [PredictedDemand]",
            detail: "Decision-makers use dynamic sliders in Power BI to test pricing scenarios and view real-time demand forecasts."
          }
        ]
      },
      {
        id: "genai-invoices",
        title: "GenAI Automated File Classification",
        project: "VoiceBack · Document Automation",
        tag: "OpenAI API · Prompt Engineering · Python",
        steps: [
          {
            from: "source",
            to: "ingest",
            label: "Unstructured PDF / Invoice Ingestion",
            code: "files = list_unprocessed_blobs('inbox-staging')",
            detail: "Incoming batch of unstructured supplier invoices, purchase orders, and sourcing contracts detected."
          },
          {
            from: "ingest",
            to: "ml",
            label: "Text Extraction & Prompt Structuring",
            code: "prompt = f'Analyze invoice metadata and return JSON: {extracted_text}'",
            detail: "Extracts key document text segments and constructs few-shot system prompts with schema enforcement."
          },
          {
            from: "ml",
            to: "ml",
            label: "OpenAI API Zero-Shot Classification",
            code: "client.chat.completions.create(model='gpt-4o', response_format={'type':'json_object'})",
            detail: "LLM classifies document type, extracts vendor tax IDs, invoice totals, and line items with structured JSON output."
          },
          {
            from: "ml",
            to: "transform",
            label: "Schema Validation & Integrity Check",
            code: "validate_json_schema(response, invoice_pydantic_schema)",
            detail: "Validates extracted dates, sums, and invoice numbers against internal business logic rules."
          },
          {
            from: "transform",
            to: "bi",
            label: "Automated Routing & Dashboard Update",
            code: "route_to_dept(invoice_category) # Cut manual review by 35%",
            detail: "Classified files automatically sorted into appropriate departmental workflows; operational dashboard logs volume."
          }
        ]
      }
    ]
  },

  projects: [
    {
      slug: "voiceback-etl-analytics",
      index: "01",
      title: "Inventory & Sourcing Analytics Pipeline",
      category: "Big Data · Cloud ETL & Production Pipelines",
      summary: "End-to-end cloud ETL architecture automating data ingestion, SKU harmonization, and validation across massive inventory and invoice datasets on live production environments.",
      role: "Data Scientist at VoiceBack Analytics — designed Azure Data Factory pipelines, PySpark transformation scripts, and Power BI reporting layers.",
      context: "Operations and procurement teams spent hours manually reconciling disparate supplier invoices with internal inventory databases. The business needed continuous, automated data pipelines with 99%+ accuracy.",
      built: [
        "Scalable Azure Data Factory ETL pipelines automating ingestion, transformation, and validation of large-scale live datasets.",
        "PySpark and Pandas data processing scripts in Databricks standardizing SKU-level records, resolving naming discrepancies, and cleansing currency mismatches.",
        "Automated reconciliation engine validating row counts and monetary parity prior to dashboard deployment, ensuring 99%+ data accuracy.",
        "Interactive Power BI executive dashboards utilizing advanced DAX measures (time intelligence, dynamic KPIs, rolling averages, YTD/MTD).",
        "Vendor cost trend and stock movement analytics that contributed directly to a 15% improvement in procurement planning accuracy."
      ],
      challenges: [
        {
          title: "Eliminating 40% of Manual Handling",
          detail: "Automated multi-step invoice ingestion via ADF triggers, replacing brittle manual spreadsheets with reproducible cloud jobs."
        },
        {
          title: "Data Discrepancies Across Suppliers",
          detail: "Designed SKU normalization algorithms in PySpark that map messy vendor naming variations into unified master catalog keys."
        },
        {
          title: "Fast Turnaround on Complex DAX Metrics",
          detail: "Optimized Star Schema relationships in Power BI, cutting report turnaround time by 30% for executive stakeholders."
        }
      ],
      stack: ["Azure Data Factory", "Azure Databricks", "Python", "PySpark", "Power BI", "DAX", "SQL"],
      liveUrl: "#",
      githubUrl: "#",
      visual: "etl",
      accent: "#c8ff2e",
      highlights: [
        { value: "40%", label: "Manual Effort Reduced" },
        { value: "99%+", label: "Production Accuracy" },
        { value: "15%", label: "Procurement Accuracy Gain" }
      ]
    },
    {
      slug: "demand-forecasting-pricing",
      index: "02",
      title: "Demand Forecasting & Price Optimization",
      category: "Machine Learning · Predictive Analytics",
      summary: "An end-to-end machine learning system predicting FMCG demand patterns and simulating pricing strategies to maximize revenue margins.",
      role: "Lead ML Engineer & Data Analyst — performed data preprocessing, feature engineering, model training with XGBoost, and Power BI visualization.",
      context: "Fast-moving consumer goods require accurate forward-looking demand signals to prevent stockouts while avoiding costly excess inventory.",
      built: [
        "End-to-end machine learning pipeline built with Python (Scikit-learn, XGBoost, NumPy) trained on multi-year sales data.",
        "Advanced feature engineering: promotional indicators, holiday calendars, price elasticity metrics, and rolling lag windows.",
        "Model evaluation framework optimizing Root Mean Squared Error (RMSE) and R-Squared across validation splits.",
        "Power BI interactive pricing simulator allowing business managers to test margin impact under varied promotional scenarios."
      ],
      challenges: [
        {
          title: "Multi-Collinearity & Feature Leakage",
          detail: "Built strict time-series cross-validation splits to prevent future data from leaking into historical demand training steps."
        },
        {
          title: "Translating ML Output into Business Action",
          detail: "Embedded interactive DAX what-if scenario parameters inside Power BI so non-technical leaders could adjust pricing and see projected sales."
        }
      ],
      stack: ["Python", "XGBoost", "Scikit-learn", "NumPy", "Pandas", "Power BI", "Matplotlib"],
      liveUrl: "#",
      githubUrl: "#",
      visual: "forecasting",
      accent: "#64d2ff",
      highlights: [
        { value: "R²=0.89", label: "Model Predictive Fit" },
        { value: "Scenario", label: "What-If Pricing Engine" },
        { value: "End-to-End", label: "ETL to Executive Dashboards" }
      ]
    },
    {
      slug: "computer-vision-retail",
      index: "03",
      title: "CCTV Footfall & Demographic AI",
      category: "Computer Vision · Deep Learning",
      summary: "Computer vision solution processing live retail CCTV streams to estimate customer footfall volume and classify demographics in real time.",
      role: "Data Scientist — implemented object detection pipelines using YOLO and OpenCV, integrated with downstream analytics dashboards.",
      context: "Retail operations required automated, privacy-compliant footfall intelligence to optimize store staffing, shelf layout, and marketing campaigns.",
      built: [
        "Deep learning computer vision models built in Python with YOLO and OpenCV to detect and track retail customer movement.",
        "Demographic classification and dwell-time estimation algorithms operating at ~85% detection accuracy.",
        "Data pipeline packaging aggregated hourly footfall statistics into structured SQL tables for Power BI reporting."
      ],
      challenges: [
        {
          title: "Real-Time Frame Processing",
          detail: "Optimized frame-skipping and resolution downsampling in OpenCV to achieve smooth real-time tracking on modest compute hardware."
        },
        {
          title: "Privacy-Preserving Aggregations",
          detail: "Engineered pipeline to extract counts and categorical features in-memory without storing raw customer video recordings."
        }
      ],
      stack: ["Python", "YOLO", "OpenCV", "Deep Learning", "SQL", "Power BI"],
      liveUrl: "#",
      githubUrl: "#",
      visual: "computervision",
      accent: "#ffb86b",
      highlights: [
        { value: "~85%", label: "Detection Accuracy" },
        { value: "Live", label: "CCTV Stream Processing" },
        { value: "Privacy", label: "In-Memory Feature Extraction" }
      ]
    }
  ],

  moreProjects: [
    {
      title: "Electric Vehicle Market Analysis",
      category: "Market Analytics & Unsupervised ML",
      description: "Exploratory data analysis (EDA) and clustering on EV datasets using SQL and Power BI to identify adoption trends and buyer segments.",
      url: "#",
      tag: "SQL · Power BI · Clustering"
    },
    {
      title: "GenAI Invoice & Document Classifier",
      category: "Generative AI & Automation",
      description: "Automated document filtering and invoice routing pipeline utilizing OpenAI APIs and structured prompt engineering (cut review time by 35%).",
      url: "#",
      tag: "OpenAI API · Python · Prompts"
    },
    {
      title: "Customer Database Optimization",
      category: "Database Performance & Reporting",
      description: "Complex SQL optimization and reporting workflow automation at Conduent India, reducing report generation times by 30%.",
      url: "#",
      tag: "T-SQL · Automation · ETL"
    }
  ],

  experience: [
    {
      company: "VoiceBack Analytics Pvt. Ltd.",
      location: "Remote / Noida",
      title: "Data Scientist",
      start: "Jun 2025",
      end: "Present",
      current: true,
      points: [
        "Developed and maintained scalable ETL pipelines using Azure Data Factory and Databricks to automate ingestion, transformation, and validation of large-scale live production datasets, cutting manual data handling effort by ~40%.",
        "Processed and transformed inventory and invoice datasets using Python (Pandas, PySpark) — standardizing SKU-level records, resolving discrepancies, and preparing clean structured datasets.",
        "Monitored live data pipelines, ensuring 99%+ data accuracy and performing automated pre-deployment reconciliation to catch mismatches before dashboard rollout.",
        "Developed interactive Power BI dashboards with advanced DAX measures (time intelligence, rolling averages, YTD/MTD, dynamic KPIs), boosting operational reporting turnaround time by 30%.",
        "Engineered computer vision models (YOLO, OpenCV) for CCTV footfall estimation and demographic classification with ~85% detection accuracy.",
        "Designed Generative AI document classification system using OpenAI APIs and prompt engineering, cutting manual invoice review time by ~35%."
      ],
      stack: ["Python", "Azure Data Factory", "Databricks", "PySpark", "Power BI", "DAX", "OpenAI API", "YOLO", "SQL"]
    },
    {
      company: "Conduent India LLP",
      location: "Noida, India",
      title: "Associate",
      start: "Sep 2019",
      end: "Mar 2020",
      current: false,
      points: [
        "Executed complex SQL queries to optimize and maintain customer databases, improving data retrieval speed and reporting accuracy.",
        "Automated reporting workflows and reduced report generation time by 30% through improved data processing and analytics techniques.",
        "Mentored and trained new team members on internal data workflows and onboarding processes, boosting overall team productivity."
      ],
      stack: ["SQL / MySQL", "Database Optimization", "Data Reporting", "Process Automation"]
    }
  ],

  education: [
    {
      qualification: "M.Tech in Artificial Intelligence & Machine Learning",
      institution: "BITS Pilani",
      year: "2026 – 2028",
      details: "Focus: Advanced Machine Learning, Deep Learning Architectures & Scalable AI Systems"
    },
    {
      qualification: "PG Diploma in Big Data Analytics & Machine Learning",
      institution: "CDAC",
      year: "2024 – 2025",
      details: "Focus: Big Data Processing, Spark, Cloud Data Lakes & Predictive Analytics"
    },
    {
      qualification: "Master of Computer Applications (MCA)",
      institution: "Glocal School of Science and Technology",
      year: "2021 – 2023",
      details: "Focus: Database Management Systems, Software Engineering & Data Structures"
    },
    {
      qualification: "Bachelor of Computer Applications (BCA)",
      institution: "Hierank Business School",
      year: "2016 – 2019",
      details: "Focus: Computer Science Fundamentals, Programming & Applied Statistics"
    }
  ],

  certifications: [
    {
      qualification: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
      institution: "Microsoft",
      year: "Certified"
    },
    {
      qualification: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)",
      institution: "Microsoft",
      year: "Certified"
    }
  ],

  principles: [
    {
      index: "01",
      title: "Data integrity before dashboards.",
      body: "A visually stunning dashboard is useless if the underlying numbers drift. I architect rigorous pre-deployment reconciliation and validation checks so decision-makers trust every single figure."
    },
    {
      index: "02",
      title: "Automate the repetitive middle.",
      body: "Manual Excel workflows leak errors and drain hours. I turn recurring tasks into cloud-orchestrated Azure Data Factory pipelines, reducing manual interventions by 40%."
    },
    {
      index: "03",
      title: "Star schemas make DAX fast.",
      body: "Sluggish reports stem from poor data modeling. Clean star schemas with distinct fact and dimension tables keep query traversal lean and response times instantaneous."
    },
    {
      index: "04",
      title: "ML must solve real business bottlenecks.",
      body: "Algorithms aren't academic exercises. Whether it is demand forecasting to curb stockouts or computer vision to measure retail footfall, machine learning must produce measurable ROI."
    },
    {
      index: "05",
      title: "Own the pipeline to production.",
      body: "From raw blob ingestion and Spark cleaning to scheduled Power BI service refreshes and error handling, a pipeline is only finished when it runs autonomously on live production data."
    }
  ]
};

// Export for module systems or window global
if (typeof module !== "undefined" && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
