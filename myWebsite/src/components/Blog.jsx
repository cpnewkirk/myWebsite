import BlogItem from "./BlogItem";
import { blogs_arr } from "../data/data";

function Blog() {
  return (
    <div>
      {blogs_arr.map((blog) => (
        <BlogItem
          key={blog.id}
          id={blog.id}
          title={blog.title}
          body={blog.body}
          date={blog.date}
        />
      ))}
    </div>
  );
}

export default Blog;
