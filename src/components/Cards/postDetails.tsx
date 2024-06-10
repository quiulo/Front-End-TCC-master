
import { useState } from "react";
import { Link } from "react-router-dom";
import { Post } from "../../interfaces/Post";
import { useUser } from "../../UserContext";
import { MessageCircle, Send, Share, ThumbsUp, User, Undo2 } from "lucide-react";
import api from "../../utils/axios";

interface Props {
  post: Post;
}

const PostDetails = ({ post }: Props) => {
  const { user } = useUser();
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
      const response = await api.post(`/api/post/${postId}/curtidas`, {
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
      time: new Date()
    };

    try {
      const response = await api.post(`/api/post/${post.id}/comentarios`, commentData);
      setComments([...comments, response.data]);
      setNewComment('');
    } catch (error) {
      console.error("Erro ao enviar comentário:", error);
    }
  };

  return (
    <div className=" flex flex-col gap-4 p-6 rounded-2xl bg-white w-full h-full lg:max-w-screen-lg lg:max-h-screen-lg lg:m-auto ">
       <Link to="/"><Undo2 className='    h-8 w-8' /></Link>
      <div className="flex items-center justify-between">
        <Link to={`/perfilAutonomo/${post.id}`} className="flex items-center gap-2">
          <img
            src={post.author.imageUrl}
            alt=""
            className="w-8 h-8 object-cover rounded-full bg-azul"
          />
          <h1 className="text-xl font-bold">{post.author.name}</h1>
        </Link>
        <div className="flex flex-col">
        <h2 className="text-base font-semibold text-azul text-primary">
          {post.author.job}
        </h2>
        <h2 className="text-sm  text-primary">{post.category}</h2>
        </div>
       
      </div>
      <hr />
      <div className="flex justify-center">
        <blockquote className="w-full text-lg font-medium">{post.content}</blockquote>
      </div>
      <img
        src={post.imageUrl}
        alt=""
        className="w-full h-[384px] object-cover rounded-2xl"
      />
      

      <hr/>

      <div className="flex items-center justify-around text-azul font-bold">
        <div className="flex items-center gap-2">
          <button onClick={handleLike}>
            <ThumbsUp />
          </button>
          <span className="flex gap-1">
            <p className="text-2xl">{post.likes}</p> <p className="hidden lg:block text-2xl">Curtidas</p>
          </span>
        </div>
        
        <span className="flex items-center gap-2">
          <MessageCircle />
          <span className="flex gap-1">
            <p className="text-2xl">{post.comments.length}</p>{" "}
            <p className="hidden lg:block text-2xl">Comentários</p>
          </span>
        </span>

      </div>

      <hr />
      
      {post.comments.map((comment) => (
        <div key={comment.id} className="flex text-xl gap-2 text-azul bg-branco p-3 rounded-xl">
          <img className="w-8 h-8 object-cover rounded-full" src={comment.imageUrl} />
          <div className="flex flex-col border-2 border-azul p-3 rounded-2xl">
            <h2 className="font-bold">{comment.name}</h2>
            <blockquote>{comment.comment}</blockquote>
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

export default PostDetails;
