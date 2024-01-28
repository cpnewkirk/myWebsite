import Container from "react-bootstrap/Container";
import NavbarBrand from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Footer() {
  return (
    <div className="footer">
      <Navbar color="dark" className="d-flex justify-content-center m-auto">
        <NavbarBrand>
          © 2000-{new Date().getFullYear()} Christian Newkirk, All rights
          reserved.
        </NavbarBrand>
      </Navbar>
    </div>
  );
}

export default Footer;
