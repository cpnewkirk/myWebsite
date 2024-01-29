import { blogs_arr } from "../data/blog_data";
import BlogCard from "./BlogCard";
import { useEffect, useState } from "react";
import { Form, Input, Label, Col, Row, FormGroup } from "reactstrap";

function Blog() {
  const [blogTag, setBlogTag] = useState();
  const [blogsList, setBlogsList] = useState(blogs_arr);

  function onTagChange(event) {
    setBlogTag(event.target.value);
  }

  useEffect(() => {
    if (blogTag) {
      setBlogsList(blogs_arr.filter((blog) => blog.tags == blogTag));
      if (blogTag === "All Blogs") {
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
              <option value="All Blogs">All Blogs</option>
              <option value="Abroad">Abroad</option>
              <option value="International Events">International Events</option>
              <option value="International Organization">
                International Organization
              </option>
              <option value="International Topic">International Topic</option>
              <option value="Photography">Photography</option>
              <option value="Uncategorized">Uncategorized</option>
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
