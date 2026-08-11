export const profile = {
  name: "Gyanaranjan Mishra",
  title: "Data Scientist",
  affiliation: "PhD · Mechanical Engineering · UNB Canada",
  email: "gyanaranjanmishra06@gmail.com",
  photo: "/profile.jpeg",
  bio: `By now you already have an idea about my background, but I'd like to give it a personal touch here.

I got my bachelor's degree from NIT Rourkela, India, where I also took my first programming courses. It was tough in the beginning — adapting to code felt foreign — but the foundation was laid, even if I didn't get to use it much in the years that followed.

After graduating, I started my professional career at Indian Oil Corporation, one of India's major petroleum product manufacturers. It was a good start, but not challenging enough for my liking. That restlessness pushed me toward my master's at IIT Bombay, which I entered by clearing GATE — one of the toughest competitive exams in India. I specialised in process engineering and used C++ to support my thesis work, which is also where I recognised one of my core strengths: the ability to acquire new skills quickly and deliver results under pressure.

With that expertise, I joined Tata Steel Ltd — India's largest steel manufacturer — as a Researcher in R&D. For several years I applied metallurgical and modelling skills to solve real-world challenges in product development, failure analysis, and process optimisation. Then came 2017–18 and the Industry 4.0 wave. Data modelling became central to our work, and that was my first real exposure to Data Science. I chose Python for its versatility and gradually learned the nuances of the ML lifecycle — data wrangling methodologies, model types & usage, performance optimisation methodologies, and collaborating with cross-functional teams to solve problems at industrial scale.

Post Tata Steel, I joined the University of New Brunswick as a doctoral student in Mechanical Engineering. At Tata Steel I had spent over a decade generating proprietary industrial data — designing experiments, characterising microstructures, filing patents. At UNB, I started modelling that same class of data with ML. One paper in particular — comparing traditional constitutive models against machine learning for predicting high-temperature deformation behaviour — wasn't just an academic exercise; it was the moment I realised ML was the sharper tool. I completed coursework in Data Analytics and Research Methods, built and published a deep neural network model for material property prediction using multi-source experimental data, and that work solidified my resolve to make a full transition into Data Science.

Since then, I have been building a portfolio spanning NLP, GenAI, and applied ML across finance, healthcare, and consumer goods. In May 2026, I completed my PhD in Mechanical Engineering at UNB — the culmination of four years of ML-driven materials research. For me, certifications are the best way to validate self-driven learning — they mark a checkpoint, a commitment. The AWS Certified Machine Learning Engineer – Associate (June 2026) and AWS Certified AI Practitioner are the most recent of those checkpoints, and there are more to come.`,
  skills: {
    "Programming & Tools": ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Keras", "SQL", "Git", "AWS (SageMaker, S3)", "Jupyter"],
    "Machine Learning": ["Regression", "Classification", "Clustering", "Random Forest", "XGBoost", "SVM", "Neural Networks", "Deep Learning", "Word2Vec", "NLTK", "SMOTE", "Time-Series Forecasting"],
    "ML Engineering": ["End-to-End ML Pipelines", "LLM Integration", "RAG", "FAISS", "Reranking", "Prompt Engineering", "Feature Engineering", "Hyperparameter Tuning", "Cross-Validation", "Streamlit Deployment", "ROC-AUC", "F1", "Precision-Recall"],
    "Analytics & Visualization": ["EDA", "Matplotlib", "Seaborn", "Plotly", "Power BI", "ETL"],
    "Domain": ["Statistical Quality Control", "Hypothesis Testing", "A/B Testing", "Experimental Design", "Process Optimization", "Project Management", "Intellectual Property"],
  },
  hobbies: [
    {
      name: "My Slice of Ocean",
      description: `Away from screens and data, I am a reefer at heart. Over the past decade I have maintained several reef aquariums — living ecosystems that demand as much analytical thinking as they do patience. Keeping a reef healthy is a quiet intersection of biology, chemistry, and automation; you learn to read water parameters the way you read model outputs, and you build systems so the tank thrives even when you are not watching. But beyond the science, the reef is simply where I go when life gets loud. There is something grounding about a world that moves on its own terms — coral that grows a millimetre a week, fish that don't care about deadlines. It is the one place I have always found stillness.`,
      photos: ["/reef/reef1.jpg", "/reef/reef2.jpg", "/reef/reef3.jpg"],
    },
  ],
  links: {
    github: "https://github.com/gyanaranjanmishra",
    linkedin: "https://www.linkedin.com/in/gyanaranjan-mishra-a10811b/",
    scholar: "https://scholar.google.com/citations?user=4-JTIcAAAAAJ&hl=en",
    streamlit: "https://share.streamlit.io/user/gyanaranjanmishra",
  },
};

