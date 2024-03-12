import CollapseContainer from "./CollapseContainer";

function CV() {
  return (
    <div className="CV">
      <h4 className="text-center">
        Learn more about me with this interactive curriculum vitae.
      </h4>
      <CollapseContainer button="EDUCATION">
        <div>
          <h5>University of Oklahoma | Norman, OK </h5>
          <i>May 2023</i>
          <ul>
            Bachelor of Science in <b>Mechanical Engineering</b>
            <br />
            Certificate in<b> Engineering Leadership </b>
            <br />
            Honors College
            <br />
            <b>GPA 3.94/4.00</b>
          </ul>
        </div>

        <div>
          <h5>University of Oklahoma Italian Study Center | Arezzo, Italy</h5>
          <i>May - June 2022</i>
          <ul>Summer Abroad - Engineers in Italy STEAM</ul>
        </div>
        <div>
          <h5>
            Universidad Popular Autónoma del Estado de Puebla | Puebla, México
          </h5>
          <i>May 2019</i>
          <ul>Summer Abroad - Activism, Leadership and Culture in México</ul>
        </div>
      </CollapseContainer>
      <CollapseContainer button="EMPLOYMENT">
        <div>
          <h5>Capital One | McLean, VA</h5>
          <i>Associate Software Engineer | Aug 2023 - Present</i>
          <ul>
            <li className="ml-5">
              Participating in a 6-month software-engineering immersive training
              with the following learning objectives:
              <ul>
                <li>
                  Write HTML, CSS, and JavaScript that displays as intended in
                  modern browsers.
                </li>
                <li>
                  Develop back-end web applications and APIs using a modern
                  programming language, RESTful patterns, and the MVC web
                  development framework
                </li>
                <li>Develop dynamic front-end applications using React</li>
                <li>
                  Consume web APIs from third-party sites like Twitter or Yelp
                </li>
                <li>Learn the process of deployment to cloud services</li>
                <li>
                  Collaborate within a team using an agile development workflow
                  and collaboration practices in Git
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div>
          <h5>
            University of Oklahoma, Jeannine Rainbolt College of Education |
            Norman, OK
          </h5>
          <i>Transformative Tutoring Initiative Tutor | Apr 2022 - May 2023</i>
          <ul>
            <li>
              Provided individualized math tutoring to 9th-grade students,
              fostering a supportive learning environment tailored to their
              needs and pace.
            </li>
            <li>
              Acted as a mentor to high school students, encouraging honesty and
              openness about their understanding of mathematical concepts.
            </li>
            <li>
              Contributed to research on the impact of high-dosage tutoring on
              student motivation and engagement in academic settings.
            </li>
          </ul>
        </div>

        <div>
          <h5>Spirit AeroSystems | Wichita, KS</h5>
          <i>Diversity, Equity, and Inclusion Intern | June 2022 - Aug 2022</i>
          <ul>
            <li>
              Developed and support partnerships with professional associations
              and community members by doing programming outreach events.
            </li>
            <li>
              Researched and developed relevant social media and communications
              for 2022 and 2023 by investigating best practices and trends in
              the community.
            </li>
            <li>
              Worked with employee business resource groups on talent
              acquisition, webpage updates, and other initiatives.
            </li>
          </ul>
          <i>Design Engineering Intern | May 2021 - Aug 2021</i>
          <ul>
            <li>
              Utilized CATIA and Enovia to initiate a part material change from
              titanium to aluminum, decreasing the cost and weight of the
              aircraft.
            </li>
            <li>
              Executed quality checks for 65 parts, including picture sheets and
              details of the Boeing 737-MAX.
            </li>
            <li>
              Prepared and presented project presentation for upper management
              during the technology project expo.
            </li>
          </ul>
        </div>

        <div>
          <h5>
            University of Oklahoma, Sooner Engineering Education Center |
            Norman, OK
          </h5>
          <i>Sooner Engineering Education Ambassador | June 2021 - Dec 2022</i>

          <ul>
            <li>
              Collaborated with the SEED Center outreach team to plan, organize,
              and execute educational outreach activities, fostering engagement
              with engineering concepts among diverse audiences.
            </li>
            <li>
              Demonstrated leadership potential by gradually assuming
              responsibilities in coordinating outreach initiatives at the Rawl
              Engineering Practice Facility and other locations.
            </li>
            <li>
              Adapted to varied tasks and responsibilities supporting the
              outreach mission, leveraging individual strengths and interests to
              enhance the effectiveness of engineering education initiatives.
            </li>
          </ul>
        </div>

        <div>
          <h5>
            University of Oklahoma, Office of Admissions & Recruitment | Norman,
            OK
          </h5>
          <i>Honors College Ambassador | May 2021 - May 2022</i>
          <ul>
            <li>
              Collaborate with university leadership to develop and implement
              recruitment strategies that align with the mission and goals of
              the department and institution
            </li>
            <li>
              Engage families and prospective students with personalized tours
              to support their campus visit
            </li>
          </ul>
        </div>

        <div>
          <h5>
            University of Oklahoma, Office of Diversity and Inclusion | Norman,
            OK
          </h5>
          <i>Engineering Tutor | Aug 2019 - Mar 2022</i>
          <ul>
            <li>
              Improve academic performance of 5 students per day in physics,
              calculus, and other engineering courses.
            </li>
            <li>
              Lead study groups of up to 10 students in preparation for exams or
              projects through in-person instruction.
            </li>
            <li>
              Remediate student performance by analyzing and developing 1-month
              study plans to promote successful studying.
            </li>
          </ul>
          <i>AT&T Summer Bridge Camp Counselor | July 2019, July 2020 </i>
          <ul>
            <li>
              Facilitated positive relationships between the students and
              counselors.
            </li>
            <li>Mediated conflict between students.</li>
            <li>
              Led activities to ensure a high-quality experience for the
              students.
            </li>
          </ul>
        </div>

        <div>
          <h5>Oklahoma Biological Survey | Norman, OK</h5>
          <i>Undergraduate Student Assistant | Nov 2018 - Apr 2020 </i>
          <ul>
            <li>
              Operated and programmed the WordPress website for the Biological
              Survey and affiliated programs when needed.
            </li>
            <li>
              Processed data from data stations around the state of Oklahoma for
              the Oklahoma Native Seed Library.
            </li>
            <li>
              Conducted field work with Priscilla Crawford Ph.D and the
              Biological Survey's senior students for their projects.
            </li>
            <li>
              Administered activities and events hosted by the Biological Survey
              throughout the year.
            </li>
          </ul>
        </div>
      </CollapseContainer>
      <CollapseContainer button="LEADERSHIP EXPERIENCE">
        <div>
          <h5>Society of Hispanic Professional Engineers</h5>
          <i>
            National Convention Inclusion Committee Vice Chair | Jan 2024 -
            Present
          </i>
          <ul>
            <li>
              Collaborate with company representatives on 6 workshops for
              inclusion track
            </li>
            <li>
              Support 12,000+ convention attendees through inclusion efforts.
            </li>
          </ul>
          <i>
            President of University of Oklahoma Chapter | Apr 2022 - May 2023
          </i>
          <ul>
            <li>
              Evaluate assessment and elevate organizational structure,
              allocating a $16,000 budget to increase campus impact
            </li>
            <li>
              Pioneer new and effective relationships with campus and regional
              leadership to promote community engagement for targeted 400+
              Hispanic engineering community on campus
            </li>
          </ul>

          <i>Vice President of Membership | May 2021 - May 2022</i>
          <ul>
            <li>
              Led executive committee on external and internal communications
              related to recruitment and retention.
            </li>
            <li>
              Managed event planning each semester, ranging from volunteerism,
              academic excellence, and community building activities for 150
              members.
            </li>
          </ul>
          <i>Community Service Chair | May 2020 - May 2021</i>
          <ul>
            <li>
              Raised 104 volunteer hours, 203 canned goods, and 162 clothing
              items through volunteer opportunities, a food drive, and a
              clothing drive to give back to the local community.
            </li>
          </ul>
        </div>

        <div>
          <h5>Tau Beta Pi</h5>
          <i>
            President of Universoty of Oklahoma Chapter | June 2021 - May 2022
          </i>
          <ul>
            <li>
              Managed recruitment and retention efforts in accordance with our
              strategies.
            </li>
          </ul>
        </div>

        <div>
          <h5>Class Council | University of Oklahoma</h5>
          <i>Executive Vice-Chair | Apr 2021 - May 2022</i>
          <ul>
            <li>
              Coordinate outreach efforts for 12 social media accounts with a
              combined following of 7,426 followers by supervising 4 publicity
              coordinators and maintain brand guidelines
            </li>
            <li>
              Manage a $2,000 budget for programming and recruitment efforts
            </li>
            <li>
              Support the executive chair through all event programming,
              communications, and outreach opportunities.
            </li>
          </ul>
          <i>Executive Chair | May 2020 - May 2021</i>
          <ul>
            <li>
              Evaluated assessment and elevated organizational structure,
              reallocating a $20,000 budget to increase campus impact
            </li>
            <li>
              Negotiated event logistics through task manager software and
              maintained morale in a virtual environment by implementing
              personal check-ins
            </li>
            <li>
              Established effective working relationships with university
              leadership and other student organizations to promote community
              engagement on campus through event programming.
            </li>
            <li>
              Developed succession planning for 7 leadership roles to reflect
              our strategic document by analyzing the resources needed for the
              success of each position.
            </li>
          </ul>

          <i>Vice Chair of Internal Relations | Mar 2019 - May 2020</i>
          <ul>
            <li>
              Effectively facilitated coordination and quality of leadership
              development activities by leading a team of 9 Relations
              Coordinators.
            </li>
            <li>
              Drove new strategies to engage our membership with campus
              activities to promote unity.
            </li>
          </ul>
        </div>

        <div>
          <h5>Engineers' Club | University of Oklahoma</h5>
          <i>Engineering Royalty Feb 2021 - Feb 2022</i>
          <ul>
            <li>
              Represent the Gallogly College of Engineering at campus events and
              maintain relationships with donors.
            </li>
            <li>
              Coordinate the College of Engineering homecoming efforts with
              other engineering organizations.
            </li>
          </ul>
        </div>
      </CollapseContainer>
      <CollapseContainer button="INVOLVEMENT">
        <div>
          <h5>
            Society of Hispanic Professional Engineers | DC Professional Chapter
          </h5>
          <ul>
            <li>
              <i>Member | August 2023 - Present</i>
            </li>
          </ul>
        </div>

        <div>
          <h5>
            University of Oklahoma Young Engineering Alumni | DC Professional
            Chapter
          </h5>
          <ul>
            <li>
              <i>DC Correspondent | January 2024 - Present</i>
            </li>
            <li>
              <i>Member | August 2023 - Present</i>
            </li>
          </ul>
        </div>

        <div>
          <h5>Tau Beta Pi | DC Professional Chapter</h5>
          <ul>
            <li>
              <i>Member | August 2023 - Present</i>
            </li>
          </ul>
        </div>

        <div>
          <h5>Capital One</h5>
          <ul>
            <li>
              <i>
                Hispanics in Tech | New Member Welcoming & Comms Team Lead |
                August 2023 - Present
              </i>
            </li>
            <li>
              <i>HOLA | Member | August 2023 - Present</i>
            </li>
            <li>
              <i>Out Front | Member | August 2023 - Present</i>
            </li>
          </ul>
        </div>
      </CollapseContainer>
      {/* <CollapseContainer button="HONORS AND AWARDS">
        <p>XXX</p>
      </CollapseContainer> */}
      <CollapseContainer button="SERVICE">
        <ul>
          <li>Parade Volunteer, Seattle July 2023, 5 Hours</li>
          <li>Food Forest Clean Up, Austin July 2023, 3 Hours</li>
          <li>NILA Facilitator, Virtual July 2023, 8 Hours</li>
          <li>Food pantry, Washington D.C. June 2023, 3 hours</li>
          <li>Community Food Pantry, New York City June 2023, 2 hours</li>
          <li>North Avenue Beach Cleanup, Chicago June 2023, 1 hour</li>
          <li>L.A. Works Listos, Los Angeles June 2023, 2 hours</li>
        </ul>
      </CollapseContainer>
      <CollapseContainer button="PROJECTS AND RESEARCH">
        <div>
          <h5>SHPE Website | University of Oklahoma | Dec 2022</h5>
          <i>Society of Hispanic Professional Engineers</i>
          <ul>
            <li>
              Developed 9 pages of HTML and CSS for interactive website
              (ou.edu/shpe).
            </li>
            <li>
              Led communication between 5 committees to showcase relevant
              information and achievements on front page
            </li>
          </ul>
        </div>

        <div>
          <h5>
            Additive Manufacturing of Composites | University of Oklahoma | Aug
            2020 - Feb 2021
          </h5>
          <i>Smart Materials and Intelligent Systems Lab</i>
          <ul>
            <li>
              Optimized 20+ samples in SolidWorks and Repetier Host to print and
              determine the industrial application of 3D printing.
            </li>
            <li>
              Produced a successful $1,000 budget utilizing Microsoft Excel to
              ensure proper use of funds.
            </li>
            <li>
              Formalized 1-month, 4-month, and 9-month goals to monitor success
              of the project using a timeline.
            </li>
          </ul>
        </div>

        <div>
          <h5>Autonomous Car | Feb 2020 - May 2020</h5>
          <i>Personal Project</i>
          <ul>
            <li>
              Devised an autonomous car using 6 different Arduino modules to
              make it operate on its own.
            </li>
            <li>
              Developed Arduino code using open-source software to operate 4
              motors and each module.
            </li>
          </ul>
        </div>

        <div>
          <h5>
            Water Security Research | University of Oklahoma | Oct 2019 - May
            2020
          </h5>
          <i>Jim Chamberlain Ph.D</i>
          <ul>
            <li>
              Researched literature about water security and relating topics,
              designed figures, and developed practice problems for future water
              security textbook.
            </li>
            <li>
              Consolidated data from different sources into graphs that describe
              water trends in various countries or industries.
            </li>
          </ul>
        </div>

        <div>
          <h5>
            Monarch Butterfly Research | University of Oklahoma | Nov 2018 - Apr
            2020
          </h5>
          <i>Priscilla Crawford Ph.D</i>
          <ul>
            <li>
              Furthered our data entry and advanced our initial time to
              introduce these plants to the current ecosystem by germinating
              thousands of seeds in advance and generating labels for each
              sample group.
            </li>
          </ul>
        </div>

        <div>
          <h5>
            Lake Tranquility Reclamation | University of Oklahoma | Oct 2018 -
            May 2019
          </h5>
          <i>Environmental Science Student Association</i>
          <ul>
            <li>
              Executed water samples to measure the reclamation of a previously
              eutrophic lake.
            </li>
          </ul>
        </div>

        <div>
          <h5>Smart Mirror | Dec 2018</h5>
          <i>Personal Project</i>
          <ul>
            <li>
              Programmed a Raspberry Pi using code from GitHub to create a smart
              mirror that increases daily productivity for the user.
            </li>
            <li>
              Evaluated previous iterations over a 1-week period to ensure best
              plan moving forward.
            </li>
          </ul>
        </div>
      </CollapseContainer>
      <CollapseContainer button="SKILLS">
        <h5>
          Java, Python, C++, Javascript, HTML, CSS, React, Arduino,
          Cybersecurity, AutoCADD, Civil3D, MATLAB, SOLIDWORKS, LabVIEW, NI
          Multisim, SIEMANS NX, CATIA, ENOVIA
        </h5>
      </CollapseContainer>
      <CollapseContainer button="SELECTED COURSEWORK">
        <ul>
          <li>
            Latin American Music and Politics Leadership and Activism: Human
            Trafficking
          </li>
          <li>Intermediate Spanish Continued</li>
          <li>CADD Fundamentals</li>
          <li>Leadership and Management for Engineers</li>
          <li>Intro to Gay and Lesbian Literature</li>
          <li>Understanding the Global Community</li>
        </ul>
      </CollapseContainer>
      <CollapseContainer button="CERTIFICATIONS">
        <ul>
          <h5>Certified Secure Software Engineer | Oct 2023</h5>
          <ul>
            <li>Secure Code Warrior</li>
          </ul>
          <h5>Peace Corp Prep | Oct 2022</h5>
        </ul>
      </CollapseContainer>
      <CollapseContainer button="CONFERENCES">
        <ul>
          <li>
            SHPE National Convention - Salt Lake City, UT Nov 2023, 6 days
          </li>
          <li>SHPE Leadership Live! - Dallas, TX Mar 2023, 3 days</li>
          <li>oSTEM - Boston, MA Nov 2022, 4 days</li>
          <li>SHPE National Convention - Charlotte, NC Nov 2022, 6 days</li>
          <li>
            National Institute for Leadership Advancement - Orlando, FL Aug
            2021, 3 days
          </li>
          <li>Out 4 Undergrad Business - New York City, NY Apr 2022, 3 days</li>
          <li>SHPE RLDC - College Station, TX Mar 2022, 3 days</li>
          <li>SHPE National Convention - Orlando, FL Nov 2021, 6 days</li>
          <li>
            National Institute for Leadership Advancement - Virtual Aug 2021, 3
            days
          </li>
          <li>SHPE RLDC - Virtual Mar 2021, 3 days</li>
          <li>oSTEM - Virtual Nov 2020, 4 days</li>
          <li>Space Vision 2020 (SEDS) - Virtual Nov 2020, 2 days</li>
          <li>SHPE National Convention - Virtual Oct 2020, 6 days</li>
          <li>SACNAS - Virtual Oct 2020, 6 days</li>
          <li>
            Oklahoma Supercomputing Symposium 2020 - Virtual Sept 2020, 1 day
          </li>
          <li>Professional Development Symposium - Virtual Sept 2020, 1 day</li>
          <li>Out 4 Undergrad Engineering - Virtual Sept 2020, 5 days</li>
          <li>
            National Institute for Leadership Advancement - Virtual Aug 2020, 3
            days
          </li>
          <li>
            Jerry Holmes Leadership Symposium - Norman, OK Feb 2020, 1 day
          </li>
        </ul>
      </CollapseContainer>
    </div>
  );
}

export default CV;
