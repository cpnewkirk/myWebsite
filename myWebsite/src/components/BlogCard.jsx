import {
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  CardBody,
  Card,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import { convert } from "html-to-text";

function BlogCard(blog) {
  const nav = useNavigate();

  const blogDate = new Date(blog.date);

  const optionsDate = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const options = {
    baseElements: {
      selectors: ["p"],
    },
    ignoreImage: true,
  };

  const html = blog.body;
  const text = convert(html, options);
  const description = text.replace(/\[.+?\]/, "");

  function moreDetails(event) {
    const blogId = blog.id;
    event.preventDefault();
    nav(`/blog/${blogId}`);
  }

  return (
    <Card className="col-12 col-md-3 cardPic">
      {blog.thumbnail && (
        <img
          alt="Sample"
          className="moduleItemIntrotext"
          src={blog.thumbnail}
        />
      )}
      <CardBody className="m-2">
        <CardTitle tag="h5">{blog.title}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {blogDate.toLocaleDateString("en-US", optionsDate)}
        </CardSubtitle>
        <CardText className="hideOverflow">{description}</CardText>
        <Button
          style={{ backgroundColor: "#6FB3B8", borderColor: "#6FB3B8" }}
          onClick={moreDetails}
        >
          More Details
        </Button>
      </CardBody>
    </Card>
  );
}
export default BlogCard;
