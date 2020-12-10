import { Col, Container, Row, Card } from "react-bootstrap";
import { FaFacebookSquare, FaPhoneSquareAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <Container fluid style={{backgroundColor: '#383d3b'}} className="text-light">
      <Row>
        <Col md={3} className="mx-auto">
          <Card className="border-0 text-center" style={{backgroundColor: '#383d3b'}}>
            <Card.Body>
              <Card.Title>Social Media</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                You can find us on
              </Card.Subtitle>
              <Row>
                <Col>
                </Col>
                <Col>
                  <FaFacebookSquare
                    color="#4267B2"
                    size={32}
                    className="bg-light rounded"
                    onClick={() => {
                      window.location.href =
                        "https://www.facebook.com/shlc.study";
                    }}
                  />
                </Col>
                <Col>
                  <IoMdMail
                    color="#BB001B"
                    size={32}
                    className="bg-light rounded"
                    onClick={() => {
                      window.location.href =
                        "mailto:support@shlc.study";
                    }}
                  />
                </Col>
                <Col>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} className="mx-auto">
          <Card className="border-0 text-center" style={{backgroundColor: '#383d3b'}}>
            <Card.Body>
              <Card.Title>Support</Card.Title>
              <Card.Text>
              No.990, Thu Mingalar Road, (4) Ward, South Okkalapa Township, Yangon, Myanmar.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} className="mx-auto">
        <Card className="border-0 text-center" style={{backgroundColor: '#383d3b'}}>
            <Card.Body>
              <Card.Title>Contact Us</Card.Title>
              <Card.Text>
              <FaPhoneSquareAlt className="mr-2"/>09955055817
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <p className="mx-auto">
          Copyright &copy; www.shlc.study | All Rights Reserved.
        </p>
      </Row>
    </Container>
  );
};

export default Footer;
