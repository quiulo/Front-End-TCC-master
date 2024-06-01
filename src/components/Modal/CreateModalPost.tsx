import React, { useState } from 'react';
import { SquarePlus, X } from 'lucide-react';
import api from '../../utils/axios';

const CreateModalPost = ({ onPostCreated }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [postContent, setPostContent] = useState('');
  const [postImage, setPostImage] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handlePost = async () => {
    const postData = new FormData();
    postData.append('content', postContent);
    postData.append('image', postImage);

    try {
      const response = await api.post('/post', postData); // Endpoint do backend para criar um post
      console.log('Post criado com sucesso:', response.data);

      // Adiciona o novo post à lista de posts na página inicial
      onPostCreated(response.data);

      setPostContent('');
      setPostImage(null);
      toggleMenu();
    } catch (error) {
      console.error('Erro ao criar post:', error);
    }
  };

  return (
    <div>
      <button onClick={toggleMenu}>
        <SquarePlus className='text-azul'/> 
      </button>
      {menuOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='relative bg-branco border-4 border-azul text-azul text-lg rounded-2xl h-1/2 w-96 xl:w-1/3 xl:h-1/2 p-4'>
            <button onClick={toggleMenu} className="absolute top-2 right-2">
              <X size={24} className="fill-black stroke-black" />
            </button>
            <form className='flex flex-col items-start gap-2 lg:gap-5'>
              <label className='font-bold'>Escreva aqui</label>
              <textarea
                className='rounded-2xl w-full h-24'
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
              ></textarea>
              <label className='font-bold text-azul'>Escolha a categoria:</label>
                <select id="categoria" name="categoria" className='rounded-2xl'>
                  <option value="consultoria">Consultoria</option>
                  <option value="tecnologia">Tecnologia</option>
                  <option value="beleza">Beleza</option>
                  <option value="reformas">Reformas</option>
                  <option value="saude">Saúde</option>
                  <option value="domesticos">Domésticos</option>
                </select>
              <label className='font-bold'>Insira uma imagem</label>
              <input
                className="w-60 lg:w-96"
                type="file"
                name="arquivo"
                accept="image/png, image/jpeg"
                onChange={(e) => setPostImage(e.target.files[0])}
              /> 
            </form>
            <button
              className='mt-12 w-24 h-10 bg-azul text-branco text-center font-bold rounded-2xl '
              onClick={handlePost}
            >
              Postar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CreateModalPost;