const drive = (id: string) => `https://drive.google.com/file/d/${id}/view`;

export const publications = [
  {
    title: "Strain rate dependent deformation behavior evolution and ensuing tensile properties of a medium manganese steel",
    authors: "Alam MI, Wipp S, Chandan AK, Mishra G, Shekhar S, Bleck W, Chowdhury SG",
    journal: "Materials Science and Engineering: A",
    year: 2026,
    pdf: "",
  },
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
    title: "Constitutive Modelling of High-Temperature Flow Behavior of a Non-oriented Electrical Steel with 3.2 wt% Si",
    authors: "Mishra G, Chadha K, He Y, Aranas C",
    journal: "TMS Annual Meeting & Exhibition",
    year: 2023,
    pdf: "",
  },
  {
    title: "Effect of microstructure on corrosion behavior of medium manganese steel",
    authors: "Kishore K, Chandan AK, Purty M, Karthik V, Mishra G, Sahoo BK, Meena LK, Chakraborty J",
    journal: "Materials Letters",
    year: 2023,
    pdf: "",
  },
  {
    title: "Effect of Si Content on Phase Transition Temperature, Microstructure and Hardness in Medium Mn Steel",
    authors: "Panigrahi A, Mishra GR, Sahoo AK, Behera M, Mishra PK, Bhoi B",
    journal: "PREPARE @ IEI Conferences",
    year: 2022,
    pdf: "",
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
    name: "AWS Certified Machine Learning Engineer – Associate",
    issuer: "Amazon Web Services",
    year: "Jun 2026",
    validUntil: "Jun 2029",
    pdf: "/certifications/AWS Certified Machine Learning Engineer certificate.pdf",
    verify: "https://aws.amazon.com/verification",
    verificationCode: "cc084d575e894d5bab058f0a05b5a083",
  },
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

export const ongoingProjects: { name: string; description: string }[] = [];

export const experience = [
  {
    title: "Visiting Researcher, Advanced Materials Processing",
    company: "CanmetMATERIALS, Natural Resources Canada",
    period: "Apr 2022 – Sep 2025",
    note: "concurrent with PhD",
    highlights: [
      "Built and benchmarked XGBoost, Random Forest & Neural Network models on 200K+ multi-source samples; ROC-AUC >0.85 and 67% accuracy improvement over conventional baselines",
      "Engineered end-to-end analytics pipelines (ingestion → cleaning → feature engineering → evaluation), improving dataset reliability by 25%",
      "Deployed predictive models as interactive Streamlit applications, driving adoption among government and industry stakeholders",
      "Translated model results into executive-level technical reports that directly shaped strategic decisions",
    ],
  },
  {
    title: "Principal Researcher, New Product Development",
    company: "Research and Development, Tata Steel Ltd, India",
    period: "Oct 2018 – Aug 2021",
    highlights: [
      "Drove end-to-end ML workflows for quality prediction and process optimization, reducing trial-and-error experimentation by 23%",
      "Built automated performance-monitoring dashboards and reporting pipelines, reducing manual reporting effort by 40%",
      "Applied hypothesis testing and statistical root cause analysis on high-volume production datasets to diagnose quality deviations",
    ],
  },
  {
    title: "Researcher, New Product Development",
    company: "Research and Development, Tata Steel Ltd, India",
    period: "Jul 2012 – Sep 2018",
    highlights: [
      "Analyzed process, quality, and metallurgical datasets exceeding 500K records annually; ML-driven insights reduced the new product development lifecycle by 15%",
      "Developed regression and empirical ML models for alloy design, replacing costly physical trials",
    ],
  },
];

