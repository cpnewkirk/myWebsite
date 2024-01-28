import { useLocation, useParams, useNavigate } from "react-router-dom";
import { blogs_arr } from "../data/data";

function BlogItem(blog) {
  const loc = useLocation();
  const nav = useNavigate();
  const { id } = useParams();

  let idName = "";
  const locationCheck = loc.pathname.includes("/blog/");

  if (locationCheck) {
    blog = blogs_arr.find((blog) => blog.id == id);
  }

  function moreDetails(event) {
    const blogId = blog.id;
    event.preventDefault();
    nav(`/blog/${blogId}`);
  }

  return (
    <div id={blog.id}>
      <article>
        <div>
          <button onClick={moreDetails}>{blog.title}</button>
          <div dangerouslySetInnerHTML={{ __html: blog.body }}></div>
          <p>{blog.date}</p>
        </div>
      </article>
    </div>
  );
}

export default BlogItem;
