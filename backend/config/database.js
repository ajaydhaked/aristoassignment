let mockResearchPapers = [
    {
      id: 1,
      title: "Machine Learning Approaches in COVID-19 Diagnosis",
      authors: ["John Smith", "Emily Johnson"],
      publicationYear: 2021,
      citationCount: 156,
      abstract: "This paper explores various machine learning techniques applied to COVID-19 diagnosis and prognosis, highlighting their effectiveness and limitations.",
      isSaved: false
    },
    {
      id: 2,
      title: "Quantum Computing: A New Era in Information Processing",
      authors: ["David Lee", "Sarah Chen"],
      publicationYear: 2020,
      citationCount: 203,
      abstract: "An overview of recent advancements in quantum computing and its potential impact on various fields of science and technology.",
      isSaved: false
    },
    {
        id: 3,
        title: "Climate Change Effects on Biodiversity",
        authors: ["Maria Rodriguez", "Thomas Brown", "Lisa Taylor"],
        publicationYear: 2022,
        citationCount: 89,
        abstract: "A comprehensive meta-analysis of global studies examining the effects of climate change on biodiversity across different ecosystems.",
        isSaved: false
    },
    {
        id: 4,
        title: "Artificial Intelligence in Healthcare",
        authors: ["Robert Johnson", "Anna Kim"],
        publicationYear: 2021,
        citationCount: 112,
        abstract: "This paper discusses the ethical implications and challenges of implementing AI systems in healthcare settings.",
        isSaved: false
    },
    {
        id: 5,
        title: "Nanotechnology in Cancer Treatment",
        authors: ["Michael Chang", "Olivia Davis"],
        publicationYear: 2023,
        citationCount: 45,
        abstract: "An exploration of cutting-edge nanotechnology applications in cancer treatment, including targeted drug delivery and early detection methods.",
        isSaved: false
    },
    {
        id: 6,
        title: "The Impact of Social Media on Mental Health",
        authors: ["Emma Wilson", "James Thompson"],
        publicationYear: 2022,
        citationCount: 78,
        abstract: "A long-term study examining the effects of social media usage on mental health across different age groups and demographics.",
        isSaved: false
    },
    {
      id: 7,
      title: "Sustainable Energy Solutions",
      authors: ["Alex Green", "Sophia Martinez"],
      publicationYear: 2021,
      citationCount: 134,
      abstract: "This paper compares various renewable energy technologies",
        isSaved: false
    },
    {
      id: 8,
      title: "Neuroscience of Decision Making",
      authors: ["Daniel White", "Rachel Black"],
      publicationYear: 2020,
      citationCount: 167,
      abstract: "An analysis of fMRI studies revealing the neural mechanisms",
      isSaved: false
    },
    {
      id: 9,
      title: "Blockchain Technology in Supply Chain Management",
      authors: ["Kevin Park", "Laura Chen"],
      publicationYear: 2022,
      citationCount: 92,
      abstract: "This study examines the potential applications and challenges of implementing blockchain technology in supply chain management.",
        isSaved: false
    },
    {
      id: 10,
      title: "Gut Microbiota in Immune System Regulation",
      authors: ["Natalie Adams", "Christopher Lee"],
      publicationYear: 2023,
      citationCount: 67,
      abstract: "An investigation into the complex relationship between gut microbiota and the human immune system, with implications for health and disease.",
      isSaved: false
    },
    {
      id: 11,
      title: "Smart Cities: Urban Planning for the Future",
      authors: ["Sophie Brown", "David Kim"],
      publicationYear: 2021,
      citationCount: 123,
      abstract: "This paper discusses the concept of smart cities and the integration of IoT technologies to improve urban infrastructure and services.",
      isSaved: false
    },
    {
      id: 12,
      title: "Robotic Surgery: Current Trends and Future Prospects",
      authors: ["Oliver Wilson", "Ella Thompson"],
      publicationYear: 2022,
      citationCount: 56,
      abstract: "An overview of robotic-assisted surgical procedures, including advancements in surgical robotics and their impact on patient outcomes.",
      isSaved: false
    },
    {
      id: 13,
      title: "The Role of Microplastics in Marine Ecosystems",
      authors: ["Liam Davis", "Ava Martinez"],
      publicationYear: 2020,
      citationCount: 98,
      abstract: "A review of the environmental impact of microplastics on marine ecosystems, including their effects on marine organisms and food webs.",
      isSaved: false
    },
    {
      id: 14,
      title: "Advances in Gene Editing Technologies",
      authors: ["Ethan Green", "Zoe Lee"],
      publicationYear: 2021,
      citationCount: 145,
      abstract: "This paper provides an overview of CRISPR-Cas9 and other gene editing tools, highlighting their applications in biotechnology and medicine.",
      isSaved: false
    },
    {
      id: 15,
      title: "Renewable Energy in Developing Countries",
      authors: ["Chloe Brown", "Mason Wilson"],
      publicationYear: 2023,
      citationCount: 110,
      abstract: "This paper discusses the challenges and opportunities in deploying renewable energy solutions in developing countries.",
      isSaved: false
    },
    {
      id: 16,
      title: "The Evolution of Wireless Communication",
      authors: ["Henry Clark", "Amelia Robinson"],
      publicationYear: 2022,
      citationCount: 95,
      abstract: "An exploration of the history, present state, and future trends of wireless communication technologies, including 5G.",
      isSaved: false
    },
    {
      id: 17,
      title: "The Influence of AI on Financial Markets",
      authors: ["William Adams", "Sofia Lee"],
      publicationYear: 2021,
      citationCount: 78,
      abstract: "This paper analyzes the impact of artificial intelligence in financial market predictions and decision-making.",
      isSaved: false
    },
    {
      id: 18,
      title: "Autonomous Vehicles: A Safety Perspective",
      authors: ["James White", "Grace Harris"],
      publicationYear: 2020,
      citationCount: 150,
      abstract: "An investigation into the safety of autonomous vehicles and their potential to reduce traffic accidents.",
      isSaved: false
    },
    {
      id: 19,
      title: "Exploring the Human Genome: Past, Present, and Future",
      authors: ["Jacob Scott", "Isabella Baker"],
      publicationYear: 2023,
      citationCount: 134,
      abstract: "A comprehensive review of the human genome project and its implications for future medical advancements.",
      isSaved: false
    },
    {
      id: 20,
      title: "Cybersecurity in the Age of IoT",
      authors: ["Lily Carter", "Benjamin Foster"],
      publicationYear: 2022,
      citationCount: 89,
      abstract: "This paper evaluates the growing cybersecurity challenges with the widespread adoption of Internet of Things (IoT) devices.",
      isSaved: false
    },
    {
      id: 21,
      title: "Machine Learning in Drug Discovery",
      authors: ["Lucas Stewart", "Avery Gray"],
      publicationYear: 2021,
      citationCount: 176,
      abstract: "An exploration of how machine learning techniques are revolutionizing the process of drug discovery and development.",
      isSaved: false
    },
    {
      id: 22,
      title: "Digital Twin Technology in Manufacturing",
      authors: ["Liam Hill", "Ella King"],
      publicationYear: 2020,
      citationCount: 108,
      abstract: "A review of the application of digital twin technologies in modern manufacturing to optimize production and maintenance processes.",
      isSaved: false
    },
    {
      id: 23,
      title: "Social Robotics: Ethical and Social Considerations",
      authors: ["Jackson Martin", "Harper Wright"],
      publicationYear: 2021,
      citationCount: 130,
      abstract: "An analysis of the ethical and social challenges posed by the increasing integration of robots in social environments.",
      isSaved: false
    },
    {
      id: 24,
      title: "Big Data Analytics in Healthcare",
      authors: ["Samuel Lewis", "Victoria Adams"],
      publicationYear: 2023,
      citationCount: 157,
      abstract: "This paper discusses the potential and challenges of applying big data analytics in healthcare to improve patient outcomes.",
      isSaved: false
    },
    {
      id: 25,
      title: "Smart Agriculture: IoT and Precision Farming",
      authors: ["Owen Allen", "Ella Walker"],
      publicationYear: 2022,
      citationCount: 145,
      abstract: "A discussion of the role of IoT devices and precision farming techniques in transforming modern agriculture.",
      isSaved: false
    },
    {
      id: 26,
      title: "Blockchain for Digital Identity Management",
      authors: ["Jack Young", "Aubrey Hernandez"],
      publicationYear: 2020,
      citationCount: 88,
      abstract: "A review of the use of blockchain technology for secure and decentralized digital identity management systems.",
      isSaved: false
    },
    {
      id: 27,
      title: "AI-Powered Medical Imaging",
      authors: ["Sophia Reed", "Michael Scott"],
      publicationYear: 2023,
      citationCount: 103,
      abstract: "This paper examines how artificial intelligence is enhancing the accuracy and efficiency of medical imaging techniques.",
      isSaved: false
    },
    {
      id: 28,
      title: "Quantum Cryptography: A Security Revolution",
      authors: ["Henry Mitchell", "Samantha Price"],
      publicationYear: 2021,
      citationCount: 200,
      abstract: "An in-depth look at how quantum cryptography is poised to revolutionize security protocols in the digital age.",
      isSaved: false
    },
    {
      id: 29,
      title: "Artificial Intelligence in Autonomous Drones",
      authors: ["Gabriel Turner", "Emily Cooper"],
      publicationYear: 2022,
      citationCount: 75,
      abstract: "A comprehensive study on the role of AI in enhancing the capabilities of autonomous drones for various applications.",
      isSaved: false
    },
    {
      id: 30,
      title: "Biotechnology and Its Role in Sustainable Agriculture",
      authors: ["Ryan Roberts", "Chloe Watson"],
      publicationYear: 2020,
      citationCount: 123,
      abstract: "This paper explores how biotechnological advancements are contributing to sustainable agricultural practices.",
      isSaved: false
    },
    {
      id: 31,
      title: "Advances in 3D Bioprinting for Organ Regeneration",
      authors: ["Isabella Hayes", "Liam Jenkins"],
      publicationYear: 2021,
      citationCount: 147,
      abstract: "An exploration of the latest advancements in 3D bioprinting technology for organ regeneration and transplantation.",
      isSaved: false
    },
    {
      id: 32,
      title: "The Role of AI in Climate Change Mitigation",
      authors: ["Emma Peterson", "Logan Sanders"],
      publicationYear: 2023,
      citationCount: 99,
      abstract: "This paper discusses how artificial intelligence is being leveraged to tackle climate change through predictive modeling and optimization.",
      isSaved: false
    },
    {
      id: 33,
      title: "Nanomaterials for Clean Energy",
      authors: ["Sophia Russell", "Noah Cooper"],
      publicationYear: 2020,
      citationCount: 155,
      abstract: "A review of nanomaterials and their application in enhancing the efficiency of renewable energy technologies.",
      isSaved: false
    },
    {
      id: 34,
      title: "AI-Based Personalized Learning Systems",
      authors: ["Ella Howard", "Benjamin Bailey"],
      publicationYear: 2022,
      citationCount: 88,
      abstract: "An investigation into how artificial intelligence is transforming personalized learning systems and improving educational outcomes.",
      isSaved: false
    },
    {
      id: 35,
      title: "Gene Therapy: The Future of Genetic Disorders",
      authors: ["Lucas Bell", "Mia Parker"],
      publicationYear: 2023,
      citationCount: 72,
      abstract: "This paper provides a detailed examination of current gene therapy techniques and their potential to cure genetic disorders.",
      isSaved: false
    },
    {
      id: 36,
      title: "The Ethics of AI in Autonomous Weapons",
      authors: ["David Ward", "Chloe Evans"],
      publicationYear: 2021,
      citationCount: 134,
      abstract: "A discussion on the ethical challenges and concerns surrounding the use of AI in autonomous weapon systems.",
      isSaved: false
    },
    {
      id: 37,
      title: "Blockchain for Healthcare Data Security",
      authors: ["Avery Gray", "Jack Hughes"],
      publicationYear: 2022,
      citationCount: 93,
      abstract: "An analysis of how blockchain technology can be used to secure healthcare data and improve patient privacy.",
      isSaved: false
    },
    {
      id: 38,
      title: "AI in Natural Language Processing: Challenges and Opportunities",
      authors: ["Henry Murphy", "Aria Brooks"],
      publicationYear: 2020,
      citationCount: 183,
      abstract: "This paper reviews the current state of natural language processing and explores the challenges and future directions in the field.",
      isSaved: false
    },
    {
      id: 39,
      title: "Augmented Reality in Education: Enhancing Learning Experiences",
      authors: ["Lily Coleman", "Ethan Rivera"],
      publicationYear: 2021,
      citationCount: 132,
      abstract: "An investigation into the role of augmented reality in enhancing student engagement and learning outcomes in education.",
      isSaved: false
    },
    {
      id: 40,
      title: "Green Technologies for Sustainable Urban Development",
      authors: ["James Perry", "Sophia Bailey"],
      publicationYear: 2023,
      citationCount: 67,
      abstract: "A study of green technologies and their applications in achieving sustainable development in urban areas.",
      isSaved: false
    },
    {
      id: 41,
      title: "AI-Driven Predictive Analytics in Finance",
      authors: ["Liam Taylor", "Olivia Young"],
      publicationYear: 2020,
      citationCount: 205,
      abstract: "An exploration of how AI-driven predictive analytics is transforming financial markets and risk management strategies.",
      isSaved: false
    },
    {
      id: 42,
      title: "CRISPR-Cas9: Revolutionizing Agricultural Biotechnology",
      authors: ["Emily White", "Noah Martin"],
      publicationYear: 2022,
      citationCount: 125,
      abstract: "This paper examines the impact of CRISPR-Cas9 technology on agricultural biotechnology, including crop enhancement and pest resistance.",
      isSaved: false
    },
    {
      id: 43,
      title: "Wearable Technology in Healthcare Monitoring",
      authors: ["Ella Clark", "Daniel Turner"],
      publicationYear: 2021,
      citationCount: 110,
      abstract: "A review of how wearable technology is being used for continuous health monitoring and its implications for personalized medicine.",
      isSaved: false
    },
    {
      id: 44,
      title: "AI in Renewable Energy Grid Management",
      authors: ["Lucas Baker", "Sophia Roberts"],
      publicationYear: 2023,
      citationCount: 89,
      abstract: "An exploration of how AI is being integrated into the management of renewable energy grids to optimize energy distribution and efficiency.",
      isSaved: false
    },
    {
      id: 45,
      title: "Ethical Considerations in AI-Driven Decision-Making",
      authors: ["Harper Harris", "Henry Foster"],
      publicationYear: 2022,
      citationCount: 101,
      abstract: "A discussion on the ethical issues surrounding AI-driven decision-making systems, particularly in critical fields like healthcare and law.",
      isSaved: false
    },
    {
      id: 46,
      title: "Artificial Intelligence in Space Exploration",
      authors: ["Liam Ramirez", "Chloe Torres"],
      publicationYear: 2021,
      citationCount: 142,
      abstract: "This paper highlights how AI is aiding in space exploration, including satellite data analysis and autonomous rover navigation.",
      isSaved: false
    },
    {
      id: 47,
      title: "5G Networks: Transforming Communication Technologies",
      authors: ["Ava Scott", "Ethan Hill"],
      publicationYear: 2020,
      citationCount: 201,
      abstract: "An in-depth analysis of how 5G networks are set to revolutionize communication technologies and impact various industries.",
      isSaved: false
    },
    {
      id: 48,
      title: "AI-Powered Drug Repurposing",
      authors: ["David Lewis", "Zoe Ross"],
      publicationYear: 2023,
      citationCount: 76,
      abstract: "An exploration of how AI is being used to repurpose existing drugs for new therapeutic applications.",
      isSaved: false
    },
    {
      id: 49,
      title: "Quantum Encryption: Securing the Future of Digital Communications",
      authors: ["Jackson Parker", "Mia Wright"],
      publicationYear: 2021,
      citationCount: 178,
      abstract: "A review of quantum encryption techniques and their potential to secure digital communications against future threats.",
      isSaved: false
    },
    {
      id: 50,
      title: "Smart Grids: Integrating Renewable Energy",
      authors: ["Avery Miller", "Ethan Collins"],
      publicationYear: 2022,
      citationCount: 125,
      abstract: "This paper discusses the integration of renewable energy sources into smart grids to enhance energy efficiency and reliability.",
      isSaved: false
    },
    {
      id: 51,
      title: "AI in Wildlife Conservation",
      authors: ["Ella Edwards", "James Jenkins"],
      publicationYear: 2020,
      citationCount: 133,
      abstract: "An investigation into how AI technologies are being employed to monitor and conserve endangered wildlife species.",
      isSaved: false
    },
    {
      id: 52,
      title: "Cybersecurity Challenges in Cloud Computing",
      authors: ["Lily Allen", "Sophia Watson"],
      publicationYear: 2021,
      citationCount: 117,
      abstract: "A detailed exploration of the cybersecurity challenges associated with cloud computing and potential mitigation strategies.",
      isSaved: false
    },
    {
      id: 53,
      title: "The Role of AI in Autonomous Shipping",
      authors: ["Michael Carter", "Ava Torres"],
      publicationYear: 2023,
      citationCount: 68,
      abstract: "This paper explores the use of AI in autonomous shipping and its potential to reduce human error and improve global logistics.",
      isSaved: false
    },
    {
      id: 54,
      title: "Nanorobots in Medicine: The Future of Drug Delivery",
      authors: ["Logan Taylor", "Emily Evans"],
      publicationYear: 2022,
      citationCount: 94,
      abstract: "An overview of the potential applications of nanorobots in medicine, particularly in targeted drug delivery and cancer treatment.",
      isSaved: false
    },
    {
      id: 55,
      title: "Deep Learning for Image Recognition",
      authors: ["Noah King", "Sophia Bennett"],
      publicationYear: 2021,
      citationCount: 189,
      abstract: "A study of how deep learning models are being applied to image recognition tasks, with applications ranging from security to healthcare.",
      isSaved: false
    },
    {
      id: 57,
      title: "Advances in Virtual Reality for Education",
      authors: ["Oliver Johnson", "Lily Scott"],
      publicationYear: 2021,
      citationCount: 121,
      abstract: "An exploration of how virtual reality is transforming education by creating immersive learning environments.",
      isSaved: false
    },
    {
      id: 58,
      title: "Blockchain for Secure Digital Identity",
      authors: ["Sophia Miller", "James King"],
      publicationYear: 2022,
      citationCount: 109,
      abstract: "This paper discusses the application of blockchain technology in securing digital identities for individuals and organizations.",
      isSaved: false
    },
    {
      id: 59,
      title: "CRISPR Gene Editing: Ethical Implications",
      authors: ["William Young", "Amelia Brown"],
      publicationYear: 2023,
      citationCount: 67,
      abstract: "An analysis of the ethical considerations surrounding the use of CRISPR gene editing in human biology and medicine.",
      isSaved: false
    },
    {
      id: 60,
      title: "Data Privacy in the Age of Big Data",
      authors: ["Lucas White", "Emma Martinez"],
      publicationYear: 2021,
      citationCount: 142,
      abstract: "A review of data privacy challenges in the era of big data and the measures needed to protect personal information.",
      isSaved: false
    },
    {
      id: 61,
      title: "Energy Storage Solutions for Renewable Energy",
      authors: ["David Cooper", "Grace Torres"],
      publicationYear: 2020,
      citationCount: 156,
      abstract: "An overview of energy storage technologies that can complement renewable energy systems, such as solar and wind power.",
      isSaved: false
    },
    {
      id: 62,
      title: "Fusion Energy: The Future of Clean Power",
      authors: ["Benjamin Rivera", "Isabella Clark"],
      publicationYear: 2023,
      citationCount: 77,
      abstract: "This paper examines the latest advancements in fusion energy research and its potential as a future clean energy source.",
      isSaved: false
    },
    {
      id: 63,
      title: "Genomics and Personalized Medicine",
      authors: ["Alexander Brooks", "Sophia Ross"],
      publicationYear: 2022,
      citationCount: 113,
      abstract: "A comprehensive analysis of how genomics is being used to develop personalized treatment plans for patients.",
      isSaved: false
    },
    {
      id: 64,
      title: "Hydrogen Fuel Cells for Sustainable Transportation",
      authors: ["Ethan Adams", "Lily Gray"],
      publicationYear: 2021,
      citationCount: 132,
      abstract: "An investigation into the use of hydrogen fuel cells as an alternative to fossil fuels for sustainable transportation.",
      isSaved: false
    },
    {
      id: 65,
      title: "IoT in Smart Agriculture",
      authors: ["Emily Wilson", "Noah Hughes"],
      publicationYear: 2022,
      citationCount: 98,
      abstract: "This paper explores how the Internet of Things is transforming agricultural practices by improving efficiency and sustainability.",
      isSaved: false
    },
    {
      id: 66,
      title: "Jupyter Notebooks in Data Science Education",
      authors: ["Lucas Turner", "Ava Perry"],
      publicationYear: 2021,
      citationCount: 111,
      abstract: "A discussion of how Jupyter Notebooks are being used in data science education to enhance interactive learning.",
      isSaved: false
    },
    {
      id: 67,
      title: "Knowledge Graphs in Artificial Intelligence",
      authors: ["Sophia Bell", "Ethan Murphy"],
      publicationYear: 2020,
      citationCount: 143,
      abstract: "An exploration of knowledge graphs and their applications in improving artificial intelligence systems.",
      isSaved: false
    },
    {
      id: 68,
      title: "Low Power Architectures for IoT Devices",
      authors: ["Jack Reed", "Isabella Jenkins"],
      publicationYear: 2023,
      citationCount: 75,
      abstract: "A review of low power architectures designed for IoT devices, focusing on energy efficiency and performance.",
      isSaved: false
    },
    {
      id: 69,
      title: "Machine Learning for Predictive Maintenance",
      authors: ["Lucas Brooks", "Grace Lewis"],
      publicationYear: 2021,
      citationCount: 124,
      abstract: "An analysis of how machine learning techniques are being used to predict equipment failure and optimize maintenance schedules.",
      isSaved: false
    },
    {
      id: 70,
      title: "Natural Language Understanding for AI",
      authors: ["Olivia Turner", "Benjamin Ramirez"],
      publicationYear: 2020,
      citationCount: 187,
      abstract: "A comprehensive study of natural language understanding techniques in artificial intelligence applications.",
      isSaved: false
    },
    {
      id: 71,
      title: "Ocean Plastics: Environmental Impact and Mitigation",
      authors: ["Ella Ward", "Logan Scott"],
      publicationYear: 2022,
      citationCount: 103,
      abstract: "A review of the environmental impact of ocean plastics and strategies for mitigating pollution in marine ecosystems.",
      isSaved: false
    },
    {
      id: 72,
      title: "Photovoltaic Materials for Solar Energy",
      authors: ["Michael Foster", "Chloe Evans"],
      publicationYear: 2021,
      citationCount: 141,
      abstract: "This paper discusses the latest developments in photovoltaic materials for enhancing solar energy capture and efficiency.",
      isSaved: false
    },
    {
      id: 73,
      title: "Quantum Machine Learning Algorithms",
      authors: ["Ethan Jenkins", "Sophie Bailey"],
      publicationYear: 2023,
      citationCount: 65,
      abstract: "An investigation into the development of quantum machine learning algorithms and their applications in various industries.",
      isSaved: false
    },
    {
      id: 74,
      title: "Remote Sensing Technologies for Environmental Monitoring",
      authors: ["Lucas Bennett", "Ava Peterson"],
      publicationYear: 2022,
      citationCount: 94,
      abstract: "A study of remote sensing technologies and their role in monitoring environmental changes and natural disasters.",
      isSaved: false
    },
    {
      id: 75,
      title: "Smart Grids and Renewable Energy Integration",
      authors: ["Mia Edwards", "David Allen"],
      publicationYear: 2020,
      citationCount: 154,
      abstract: "An overview of smart grid technologies and their role in integrating renewable energy sources into the power grid.",
      isSaved: false
    },
    {
      id: 76,
      title: "Thermal Management in Electronics",
      authors: ["Sophia Harris", "Liam Cooper"],
      publicationYear: 2021,
      citationCount: 114,
      abstract: "A review of thermal management techniques used to prevent overheating in electronic devices and systems.",
      isSaved: false
    },
    {
      id: 77,
      title: "Ultrafast Lasers in Material Processing",
      authors: ["Ethan Parker", "Olivia Kelly"],
      publicationYear: 2022,
      citationCount: 79,
      abstract: "An exploration of the use of ultrafast lasers in precision material processing applications, such as manufacturing and surgery.",
      isSaved: false
    },
    {
      id: 78,
      title: "Virtual Assistants in Customer Service",
      authors: ["Lucas Green", "Ava Davis"],
      publicationYear: 2023,
      citationCount: 92,
      abstract: "A discussion on the growing use of AI-powered virtual assistants in customer service and their impact on customer experience.",
      isSaved: false
    },
    {
      id: 79,
      title: "Wearable Sensors for Health Monitoring",
      authors: ["David Hill", "Emma Collins"],
      publicationYear: 2021,
      citationCount: 131,
      abstract: "A review of wearable sensor technologies used for continuous health monitoring and early detection of medical conditions.",
      isSaved: false
    },
    {
      id: 80,
      title: "X-ray Crystallography in Structural Biology",
      authors: ["Jack Ward", "Sophia Martinez"],
      publicationYear: 2020,
      citationCount: 149,
      abstract: "This paper provides an overview of X-ray crystallography techniques and their applications in understanding biological structures.",
      isSaved: false
    },
    {
      id: 81,
      title: "Yield Optimization in Agricultural Biotechnology",
      authors: ["Grace Clark", "Noah Brooks"],
      publicationYear: 2022,
      citationCount: 105,
      abstract: "An analysis of biotechnological methods for optimizing crop yields and improving food security in agriculture.",
      isSaved: false
    },
    {
      id: 82,
      title: "Zero-Emission Vehicles and the Future of Transportation",
      authors: ["Ethan Lewis", "Ava Wilson"],
      publicationYear: 2023,
      citationCount: 82,
      abstract: "An exploration of zero-emission vehicle technologies and their role in reducing greenhouse gas emissions in the transportation sector.",
      isSaved: false
    }
  ];
  
module.exports = mockResearchPapers;
