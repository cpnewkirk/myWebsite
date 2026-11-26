// All site content lives here, so you can edit text without touching components.

export const site = {
  brand: "Living Archive Labs",
  name: "Christian P. Newkirk",
  email: "christian.newkirk@livingarchivelabs.com",
  location: "Arlington, VA",
  tagline: "Interaction design & software for museums, archives, and community stories.",
};

// Place logo and thumbnail assets in src/assets/logos/.
// Logos:
//   project-logo.(png|svg|jpg|webp)
//   terentia-logo.(png|svg|jpg|webp)
//
// Project thumbnails:
//   chao-thumbnail.(png|svg|jpg|webp)
//   docuseries-thumbnail.(png|svg|jpg|webp)
//   despair-debacle-thumbnail.(png|svg|jpg|webp)
//   trivia-master-thumbnail.(png|svg|jpg|webp)

export const logos = {
  project: {
    file: "project-logo",
    name: "Heart of the Program",
    alt: "Heart of the Program logo",
  },
  terentia: {
    file: "terentia-logo",
    name: "Terentia",
    alt: "Terentia logo",
    href: "https://terentia.io/",
  },
};

export const thumbnails = {
  chao: {
    file: "chao-thumbnail",
    name: "Chao in Space II",
    alt: "Chao in Space II project thumbnail",
  },
  docuseries: {
    file: "docuseries-thumbnail",
    name: "Historical Genealogy Docuseries",
    alt: "Historical Genealogy Docuseries project thumbnail",
  },
  despairDebacle: {
    file: "despair-debacle-thumbnail",
    name: "The Despair Debacle: Origins",
    alt: "The Despair Debacle: Origins project thumbnail",
  },
  triviaMaster: {
    file: "trivia-master-thumbnail",
    name: "Trivia Master",
    alt: "Trivia Master project thumbnail",
  },
};

export const social = [
  { key: "linkedin", label: "LinkedIn", handle: "Christian Newkirk", href: "https://www.linkedin.com/in/cpnewkirk/" },
  { key: "github", label: "GitHub", handle: "cpnewkirk", href: "https://github.com/cpnewkirk" },
  // { key: "instagram", label: "Instagram", handle: "@cpnewkirk", href: "https://www.instagram.com/cpnewkirk" },
  // { key: "twitch", label: "Twitch", handle: "Cozy Crispy", href: "https://twitch.tv/cpnewkirk" },
  { key: "linktree", label: "Linktree", handle: "All my links", href: "https://linktr.ee/cpnewkirk" },
];

export const focusAreas = [
  {
    icon: "🏛️",
    title: "Museum & cultural technology",
    text: "Designing digital exhibits, visitor experiences, and collection tools that make complex histories easier to explore. Smithsonian National Museum of the American Latino volunteer and certified tour guide.",
  },
  {
    icon: "🎙️",
    title: "Oral history & digital archives",
    text: "Turning interviews, family histories, and community memory into accessible digital resources. Co-producing Heart of the Program: 11+ interviews completed and 100+ alumni reflections gathered.",
  },
  {
    icon: "🧩",
    title: "Human-centered engineering",
    text: "Building reliable, accessible, and scalable digital systems. Developed AWS workflows supporting 7.5M+ monthly items and $11B in financial transaction volume.",
  },
];

// The "How I work" stepper. Heart of the Program illustrates the process.
export const processIntro = {
  eyebrow: "A project in practice",
  title: "How I work: Heart of the Program",
  text: "See how I move from community stories and historical research to an accessible digital experience, using an alumni-led oral-history and documentary initiative as an example.",
};

