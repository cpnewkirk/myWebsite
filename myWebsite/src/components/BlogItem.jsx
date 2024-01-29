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

function BlogItem(blog) {
  const nav = useNavigate();
  const { id } = useParams();

  blog = blogs_arr.find((blog) => blog.id == id);

  return (
    <div id={blog.id} className="page">
      <Card className="mw-100">
        <CardBody>
          <h2>{blog.title}</h2>
          <CardSubtitle className="row m-3 text-muted fst-italic justify-content-center">
            <p className="col-10 text-capitalize m-0">
              {blog.date} / Tagged: {blog.tags}
            </p>
            <Button id="resizeButton" onClick={() => nav(-1)}>
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
