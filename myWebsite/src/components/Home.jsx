import home from "../assets/home.jpg";

function Home() {
  return (
    <div className="page text-start row align-items-center justify-content-center">
      <img className=" logo object-fit-contain w-75 mb-4" src={home} />
      <div className="col-10 card p-3">
        <p>
          I'm a software engineer who believes technology tells a story. Through
          the problems it chooses to solve, the data it structures, and the
          experiences it creates for users.
        </p>
        <p>
          While my current work focuses on building secure, scalable systems in
          highly regulated environments, I'm motivated by a broader question: how
          can technology make complex information clearer, more human, and more
          meaningful? I'm drawn to platforms that sit at the intersection of
          data, identity, and decision-making. Where engineering excellence
          directly shapes how people understand and interact with the world.
        </p>
        <p>
          I bring a strong foundation in cloud architecture, full-stack
          development, and secure software design, paired with a systems mindset.
          I enjoy thinking beyond the ticket in front of me and zooming out to
          understand architecture, long-term maintainability, and business impact.
          I care deeply about writing clean, extensible code and building
          solutions that future engineers can confidently build upon.
        </p>
        <p>
          Equally important to me is how teams function. Over the past decade,
          I've led community-driven initiatives and developed programs that
          strengthen engagement, knowledge sharing, and leadership development. I
          believe strong software is built in environments where people feel
          ownership, clarity, and connection to purpose. I naturally gravitate
          toward roles where I can bridge technical depth with strategic thinking
          and clear communication.
        </p>
        <p>
          I've leveraged my StrengthsFinder results, Maximizer, Strategic,
          Achiever, Positivity, Learner, to reflect how I show up. I raise
          standards, think long-term, execute consistently, and stay curious. I'm
          energized by continuous growth and by contributing to products that
          matter.
        </p>
        <p>
          I'm currently exploring opportunities that align technical rigor with
          meaningful impact. Where building great systems also means building
          something people genuinely value. If that resonates, I'd welcome the
          conversation.
        </p>
      </div>
    </div>
  );
}

export default Home;
