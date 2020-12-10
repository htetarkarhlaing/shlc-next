import React, { useState } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { FaUserPlus, FaUser } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const MainNavbar = () => {
  const [click, setClick] = useState(false);

  return (
    <Container
      fluid
      style={{ margin: 0, padding: 0, backgroundColor: "#383d3b" }}
    >
      <Container>
        <Navbar variant="dark">
          <Link href="/courses">
            <Navbar.Brand className="font-weight-bold d-flex align-items-center">
              <Image
                src="/icon.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="SHLC logo"
              />
              SHLC
            </Navbar.Brand>
          </Link>
          <Nav className="ml-auto">
            <Nav.Link>
              <Link href="/login">
                <Button
                  variant={click ? "light" : "outline-light"}
                  size="sm"
                  className="d-flex align-items-center"
                  onClick={() => setClick(true)}
                >
                  <FaUser size={17} className="mr-2" /> Login
                </Button>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/register">
                <Button
                  variant={click ? "outline-light" : "light"}
                  size="sm"
                  className="d-flex align-items-center"
                  onClick={() => setClick(false)}
                >
                  <FaUserPlus size={20} className="mr-2" />
                  Register
                </Button>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </Container>
  );
};

export default MainNavbar;
