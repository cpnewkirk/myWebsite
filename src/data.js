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
    href: "https://terentia.io/",
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
    text: "Digital exhibits, tours, and collections that help visitors explore complex history with ease. Certified guide at the Smithsonian National Museum of the American Latino.",
  },
  {
    icon: "🎙️",
    title: "Oral history & archives",
    text: "Interviews, community memory, and long-term digital archives people can actually use. 11 interviews and 100+ alumni reflections shaped into one virtual exhibit.",
  },
  {
    icon: "🧩",
    title: "Human-centered engineering",
    text: "Cloud and full-stack systems built to be clear, secure, and kind to the people who rely on them. Production AWS workflows carrying $11B in monthly volume.",
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
    proof: "Coordinated 11 interviews and collected 100+ alumni reflections for Heart of the Program.",
  },
  {
    key: "map",
    label: "Map",
    emoji: "🗺️",
    title: "Find the patterns",
    text: "I synthesize raw material into themes, journeys, and structures that make complex information easy to move through.",
    proof: "Turned 100+ reflections into themes powering a virtual exhibit and long-term archive; synthesized an 18-source literature review for the LGBTQIA+ narrative study.",
  },
  {
    key: "prototype",
    label: "Prototype",
    emoji: "✏️",
    title: "Make it tangible, fast",
    text: "Interactive prototypes let people react to real experiences early, before big decisions get locked in.",
    proof: "Shipped 2 working builds in 2 months: a Godot visual novel (Dec 2025) and a Unity + Firestore Android trivia app (Jan 2026).",
  },
  {
    key: "test",
    label: "Test",
    emoji: "🧪",
    title: "Learn from real use",
    text: "I put work in front of people, watch what happens, and improve it with their feedback.",
    proof: "Published a 20-minute visual novel on Itch.io to gather real player feedback; designed and tested 20+ prototype samples in earlier materials research.",
  },
  {
    key: "share",
    label: "Share",
    emoji: "🎁",
    title: "Make it open and accessible",
    text: "The goal is public access: experiences that welcome many audiences and keep working long after launch.",
    proof: "Certified Smithsonian tour guide supporting K–12 programs; organized 6 workshops and 3 events for a 12,000+ attendee national convention.",
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
      "Led end to end as founder, producer, director, and editor: project planning, interview development, storytelling strategy, production, and post-production.",
      "Coordinated 11 interviews and collected 100+ alumni reflections, synthesizing them into themes that structure a virtual exhibit and a long-term digital archive.",
      "Partnered with alumni and stakeholders to shape project direction and archival strategy, turning community memory into accessible digital experiences.",
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
    stats: [{ n: "20 min", label: "playable story" }],
    details: [
      "Designed the interactive narrative and implemented the game logic for player progression in Godot.",
      "Published to a public Itch.io page to gather real player feedback for user testing.",
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
      "Architected cloud-connected functionality on Google Firestore so questions and app data are stored and retrieved live.",
      "Delivered the full path from interaction features to Android deployment as a solo developer.",
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
    stats: [{ n: "18", label: "sources synthesized" }],
    details: [
      "Managed the full research lifecycle: multi-channel recruitment, Qualtrics participant screening, and one-on-one in-person interviews.",
      "Designed the narrative analysis framework and synthesized an 18-source literature review to surface systemic barriers such as technical/social dualism.",
      "Translated findings into actionable policy recommendations on faculty training, administrative transparency, and campus resources.",
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
    stats: [
      { n: "5", label: "episodes" },
      { n: "12 yrs", label: "of sustained work" },
    ],
    details: [
      "Researched family history across multiple countries and generations using archival records, DNA analysis, and immigration documents.",
      "Owned the entire pipeline solo: research, scripting, filming, editing, and multimedia storytelling for a finished five-episode series.",
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
      "Cloud-native workflows on AWS supporting about 7.5M items and $11B in monthly check volume, delivered over 3 years on a near-real-time platform.",
    stats: [
      { n: "7.5M", label: "items / month" },
      { n: "$11B", label: "monthly volume" },
      { n: "3 yrs", label: "on the platform" },
    ],
    details: [
      "Built serverless workflows with Lambda, Step Functions, and DynamoDB that process 7.5M+ records and $11B in monthly volume.",
      "Increased throughput and reliability with parallel processing, automated recovery, and enhanced monitoring.",
      "Created distributed state-management and reconciliation systems that protect data integrity and fault tolerance at scale.",
      "Established reusable architectural patterns that improved maintainability and sped up development across multiple services.",
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
      "Designed and built a responsive React site showcasing technical projects, leadership, and writing.",
      "Optimized the experience across desktop and mobile; this redesign is the next iteration.",
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
          "Lead Heart of the Program: 11 interviews and 100+ alumni reflections synthesized into a virtual exhibit and long-term digital archive.",
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
          "Engineered distributed state-management and reconciliation systems on DynamoDB, protecting data integrity and fault tolerance across high-volume pipelines.",
          "Developed backend services and REST APIs for workflow orchestration and integration across platform services.",
          "Increased throughput and reliability through parallel processing, automated recovery, and enhanced monitoring.",
          "Established reusable architectural patterns that improved maintainability and accelerated development across multiple services.",
          "Supported deployment through CI/CD enhancements, IAM administration, and secrets management.",
        ],
      },
      {
        head: "University of Oklahoma",
        meta: "Norman, OK · 2019 – 2023",
        sub: "Academic Tutor · Engineering Education Ambassador · Honors College Ambassador",
        bullets: [
          "Tutored physics, calculus, and engineering for nearly 4 years (Aug 2019 – Apr 2023); built study plans and led review sessions to strengthen student performance.",
          "Represented the College of Engineering and Honors College at recruitment and outreach events.",
        ],
      },
      {
        head: "Spirit AeroSystems",
        meta: "Wichita, KS · 2021 – 2022",
        sub: "Diversity, Equity & Inclusion Intern · Design Engineering Intern",
        bullets: [
          "Led DEI projects spanning employee resource groups, recruitment, communications, and community partnerships.",
          "Reviewed and documented Boeing 737 MAX components in CATIA and ENOVIA, then presented recommendations to engineering leadership.",
        ],
      },
      { head: "Oklahoma Biological Survey", meta: "Norman, OK · Nov 2018 – Mar 2020", sub: "Undergraduate Research Assistant",
        bullets: ["Processed ecological datasets for the Oklahoma Native Seed Library and managed WordPress content for research outreach."],
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
          "Lead a 258-member professional organization, setting chapter strategy and driving mentorship, programming, and member engagement.",
          "Organized 6 workshops and 3 special events for SHPE's national convention, contributing to programming for 12,000+ engineers, students, and industry partners.",
          "Named Outstanding SHPE DC Leader (May 2026), one month into the presidency.",
        ],
      },
      {
        head: "Smithsonian National Museum of the American Latino",
        meta: "Washington, D.C. · Nov 2025 – Present",
        sub: "Volunteer & Certified Tour Guide",
        bullets: ["Support K–12 programming, guided tours, and special events, translating history and culture into accessible experiences for diverse audiences."],
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
          "Summa Cum Laude, Honors College · GPA 3.94/4.00 · 40+ scholarships, fellowships, and honors across 2016–2026",
        ],
      },
    ],
  },
];