export const process = [
  {
    key: "listen",
    label: "Listen",
    emoji: "👂",
    title: "Start with people, not features",
    text: "Good design begins with stories. I use interviews, observation, and stakeholder conversations to understand what people need, value, and want to preserve.",
    proof: "Conducted 11 interviews and gathered 100+ alumni reflections to understand the experiences worth documenting.",
  },
  {
    key: "map",
    label: "Map",
    emoji: "🗺️",
    title: "Find the patterns",
    text: "I synthesize research into themes, journeys, and structures that make complex information easier to understand and explore.",
    proof: "Synthesized alumni reflections and historical material into a framework for a virtual exhibit and long-term archive.",
  },
  {
    key: "prototype",
    label: "Prototype",
    emoji: "✏️",
    title: "Make ideas tangible",
    text: "I turn concepts into early versions of an experience, from wireframes and story layouts to interactive demos. The goal is to make an idea concrete enough to evaluate.",
    proof: "Shape the exhibit concept into sample story pages, navigation, and ways to explore the collection before finalizing the experience.",
  },
  {
    key: "test",
    label: "Test",
    emoji: "🧪",
    title: "Learn from real use",
    text: "I put early designs in front of the people they are meant to serve. I observe how they interact, listen to feedback, and identify what needs to change.",
    proof: "Evaluate whether alumni feel accurately represented and whether visitors can easily discover and understand the stories.",
  },
  {
    key: "share",
    label: "Share",
    emoji: "🎁",
    title: "Make it open and accessible",
    text: "The goal is to create experiences that welcome different audiences, make knowledge easier to access, and preserve it for the future.",
    proof: "Bring community history together through documentary storytelling, a virtual exhibit, and a long-term digital archive.",
  },
];

export const filters = [
  "All",
  "Archives & Storytelling",
  "Interactive & Games",
  "Research",
  "Engineering"
];

