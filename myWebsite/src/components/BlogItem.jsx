import { useLocation, useParams, useNavigate } from "react-router-dom";
import { blogs_arr } from "../data/blog_data";

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
    <div id={blog.id} className="blogItem">
      <article>
        <div>
          <h2>{blog.title}</h2>
          {!locationCheck ? (
            <button onClick={moreDetails}>More Details</button>
          ) : (
            <button onClick={() => nav(-1)}>Go back</button>
          )}
          <p>{blog.date}</p>
          <p>Tagged: {blog.tags}</p>
          <div
            dangerouslySetInnerHTML={{ __html: blog.body }}
            style={{ textAlign: "left" }}
          ></div>
        </div>
      </article>
    </div>
  );
}

export default BlogItem;
