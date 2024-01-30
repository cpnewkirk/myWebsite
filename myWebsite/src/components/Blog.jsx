import { blogs_arr } from "../data/blog_data";
import BlogCard from "./BlogCard";
import { useEffect, useState } from "react";
import { Form, Input, Label, Col, Row, FormGroup } from "reactstrap";

function Blog() {
  const [blogTag, setBlogTag] = useState();
  const [blogsList, setBlogsList] = useState(blogs_arr);

  // Refactor to iterate over all blogs and extract all unique tags from there
  const blogsTotal = blogs_arr.length;
  const abroadTotal = blogs_arr.filter(
    (blog) => blog.tags[0].toLowerCase() == "abroad"
  ).length;
  const internationalEventsTotal = blogs_arr.filter(
    (blog) => blog.tags[0].toLowerCase() === "international events"
  ).length;
  const internationalOrganizationTotal = blogs_arr.filter(
    (blog) => blog.tags[0].toLowerCase() === "international organization"
  ).length;
  const internationalTopicTotal = blogs_arr.filter(
    (blog) => blog.tags[0].toLowerCase() === "international topic"
  ).length;
  const photographyTotal = blogs_arr.filter(
    (blog) => blog.tags[0].toLowerCase() === "photography"
  ).length;
  const uncategorizedTotal = blogs_arr.filter(
    (blog) => blog.tags[0].toLowerCase() === "uncategorized"
  ).length;

  function onTagChange(event) {
    setBlogTag(event.target.value);
  }

  useEffect(() => {
    if (blogTag) {
      setBlogsList(
        blogs_arr.filter((blog) => blog.tags[0].toLowerCase() === blogTag)
      );
      if (blogTag === "all blogs") {
        setBlogsList(blogs_arr);
      }
    }
  }, [blogTag]);

  return (
    <div>
      <Form className="page text-start">
        <FormGroup row>
          <Label htmlFor="tags" sm={3}>
            Filter by Category:
          </Label>
          <Col sm={9}>
            <Input
              id="tags"
              name="select"
              type="select"
              onChange={(event) => onTagChange(event)}
            >
              <option value="all blogs">All Blogs ({blogsTotal})</option>
              <option value="abroad">Abroad ({abroadTotal})</option>
              <option value="international events">
                International Events ({internationalEventsTotal})
              </option>
              <option value="international organization">
                International Organization ({internationalOrganizationTotal})
              </option>
              <option value="international topic">
                International Topic ({internationalTopicTotal})
              </option>
              <option value="photography">
                Photography ({photographyTotal})
              </option>
              <option value="uncategorized">
                Uncategorized ({uncategorizedTotal})
              </option>
            </Input>
          </Col>
        </FormGroup>
      </Form>
      <Row className="blogs justify-content-md-center">
        {blogsList.map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            thumbnail={blog.thumbnail}
            title={blog.title}
            body={blog.body}
            tags={blog.tags}
            date={blog.date}
          />
        ))}
      </Row>
    </div>
  );
}

export default Blog;
