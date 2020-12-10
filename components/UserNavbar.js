import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { FaPowerOff } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Cookies from "js-cookie";

const UserNavbar = () => {
  return (
    <Container
      fluid
      style={{ margin: 0, padding: 0, backgroundColor: "#383d3b" }}
    >
      <Container>
        <Navbar variant="dark">
          <Link href="/user/">
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
          <Nav className="mr-auto">
            <Nav.Link>
              <Link href="/user/courses">
                <span>New Courses</span>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/user/settings">
                  <span>Settings</span>
              </Link>
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link>
              <Button
                variant="light"
                size="sm"
                className="d-flex align-items-center"
                onClick={() => {
                  Cookies.remove("token");
                  Cookies.remove("_id");
                  Cookies.remove("role");
                  Cookies.remove("login");
                  window.alert("Logging out!");
                  window.location.href = "/";
                }}
              >
                <FaPowerOff size={20} className="mr-2" />
                Logout
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </Container>
  );
};

export default UserNavbar;
