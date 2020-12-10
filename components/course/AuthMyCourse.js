import { Card, Button, Badge } from "react-bootstrap";
import { HiOutlineBookOpen } from "react-icons/hi";
import { useRouter } from "next/router";

const AuthMyCourse = (props) => {
  const router = useRouter();

  return (
    <Card
      className="mt-3 ml-3"
      onClick={() =>
        router.push({
          pathname: `${props.link}`,
          query: { courseId: props.courseId },
        })
      }
      style={{ textDecoration: "none", color: "#4e4e4e" }}
    >
      <Card.Title
        className="text-center mt-2 pl-2"
        style={{ textDecoration: "none" }}
        onClick={() =>
          router.push({
            pathname: `${props.link}`,
            query: { courseId: props.courseId },
          })
        }
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
        <Button
          size="sm"
          variant="secondary"
          onClick={() =>
            router.push({
              pathname: `${props.link}`,
              query: { courseId: props.courseId },
            })
          }
        >
          <HiOutlineBookOpen size={20} className="pb-1" /> {props.btnText}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default AuthMyCourse;
