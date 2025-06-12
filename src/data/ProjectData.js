// src/data/projectData.js
export const projects = [
  {
    id: 1,
    title: "Full-Stack Meeting Room Booking System",
    description: [
      "Designed and developed a complete meeting room booking application to streamline resource scheduling and prevent booking conflicts within a corporate environment.",
      "Engineered the backend using Spring Boot, creating a full suite of REST APIs for managing users, rooms, amenities, and bookings with complete CRUD functionality.",
      "Built a dynamic and interactive frontend with ReactJS, allowing users to view room availability, manage personal bookings, and interact with system resources in real-time.",
      "Implemented role-based access control, providing distinct administrative privileges for managing users, rooms, and company-wide bookings, separate from standard employee self-service functions."
    ],
    technologies: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "ReactJS", "Git", "Postman"]
  },
  {
    id: 2,
    title: "NLP-Based Resume Screening System (Final Year Project)",
    description: [
      "Designed and developed an end-to-end intelligent recruitment tool to automate and enhance the hiring process by intelligently parsing and ranking candidate resumes against job descriptions.",
      "Implemented semantic similarity techniques (beyond simple keyword matching) to improve candidate-job fit accuracy, reducing screening time from hours to minutes.",
      "Engineered the complete system architecture, including resume parsing, semantic matching algorithms, candidate shortlisting, and automated email invitations via SMTP.",
      "Built a user-friendly and interactive web interface using Streamlit for easy use by HR personnel."
    ],
    technologies: ["Python", "PyMuPDF", "NumPy", "Pandas", "Scikit-learn", "Streamlit", "SQLite"]
  }
];