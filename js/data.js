const PORTFOLIO_CONFIG = {
  profile: {
    name: "Yash Sisodia",
    headline: "Data Analyst — Machine Learning — Python — SQL — Power BI",
    address: "Aalen, Germany",
    location: "Aalen, Germany",
    email: "yashsisodia1905@gmail.com",
    mobile: "+49 15510860041",
    github: "https://github.com/yas-sisodia",
    linkedin: "https://linkedin.com/in/yas-sisodia",
    cv: "assets/Yash-Sisodia-CV.pdf",
    avatar: "assets/profile.jpg",
    typingPhrases: [
      "Data Analytics.",
      "Machine Learning Models.",
      "Automated ETL & SQL Pipelines.",
      "Power BI Dashboards."
    ]
  },
  projects: [
    {
      title: "Loan Approval Intelligent System",
      tags: ["Python", "Scikit-learn", "Pandas", "Random Forest", "EDA", "Pipelines"],
      icon: "fa-chart-line",
      description: "Developed a Loan Approval Prediction system using Python, Pandas, NumPy, and Scikit-learn, performing data cleaning, EDA, feature engineering, and preprocessing with Pipeline and ColumnTransformer. Trained and evaluated Logistic Regression, Decision Tree, and Random Forest models using Accuracy, Precision, Recall, F1-score, ROC-AUC, and Confusion Matrix.",
      github: "https://github.com/yas-sisodia/loan_approval_intelligent_system",
      demo: "https://loanapprovalintelligentsystem.streamlit.app/"
    },
    {
      title: "Personal Data Detection in Image and Video",
      tags: ["YOLO", "Tesseract OCR", "Presidio", "BLIP", "Computer Vision"],
      icon: "fa-shield-halved",
      description: "Collaborated in a 3-member team (1 faculty supervisor, 2 students) to develop an end-to-end Python pipeline for detecting and captioning personal & sensitive information in images and videos using Tesseract OCR, YOLO, and Presidio. Integrated BLIP-based image captioning and sensitive-data classification to identify categories such as identity and financial info with structured outputs.",
      github: "https://github.com/yas-sisodia/personal_data_detector_image_and_video",
      demo: "https://github.com/yas-sisodia/personal_data_detector_image_and_video"
    },
    {
      title: "AI-Video-Meeting-Analyser",
      tags: ["LangChain", "Mistral AI", "ChromaDB", "Whisper", "Sarvam AI", "Audio-RAG"],
      icon: "fa-microphone-lines",
      description: "Architected an end-to-end Audio-RAG Pipeline using LangChain, Mistral AI, and ChromaDB, extracting audio tracks from video files/YouTube links, transcribing speech (Whisper and Sarvam AI), and indexing vector embeddings (HuggingFace) for low-latency contextual Q&A. Engineered automated NLP extraction workflows utilizing custom prompt templates and Map-Reduce summarization.",
      github: "https://github.com/yas-sisodia/AI-Video-Meeting-Analyser",
      demo: "https://youtu.be/Navr6Ost25k"
    },
    {
      title: "Porosity-Detector",

      tags: ["YOLOv8", "Computer Vision", "PyTorch", "ONNX", "Streamlit", "Apple MPS"],

      icon: "fa-magnifying-glass-chart",

      description: "Developed an industrial surface defect detection system by training and optimizing a YOLOv8 model on the NEU dataset across 6 defect categories, leveraging Apple Silicon MPS acceleration and exporting the trained model to ONNX for efficient CPU inference. Built an automated defect-analysis pipeline with VOC-to-YOLO annotation conversion, porosity estimation, and an interactive Streamlit application for real-time defect visualization, analysis, and deployment.",

      github: "https://github.com/yas-sisodia/porosity_detector",

      demo: "https://www.youtube.com/watch?v=8gRR6Qnz30A"
    }
  ],
  skills: [
    {
      category: "Programming & Core",
      icon: "fa-code",
      items: ["Python", "SQL", "Java"]
    },
    {
      category: "Data Analysis & Engineering",
      icon: "fa-database",
      items: ["Pandas", "NumPy", "Data Wrangling", "Exploratory Data Analysis (EDA)", "Statistical Inference", "SQL Query Optimization", "PySpark", "Automated ETL Pipelines"]
    },
    {
      category: "Machine Learning & AI",
      icon: "fa-brain",
      items: ["Scikit-learn", "PyTorch", "TensorFlow", "Feature Engineering", "Model Evaluation", "ColumnTransformer", "LangChain", "ChromaDB"]
    },
    {
      category: "Visualization & Tools",
      icon: "fa-chart-pie",
      items: ["Power BI", "Matplotlib", "KPI Dashboards", "Seaborn", "Git", "VS Code", "Jupyter", "Streamlit", "Docker", "Google Cloud (GCP)", "Postman"]
    },
    {
      category: "Visualization & Tools",
      icon: "fa-chart-pie",
      items: [
        "Streamlit",
        "Matplotlib",
        "Seaborn",
        "OpenCV",
        "Jupyter",
        "VS Code",
        "Git",
        "Docker",
        "Google Cloud (GCP)",
        "Postman"
      ]
    }
  ],
  certificates: [
    {
      title: "Neural Networks and Deep Learning",
      issuer: "Coursera",
      date: "August 2026",
      icon: "fa-certificate",
      details: [
        "Built and trained neural networks using Python and Keras.",
        "Learned backpropagation, optimization, and deep learning fundamentals."
      ]
    }
  ],
  languages: [
    { name: "English", level: "Fluent", icon: "fa-language" },
    { name: "Hindi", level: "Native", icon: "fa-comments" },
    { name: "German", level: "B1 Completed", icon: "fa-graduation-cap" },
    { name: "German", level: "B2 Learning", icon: "fa-book-open" }
  ]
};
