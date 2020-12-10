import { Card, Button, Badge } from "react-bootstrap";
import { HiOutlineBookOpen } from "react-icons/hi";
import { BsFileEarmarkPlus } from "react-icons/bs";
import { useRouter } from 'next/router';

const Course = (props) => {

  const router = useRouter();

  return (
    <Card
      className="mt-3 ml-3"
      style={{ textDecoration: "none", color: "#4e4e4e" }}
      onClick={() =>
        router.push({
          pathname: `${props.link}`,
          query: { courseId: props.courseId },
        })
      }
    >
      <Card.Title
        className="text-center mt-2 pl-2"
        style={{ textDecoration: "none" }}
      >
        <span
          className="font-weight-bold text-secondary"
          style={{ fontSize: "20px" }}
        >
          {props.title}
        </span>
      </Card.Title>
      <Card.Img variant="top" src={props.courseImg} />
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">{props.level}</Card.Subtitle>
        <Card.Text style={{ height: "50px" }}>{props.desc}</Card.Text>
        <Card.Text>
          <Badge variant="secondary">{props.tag}</Badge>
        </Card.Text>
        <hr />
        <Card.Text>
          <h5>{props.price} MMK</h5>
        </Card.Text>
        <Button
          size="sm"
          variant="secondary"
          onClick={() => (window.location.href = "/memberornot")}
        >
          <BsFileEarmarkPlus size={20} className="pb-1" /> {props.btnText}
        </Button>{" "}
        <Button
          size="sm"
          variant="primary"
          onClick={() => (window.location.href = "/login")}
        >
          <HiOutlineBookOpen size={20} className="pb-1" /> စတင်လေ့လာရန်
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Course;
