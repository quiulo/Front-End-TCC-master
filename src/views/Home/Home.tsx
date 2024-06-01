import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CreateModalPost from '../../components/Modal/CreateModalPost';
import CategoriesModal from '../../components/Modal/CategoriesModal';
import api from '../../utils/axios';
import PostList from '../../components/Cards/PostList';
import SideWidget from '../../components/Cards/SideWidget';
import { useUser } from '../../UserContext';
import { Search } from "lucide-react";
import { Post } from '../../interfaces/Post';


const Home = () => {
    const { user } = useUser();
    const [posts, setPosts] = useState<Post[]>([]);
    const [term, setTerm] = useState<string>("");
    const [sortedPosts, setSortedPosts] = useState<Post[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    // useEffect(() => {
    //     // Carregar posts da API ou fonte local
    //     const fetchPosts = async () => {
    //         try {
    //             const response = await api.get('/api/posts');
    //             setPosts(response.data);
    //             setSortedPosts(response.data);
    //         } catch (error) {
    //             console.error("Erro ao carregar posts:", error);
    //         }
    //     };

    //     fetchPosts();
    // }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTerm(e.target.value);
    };

    const handleSearch = () => {
        console.log(term);
    };

    const sortPostsByNewest = () => {
        const sorted = [...posts].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        setSortedPosts(sorted);
    };

    const sortPostsByOldest = () => {
        const sorted = [...posts].sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
        setSortedPosts(sorted);
    };

    const filterPostsByCategory = (category: string | null) => {
        console.log("Categoria selecionada:", category); // Verificar se a categoria está sendo passada corretamente
        setSelectedCategory(category);
        if (category) {
            const filtered = posts.filter(post => post.category === category);
            console.log("Posts filtrados:", filtered); // Verificar se os posts estão sendo filtrados corretamente
            setSortedPosts(filtered);
        } else {
            setSortedPosts(posts);
        }
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
                            className="w-10 h-10 rounded-full object-cover"
                        />
                    </button>
                    <div className="md:flex lg:flex hidden">
                        <h1 className="md:text-lg font-bold lg:text-lg font-bold ">Criar publicação</h1>
                    </div>
                    <CreateModalPost onPostCreated={undefined} />
                    <span className="w-32 flex items-center lg:w-72 gap-2 border-2 border-azul bg-white rounded-lg px-2">
                        <button onClick={handleSearch}>
                            <Search size={20} className="text-azul text-xl lg:text-2xl" />
                        </button>
                        <input
                            placeholder="Pesquisar"
                            className="focus:ring-0 text-sm focus:outline-none border-none w-20 lg:w-72"
                            onChange={handleChange}
                            value={term}
                        />
                    </span>
                    
                    <button className="bg-azul rounded-lg p-2 ">
                    <CategoriesModal
                            onSortByNewest={sortPostsByNewest}
                            onSortByOldest={sortPostsByOldest}
                            onCategorySelected={filterPostsByCategory} // Adicione esta propriedade
                        />
                    </button>
                </div>
                <PostList posts={sortedPosts} />
            </section>
            <SideWidget />
        </div>
    );
}

export default Home;
