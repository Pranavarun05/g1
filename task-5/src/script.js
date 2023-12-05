// 1. For a given JSON iterate over using for, for each, for in and for of
const jsonObject = {
  name: "Pranav",
  age: 13,
  bio: "Self-employed. Learning enthusiast.",
};

for (const key in Object.keys(jsonObject)) {
  console.log(jsonObject[key]);
}

for (const key of Object.keys(jsonObject)) {
  console.log(jsonObject[key]);
}

Object.entries(jsonObject).forEach(([key, value]) => {
  console.log(`${key} ${value}`);
});

// 2. Create your own resume data in JSON format
const resumeData = {
  personalInfo: {
    name: "Arun Yadav",
    address: "No. 3, 2nd Street, Gokulam Colony, P N Pudur, Coimbatore, 641041",
    phone: "+91 86819 82680",
    email: "arun.yadav@gmail.com",
    linkedin: "linkedin.com/in/arun_yadav",
  },
  objective:
    "A highly motivated and experienced software developer seeking a challenging position in a dynamic environment to further develop my skills and contribute to innovative projects.",
  education: [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Sri Krishna College of Engineering and Technology",
      year: 2022,
      location: "Coimbatore",
    },
  ],
  workExperience: [
    {
      position: "Intern",
      company: "Tech Solutions Inc.",
      duration: "2021 - Present",
      location: "Coimbatore",
      responsibilities: [
        "Front-end development as a React developer",
        "Back-end development as a Spring boot developer",
        "Ensure software quality and efficiency",
      ],
    },
  ],
  skills: [
    "Programming Languages: Java, JavaScript, Python",
    "Web Development: HTML, CSS, React",
    "Database Management: SQL, MongoDB",
    "Tools: Git, Docker, Jenkins",
  ],
  certifications: [
    {
      name: "Certified Java Developer",
      institution: "Tech Certification Institute",
      year: 2019,
    },
    {
      name: "Certified Web Developer",
      institution: "Online Learning Platform",
      year: 2018,
    },
  ],
  interests: ["Coding", "Blogging about tech", "Gaming"],
};

// 3. Read about the difference between window, screen, and document in javascript

// 4. Codekata practice