export const projects = [
  {
    id: "heart",
    featured: true,
    title: "Heart of the Program",
    kicker: "Oral history · Documentary · Living archive",
    dates: "Aug 2025 – Present",
    role: "Co-Creative Producer",
    tags: ["Archives & Storytelling", "Research"],
    summary:
      "An alumni-led documentary and historical preservation initiative capturing the history of the University of Oklahoma's engineering diversity programs and their impact across generations. Building a living archive of oral histories, photographs, videos, and artifacts toward a feature-length documentary for the program's 50th anniversary in 2030.",
    stats: [
      { n: "1,100+", label: "historical photos & artifacts" },
      { n: "58+", label: "alumni in project registry" },
      { n: "11+", label: "formal interviews completed" },
    ],
    details: [
      "Co-lead an alumni-driven documentary and historical preservation initiative, shaping project strategy, research, production, stakeholder engagement, and archival development.",
      "Collected and preserved 1,100+ historical photographs and artifacts (31 GB) in a growing digital archive.",
      "Built an alumni engagement pipeline: 58+ alumni in the project registry, 48 responses to the initial interest call, 22 detailed story surveys, and 17 alumni opting into formal on-camera interviews.",
      "Completed 11+ formal interviews, then coordinated the August 2026 production with approximately 15 alumni and 55 students through interviews, student presentations, engineering challenges, and intergenerational activities.",
      "Collected 100+ responses to the Pillar of Hope activity, capturing reflections on the people and experiences that shaped generations of engineers.",
      "Established four active volunteer teams and a 50-subscriber newsletter community, and are developing a feature-length documentary and living archive for the program's 50th anniversary in 2030.",
    ],
  },
  {
    id: "visual-novel",
    title: "The Despair Debacle: Origins",
    kicker: "Godot visual novel · Interactive storytelling",
    dates: "Dec 2025",
    role: "Designer & developer",
    tags: ["Interactive & Games"],
    link: {
      label: "Play on Itch.io",
      href: "https://cpnewkirk.itch.io/the-despair-debacle-origins"
    },
    summary:
      "A 20-minute mystery visual novel, developed in Godot and published on Itch.io for public playtesting and feedback.",
    stats: [{ n: "20 min", label: "playable story" }],
    details: [
      "Designed the interactive narrative and implemented the game logic that guides players through a 20-minute mystery.",
      "Built and published the project using Godot, creating a public opportunity to gather player feedback and evaluate the experience.",
    ],
  },
  {
    id: "trivia",
    title: "Trivia Master",
    kicker: "Android app · Cloud-connected application",
    dates: "Jan 2026",
    role: "Developer",
    tags: ["Interactive & Games", "Engineering"],
    link: {
      label: "Download the Android APK",
      href: "https://drive.google.com/drive/folders/1849ss-7dQaf6eMoItCsymTqHbl3yrixx?usp=drive_link"
    },
    summary:
      "A cloud-connected Android trivia game built with Unity and Google Firestore.",
    stats: [{ n: "5", label: "devices tested" }],
    details: [
      "Integrated Google Firestore to store and retrieve questions and application data, enabling a cloud-connected trivia experience.",
      "Owned development from interaction features and gameplay logic through Android build and deployment.",
      "Distributed as an installable APK and tested with 5 users across 5 devices.",
    ],
  },
  {
    id: "chao",
    title: "Chao in Space II",
    kicker: "JavaScript fan game · Browser",
    dates: "Jan – Feb 2024",
    role: "Developer",
    tags: ["Interactive & Games", "Engineering"],
    link: {
      label: "Play in your browser",
      href: "https://cpnewkirk.github.io/myGame"
    },
    summary:
      "A browser-based fan game that connects four minigames through one explorable overworld, built with JavaScript, HTML, and CSS.",
    stats: [
      { n: "4", label: "minigames" },
      { n: "10", label: "users tested" },
    ],
    details: [
      "Combined four minigames (memory, pet care, platformer, and runner) into one overworld, refactoring tutorial code into a shared class structure.",
      "Implemented interactions using JavaScript and jQuery, with controls designed for desktop and mobile play.",
      "Tested with 10 users to identify performance and usability improvements across the minigames.",
      "Documented controls, known issues, and future development priorities; credited the original creators of fan-project sprites and audio.",
    ],
  },
  {
    id: "lgbtqia",
    title: "Narratives from LGBTQIA+ Students in Engineering",
    kicker: "Qualitative research · Narrative analysis",
    dates: "Aug 2022 – May 2023",
    role: "Researcher",
    tags: ["Research"],
    summary:
      "A qualitative narrative study examining engineering identity, belonging, and institutional experiences among LGBTQIA+ undergraduate students.",
    stats: [{ n: "18", label: "research sources synthesized" }],
    details: [
      "Managed the research lifecycle, including multi-channel participant recruitment, Qualtrics screening, and individual in-person interviews.",
      "Designed a narrative analysis framework and synthesized an 18-source literature review to identify systemic barriers, including technical/social dualism and the influence of regional climate on student persistence.",
      "Developed actionable policy recommendations focused on faculty training, administrative transparency, and connections between campus resources.",
    ],
  },
  {
    id: "docuseries",
    title: "Historical Genealogy Docuseries",
    kicker: "Family archives · Historical research · Documentary",
    dates: "2013 – 2025",
    role: "Producer, writer, videographer & editor",
    tags: ["Archives & Storytelling", "Research"],
    link: {
      label: "Watch the documentary",
      href: "https://www.youtube.com/watch?v=1F-KBXw4VJs"
    },
    summary:
      "A five-episode family-history documentary series combining archival research, DNA analysis, immigration records, and historical interpretation.",
    stats: [
      { n: "5", label: "episodes" },
      { n: "12 yrs", label: "of sustained work" },
    ],
    details: [
      "Researched family history across multiple countries and generations using archival records, immigration documents, newspaper research, and DNA analysis.",
      "Produced a five-episode documentary series independently, managing historical research, scripting, filming, editing, and multimedia storytelling.",
      "Connected individual family narratives with broader histories of immigration, identity, and cultural memory.",
    ],
  },
  {
    id: "checks",
    title: "Check Processing Platform",
    kicker: "Capital One · Cloud engineering · Distributed systems",
    dates: "Aug 2023 – Aug 2026",
    role: "Software Engineer",
    tags: ["Engineering"],
    summary:
      "Cloud-native workflows on AWS supporting approximately 7.5M items and $11B in monthly check volume on a near-real-time financial processing platform.",
    stats: [
      { n: "7.5M", label: "items / month" },
      { n: "$11B", label: "monthly volume" },
      { n: "110+", label: "AWS components migrated" },
    ],
    details: [
      "Developed cloud-native workflows using AWS Lambda, Step Functions, and DynamoDB for a near-real-time platform processing 7.5M+ items and $11B in monthly check volume.",
      "Built distributed state-management and reconciliation systems to strengthen data integrity and fault tolerance across high-volume processing pipelines.",
      "Developed backend services and REST APIs supporting workflow orchestration and integration across platform services.",
      "Improved throughput and reliability through parallel processing, automated recovery, and enhanced monitoring.",
      "Contributed to a cloud migration involving more than 110 components, including 77 Secrets Manager secrets, 29 Lambda functions, and 8 Step Functions integrations.",
      "Established reusable architectural patterns that improved maintainability and accelerated development across multiple services.",
    ],
  },
  {
    id: "composites",
    title: "Additive Manufacturing of Continuous Carbon Fiber Reinforced PLA Composites",
    kicker: "University of Oklahoma · Engineering research",
    dates: "Aug 2020 – Feb 2021",
    role: "Research Assistant",
    tags: ["Research", "Engineering"],
    stats: [{ n: "20+", label: "prototype samples" }],
    summary:
      "Investigated additive manufacturing processes and industrial applications of continuous carbon fiber reinforced composite materials.",
    details: [
      "Designed and evaluated more than 20 prototype samples to investigate additive manufacturing processes.",
      "Used SolidWorks and 3D printing technologies to explore composite material applications.",
      "Managed project timelines, budgets, and research deliverables.",
    ],
  },
  {
    id: "resume-site",
    title: "Interactive Resume Website",
    kicker: "React · Web development",
    dates: "Feb 2024",
    role: "Designer & developer",
    tags: ["Interactive & Games", "Engineering"],
    summary:
      "A responsive personal website bringing together technical projects, leadership experiences, and professional writing.",
    details: [
      "Designed and developed a responsive React website to showcase technical projects, leadership, and writing.",
      "Optimized navigation and layouts for desktop and mobile devices.",
    ],
  },
];

