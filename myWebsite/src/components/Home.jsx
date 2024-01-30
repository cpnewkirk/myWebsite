import home from "../assets/home.jpg";

function Home() {
  return (
    <div className="page text-start row align-items-center justify-content-center">
      <img className=" logo object-fit-contain w-75 mb-4" src={home} />
      <div className="col-10 card p-3">
        <p>
          Agile leader with experience since 2015 in event planning and
          community relations through student involvement. Detail-oriented and
          driven to accomplish meaningful results. Values collaboration and
          seeks an understanding of company goals.
        </p>
        <p>
          Originally from Dallas, Texas, studied Mechanical Engineering with an
          undergraduate certificate in Engineering Leadership at the University
          of Oklahoma. Served as the Executive Chair for OU Class Council,
          President for OU chapter of the Society of Hispanic Professional
          Engineers (SHPE), and President of Tau Beta Pi. Passions include
          representing the LGBTQ+ and Hispanic communities in diversity efforts
          and traveling.
        </p>
        <p>Expertise: </p>
        <ul>
          <li>Strategic thinking</li>
          <li>Project management</li>
          <li>Goal setting</li>
          <li>Program development</li>
          <li>Membership engagement</li>
          <li>Event planning</li>
          <li>Building influence</li>
          <li>Succession planning</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
