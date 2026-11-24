// All site content lives here, so you can edit text without touching components.

export const site = {
  brand: "Living Archive Labs",
  name: "Christian P. Newkirk",
  email: "christian.newkirk@livingarchivelabs.com",
  location: "Arlington, VA",
  tagline: "Interaction design & software for museums, archives, and community stories.",
};

// Drop your logo files into src/assets/logos/ named exactly:
//   project-logo.(png|svg|jpg|webp)   and   terentia-logo.(png|svg|jpg|webp)
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
    title: "Museum & cultural tech",
    text: "Digital exhibits, tours, and collections that help visitors explore complex history with ease.",
  },
  {
    icon: "🎙️",
    title: "Oral history & archives",
    text: "Interviews, community memory, and long-term digital archives people can actually use.",
  },
  {
    icon: "🧩",
    title: "Human-centered engineering",
    text: "Cloud and full-stack systems built to be clear, secure, and kind to the people who rely on them.",
  },
];

// The "How I work" stepper. Every step points to something real from the work.
export const process = [
  {
    key: "listen",
    label: "Listen",
    emoji: "👂",
    title: "Start with people, not features",
    text: "Good design begins with stories. I use interviews, observation, and stakeholder conversations to learn what people need and what they remember.",
    proof: "Coordinated 11 interviews and gathered 100+ alumni reflections for Heart of the Program.",
  },
  {
    key: "map",
    label: "Map",
    emoji: "🗺️",
    title: "Find the patterns",
    text: "I synthesize raw material into themes, journeys, and structures that make complex information easy to move through.",
    proof: "Synthesized qualitative findings into themes for a virtual exhibit and long-term archive.",
  },
  {
    key: "prototype",
    label: "Prototype",
    emoji: "✏️",
    title: "Make it tangible, fast",
    text: "Interactive prototypes let people react to real experiences early, before big decisions get locked in.",
    proof: "Built a Godot visual novel and a Unity + Firestore trivia app from idea to working build.",
  },
  {
    key: "test",
    label: "Test",
    emoji: "🧪",
    title: "Learn from real use",
    text: "I put work in front of people, watch what happens, and improve it with their feedback.",
    proof: "Published a 20-minute visual novel on Itch.io for user testing and feedback.",
  },
  {
    key: "share",
    label: "Share",
    emoji: "🎁",
    title: "Make it open and accessible",
    text: "The goal is public access: experiences that welcome many audiences and keep working long after launch.",
    proof: "Certified tour guide at the Smithsonian National Museum of the American Latino.",
  },
];

export const filters = ["All", "Archives & Storytelling", "Interactive & Games", "Research", "Engineering"];

export const projects = [
  {
    id: "heart",
    featured: true,
    title: "Heart of the Program",
    kicker: "Oral history · Documentary · Virtual exhibit",
    dates: "Aug 2025 – Present",
    role: "Founder, producer, director & editor",
    tags: ["Archives & Storytelling", "Research"],
    summary:
      "A community-driven oral-history and documentary initiative preserving the experiences of alumni from the University of Oklahoma's engineering diversity programs.",
    stats: [
      { n: "11", label: "interviews" },
      { n: "100+", label: "alumni reflections" },
    ],
    details: [
      "Coordinate project planning, interview development, and storytelling strategy.",
      "Synthesize qualitative findings into themes for a virtual exhibit and a long-term digital archive.",
      "Collaborate with alumni and stakeholders to translate community stories into accessible digital experiences.",
    ],
  },
  {
    id: "visual-novel",
    title: "Godot Visual Novel",
    kicker: "Interactive storytelling",
    dates: "Dec 2025",
    role: "Designer & developer",
    tags: ["Interactive & Games"],
    summary: "A 20-minute visual novel published on Itch.io for user testing and feedback.",
    details: [
      "Designed an interactive narrative and the game logic for player progression.",
      "Shipped to a public platform to learn from real players.",
    ],
  },
  {
    id: "trivia",
    title: "Trivia Master",
    kicker: "Android app",
    dates: "Jan 2026",
    role: "Developer",
    tags: ["Interactive & Games", "Engineering"],
    summary: "A cloud-connected Android trivia game built with Unity and Google Firestore.",
    details: [
      "Designed cloud functionality for storing and retrieving app data.",
      "Implemented user interaction features and the mobile deployment workflow.",
    ],
  },
  {
    id: "docuseries",
    title: "Historical Genealogy Docuseries",
    kicker: "Five-episode documentary",
    dates: "2013 – 2025",
    role: "Producer, writer, videographer & editor",
    tags: ["Archives & Storytelling", "Research"],
    summary:
      "A family-history series built from archival research, DNA analysis, immigration records, and historical interpretation.",
    details: [
      "Conducted independent research across multiple countries and generations.",
      "Handled research, scripting, filming, and editing end to end.",
    ],
  },
  {
    id: "lgbtqia",
    title: "Narratives from LGBTQIA+ Students in Engineering",
    kicker: "Qualitative research",
    dates: "Aug 2022 – May 2023",
    role: "Researcher",
    tags: ["Research"],
    summary:
      "A narrative study of engineering identity and belonging among LGBTQIA+ undergraduates.",
    details: [
      "Designed the narrative analysis framework and ran one-on-one interviews.",
      "Synthesized an 18-source literature review and wrote actionable policy recommendations.",
    ],
  },
  {
    id: "checks",
    title: "Check Processing Platform",
    kicker: "Capital One · Cloud engineering",
    dates: "Aug 2023 – Aug 2026",
    role: "Software engineer",
    tags: ["Engineering"],
    summary:
      "Cloud-native workflows on AWS supporting about 7.5M items and $11B in monthly check volume.",
    stats: [
      { n: "7.5M", label: "items / month" },
      { n: "$11B", label: "monthly volume" },
    ],
    details: [
      "Built serverless workflows with Lambda, Step Functions, and DynamoDB.",
      "Improved reliability with parallel processing, automated recovery, and monitoring.",
    ],
  },
  {
    id: "resume-site",
    title: "Interactive Resume Website",
    kicker: "React",
    dates: "Feb 2024",
    role: "Designer & developer",
    tags: ["Interactive & Games", "Engineering"],
    summary: "A responsive personal site for sharing projects, leadership, and writing.",
    details: [
      "Optimized the experience across desktop and mobile.",
      "This redesign is the next iteration.",
    ],
  },
];

