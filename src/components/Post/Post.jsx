import './Post.css';

const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/1563604/pexels-photo-1563604.jpeg?cs=srgb&dl=pexels-thiago-japyassu-1563604.jpg&fm=jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Cillum qui cillum</span>
        <hr />
        <span className="postDate">1hours ago</span>
      </div>
      <p className="postDesc">
        Dolor nisi culpa elit consectetur fugiat aliquip dolor qui voluptate
        cupidatat minim. Tempor laboris amet est in qui reprehenderit dolore
        pariatur culpa ad ipsum tempor. Occaecat fugiat occaecat est laboris
        deserunt irure proident aliqua irure tempor.
      </p>
    </div>
  );
};

export default Post;
