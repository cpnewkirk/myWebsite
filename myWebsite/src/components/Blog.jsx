import BlogItem from "./BlogItem";
import { blogs_arr } from "../data/data";

function Blog() {
  function onSubmit() {
    taggedBlogs = blogs_arr.find((blogs) => blog.tags.includes());
  }

  return (
    <div>
      <form>
        <label htmlFor="tags">Tag:</label>
        <select id="tags" name="tags">
          <option value="Abroad">Abroad {}</option>
          <option value="International Events">International Events</option>
          <option value="International Organization">
            International Organization
          </option>
          <option value="International Topic">International Topic</option>
          <option value="Photography">Photography</option>
          <option value="Uncategorized">Uncategorized</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
      {blogs_arr.map((blog) => (
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
