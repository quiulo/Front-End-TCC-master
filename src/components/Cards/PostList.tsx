import React from 'react';
import { Post } from "../../interfaces/Post";
import PostCard from "./PostCard";

interface Props {
  posts: Post[];
}

const PostList = ({ posts }: Props) => {
  console.log('Rendering PostList with posts:', posts);
  return (
    <ul className="flex flex-col gap-6 items-center">
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </ul>
  );
};

export default PostList;
