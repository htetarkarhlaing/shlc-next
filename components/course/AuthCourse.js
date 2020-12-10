import { useRouter } from "next/router";
import { Card, Button, Badge } from "react-bootstrap";
import { HiOutlineBookOpen } from "react-icons/hi";
import Cookies from "js-cookie";

const URL = process.env.URL;

const AuthCourse = (props) => {
  const router = useRouter();

  const courseEnroller = () => {
    const _id = Cookies.get("_id");
    const token = Cookies.get("token");
    const courseId = props.courseId;
    const price = props.price;
    const cFOption = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    };
    fetch(`${URL}api/users/find-courses/${_id}`, cFOption)
      .then((res) => res.json())
      .then((resJson) => {
        if (resJson.meta.success === true) {
          if (resJson.data.length === 0) {
            if (price === 0) {
              const courseEnrollerOption = {
                method: "PUT",
                headers: {
                  Authorization: "Bearer " + token,
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  courseId,
                }),
              };
              fetch(
                `${URL}api/users/enroll-course/${_id}`,
                courseEnrollerOption
              )
                .then((responseDirect) => responseDirect.json())
                .then((responseDirectJson) => {
                  if (responseDirectJson.meta.success === true) {
                    window.alert("စာရင်းသွင်းခြင်းအောင်မြင်ပါသည်...");
                    setTimeout(() => {
                      window.location.href = "/user/enrolled";
                    }, 3000);
                  } else {
                    return window.alert(responseDirectJson.meta.message);
                  }
                });
            } else {
              const courseEnrollerOption2 = {
                method: "POST",
                headers: {
                  Authorization: "Bearer " + token,
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  userId: _id,
                  courseId,
                }),
              };
              fetch(`${URL}api/course-enroll-user`, courseEnrollerOption2)
                .then((response) => response.json())
                .then((responseJson) => {
                  if (responseJson.meta.success === true) {
                    window.alert("စာရင်းသွင်းခြင်းအောင်မြင်ပါသည်...");
                    setTimeout(() => {
                      window.location.href = "/user/enrollwaiting";
                    }, 3000);
                  } else {
                    return window.alert(responseJson.meta.message);
                  }
                });
            }
          } else {
            var found = false;
            resJson.data.map((data) => {
              if (data && data._id == courseId) {
                found = true;
              }
            });
            if (found) {
              return window.alert("Course အားစာရင်းသွင်းပြီးသားဖြစ်ပါသည်...");
            } else {
              if (price === 0) {
                const courseEnrollerOption = {
                  method: "PUT",
                  headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    courseId,
                  }),
                };
                fetch(
                  `${URL}api/users/enroll-course/${_id}`,
                  courseEnrollerOption
                )
                  .then((responseDirect) => responseDirect.json())
                  .then((responseDirectJson) => {
                    if (responseDirectJson.meta.success === true) {
                      window.alert("စာရင်းသွင်းခြင်းအောင်မြင်ပါသည်...");
                      setTimeout(() => {
                        window.location.href = "/user/enrolled";
                      }, 3000);
                    } else {
                      return window.alert(responseDirectJson.meta.message);
                    }
                  });
              } else {
                const courseEnrollerOption2 = {
                  method: "POST",
                  headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    userId: _id,
                    courseId,
                  }),
                };
                fetch(`${URL}api/course-enroll-user`, courseEnrollerOption2)
                  .then((response) => response.json())
                  .then((responseJson) => {
                    if (responseJson.meta.success === true) {
                      window.alert("စာရင်းသွင်းခြင်းအောင်မြင်ပါသည်...");
                      setTimeout(() => {
                        window.location.href = "/user/enrollwaiting";
                      }, 3000);
                    } else {
                      return window.alert(responseJson.meta.message);
                    }
                  });
              }
            }
          }
        } else {
          if (resJson.meta.message == "invalid-token") {
            Cookies.remove("token");
            Cookies.remove("_id");
            Cookies.remove("role");
            Cookies.remove("login");
            window.alert("Session Expired.");
          } else {
            window.alert(resJson.meta.message);
          }
        }
      });
  };

  return (
    <Card
      className="mt-3 ml-3"
      onClick={() =>
        router.push({
          pathname: `${props.link}`,
          query: { courseId: props.courseId, price: props.price},
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
        <Button variant="primary" size="sm" onClick={courseEnroller}>
          <HiOutlineBookOpen size={20} className="pb-1" /> {props.btnText}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default AuthCourse;
