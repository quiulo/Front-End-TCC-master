import {
    MessageCircle,
    MessageCircleX,
    Send,
    Share,
    ThumbsUp,
    User,
  } from "lucide-react";
  import { Link } from "react-router-dom";
  import { Post } from "../../interfaces/Post";
  import { useUser } from "../../UserContext";
  import { useState } from "react";

  
  interface Props {
    post: Post;
  }
  
  const PostCard = ({ post }: Props) => {
   
    
    const { user } = useUser();
  
    const [isOpen, setIsOpen] = useState<boolean>(false);
  
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
        <Link to={`/post/${post.id}`} className="flex flex-col gap-4">
          <img
            src={post.imageUrl}
            alt=""
            className="w-full h-[256px] object-cover rounded-2xl bg-primary"
          />
          <div className="flex justify-center text-xl">
            <blockquote className="line-clamp-2 max-w-[500px]">
              {post.content}
            </blockquote>
          </div>
        </Link>
        <div className="flex items-center justify-between text-azul font-bold text-lg">
          <div className="flex items-center gap-2 text-azul">
            <button>
              <ThumbsUp />
            </button>
            <span className="flex gap-1">
              <p>{post.likes}</p> <p className="hidden lg:block">Curtidas</p>
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
                <span className="flex gap-1  ">
                  <p>{post.comments.length}</p>{" "}
                  <p className="hidden  lg:block">Comentários</p>
                </span>
              </>
            )}
          </button>
          <button className="flex items-center gap-2 text-azul">
            <Share />
            <p className="hidden lg:block">Compartilhar</p>
          </button>
        </div>
        {isOpen &&
          post.comments.map((comment) => (
            <div className=" flex text-xl gap-2  text-azul bg-branco p-3 rounded-xl">
          
            <img className=" w-8 h-8 object-cover rounded-full " src={comment.imageUrl} />
          <div className="flex flex-col border-2 border-azul p-3 rounded-2xl ">
            <h2 className="font-bold">{comment.name}</h2>
            
            <blockquote className="max-w-[375px] overflow-y-auto">{comment.comment}</blockquote>
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
  
  export default PostCard;
  