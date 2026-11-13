// ============================================================
// portfolioData.js
// This one file controls ALL the text and links on the website.
// ============================================================

export const personalInfo = {
  name: "Hamsaveni S",
  firstName: "Hamsaveni S",
  brandName: "Hamsaveni S", // shown in the preloader, navbar and footer
  title: "Java Full Stack Developer",
  location: "Bengalore, India",
  phone: "6361835044",
  emails: {
    primary: "hamsaammu@gmail.com",
    secondary: "",
  },
  summary:
    "BCA graduate and aspiring Java Full Stack Developer currently pursuing professional training at TAP Academy, with knowledge of Java, Python, JavaScript, HTML, CSS, Spring Boot, and MySQL. Passionate about building responsive web applications and creating innovative technology solutions.",
  resumeUrl: "/HAMSAVENI_S_ATS_Resume.pdf", // put the PDF inside /public
};

// TAP Academy — the academy you trained with. Used in the footer credit.
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

export const socialLinks = {
  github: "https://github.com/hamsaammu07-wq",
  linkedin: "https://www.linkedin.com/in/hamsaveni-s-/",
  instagram: "",
};

export const heroContent = {
  greeting: "Hi, I'm Hamsaveni S",
  titleHighlight: "Java Full Stack Developer",
  subtitle:
    "Passionate about building responsive web applications, robust Java backends, and creative software solutions that solve real-world problems.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:hamsaammu@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/HAMSAVENI_S_ATS_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  // HTML is allowed here (it is rendered with dangerouslySetInnerHTML) — keep it YOUR OWN trusted text.
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Hamsaveni S</span>, a BCA graduate and aspiring Java Full Stack Developer based in Bengalore, sharpening my skills through the placement training program at TAP Academy. My strengths include problem-solving, quick learning, and adaptability with a strong passion for building responsive web applications and real-world technology solutions.`,
  techStack: ["Java", "Spring Boot", "Python", "JavaScript", "MySQL", "React"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world products",
  description:
    "A structured approach to transforming conceptual problems into robust, user-centered web applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "Understanding project requirements, analyzing user needs, and planning system architecture and database design.",
    },
    {
      number: "02",
      title: "Design",
      text: "Creating intuitive UI wireframes, responsive layouts, and structured database schemas.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Writing clean, modular backend APIs using Java & Spring Boot and crafting dynamic frontends with modern web technologies.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Testing rigorously, managing version control with Git & GitHub, and deploying reliable web solutions.",
    },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      skills: [{ name: "Java" }, { name: "Python" }, { name: "JavaScript" }],
    },
    {
      title: "Web Development",
      skills: [{ name: "HTML" }, { name: "CSS" }, { name: "React" }],
    },
    {
      title: "Databases",
      skills: [{ name: "MySQL" }],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git" },
        { name: "GitHub" },
        { name: "Eclipse IDE" },
        { name: "VS Code" },
      ],
    },
  ],
};

export const leadershipList = [
  {
    title: "Technical Learning & Coding Practice",
    description:
      "Actively engaged in Java Full Stack development training at TAP Academy, improving technical skills through hands-on project building and exploring new technologies.",
    role: "Trainee Developer",
    badge: "Continuous Learning",
  },
];

export const internshipsList = [
  {
    organization: "TAP Academy",
    role: "Java Full Stack Developer Intern",
    duration: "2024 - Present",
    skills: [
      "Full Stack Web Development",
      "RESTful API Design",
      "Database Management",
      "Responsive UI",
    ],
    tech: ["Java", "Spring Boot", "MySQL", "HTML", "CSS", "JavaScript"],
  },
];

export const softSkillsList = [
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Breaking down complex coding problems and debugging systematically to build optimal solutions.",
  },
  {
    name: "Communication",
    icon: "💬",
    desc: "Explaining technical concepts clearly and collaborating effectively with peers and mentors.",
  },
  {
    name: "Leadership",
    icon: "🤝",
    desc: "Taking initiative in project planning, code reviews, and guiding team discussions.",
  },
  {
    name: "Adaptability",
    icon: "📈",
    desc: "Quickly learning new programming languages, frameworks, and modern development tools.",
  },
];

export const projects = [
  {
    id: "tech-innovation-multimedia-hub",
    number: "01",
    badge: "🚀 Flagship Project", // use null for no badge
    title: "Tech Innovation Multimedia Hub",
    description:
      "A website to explore technology videos, audio, images, and articles.",
    techTags: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
    links: {
      github:
        "https://github.com/hamsaammu07-wq/Tech-innovation-multimedia-hub-",
      demo: "https://hamsaammu07-wq.github.io/Tech-innovation-multimedia-hub-/",
    },
    video: "https://hamsaammu07-wq.github.io/Tech-innovation-multimedia-hub-/",
    isFlagship: true,
  },
  {
    id: "student-management-system",
    number: "02",
    badge: null,
    title: "Student Management System",
    description:
      "Manages student details, course information, attendance, and academic records.",
    techTags: [
      "Java",
      "Spring Boot",
      "HTML",
      "CSS",
      "JavaScript",
      "MySQL",
      "REST API",
    ],
    links: {
      github: "https://github.com/hamsaammu07-wq",
      demo: "",
    },
    video: "https://hamsaammu07-wq.github.io/my-portfolio/",
    isFlagship: false,
  },
  {
    id: "facial-emotion-classification",
    number: "03",
    badge: null,
    title: "Facial Emotion Classification Using Deep Learning",
    description:
      "Detects human facial emotions using deep learning with convolutional neural networks.",
    techTags: [
      "Python",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "NumPy",
      "CNN",
    ],
    links: {
      github: "https://github.com/hamsaammu07-wq",
      demo: "",
    },
    isFlagship: false,
  },
];

// Used only by the optional Certificates component (bonus step)
export const certificates = {
  featured: [
    { name: "Java Full Stack Development", issuer: "TAP Academy", icon: "🏅" },
  ],
  viewAllUrl: "https://www.linkedin.com/in/hamsaveni-s-/",
};

export const contactContent = {
  badge: "Get in Touch",
  heading: "Let's Build Something Exceptional Together",
  description:
    "Have an opportunity, project idea, or just want to connect? Reach out through the form below or contact me directly via email or phone.",
  infoCards: [
    {
      title: "Email",
      value: "hamsaammu@gmail.com",
      href: "mailto:hamsaammu@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Hamsaveni,%0D%0A%0D%0AI came across your portfolio and would like to connect.",
      icon: "email",
    },
    {
      title: "Phone",
      value: "+91 6361835044",
      href: "tel:+916361835044",
      icon: "phone",
    },
    {
      title: "Location",
      value: "Bengalore, India",
      href: "https://maps.google.com/?q=Bengalore,India",
      icon: "location",
    },
  ],
  form: {
    nameLabel: "Your Name",
    namePlaceholder: "e.g. John Doe",
    emailLabel: "Your Email",
    emailPlaceholder: "e.g. john@example.com",
    subjectLabel: "Subject",
    subjectPlaceholder: "e.g. Java Full Stack Opportunity",
    messageLabel: "Message",
    messagePlaceholder: "Tell me about your project, team, or opportunity...",
    submitButton: "Send Message",
    sendingButton: "Sending...",
    successMessage: "Thank you! Your message has been sent successfully. I'll get back to you soon.",
    errorMessage: "Oops! Something went wrong while sending your message. Please try again or email me directly at hamsaammu@gmail.com.",
  },
};

export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  institution:
    "MES MSPS first grade college, Chikkamagaluru Kuvempu University",
  cgpa: "2023 - 2026",
  graduation: "2026",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: [
    "Java Full Stack Developer",
    "Java · Spring Boot · MySQL",
    "Building scalable & responsive web solutions",
  ],
  credential: "Bachelor of Computer Applications (BCA)",
  copyright: `© ${new Date().getFullYear()} Hamsaveni S | Built with React`,
};

// EmailJS — read from .env.local (variables must start with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
