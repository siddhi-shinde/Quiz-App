const quizData = {
  science: [
    {
      question: "What is H2O?",
      options: ["Water", "Oxygen", "Hydrogen", "Salt"],
      answer: "Water"
    },
    {
      question: "Red Planet is?",
      options: ["Mars", "Earth", "Jupiter", "Venus"],
      answer: "Mars"
    },
    {
      question: "Human heart has?",
      options: ["2", "3", "4", "5"],
      answer: "4"
    },
    {
      question: "Boiling point of water?",
      options: ["90°C", "100°C", "120°C", "80°C"],
      answer: "100°C"
    },
    {
      question: "Largest organ in human body?",
      options: ["Heart", "Brain", "Skin", "Liver"],
      answer: "Skin"
    },
    {
      question: "Gas essential for breathing?",
      options: ["Oxygen", "Nitrogen", "CO2", "Hydrogen"],
      answer: "Oxygen"
    },
    {
      question: "Unit of Force?",
      options: ["Newton", "Joule", "Volt", "Watt"],
      answer: "Newton"
    },
    {
      question: "Vitamin from sunlight?",
      options: ["A", "B", "C", "D"],
      answer: "D"
    },
    {
      question: "Normal body temperature?",
      options: ["35°C", "37°C", "40°C", "42°C"],
      answer: "37°C"
    },
    {
      question: "Earth revolves around?",
      options: ["Moon", "Sun", "Mars", "Venus"],
      answer: "Sun"
    }
  ],

  history: [
    {
      question: "First Mughal Emperor?",
      options: ["Akbar", "Babur", "Humayun", "Aurangzeb"],
      answer: "Babur"
    },
    {
      question: "India got independence in?",
      options: ["1945", "1947", "1950", "1942"],
      answer: "1947"
    },
    {
      question: "Father of Nation?",
      options: ["Nehru", "Patel", "Gandhi", "Bose"],
      answer: "Gandhi"
    },
    {
      question: "Who built Taj Mahal?",
      options: ["Akbar", "Shah Jahan", "Babur", "Humayun"],
      answer: "Shah Jahan"
    },
    {
      question: "First Prime Minister of India?",
      options: ["Nehru", "Patel", "Gandhi", "Bose"],
      answer: "Nehru"
    },
    {
      question: "Quit India Movement?",
      options: ["1942", "1947", "1930", "1920"],
      answer: "1942"
    },
    {
      question: "Who discovered America?",
      options: ["Columbus", "Cook", "Marco Polo", "Magellan"],
      answer: "Columbus"
    },
    {
      question: "Battle of Plassey?",
      options: ["1757", "1857", "1947", "1764"],
      answer: "1757"
    },
    {
      question: "First President of India?",
      options: ["Rajendra Prasad", "Nehru", "Patel", "Radhakrishnan"],
      answer: "Rajendra Prasad"
    },
    {
      question: "National Anthem written by?",
      options: ["Tagore", "Premchand", "Nehru", "Gandhi"],
      answer: "Tagore"
    }
  ],

  geography: [
    {
      question: "Largest Ocean?",
      options: ["Pacific", "Atlantic", "Indian", "Arctic"],
      answer: "Pacific"
    },
    {
      question: "Highest Mountain?",
      options: ["Everest", "K2", "Kanchenjunga", "Makalu"],
      answer: "Everest"
    },
    {
      question: "Capital of India?",
      options: ["Mumbai", "Delhi", "Pune", "Chennai"],
      answer: "Delhi"
    },
    {
      question: "Longest River?",
      options: ["Nile", "Amazon", "Ganga", "Yangtze"],
      answer: "Nile"
    },
    {
      question: "Largest Desert?",
      options: ["Sahara", "Thar", "Gobi", "Kalahari"],
      answer: "Sahara"
    },
    {
      question: "Smallest continent?",
      options: ["Australia", "Europe", "Africa", "Asia"],
      answer: "Australia"
    },
    {
      question: "River Ganga originates from?",
      options: ["Gangotri", "Yamunotri", "Kedarnath", "Badrinath"],
      answer: "Gangotri"
    },
    {
      question: "Earth has how many continents?",
      options: ["5", "6", "7", "8"],
      answer: "7"
    },
    {
      question: "Largest country?",
      options: ["Russia", "India", "China", "USA"],
      answer: "Russia"
    },
    {
      question: "National river of India?",
      options: ["Yamuna", "Godavari", "Ganga", "Krishna"],
      answer: "Ganga"
    }
  ],

  sports: [
    { question: "Players in cricket team?", options: ["9", "10", "11", "12"], answer: "11" },
    { question: "Olympics held every?", options: ["2", "3", "4", "5"], answer: "4" },
    { question: "National sport of India?", options: ["Cricket", "Hockey", "Football", "Kabaddi"], answer: "Hockey" },
    { question: "Football World Cup held every?", options: ["2", "3", "4", "5"], answer: "4" },
    { question: "Tennis Grand Slam?", options: ["Wimbledon", "IPL", "ISL", "PKL"], answer: "Wimbledon" },
    { question: "Sachin Tendulkar sport?", options: ["Football", "Cricket", "Hockey", "Tennis"], answer: "Cricket" },
    { question: "IPL stands for?", options: ["Indian Premier League", "International Premier League", "Indian Players League", "None"], answer: "Indian Premier League" },
    { question: "Kabaddi players?", options: ["5", "7", "9", "11"], answer: "7" },
    { question: "Chess world champion from India?", options: ["Anand", "Dhoni", "Kohli", "Sindhu"], answer: "Anand" },
    { question: "Basketball players on court?", options: ["5", "6", "7", "8"], answer: "5" }
  ],

  technology: [
    { question: "HTML stands for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyper Tool", "None"], answer: "Hyper Text Markup Language" },
    { question: "CSS used for?", options: ["Styling", "Database", "Server", "Storage"], answer: "Styling" },
    { question: "JS stands for?", options: ["Java Source", "JavaScript", "JSource", "Json"], answer: "JavaScript" },
    { question: "React is?", options: ["Library", "Database", "Language", "OS"], answer: "Library" },
    { question: "Database example?", options: ["MySQL", "React", "HTML", "CSS"], answer: "MySQL" },
    { question: "Google browser?", options: ["Chrome", "Edge", "Safari", "Opera"], answer: "Chrome" },
    { question: "CPU stands for?", options: ["Central Processing Unit", "Computer Power Unit", "Central Program Unit", "None"], answer: "Central Processing Unit" },
    { question: "RAM is?", options: ["Memory", "Storage", "CPU", "OS"], answer: "Memory" },
    { question: "Java is?", options: ["Programming Language", "Browser", "Database", "OS"], answer: "Programming Language" },
    { question: "WWW stands for?", options: ["World Wide Web", "World Web Window", "Wide Web World", "None"], answer: "World Wide Web" }
  ]
};

export default quizData;