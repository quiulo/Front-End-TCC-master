import { Link } from "react-router-dom";
import { Post } from "../../interfaces/Post";
import { useUser } from "../../UserContext";
import { MessageCircle, Send, Share, ThumbsUp, User } from "lucide-react";

interface Props {
  post: Post;
}

const PostDetails = ({ post }: Props) => {
  const { user } = useUser();

  return (
    <div className="flex flex-col gap-4 px-6 py-4 rounded-2xl bg-white ">
      <div className="flex items-center justify-between">
        <Link to={`/perfilAutonomo/${post.id}`} className="flex items-center gap-2">
          <img
            src={post.author.imageUrl}
            alt=""
            className="w-8 h-8 object-cover rounded-full bg-azul"
          />
          <h1 className="text-xl font-bold">{post.author.name}</h1>
        </Link>
        <h2 className="text-base font-semibold text-azul">
          {post.author.job}
        </h2>
      </div>
      <img
        src={post.imageUrl}
        alt=""
        className="w-full h-[384px] object-cover rounded-2xl "
      />
      <div className="flex justify-center">
        <blockquote className="w-full text-lg font-medium">{post.content}</blockquote>
      </div>

      <hr/>

      <div className="flex items-center justify-around text-azul font-bold">
        <div className="flex items-center gap-2">
          <button>
            <ThumbsUp />
          </button>
          <span className="flex gap-1">
            <p className="text-2xl">{post.likes}</p> <p className="hidden lg:block">Curtidas</p>
          </span>
        </div>
        
        <span className="flex items-center gap-2">
          <MessageCircle />
          <span className="flex gap-1">
            <p className="text-2xl">{post.comments.length}</p>{" "}
            <p className="hidden lg:block">Comentários</p>
          </span>
        </span>

      </div>

      <hr />
      
      {post.comments.map((comment) => (
        <div className=" flex text-xl gap-2  text-azul bg-branco p-3 rounded-xl">
          
            <img className=" w-8 h-8 object-cover rounded-full " src={comment.imageUrl} />
          <div className="flex flex-col border-2 border-azul p-3 rounded-2xl ">
            <h2 className="font-bold">{comment.name}</h2>
            
            <blockquote className="">{comment.comment}</blockquote>
          </div>
        </div>
      ))}
      <div className="flex items-center px-2 lg:px-5 py-3 justify-between  rounded-2xl">
        <img
          src={user.imageUrl}
          alt=""
          className="h-8 w-8 rounded-full object-cover"
        />
        <input
          className="  rounded-2xl w-full mx-2 lg:mx-8"
          placeholder="Escreva um comentário"
        />
        <button>
          <Send size={24} className="text-azul" />
        </button>
      </div>
    </div>
  );
};

export default PostDetails;
