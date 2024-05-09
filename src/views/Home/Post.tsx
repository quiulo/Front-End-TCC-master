import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

import { getPost } from "../../services/Post";
import { Post } from "../../interfaces/Post";
import PostDetails from "../../components/Cards/postDetails";

const PostView = () => {
  const params = useParams();
  const id = params.id;

  const [post, setPost] = useState<Post | undefined>(undefined);

  if (!id) {
    return <Navigate to={"/"} replace />;
  }

  useEffect(() => {
    getPost(id).then((post) => setPost(post));
  }, [id]);

  return (
    <section className="flex flex-col gap-5 lg:pr-6">
      {post && <PostDetails post={post} />}
    </section>
  );
};

export default PostView;
