import './Post.css';
import {Link} from "react-router-dom"
const Post = ({post}) => {
  const PF = `${process.env.REACT_APP_DOMAIN}/images/`;
  return (
    <div className="post">
      <img
        className="postImg"
        src={
          post.photo
            ? PF + post.photo
            : 'https://images.pexels.com/photos/1563604/pexels-photo-1563604.jpeg?cs=srgb&dl=pexels-thiago-japyassu-1563604.jpg&fm=jpg'
        }
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map(cate => (
            <span className="postCat" key={cate.name}>
              {cate.name}
            </span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>

        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
};

export default Post;
