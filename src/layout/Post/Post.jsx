import React from "react";
import PostComponents from "../../Components/PostComponents/PostComponents";
import PostWritting from "../../Components/PostWritting/PostWritting";

const Post = () => {
  const [post, setPost] = React.useState([]);
  React.useEffect(() => {
    try {
      fetch("https://picsum.photos/v2/list")
        .then((request) => request.json())
        .then((response) => setPost(response));
    } catch (err) {
      console.warn(err);
    }
  }, []);
  return (
    <div className="max-w-xl mx-auto border-l border-r min-h-screen">
      <PostWritting />
      <PostComponents post={post} />
    </div>
  );
};

export default Post;