export const cv = [
  {
    title: "Education",
    items: [
      { head: "George Washington University", meta: "Washington, D.C. · May 2028", sub: "M.A. in Interaction Design" },
      {
        head: "University of Oklahoma",
        meta: "Norman, OK · May 2023",
        sub: "B.S. in Mechanical Engineering, Certificate in Engineering Leadership",
        bullets: ["Honors College, Summa Cum Laude · GPA 3.94/4.00"],
      },
      { head: "University of Oklahoma Italian Study Center", meta: "Arezzo, Italy · May–Jun 2022", sub: "Engineers in Italy STEAM" },
      { head: "Universidad Popular Autónoma del Estado de Puebla", meta: "Puebla, México · May 2019", sub: "Activism, Leadership, and Culture in Mexico" },
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
          "Founded a consulting and creative technology studio supporting museums, nonprofits, and cultural institutions.",
          "Design digital solutions for archival preservation, oral history collection, and community access to historical resources.",
          "Lead project planning, stakeholder engagement, and partnership development.",
        ],
      },
      {
        head: "Capital One",
        meta: "McLean, VA · Aug 2023 – Aug 2026",
        sub: "Software Engineer, Check Processing Technology Platform",
        bullets: [
          "Built cloud-native workflows on AWS Lambda, Step Functions, and DynamoDB supporting 7.5M+ monthly records and $11B in volume.",
          "Developed backend services and REST APIs for workflow orchestration.",
          "Improved throughput and reliability through parallel processing, automated recovery, and monitoring.",
        ],
      },
      {
        head: "University of Oklahoma",
        meta: "Norman, OK · 2019 – 2023",
        sub: "Academic Tutor · Engineering Education Ambassador · Honors College Ambassador",
        bullets: [
          "Tutored physics, calculus, and engineering; led review sessions and built study plans.",
          "Represented the College of Engineering and Honors College at recruitment and outreach events.",
        ],
      },
      {
        head: "Spirit AeroSystems",
        meta: "Wichita, KS · 2021 – 2022",
        sub: "Diversity, Equity & Inclusion Intern · Design Engineering Intern",
      },
      { head: "Oklahoma Biological Survey", meta: "Norman, OK · Nov 2018 – Mar 2020", sub: "Undergraduate Research Assistant" },
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
          "Lead a 258-member professional organization focused on mentorship, programming, and community engagement.",
          "Organized 6 workshops and 3 special events for SHPE's national convention, serving 12,000+ attendees.",
        ],
      },
      {
        head: "Smithsonian National Museum of the American Latino",
        meta: "Washington, D.C. · Nov 2025 – Present",
        sub: "Volunteer & Certified Tour Guide",
        bullets: ["Support K–12 programming, guided tours, and special events for diverse audiences."],
      },
    ],
  },
  {
    title: "Skills & Certifications",
    items: [
      {
        head: "Research & design",
        sub: "Qualitative interviews, oral history, research synthesis, stakeholder engagement, human-centered design, accessibility",
      },
      { head: "Technology", sub: "Python, Java, JavaScript, TypeScript, Angular, React, AWS (Lambda, Step Functions, DynamoDB, IAM), Docker, CI/CD, Unity, Godot" },
      { head: "Certifications", sub: "AWS Certified Solutions Architect – Associate · Certified Secure Software Engineer · SHPE Chapter Leader · Peace Corps Prep" },
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
        ],
      },
    ],
  },
];