export const cv = [
  {
    title: "Education",
    items: [
      {
        head: "George Washington University",
        meta: "Washington, D.C. · May 2028",
        sub: "M.A. in Interaction Design",
      },
      {
        head: "University of Oklahoma",
        meta: "Norman, OK · May 2023",
        sub: "B.S. in Mechanical Engineering, Certificates in Engineering Leadership and Global Engagement",
        bullets: [
          "Honors College, Summa Cum Laude · GPA 3.94/4.00"
        ],
      },
      {
        head: "University of Oklahoma Italian Study Center",
        meta: "Arezzo, Italy · May–Jun 2022",
        sub: "Engineers in Italy STEAM",
      },
      {
        head: "Universidad Popular Autónoma del Estado de Puebla",
        meta: "Puebla, México · May 2019",
        sub: "Activism, Leadership, and Culture in Mexico",
      },
    ],
  },
  {
    title: "Experience",
    items: [
      {
        head: "Living Archive Labs",
        meta: "Arlington, VA · May 2026 – Present",
        sub: "Founder & Principal Software Engineer",
        bullets: [
          "Founded an independent consulting and creative technology studio supporting museums, nonprofits, and cultural institutions through digital storytelling, archival technology, and interaction design.",
          "Provide creative technology and production services to independent and community-led initiatives, including pro bono engagements.",
          "Support oral history, digital preservation, documentary production, archival organization, and accessible storytelling projects, including pro bono creative production for Heart of the Program, an alumni-led documentary and historical preservation initiative.",
          "Direct business development, project planning, stakeholder collaboration, and partnership development.",
        ],
      },
      {
        head: "Capital One",
        meta: "McLean, VA · Aug 2023 – Aug 2026",
        sub: "Software Engineer, Check Processing Technology Platform",
        bullets: [
          "Developed cloud-native workflows using AWS Lambda, Step Functions, and DynamoDB for a near-real-time platform processing 7.5M+ items and $11B in monthly check volume.",
          "Engineered distributed state-management and reconciliation systems that strengthened data integrity and fault tolerance across high-volume processing pipelines.",
          "Developed backend services and REST APIs supporting workflow orchestration and integration across platform services.",
          "Improved throughput and reliability through parallel processing, automated recovery mechanisms, and enhanced monitoring.",
          "Contributed to a cloud migration involving 110+ components, including 77 Secrets Manager secrets, 29 Lambda functions, and 8 Step Functions integrations.",
          "Established reusable architectural patterns that improved maintainability and accelerated development across multiple services.",
          "Supported deployment through CI/CD enhancements, IAM administration, and secrets management.",
        ],
      },
      {
        head: "University of Oklahoma",
        meta: "Norman, OK · Aug 2019 – Apr 2023",
        sub: "Academic Tutor",
        bullets: [
          "Provided individual and small-group tutoring in physics, calculus, and engineering coursework.",
          "Developed individualized study plans and instructional strategies to support student performance and retention.",
          "Led collaborative review sessions supporting exam preparation and academic success.",
        ],
      },
      {
        head: "University of Oklahoma",
        meta: "Norman, OK · Aug 2021 – Dec 2022",
        sub: "Sooner Engineering Education Ambassador",
        bullets: [
          "Represented the College of Engineering through recruitment events, outreach activities, and engagement with prospective students and families.",
          "Communicated engineering pathways, academic programs, and student opportunities to diverse audiences.",
        ],
      },
      {
        head: "University of Oklahoma",
        meta: "Norman, OK · May 2021 – May 2022",
        sub: "Honors College Ambassador",
        bullets: [
          "Represented the Honors College in recruitment and outreach efforts, engaging prospective students through campus visits and informational sessions.",
          "Supported admissions and engagement initiatives through guided tours and personalized student outreach.",
        ],
      },
      {
        head: "Spirit AeroSystems",
        meta: "Wichita, KS · Jun 2022 – Aug 2022",
        sub: "Diversity, Equity & Inclusion Intern",
        bullets: [
          "Researched community and industry best practices to support diversity, equity, and inclusion initiatives.",
          "Led projects supporting employee resource groups, recruitment efforts, communications, and community partnerships.",
          "Coordinated outreach programming with professional associations and external stakeholders.",
        ],
      },
      {
        head: "Spirit AeroSystems",
        meta: "Wichita, KS · May 2021 – Aug 2021",
        sub: "Design Engineering Intern",
        bullets: [
          "Supported engineering design initiatives using CATIA and ENOVIA within commercial aerospace programs.",
          "Conducted quality reviews and documentation analysis for Boeing 737 MAX components.",
          "Presented project outcomes and technical recommendations to engineering leadership.",
        ],
      },
      {
        head: "Oklahoma Biological Survey",
        meta: "Norman, OK · Nov 2018 – Mar 2020",
        sub: "Undergraduate Research Assistant",
        bullets: [
          "Managed WordPress content supporting research and public outreach initiatives.",
          "Processed environmental and ecological datasets for the Oklahoma Native Seed Library.",
          "Supported field research and community engagement events.",
        ],
      },
    ],
  },
  {
    title: "Community",
    items: [
      {
        head: "Society of Hispanic Professional Engineers, Washington D.C. Chapter",
        meta: "Apr 2026 – Present",
        sub: "President",
        bullets: [
          "Lead strategy and organizational development for a 258-member professional chapter serving Hispanic engineers and technologists throughout the Washington, DC region.",
          "Set chapter priorities around professional development, mentorship, partnerships, member engagement, and community outreach.",
          "Develop reporting metrics and leadership initiatives while serving on SHPE's Government Relations Committee.",
          "Recognized as Outstanding SHPE DC Leader in May 2026.",
          "Helped lead the chapter to a Gold Chapter Award.",
        ],
      },
      {
        head: "Society of Hispanic Professional Engineers, Washington D.C. Chapter",
        meta: "Apr 2025 – May 2026",
        sub: "Vice President",
        bullets: [
          "Led chapter initiatives and programming supporting professional development, community engagement, and organizational growth.",
          "Organized Virginia State Advocacy Day, coordinating 8 volunteers and engagement with 17 legislative offices.",
          "Coordinated an ERG Symposium that attracted 70 registrants and 32 attendees, connecting professionals and employee resource groups.",
          "Supported Noche de Ciencias and Equipando Padres programming, engaging approximately 50 students, 20 parents, and 10 professionals.",
          "Helped develop partnerships across industry, education, and community organizations.",
        ],
      },
      {
        head: "SHPE National Convention",
        meta: "2024 – 2026",
        sub: "Inclusion Track Vice Chair",
        bullets: [
          "Coordinated 11 workshops and 5 special events with national leadership for SHPE's Inclusion Track.",
          "Contributed to the largest Inclusion Track in SHPE history, delivering programming for a national convention serving more than 15,000 attendees.",
          "Collaborated with corporate partners, speakers, and community organizations to develop programming centered on inclusion, accessibility, and professional advancement.",
          "Supported planning and execution across workshops, special events, speaker coordination, and attendee engagement.",
        ],
      },
      {
        head: "SHPE Government Relations Committee",
        meta: "2026 – Present",
        sub: "Committee Member",
        bullets: [
          "Support STEM advocacy and government engagement initiatives across the Mid-Atlantic region.",
          "Connect professional chapter leadership and community perspectives with broader STEM policy and advocacy efforts.",
        ],
      },
      {
        head: "Smithsonian National Museum of the American Latino",
        meta: "Washington, D.C. · Nov 2025 – Present",
        sub: "Volunteer & Certified Tour Guide",
        bullets: [
          "Support K–12 educational programming, visitor engagement, and special events at the Smithsonian National Museum of the American Latino.",
          "Earned volunteer tour guide certification and deliver guided tours that translate historical and cultural information into accessible experiences for diverse audiences.",
          "Contribute to public-facing museum programming that encourages curiosity, cultural understanding, and engagement with Latino history.",
        ],
      },
    ],
  },
  {
    title: "Skills & Certifications",
    items: [
      {
        head: "Research & storytelling",
        sub: "Qualitative interviews, oral history, archival research, genealogy, narrative analysis, literature reviews, research synthesis, historical interpretation, documentary production",
      },
      {
        head: "Interaction design & engagement",
        sub: "Human-centered design, stakeholder engagement, accessibility, visitor engagement, educational programming, digital storytelling, interaction prototyping",
      },
      {
        head: "Technology",
        sub: "Python, Java, JavaScript, TypeScript, C++, Angular, React, HTML, CSS, AWS Lambda, Step Functions, DynamoDB, S3, IAM, Secrets Manager, Docker, CI/CD, Jenkins, Splunk, Unity, Godot, Arduino",
      },
      {
        head: "Leadership & program development",
        sub: "Strategic planning, partnership development, program management, community engagement, professional development, STEM advocacy, volunteer leadership",
      },
      {
        head: "Certifications",
        sub: "AWS Certified Solutions Architect – Associate · Certified Secure Software Engineer · SHPE Chapter Leader Certification · Peace Corps Prep Certificate",
      },
    ],
  },
  {
    title: "Honors & Awards",
    items: [
      {
        head: "Selected recognition",
        bullets: [
          "Dean's Award, Columbian College of Arts and Sciences at GW (Sept 2026)",
          "Outstanding SHPE DC Leader (May 2026)",
          "SHPE National Chapter Award (Oct 2023)",
          "Kennedy Leadership Award (Apr 2023)",
          "Outstanding Senior, Gallogly College of Engineering (Oct 2022)",
          "Chevron Diversity Association Scholarship (Oct 2022)",
          "Tau Beta Pi Chapter Project Award (Sept 2022)",
          "Intel Undergraduate Scholarship (July 2022)",
          "Gallogly College of Engineering Study Abroad Fellowship (Feb 2022)",
          "ExxonMobil Future Leaders Academy Fellow (Nov 2020)",
          "Undergraduate Research Opportunities Program Grant (Nov 2020)",
          "Photography published in The Aster Review, Volumes III and IV (2020)",
          "Summa Cum Laude, Honors College · GPA 3.94/4.00",
        ],
      },
    ],
  },
];