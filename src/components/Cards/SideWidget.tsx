import { Link } from "react-router-dom";
import { Briefcase } from "lucide-react";
import { useUser } from "../../UserContext";

const SideWidget = () => {
  const { user } = useUser();
  return (
    <aside className="hidden lg:flex flex-col gap-6 w-1/3 ">
      <div className="flex flex-col gap-3 px-4 py-6 bg-white border-2 border-azul rounded-2xl">
        <div className="-space-y-8 flex items-center flex-col">
          <img
            src={user.backgroundImageUrl}
            alt={`foto de plano de fundo do usuário ${user.name}`}
            className="w-full rounded-lg h-36 object-cover"
          />
          <img
            src={user.imageUrl}
            alt={`foto de perfil do usuário ${user.name}`}
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
        <h1 className="text-center text-2xl text-black font-bold">
          {user.name}
        </h1>
        <Link
          to={"/perfil"}
          className="w-full text-center py-2 bg-azul text-branco text-base rounded-lg font-bold shadow-2xl"
        >
          Editar Perfil
        </Link>
      </div>
    </aside>
  );
};

export default SideWidget;
