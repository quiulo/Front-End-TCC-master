import {
  MessageCircle,
  MessageCircleX,
  Send,
  ThumbsUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useUser } from "../../UserContext";
import { useState } from "react";
import axios from 'axios';
import api from "../../utils/axios";
import { Post } from "../../interfaces/Post";

interface Props {
  post: Post;
}

const PostCard = ({ post }: Props) => {
  console.log('Rendering PostCard with post:', post);
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [likes, setLikes] = useState<number>(post.likes);
  const [liked, setLiked] = useState<boolean>(false);
  const [newComment, setNewComment] = useState<string>('');
  const [comments, setComments] = useState(post.comments);

  const handleLike = async () => {
    const newLikes = liked ? likes - 1 : likes + 1;
    setLikes(newLikes);
    setLiked(!liked);

    try {
      await updateLikesInDatabase(post.id, newLikes);
    } catch (error) {
      console.error("Erro ao atualizar curtidas no banco de dados:", error);
      setLikes(likes);
      setLiked(!liked);
    }
  };

  const updateLikesInDatabase = async (postId: string, newLikes: number) => {
    try {
      const response = await api.post(`/api/posts/${postId}/curtidas`, { likes: newLikes });
      console.log(`Post ${postId} updated with ${newLikes} likes`);
      return response.data;
    } catch (error) {
      console.error("Erro ao atualizar curtidas no banco de dados:", error);
      throw error;
    }
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = async () => {
    if (newComment.trim() === '') return;

    const commentData = {
      name: user.name,
      comment: newComment,
      imageUrl: user.imageUrl,
      time: new Date()
    };

    // try {
    //   const response = await axios.post(`/api/posts/${post.id}/comentarios`, commentData);
    //   setComments([...comments, response.data]);
    //   setNewComment('');
    // } catch (error) {
    //   console.error("Erro ao enviar comentário:", error);
    // }
  };

  return (
    <div className="flex flex-col gap-4 px-6 py-4 rounded-2xl bg-white lg:w-1/2">
      <div className="flex items-center justify-between">
        <Link to={`/perfilAutonomo/${post.id}`} className="flex items-center gap-2">
          <img
            src={post.author.imageUrl}
            alt=""
            className="w-8 h-8 object-cover rounded-full bg-primary"
          />
          <h1 className="text-xl font-bold">{post.author.name} </h1>
        </Link> 

        <div className="flex flex-col">
        <h2 className="text-base font-semibold text-azul text-primary">
          {post.author.job}
        </h2>
        <h2 className="text-sm  text-primary">{post.category}</h2>
        </div>

      </div> 
      <hr />
      <div className="flex justify-center text-xl">
        <blockquote className="line-clamp-2 max-w-[500px]">
          {post.content}
        </blockquote>
      </div>
      <Link to={`/post/${post.id}`} className="flex flex-col gap-4">
        <img
          src={post.imageUrl}
          alt=""
          className="w-full h-[256px] object-cover rounded-2xl bg-primary"
        />
      </Link>
      <div className="flex items-center justify-around text-azul font-bold text-lg">
        <div className="flex items-center gap-2">
          <ThumbsUp
            className={`text-2xl cursor-pointer ${liked ? 'text-blue-500' : ''}`}
            onClick={handleLike}
          />
          {likes}
        </div>
        <div className="flex items-center gap-2">
          <MessageCircle className="text-2xl" />
          {comments.length}
        </div>
        <div className="flex items-center gap-2">
          <Send className="text-2xl" />
          Enviar
        </div>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-sm font-bold text-blue-600"
      >
        Ver comentários
      </button>
      {isOpen && (
        <div>
          <div>
            {comments.map((comment, index) => (
              <div key={index} className="flex items-center gap-2 my-2">
                <img
                  src={comment.imageUrl}
                  alt=""
                  className="w-6 h-6 object-cover rounded-full bg-primary"
                />
                <div className="border-2 border-azul p-3 rounded-2xl" >
                  <p className="font-semibold text-xl">{comment.name}</p>
                  <p className="text-lg">{comment.comment}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-2">
            <img
              src={user.imageUrl}
              alt=""
              className="w-8 h-8 object-cover rounded-full bg-primary"
            />
            <input
              type="text"
              className="flex-1 bg-gray-200 rounded-full px-4 py-2"
              value={newComment}
              onChange={handleCommentChange}
              placeholder="Escreva um comentário..."
            />
            <button
              onClick={handleCommentSubmit}
              className="bg-blue-500 text-white text-lg rounded-full px-4 py-2"
            >
              Enviar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;
