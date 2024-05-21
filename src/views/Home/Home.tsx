

import React from 'react';
import { useState } from 'react';
import { Filter, Search } from "lucide-react";
import { posts } from '../../services/Post';
import PostList from '../../components/Cards/PostList';
import SideWidget from '../../components/Cards/SideWidget';
import { useUser } from '../../UserContext';
import { Link } from 'react-router-dom';
import CreateModalPost from '../../components/Modal/CreateModalPost';
import CategoriesModal from '../../components/Modal/CategoriesModal';


function Home() {
    

    const { user } = useUser();

    const [term, setTerm] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTerm(e.target.value);
    };
  
    const handleSearch = () => {
      console.log(term);


    
    };

    return (
        <div className="flex bg-stone-100 py-12">
            <section className="flex flex-col gap-10 lg:pr-6 gap-5 flex-1">
                <div className="flex items-center justify-evenly lg:justify-end gap-6"> 

                      <button className='flex flex-row-reverse gap-2 items-center text-lg font-bold text-azul lg:hidden '>
                        <Link to={"/perfil"}>Perfil</Link>

                        <img
                        src={user.imageUrl}
                        alt={`foto de perfil do usuário ${user.name}`}
                        className="w-12 h-12 rounded-full object-cover"
                        /></button>

                        <div>
                           
                            <button><CreateModalPost /></button>
                        </div>

                        <span className="w-40 flex items-center  lg:w-72 gap-2 border-2 border-azul bg-white rounded-lg px-2">
                            <button onClick={handleSearch}>
                                <Search size={20} className="text-azul text-xl lg:text-2xl" />
                            </button>
                            <input
                            
                                placeholder="Pesquisar"
                                className="focus:ring-0 focus:outline-none border-none w-24 lg:w-72"
                                onChange={handleChange}
                                value={term}
                            />
                        
                       
                        </span>
                        <button className="bg-azul rounded-lg p-2 ">
                           <CategoriesModal />
                            
                        </button>
                        
                </div>
                <PostList posts={posts} />
            </section>

            
                <SideWidget />
            
           
        </div>
    );
}

export default Home;
