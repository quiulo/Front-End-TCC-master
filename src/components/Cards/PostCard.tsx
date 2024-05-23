import {
  MessageCircle,
  MessageCircleX,
  Send,
  ThumbsUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Post } from "../../interfaces/Post";
import { useUser } from "../../UserContext";
import { useState } from "react";
import axios from 'axios';

interface Props {
  post: Post;
}

const PostCard = ({ post }: Props) => {
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
      // Reverter o estado em caso de erro
      setLikes(likes);
      setLiked(!liked);
    }
  };

  const updateLikesInDatabase = async (postId: string, newLikes: number) => {
    try {
      const response = await axios.post(`/api/posts/${postId}/likes`, {
        likes: newLikes
      });
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
    };

    try {
      const response = await axios.post(`/api/posts/${post.id}/comments`, commentData);
      setComments([...comments, response.data]);
      setNewComment('');
    } catch (error) {
      console.error("Erro ao enviar comentário:", error);
    }
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
          <h1 className="text-xl font-bold">{post.author.name}</h1>
        </Link>
        <h2 className="text-base font-semibold text-azul text-primary">
          {post.author.job}
        </h2>
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
        <div className="flex items-center gap-2 text-azul">
          <button onClick={handleLike}>
            <ThumbsUp className={liked ? 'fill-azul stroke-stone-200' : ''} />
          </button>
          <span className="flex gap-1">
            <p>{likes}</p> <p className="hidden lg:block">Curtidas</p>
          </span>
        </div>
        <button
          className="flex items-center gap-2 text-azul"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <span className="flex gap-1 text-azul">
              <MessageCircleX />
              <h2>Ler Menos</h2>
            </span>
          ) : (
            <>
              <MessageCircle />
              <span className="flex gap-1">
                <p>{comments.length}</p>{" "}
                <p className="hidden lg:block">Comentários</p>
              </span>
            </>
          )}
        </button>
      </div>
      {isOpen &&
        comments.map((comment, index) => (
          <div key={index} className="flex text-xl gap-2 text-azul bg-branco p-3 rounded-xl">
            <img className="w-8 h-8 object-cover rounded-full" src={comment.imageUrl} />
            <div className="flex flex-col border-2 border-azul p-3 rounded-2xl">
              <h2 className="font-bold">{comment.name}</h2>
              <blockquote className="max-w-[375px] overflow-y-auto">{comment.comment}</blockquote>
            </div>
          </div>
        ))}
      <div className="flex items-center px-2 lg:px-5 py-3 justify-between rounded-2xl">
        <img
          src={user.imageUrl}
          alt=""
          className="h-8 w-8 rounded-full object-cover"
        />
        <input
          className="rounded-2xl w-full mx-2 lg:mx-8"
          placeholder="Escreva um comentário"
          value={newComment}
          onChange={handleCommentChange}
        />
        <button onClick={handleCommentSubmit}>
          <Send size={24} className="text-azul" />
        </button>
      </div>
    </div>
  );
};

export default PostCard;
