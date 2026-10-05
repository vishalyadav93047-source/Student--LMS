export const courses = [
  {
    id: 1,
    title: "React.js Masterclass",
    category: "Development",
    level: "Intermediate",
    price: 999,
    rating: 4.9,
    students: 12450,
    duration: "18h 30m",
    instructor: "Alex Morgan",
    icon: "⚛️",
    description: "Build modern React applications from fundamentals to advanced patterns with practical projects.",
    lessons: [
      "React Fundamentals",
      "JSX and Components",
      "Props and State",
      "React Router",
      "Hooks and Context",
      "Build a Complete App"
    ],
    quiz: [
      { q: "Which library is used to build the UI in this course?", options: ["React", "Django", "Laravel", "Spring"], answer: 0 },
      { q: "Which hook stores component state?", options: ["useState", "useLink", "usePage", "useRoute"], answer: 0 },
      { q: "What is JSX?", options: ["A syntax extension for JavaScript", "A database", "A server", "A CSS framework"], answer: 0 }
    ]
  },
  {
    id: 2,
    title: "JavaScript Pro Course",
    category: "Development",
    level: "Beginner",
    price: 799,
    rating: 4.8,
    students: 18320,
    duration: "16h 10m",
    instructor: "Sarah Wilson",
    icon: "JS",
    description: "Master modern JavaScript with practical projects and real-world examples.",
    lessons: ["JavaScript Basics", "Functions", "Arrays and Objects", "DOM", "Async JavaScript", "Modern ES6+"],
    quiz: [
      { q: "Which keyword declares a block-scoped variable?", options: ["let", "varr", "define", "newvar"], answer: 0 },
      { q: "Which method converts JSON text to an object?", options: ["JSON.parse", "JSON.make", "JSON.object", "JSON.convert"], answer: 0 },
      { q: "Which feature handles asynchronous code?", options: ["Promises", "Selectors", "Classes only", "CSS Grid"], answer: 0 }
    ]
  },
  {
    id: 3,
    title: "UI/UX Design Bootcamp",
    category: "Design",
    level: "Beginner",
    price: 699,
    rating: 4.7,
    students: 8920,
    duration: "12h 45m",
    instructor: "Daniel Lee",
    icon: "🎨",
    description: "Learn user research, wireframes, visual design and modern UX workflows.",
    lessons: ["Design Thinking", "User Research", "Wireframing", "Visual Design", "Prototyping", "Portfolio Project"],
    quiz: [
      { q: "What is a wireframe?", options: ["A basic layout", "A database", "A programming language", "A server"], answer: 0 },
      { q: "UX primarily focuses on what?", options: ["User experience", "File size", "Server speed only", "Keyboard shortcuts"], answer: 0 },
      { q: "What is a prototype?", options: ["An interactive design model", "A final database", "A compiler", "A network"], answer: 0 }
    ]
  },
  {
    id: 4,
    title: "Python for Data Science",
    category: "Data Science",
    level: "Intermediate",
    price: 1099,
    rating: 4.9,
    students: 15640,
    duration: "22h 20m",
    instructor: "Emma Davis",
    icon: "🐍",
    description: "Use Python, pandas and visualization techniques to explore real datasets.",
    lessons: ["Python Essentials", "NumPy", "Pandas", "Data Cleaning", "Visualization", "Mini Project"],
    quiz: [
      { q: "Which library is widely used for tabular data?", options: ["Pandas", "React", "Express", "Redux"], answer: 0 },
      { q: "Which language is used in this course?", options: ["Python", "Java", "PHP", "C#"], answer: 0 },
      { q: "What is data visualization?", options: ["Representing data graphically", "Deleting data", "Encrypting passwords", "Installing Python"], answer: 0 }
    ]
  },
  {
    id: 5,
    title: "Digital Marketing Complete",
    category: "Marketing",
    level: "Beginner",
    price: 599,
    rating: 4.6,
    students: 6340,
    duration: "10h 15m",
    instructor: "Ryan Clark",
    icon: "📈",
    description: "Understand SEO, social media, content strategy and performance marketing.",
    lessons: ["Marketing Basics", "SEO", "Social Media", "Content Strategy", "Analytics", "Campaign Project"],
    quiz: [
      { q: "What does SEO stand for?", options: ["Search Engine Optimization", "Social Email Output", "Search Event Order", "System Engine Operation"], answer: 0 },
      { q: "Which metric measures clicks compared with impressions?", options: ["CTR", "RAM", "CPU", "API"], answer: 0 },
      { q: "What is content marketing?", options: ["Creating useful content for an audience", "Buying hardware", "Writing code only", "Building servers"], answer: 0 }
    ]
  },
  {
    id: 6,
    title: "AI & Machine Learning",
    category: "AI & ML",
    level: "Advanced",
    price: 1499,
    rating: 4.9,
    students: 7210,
    duration: "25h 40m",
    instructor: "Olivia Brown",
    icon: "🤖",
    description: "Explore machine learning concepts and build practical predictive models.",
    lessons: ["ML Fundamentals", "Data Preparation", "Regression", "Classification", "Model Evaluation", "Final Project"],
    quiz: [
      { q: "What does ML stand for?", options: ["Machine Learning", "Markup Language", "Memory Logic", "Model Link"], answer: 0 },
      { q: "Which is a supervised learning task?", options: ["Classification", "Random formatting", "File compression", "UI styling"], answer: 0 },
      { q: "Why is model evaluation important?", options: ["To measure model performance", "To change the keyboard", "To create HTML", "To install Python"], answer: 0 }
    ]
  }
];
