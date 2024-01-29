import {
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  CardBody,
  Card,
} from "reactstrap";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { blogs_arr } from "../data/blog_data";
import { convert } from "html-to-text";

function BlogCard(blog) {
  const loc = useLocation();
  const nav = useNavigate();
  const { id } = useParams();

  let idName = "";
  const locationCheck = loc.pathname.includes("/blog/");

  const options = {
    baseElements: {
      selectors: ["p"],
    },
    ignoreImage: true,
  };

  const html = blog.body;
  const text = convert(html, options);
  const description = text.replace(/\[.+?\]/, "");

  if (locationCheck) {
    blog = blogs_arr.find((blog) => blog.id == id);
  }

  function moreDetails(event) {
    const blogId = blog.id;
    event.preventDefault();
    nav(`/blog/${blogId}`);
  }

  return (
    <Card className="col-12 col-md-3 col-lg-3">
      <img alt="Sample" src={blog.thumbnail} />
      <CardBody className="m-2">
        <CardTitle tag="h5">{blog.title}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {blog.date}
        </CardSubtitle>
        <CardText className="hideOverflow">{description}</CardText>
        <Button onClick={moreDetails}>More Details</Button>
      </CardBody>
    </Card>
  );
}
export default BlogCard;
