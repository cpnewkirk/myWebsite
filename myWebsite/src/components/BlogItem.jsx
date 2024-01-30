import { useParams, useNavigate } from "react-router-dom";
import { blogs_arr } from "../data/blog_data";
import {
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  CardBody,
  Card,
} from "reactstrap";
import { useEffect } from "react";

function BlogItem() {
  const nav = useNavigate();
  const { id } = useParams();

  const blog = blogs_arr.find((blog) => blog.id == id);

  const blogDate = new Date(blog.date);

  const optionsDate = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id={blog.id} className="page">
      <Card className="mw-100 p-3">
        <CardBody>
          <h2>{blog.title}</h2>
          <CardSubtitle className="row m-3 text-muted fst-italic justify-content-center">
            <p className="col-10 text-capitalize m-0">
              {blogDate.toLocaleDateString("en-US", optionsDate)} / Tagged:{" "}
              {blog.tags}
            </p>
            <Button
              id="resizeButton"
              style={{ backgroundColor: "#6FB3B8", borderColor: "#6FB3B8" }}
              onClick={() => nav(-1)}
            >
              Go back
            </Button>
          </CardSubtitle>
          <CardText
            dangerouslySetInnerHTML={{ __html: blog.body }}
            style={{ textAlign: "left" }}
          ></CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default BlogItem;