export const awards = [
  { name: "RNB Graduate Merit Award", org: "University of New Brunswick, Canada", year: "2021–2025" },
  { name: "NBIF STEM and Social Innovation Award", org: "University of New Brunswick, Canada", year: "2021, 2022" },
  { name: "Best Innovative Project Award", org: "Tata Steel Ltd, India", year: "2016, 2017" },
  { name: "Institute Silver Medal", org: "NIT Rourkela, India", year: "2009" },
];

export const education = [
  {
    degree: "PhD, Mechanical Engineering",
    institution: "University of New Brunswick, Canada",
    gpa: "4.2 / 4.3",
    period: "Sep 2021 – May 2026",
  },
  {
    degree: "MTech, Metallurgical Engineering & Materials Science",
    institution: "IIT Bombay, India",
    gpa: "8.76 / 10",
    period: "Jul 2010 – Jun 2012",
  },
  {
    degree: "BTech, Metallurgical & Materials Engineering",
    institution: "NIT Rourkela, India",
    gpa: "9.15 / 10",
    period: "Jul 2005 – Apr 2009",
  },
];

export const aiPapers = [
  {
    title: "Attention Is All You Need",
    authors: "Vaswani A, Shazeer N, Parmar N et al.",
    year: 2017,
    venue: "NeurIPS",
    brief:
      "Introduced the Transformer architecture, replacing recurrent networks entirely with self-attention mechanisms. Every major LLM today — BERT, GPT, Claude — is built on this foundation. Arguably the most cited paper in modern AI.",
    url: "https://arxiv.org/abs/1706.03762",
    improvement:
      "Train a transformer from scratch on a domain-specific corpus — domain pre-training consistently outperforms general-purpose models on specialised downstream tasks and builds deeper intuition for attention mechanics.",
  },
  {
    title: "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding",
    authors: "Devlin J, Chang M-W, Lee K, Toutanova K",
    year: 2018,
    venue: "NAACL",
    brief:
      "Established bidirectional pre-training as the dominant paradigm for NLP. A single pre-trained BERT model fine-tuned on small task-specific datasets outperformed every prior approach on 11 benchmarks simultaneously.",
    url: "https://arxiv.org/abs/1810.04805",
    improvement:
      "Fine-tune BERT on a specialised downstream task — NER, classification, or Q&A — using a small domain dataset. Even 1K–10K labelled examples yield large gains over zero-shot performance and demonstrate practical transfer learning skill.",
  },
  {
    title: "Language Models are Few-Shot Learners (GPT-3)",
    authors: "Brown T, Mann B, Ryder N et al.",
    year: 2020,
    venue: "NeurIPS",
    brief:
      "Demonstrated that scaling alone unlocks emergent capabilities: a 175B parameter model could perform translation, Q&A, and reasoning with only a few examples in the prompt — no fine-tuning required. Redefined what 'pre-trained' means.",
    url: "https://arxiv.org/abs/2005.14165",
    improvement:
      "Explore chain-of-thought prompting and structured output formats on domain-specific tasks — understanding how context window design and prompt engineering affect output quality is a core applied LLM skill.",
  },
  {
    title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks",
    authors: "Lewis P, Perez E, Piktus A et al.",
    year: 2020,
    venue: "NeurIPS",
    brief:
      "Formalised the RAG paradigm — grounding LLM generation in retrieved documents to reduce hallucination and enable factual, updatable knowledge. Foundation of most production AI assistants today.",
    url: "https://arxiv.org/abs/2005.11401",
    improvement:
      "Build a RAG pipeline over a specialised corpus, systematically comparing chunking strategies, embedding models, and rerankers to measure their effect on retrieval quality and answer faithfulness.",
  },
  {
    title: "ImageNet Classification with Deep Convolutional Neural Networks (AlexNet)",
    authors: "Krizhevsky A, Sutskever I, Hinton G",
    year: 2012,
    venue: "NeurIPS",
    brief:
      "Won ImageNet by a margin that shocked the field and triggered the modern deep learning era. Showed that GPUs + large data + deep CNNs together produce qualitatively different results — none of the three alone is sufficient.",
    url: "https://papers.nips.cc/paper_files/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html",
    improvement:
      "Replicate AlexNet training on a custom image dataset using modern frameworks — understanding the original training dynamics, data augmentation choices, and GPU utilisation builds intuition that using pre-trained models alone cannot provide.",
  },
  {
    title: "Deep Residual Learning for Image Recognition (ResNet)",
    authors: "He K, Zhang X, Ren S, Sun J",
    year: 2015,
    venue: "CVPR",
    brief:
      "Introduced residual skip connections, enabling networks 10× deeper than before without vanishing gradients. ResNet-50 remains one of the most widely used feature extractors in transfer learning across every vision domain.",
    url: "https://arxiv.org/abs/1512.03385",
    improvement:
      "Apply transfer learning with a pre-trained ResNet on a custom classification task with limited labelled data — systematically comparing frozen vs. fine-tuned layers reveals how domain shift affects feature reuse.",
  },
  {
    title: "Generative Adversarial Networks",
    authors: "Goodfellow I, Pouget-Abadie J, Mirza M et al.",
    year: 2014,
    venue: "NeurIPS",
    brief:
      "Introduced the adversarial training framework — a generator network learns to fool a discriminator network, producing realistic synthetic data. Foundational to image synthesis, data augmentation, and the entire generative AI wave.",
    url: "https://arxiv.org/abs/1406.2661",
    improvement:
      "Implement a conditional GAN to generate class-conditioned synthetic samples for data augmentation — particularly effective in low-data settings where class imbalance or scarcity limits model performance.",
  },
  {
    title: "Distributed Representations of Words and Phrases (Word2Vec)",
    authors: "Mikolov T, Sutskever I, Chen K, Corrado G, Dean J",
    year: 2013,
    venue: "NeurIPS",
    brief:
      "Introduced efficient skip-gram and CBOW algorithms for learning dense word vectors that encode semantic and syntactic relationships. Popularised embeddings as a general representation strategy across all of NLP.",
    url: "https://arxiv.org/abs/1301.3781",
    improvement:
      "Train a domain-specific Word2Vec model on a targeted corpus and compare its semantic space against general-purpose embeddings — domain vocabulary often encodes relationships that general models miss entirely.",
  },
  {
    title: "Human-Level Control through Deep Reinforcement Learning (DQN)",
    authors: "Mnih V, Kavukcuoglu K, Silver D et al.",
    year: 2015,
    venue: "Nature",
    brief:
      "A single agent learned to play 49 Atari games from raw pixels at human level using deep Q-networks and experience replay. Landmark demonstration that deep RL can acquire complex behaviour from high-dimensional input without hand-crafted features.",
    url: "https://www.nature.com/articles/nature14236",
    improvement:
      "Apply deep Q-learning to a custom environment such as resource allocation or process control using OpenAI Gymnasium — bridging RL theory to a practical sequential decision-making problem.",
  },
  {
    title: "High-Resolution Image Synthesis with Latent Diffusion Models (Stable Diffusion)",
    authors: "Rombach R, Blattmann A, Lorenz D, Esser P, Ommer B",
    year: 2022,
    venue: "CVPR",
    brief:
      "Made high-quality image generation practical by running the diffusion process in a compressed latent space rather than pixel space. Enabled Stable Diffusion and became the architecture of choice for text-to-image generation.",
    url: "https://arxiv.org/abs/2112.10752",
    improvement:
      "Fine-tune a pre-trained latent diffusion model on a domain-specific image dataset using DreamBooth or LoRA — adapting generative models to specialised visual domains without training from scratch.",
  },
];

