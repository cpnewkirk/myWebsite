import BlogItem from "./BlogItem";
import { blogs_arr } from "../data/data";
import { useEffect, useState } from "react";

function Blog() {
  const [blogTag, setBlogTag] = useState();
  const [blogsList, setBlogsList] = useState(blogs_arr);

  console.log(blogsList);
  function onTagChange(event) {
    setBlogTag(event.target.value);
  }

  useEffect(() => {
    if (blogTag) {
      console.log(blogTag);
      setBlogsList(blogs_arr.filter((blog) => blog.tags == blogTag));
      if (blogTag === "All Blogs") {
        setBlogsList(blogs_arr);
      }
    }
  }, [blogTag]);

  return (
    <div>
      <form>
        <label htmlFor="tags">Tag:</label>
        <select id="tags" name="tags" onChange={(event) => onTagChange(event)}>
          <option value="All Blogs">All Blogs</option>
          <option value="Abroad">Abroad</option>
          <option value="International Events">International Events</option>
          <option value="International Organization">
            International Organization
          </option>
          <option value="International Topic">International Topic</option>
          <option value="Photography">Photography</option>
          <option value="Uncategorized">Uncategorized</option>
        </select>
      </form>
      {blogsList.map((blog) => (
        <BlogItem
          key={blog.id}
          id={blog.id}
          title={blog.title}
          body={blog.body}
          tags={blog.tags}
          date={blog.date}
        />
      ))}
    </div>
  );
}

export default Blog;
