import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <header className="header">
      <div>
        <img />
        <h1>Christian P. Newkirk</h1>
        <p>Maximizer | Strategic | Achiever | Positivity | Learner</p>
      </div>
      <Navbar className="d-flex justify-content-center m-auto">
        <Nav>
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/cv">
            <Nav.Link>Curriculum Vitae</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/blog">
            <Nav.Link>Blog</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link>Contact Me</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar>
    </header>
  );
}

export default Header;
