export const profile = {
  name: "Gyanaranjan Mishra",
  title: "Data Scientist | Materials Scientist | ML Researcher",
  affiliation: "University of New Brunswick",
  email: "gyanaranjanmishra06@gmail.com",
  photo: "/profile.jpeg",
  bio: "", // Fill in your bio/journey
  skills: {
    "Programming & Data": ["Python", "Pandas", "NumPy", "SQL", "Git", "AWS", "Scikit-learn", "TensorFlow", "Keras"],
    "Machine Learning": ["Regression", "Classification", "Clustering", "Random Forest", "XGBoost", "SVM", "Neural Networks", "NLP", "SMOTE", "Hyperparameter Tuning", "Time-Series Forecasting", "ROC-AUC"],
    "Analytics & Visualization": ["EDA", "Matplotlib", "Seaborn", "Plotly", "Streamlit", "Power BI", "Dashboard Automation"],
    "Materials Science": ["Physical Metallurgy", "Phase Transformations", "Thermodynamics", "Steel Processing", "Microstructure Analysis", "Thermomechanical Processing", "Deformation Mechanics"],
    "Generative AI": ["Prompt Engineering", "LLM Integration", "RAG", "Claude API", "Vector Databases", "AI Application Development"],
  },
  hobbies: [] as string[], // Fill in your hobbies
  links: {
    github: "https://github.com/gyanaranjanmishra",
    linkedin: "https://www.linkedin.com/in/gyanaranjan-mishra-a10811b/",
    scholar: "https://scholar.google.com/citations?user=4-JTIcAAAAAJ&hl=en",
    streamlit: "https://share.streamlit.io/user/gyanaranjanmishra",
  },
  metrics: {
    citations: 221,
    hIndex: 7,
    i10Index: 7,
  },
};

const drive = (id: string) => `https://drive.google.com/file/d/${id}/view`;

export const publications = [
  {
    title: "High silicon non-oriented electrical steel sheets fabricated by hot dipping and diffusion annealing",
    authors: "Mishra G, He Y, Aranas C",
    journal: "Materials Science and Technology",
    year: 2025,
    pdf: drive("1e4408wxPB-dmi-QbXQ5n6G4_-BuSMs1h"),
  },
  {
    title: "Hot Deformation Characteristics of Non-oriented Electrical Steels with and without Phase Transformation during Thermomechanical Processing",
    authors: "Mishra G, He Y, Aranas C",
    journal: "Materials Today Communications",
    year: 2025,
    pdf: drive("1CbT_LN-l1WMLURRJVGfxNCL9JPg51soS"),
  },
  {
    title: "Simultaneous Improvement in Load-Bearing Capacity and Energy Absorption of Resistance Spot-Welded Medium Mn Steel",
    authors: "Kishore K, Patra S, Chandan AK, Mishra V, Sahoo BK, Aamir M, Mishra G, Arora KS",
    journal: "Metallurgical and Materials Transactions A",
    year: 2025,
    pdf: drive("1Lcs6cfHIzn4jJ6irHKgr6Tg1FfcZNG4d"),
  },
  {
    title: "The Influence of Molybdenum Additions on the Mechanical and Microstructural Properties of Medium-Mn Steels",
    authors: "Zvavamwe F, Pasco J, Nyamuchiwa K, Mishra G, Paek MK, Aranas C",
    journal: "TMS Annual Meeting & Exhibition",
    year: 2025,
    pdf: drive("1ZFIQI4FDij0aNuGKGPWR78Tj0ba2T6Vx"),
  },
  {
    title: "Constitutive Modeling of High-Temperature Deformation Behavior of Nonoriented Electrical Steels as Compared to Machine Learning",
    authors: "Mishra G, Pasco J, McCarthy T, Nyamuchiwa K, He Y, Aranas C",
    journal: "Steel Research International",
    year: 2024,
    pdf: drive("1DCuR9dzzpdHVlVBxAhiWF48NS1VTWwUH"),
  },
  {
    title: "Strengthening mechanisms in vanadium-microalloyed medium-Mn steels",
    authors: "Zvavamwe F, Pasco J, Mishra G, Paek MK, Aranas C",
    journal: "Materials Today Communications",
    year: 2024,
    pdf: drive("1MLj9fFsGVERY4ZBxNFMcPSkR81N7Q13J"),
  },
  {
    title: "Evading the strength-ductility compromise in medium manganese steel by a novel low temperature warm rolling treatment",
    authors: "Chandan AK, Mishra G, Kishore K, Bansal GK, Sahoo BK",
    journal: "Materials Characterization",
    year: 2023,
    pdf: drive("1YQc4GxUexjD5BYt6vQH2CGti7j76KOOF"),
  },
  {
    title: "Effect of cold deformation extent and ART annealing duration on the microstructure and mechanical properties of a medium manganese steel",
    authors: "Mishra G, Chandan AK",
    journal: "Materials Chemistry and Physics",
    year: 2021,
    pdf: drive("1pA6b2td4x7SNmA1IdX2MLnixhRRUhsNu"),
  },
  {
    title: "Stacking fault energy of austenite phase in medium manganese steel",
    authors: "Chandan AK, Mishra G, Mahato B, Chowdhury SG, Kundu S, Chakraborty J",
    journal: "Metallurgical and Materials Transactions A",
    year: 2019,
    pdf: drive("1HddQ84c3gcULrcfO-h_luARVQUvGHR8S"),
  },
  {
    title: "Hot rolled and cold rolled medium manganese steel: Mechanical properties and microstructure",
    authors: "Mishra G, Chandan AK, Kundu S",
    journal: "Materials Science and Engineering: A",
    year: 2017,
    pdf: drive("1XLEFj6jsbiDVXYe-brUle7eFeBJYDn9G"),
  },
  {
    title: "Environmental stability of GFRP laminated composites: an emphasis on mechanical behaviour",
    authors: "Mishra G, Mohapatra SR, Behera PR, Dash B, Mohanty UK, Ray BC",
    journal: "Aircraft Engineering and Aerospace Technology",
    year: 2010,
    pdf: drive("161JAPTxLzfHh9I_Xj0gLaQTDy8fIddSY"),
  },
];

