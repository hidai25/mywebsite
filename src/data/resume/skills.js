const skills = [
  // AI/ML Engineering - Primary Focus
  {
    title: 'Large Language Models (LLMs)',
    competency: 5,
    category: ['AI/ML Engineering', 'Data Science'],
  },
  {
    title: 'Prompt Engineering',
    competency: 5,
    category: ['AI/ML Engineering'],
  },
  {
    title: 'RAG Systems',
    competency: 4,
    category: ['AI/ML Engineering', 'Data Engineering'],
  },
  {
    title: 'OpenAI API / GPT',
    competency: 5,
    category: ['AI/ML Engineering'],
  },
  {
    title: 'LangChain',
    competency: 4,
    category: ['AI/ML Engineering', 'Python'],
  },
  {
    title: 'Hugging Face Transformers',
    competency: 4,
    category: ['AI/ML Engineering', 'Python'],
  },
  {
    title: 'Vector Databases',
    competency: 4,
    category: ['AI/ML Engineering', 'Databases'],
  },
  {
    title: 'PyTorch',
    competency: 3,
    category: ['AI/ML Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Model Fine-tuning',
    competency: 3,
    category: ['AI/ML Engineering', 'Data Science'],
  },
  {
    title: 'MLOps',
    competency: 3,
    category: ['AI/ML Engineering', 'Data Engineering'],
  },
  // Core Languages
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python'],
  },
  {
    title: 'JavaScript',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'TypeScript',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'SQL',
    competency: 4,
    category: ['Databases', 'Languages'],
  },
  // Data Science & ML
  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'TensorFlow / Keras',
    competency: 3,
    category: ['AI/ML Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'NumPy',
    competency: 4,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'NLP',
    competency: 4,
    category: ['AI/ML Engineering', 'Data Science'],
  },
  {
    title: 'Computer Vision',
    competency: 3,
    category: ['AI/ML Engineering', 'Data Science'],
  },
  {
    title: 'Data Visualization',
    competency: 4,
    category: ['Data Science'],
  },
  // Web Development
  {
    title: 'React',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'Node.js',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'FastAPI',
    competency: 4,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'REST APIs',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'HTML / CSS / SASS',
    competency: 3,
    category: ['Web Development'],
  },
  // Infrastructure & Tools
  {
    title: 'AWS',
    competency: 4,
    category: ['Cloud', 'Data Engineering'],
  },
  {
    title: 'GCP',
    competency: 3,
    category: ['Cloud', 'Data Engineering'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'Kubernetes',
    competency: 2,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Tools'],
  },
  // Databases
  {
    title: 'PostgreSQL',
    competency: 4,
    category: ['Databases'],
  },
  {
    title: 'Redis',
    competency: 3,
    category: ['Databases'],
  },
  {
    title: 'Pinecone / ChromaDB',
    competency: 4,
    category: ['AI/ML Engineering', 'Databases'],
  },
  // Data Engineering
  {
    title: 'Apache Spark',
    competency: 3,
    category: ['Data Engineering'],
  },
  {
    title: 'ETL Pipelines',
    competency: 3,
    category: ['Data Engineering'],
  },
  {
    title: 'Jupyter',
    competency: 4,
    category: ['Data Science', 'Python'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

const colors = [
  '#2e59ba', // AI/ML Engineering - Primary blue
  '#37b1f5', // Cloud
  '#515dd4', // Data Engineering
  '#6968b3', // Data Science
  '#40494e', // Databases
  '#64cb7b', // Languages
  '#747fff', // Python
  '#3896e2', // Tools
  '#e47272', // Web Development
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index % colors.length],
  }));

export { categories, skills };