export const selfLearningProjects = [
  {
    title: "Game of Thrones RAG Q&A System",
    subtitle: "Retrieval-Augmented Generation over A Song of Ice and Fire",
    description:
      "A RAG-based question answering system built over all 5 books of the A Song of Ice and Fire series. Ask any question about the story, characters, or events — the system retrieves the most relevant passages and generates grounded answers using Claude Haiku with source attribution.",
    highlights: [
      "7,394 token-based chunks (max 400 tokens, 80-token overlap) using MPNet tokenizer",
      "FAISS IndexFlatIP with L2 normalisation for cosine similarity search (top-k=30)",
      "CrossEncoder reranker (ms-marco-MiniLM-L-6-v2) narrows to top 3 passages",
      "Context window expansion (±4 chunks) passes ~27 chunks to Claude Haiku",
      "Replaced RoBERTa-large (512-token limit) with Claude Haiku (200K context) — unlocking full retrieval pipeline",
      "Source attribution shows which book and chunk answered each question",
    ],
    architecture: [
      { step: "Embed", detail: "MPNet all-mpnet-base-v2 (768d)" },
      { step: "Retrieve", detail: "FAISS cosine similarity, top-k=30" },
      { step: "Rerank", detail: "CrossEncoder, top-3 passages" },
      { step: "Expand", detail: "±4 chunk window → ~27 chunks" },
      { step: "Answer", detail: "Claude Haiku (claude-haiku-4-5)" },
    ],
    stack: ["Python", "FAISS", "Sentence Transformers", "CrossEncoder", "Claude Haiku", "Jupyter", "NumPy", "Anthropic SDK"],
    stats: [
      { label: "Chunks", value: "7,394" },
      { label: "Embedding Dim", value: "768" },
      { label: "Books Indexed", value: "5" },
      { label: "Context Window", value: "200K tokens" },
    ],
    notebook: "https://github.com/gyanaranjanmishra/GOT-QA",
    status: "Complete",
    category: "NLP / Generative AI",
  },
  {
    title: "Kick Car Prediction",
    subtitle: "Predicting problematic used car purchases at auction",
    description:
      "A machine learning application that predicts whether a used car purchased at auction is a 'kick' — a vehicle with significant hidden problems that cannot be resold. Built on a real-world imbalanced dataset of 70,000+ auction records with 30+ features, the app uses XGBoost and Random Forest classifiers with SMOTE oversampling, deployed as a Streamlit web app.",
    highlights: [
      "70,000+ real-world auction records with 30+ vehicle features",
      "SMOTE oversampling to handle severe class imbalance",
      "Dual model approach: XGBoost and Random Forest classifiers",
      "ROC-AUC optimised evaluation with Precision, Recall, and F1 metrics",
      "End-to-end pipeline: raw data → OHE encoding → robust scaling → deployed app",
      "Automated EDA profiling report for full exploratory analysis",
    ],
    architecture: [
      { step: "EDA", detail: "Automated profiling on 70K+ records" },
      { step: "Preprocess", detail: "Missing values, OHE encoding, robust scaling" },
      { step: "Balance", detail: "SMOTE oversampling for class imbalance" },
      { step: "Train", detail: "XGBoost & Random Forest with hyperparameter tuning" },
      { step: "Deploy", detail: "Streamlit app with serialised model artifacts" },
    ],
    stack: ["Python", "XGBoost", "Scikit-learn", "SMOTE", "Streamlit", "Pandas", "NumPy", "Pickle"],
    stats: [
      { label: "Records", value: "70K+" },
      { label: "Features", value: "30+" },
      { label: "Models", value: "2" },
      { label: "Metric", value: "ROC-AUC" },
    ],
    notebook: "https://github.com/gyanaranjanmishra/kick_car_prediction",
    status: "Complete",
    category: "ML / Classification",
  },
  {
    title: "Electrical Steel Flow Stress Predictor",
    subtitle: "Deep learning for high-temperature deformation stress prediction",
    description:
      "A deep learning Streamlit application developed as part of PhD research at UNB in collaboration with CanmetMATERIALS. Predicts high-temperature flow stress of two electrical steel grades (1.3% Si and 3.2% Si) based on strain, strain rate, and deformation temperature — a critical parameter in industrial steel processing and forming operations.",
    highlights: [
      "Two separate neural networks for 1.3 wt% Si and 3.2 wt% Si electrical steel grades",
      "Trained on 200K+ experimental deformation data points",
      "~25% improvement in prediction accuracy over conventional empirical models",
      "Inputs: strain (0–0.7), strain rate (0.01–1.0 s⁻¹), temperature (850–1050°C)",
      "Pre-fitted Scikit-learn scalers for production-ready inference",
      "Research-grade model bridging materials science and deep learning",
    ],
    architecture: [
      { step: "Data", detail: "200K+ experimental deformation records" },
      { step: "Scale", detail: "Pre-fitted Scikit-learn scalers per steel grade" },
      { step: "Model", detail: "TensorFlow/Keras deep neural network" },
      { step: "Predict", detail: "Flow stress output per deformation condition" },
      { step: "Deploy", detail: "Streamlit app with grade selection interface" },
    ],
    stack: ["Python", "TensorFlow", "Keras", "Scikit-learn", "Streamlit", "NumPy", "Pickle"],
    stats: [
      { label: "Data Points", value: "200K+" },
      { label: "Steel Grades", value: "2" },
      { label: "Input Params", value: "3" },
      { label: "Accuracy Gain", value: "~25%" },
    ],
    notebook: "https://github.com/gyanaranjanmishra/steel-stress-predictor",
    status: "Complete",
    category: "Deep Learning / Materials Science",
  },
  {
    title: "Question Pair Similarity Detector",
    subtitle: "Semantic similarity detection using Word2Vec and Random Forest",
    description:
      "An NLP application that predicts whether two questions are semantically similar, inspired by the Quora Question Pairs dataset. Combines classical feature engineering with Word2Vec sentence embeddings to classify question pairs as similar or dissimilar — applicable to deduplication in Q&A platforms, customer support systems, and search engines.",
    highlights: [
      "~90% accuracy combining Word2Vec embeddings with a Random Forest classifier",
      "Rich feature engineering: token ratios, stopword overlap, fuzzy matching scores",
      "Word2Vec sentence vectors via mean pooling of word embeddings (Gensim)",
      "Full text preprocessing: contraction expansion, HTML cleaning, stopword filtering",
      "Models hosted on Google Drive and auto-downloaded at runtime via gdown",
      "Interactive Streamlit interface for real-time question pair comparison",
    ],
    architecture: [
      { step: "Preprocess", detail: "Contraction expansion, HTML cleaning, stopword removal" },
      { step: "Features", detail: "Token ratios, fuzzy scores, common word counts" },
      { step: "Embed", detail: "Word2Vec (Gensim) mean pooling → sentence vectors" },
      { step: "Classify", detail: "Random Forest on combined feature set" },
      { step: "Deploy", detail: "Streamlit app with real-time pair prediction" },
    ],
    stack: ["Python", "Word2Vec", "Gensim", "Scikit-learn", "FuzzyWuzzy", "NLTK", "Streamlit", "BeautifulSoup"],
    stats: [
      { label: "Accuracy", value: "~90%" },
      { label: "Classifier", value: "Random Forest" },
      { label: "Embeddings", value: "Word2Vec" },
      { label: "Feature Types", value: "Token + Fuzzy" },
    ],
    notebook: "https://github.com/gyanaranjanmishra/my_question_pairs",
    status: "Complete",
    category: "NLP / Classification",
  },
];