export const patents = [
  {
    title: "High Strength and High Toughness Hot Rolled Medium Manganese Steel for Automotive Applications",
    inventors: "Mishra G, Kundu S",
    patentNo: "IN 362,492",
    year: 2017,
    pdf: drive("1Q3LHHZsEsVj5whi5PmPK3UbR1bm-AsR5"),
  },
  {
    title: "High Strength and High Toughness Cold Rolled Medium Manganese Steel for Automotive Applications",
    inventors: "Mishra G, Kundu S",
    patentNo: "IN 535,293",
    year: 2017,
    pdf: drive("1AUlOV2LcoJkPbNM6ewKuXtooT5XMaIR1"),
  },
  {
    title: "Hot Rolled High Strength Steel product with tensile strength of 1000-1200 MPa",
    inventors: "Chintha AR, Mukherjee M, Pathak P, Chanda T, Mishra G",
    patentNo: "US010876184B2",
    year: 2017,
    pdf: drive("1jn_V0jAbY9ee-S5PQva26cuPV9lNRt-D"),
  },
  {
    title: "A method of producing line pipe steel designed for non-sour application conforming to API 5L X70",
    inventors: "Bhattacharya B, Syed B, Pathak P, Mishra G et al.",
    patentNo: "IN 521,720",
    year: 2018,
    pdf: drive("1-ZRbF5KTgwzyayQsBL_D8pjYayeIdhCp"),
  },
  {
    title: "Cold-Rolled Steel Strip and Method For Manufacturing the Same",
    inventors: "Mishra G, Bhagat AN, Verma AK, Kundu S",
    patentNo: "IN 457,687",
    year: 2020,
    pdf: drive("1K3F-2Ks0UHwQq0VBwifR4S6WbEHDmn8B"),
  },
  {
    title: "High-Strength Hot-Rolled Steel Sheet and a Method of Manufacturing Thereof",
    inventors: "Giri SK, Mishra G, Kundu S, Pathak P et al.",
    patentNo: "IN 479,055",
    year: 2019,
    pdf: drive("1Y8WW5NcMsyb-zfTSFgYvoDdHUvRuwFE0"),
  },
  {
    title: "A high strength steel sheet and a method of manufacturing thereof",
    inventors: "Giri SK, Mishra G, Dutta M, Aamir M et al.",
    patentNo: "IN 525,938",
    year: 2022,
    pdf: drive("1qdfXlAmGU0suLZG6ABEZNNTcxV1lKZgu"),
  },
  {
    title: "A high strength hot rolled steel and a method of manufacturing thereof",
    inventors: "Mishra G, Giri SK",
    patentNo: "IN 572,010",
    year: 2022,
    pdf: drive("198e7lT6uY-LrLnhxaNhGIqv0Ve3aty8j"),
  },
  {
    title: "A method for producing superior strength and high ductility steel and product thereof",
    inventors: "Saha R, Mishra G, Kundu S, Chandan A, Bansal G, Chakraborty J",
    patentNo: "IN 506,414",
    year: 2023,
    pdf: drive("18ZsWhHtL3DCD6OlIxd2oMtxVq3zuZc1L"),
  },
];

export const certifications = [
  {
    name: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    year: "Apr 2026",
    validUntil: "Apr 2029",
    pdf: "/certifications/AWS Certified AI Practitioner certificate.pdf",
  },
  {
    name: "SQL Basic Certificate",
    issuer: "HackerRank",
    year: "Apr 2026",
    pdf: "/certifications/sql_basic certificate.pdf",
  },
  {
    name: "Machine Learning Specialization",
    issuer: "DeepLearning.AI / Coursera",
    instructor: "Andrew Ng, DeepLearning.AI",
    description: "Non-credit specialization covering Supervised Machine Learning (Regression & Classification), Advanced Learning Algorithms, and Unsupervised Learning, Recommenders & Reinforcement Learning.",
    year: "Oct 2023",
    pdf: "/certifications/Coursera XJNDBN955CQL.pdf",
    verify: "https://coursera.org/verify/specialization/XJNDBN955CQL",
  },
  {
    name: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI / Coursera",
    instructor: "Andrew Ng, DeepLearning.AI",
    description: "Course 1 of the ML Specialization. Covers linear & logistic regression, gradient descent, and regularization.",
    year: "Aug 2023",
    pdf: "/certifications/Coursera XH3GT8QLY26A.pdf",
    verify: "https://coursera.org/verify/XH3GT8QLY26A",
  },
  {
    name: "Advanced Learning Algorithms",
    issuer: "DeepLearning.AI / Coursera",
    instructor: "Andrew Ng, DeepLearning.AI",
    description: "Course 2 of the ML Specialization. Covers neural networks, decision trees, and ML development best practices.",
    year: "Oct 2023",
    pdf: "/certifications/Coursera 2nd course.pdf",
    verify: "",
  },
];

export const ongoingProjects: { name: string; description: string }[] = [
  // Fill in your ongoing projects
];
