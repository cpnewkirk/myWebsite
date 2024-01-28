import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div>
        <img />
        <h1>Christian P. Newkirk</h1>
        <p>Maximizer | Strategic | Achiever | Positivity | Learner</p>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cv">Curriculum Vitae</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact Me</Link>
      </nav>
    </header>
  );
}

export default Header;
