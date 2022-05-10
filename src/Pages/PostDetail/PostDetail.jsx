import Sidebar from '../../components/Sidebar/Sidebar'
import SinglePost from '../../components/SinglePost/SinglePost';
import './PostDetail.css'

const PostDetail = () => {
  return (
    <div className="postCont">
      <SinglePost />
      <Sidebar />
    </div>
  );
}

export default PostDetail