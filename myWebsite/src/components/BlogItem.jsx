import { useLocation, useParams, useNavigate } from "react-router-dom";
import { blogs_arr } from "../data/blog_data";
import { Button } from "react-bootstrap";

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
    <div id={blog.id} className="page">
      <article>
        <div>
          <h2>{blog.title}</h2>

          <div className="d-flex">
            <p>{blog.date}</p>
            {blog.tags && <p>Tagged: {blog.tags}</p>}
            {!locationCheck ? (
              <Button onClick={moreDetails}>More Details</Button>
            ) : (
              <Button onClick={() => nav(-1)}>Go back</Button>
            )}
          </div>
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
