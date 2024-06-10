import React, { useState } from 'react';
import { Briefcase } from 'lucide-react';
import { useUser } from '../../UserContext';
import { Undo2 } from 'lucide-react';
import { PencilSquareIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import api from '../../utils/axios';
import Agenda from '../../components/Agenda';

const PerfilUsuario = () => {
    const { user, setUser } = useUser();
    const isProfissional = user.type === 'profissional'; // Verifica se o usuário é do tipo profissional
    const [formData, setFormData] = useState({
        nome: user.name,
        profissao: user.profissao || '',
        cpf: user.cpf || '',
        fotoPerfil: user.imageUrl,
        imagemFundo: user.backgroundImageUrl
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
          // Envie uma solicitação HTTP POST ou PUT com os dados atualizados para o backend
          const response = await api.put(`/api/users/${user.id}`, formData);
  
          // Verifique se a solicitação foi bem-sucedida
          if (response.status === 200) {
              // Atualize o estado local do usuário com os dados atualizados
              setUser(prevUser => ({
                  ...prevUser,
                  name: formData.nome,
                  profissao: formData.profissao,
                  cpf: formData.cpf,
                  imageUrl: formData.fotoPerfil,
                  backgroundImageUrl: formData.imagemFundo
              }));
  
              // Exiba uma mensagem de sucesso ao usuário, informando que as alterações foram salvas
              alert('Alterações salvas com sucesso!');
          } else {
              // Exiba uma mensagem de erro ao usuário, informando que ocorreu um problema ao salvar as alterações
              alert('Ocorreu um problema ao salvar as alterações. Por favor, tente novamente.');
          }
      } catch (error) {
          // Exiba uma mensagem de erro ao usuário, informando que ocorreu um problema ao salvar as alterações
          alert('Ocorreu um problema ao salvar as alterações. Por favor, tente novamente.');
          console.error('Erro ao salvar as alterações:', error);
      }
  };

    return (
        <div className='bg-stone-100'>
            <div className="flex flex-col gap-3 px-4 py-6  rounded-2xl">
                <Link to="/"><Undo2 className='absolute bg-branco  rounded-tl-lg rounded-br-lg mt-3  h-8 w-8' /></Link>
                <div className="-space-y-6 flex flex-col ">
                    <img
                        src={formData.imagemFundo} 
                        alt={`foto de plano de fundo do usuário ${formData.nome}`}
                        className="w-full rounded-lg h-72 object-cover"
                    />
                    <div className='flex justify-end '> 
                        {isProfissional && <button><PencilSquareIcon className='text-azul rounded-tl-lg rounded-br-lg bg-branco h-8 -mt-2'/></button>}
                    </div>
                    <div className='flex flex-col items-center lg:flex-row gap-6'>
                        <img
                            src={formData.fotoPerfil}
                            alt={`foto de perfil do usuário ${formData.nome}`}
                            className="w-24 h-24 rounded-full object-cover"
                        /> 
                        {isProfissional && <PencilSquareIcon className='text-azul h-8 absolute mt-16 ml-24 lg:mt-16 ' />}
                        <div className='lg:flex-col items-center mt-4 ml-4'>
                            <h1 className=" text-center text-2xl text-black font-bold ">
                                {formData.nome}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className='lg:flex justify-center'>
                <form className='flex flex-col p-4 text-lg text-azul font-bold lg:w-1/2' onSubmit={handleSubmit}>
                    {/* Renderiza o campo Nome apenas para profissionais
                    {isProfissional ? 
                        <label>Nome</label> :
                        <span>Nome</span>
                    } */}
                    <div className='flex items-center justify-between gap-4 '>
                        {/* Renderiza o campo Nome apenas para profissionais */}
                        {/* {isProfissional ? 
                            <input 
                                className="w-full rounded-xl " 
                                type="text" 
                                placeholder={formData.nome} 
                                name="nome" 
                                value={formData.nome} 
                                onChange={handleChange}  
                            /> :
                            <span>{formData.nome}</span>
                        } */}
                    </div>
                    <br />
                        
                    {/* Renderiza os campos de Profissão e CPF apenas para profissionais
                    {isProfissional && 
                        <>
                            <label>Profissão</label>
                            <div className='flex items-center justify-between gap-4 '>
                                <input 
                                    className="w-full rounded-xl" 
                                    type="text" 
                                    placeholder={formData.profissao} 
                                    name="profissao" 
                                    value={formData.profissao} 
                                    onChange={handleChange}  
                                />
                            </div>
                            <br />
                            <label>CPF</label>
                            <div className='flex items-center justify-between gap-4 '>
                                <input 
                                    className="w-full rounded-xl" 
                                    type="text" 
                                    placeholder={formData.cpf} 
                                    name="cpf" 
                                    value={formData.cpf} 
                                    onChange={handleChange}  
                                />
                            </div>
                            <br />
                        </>
                    } */}
                    <label>Foto de Perfil</label>
                    <div className='flex items-center justify-between gap-4 '>
                        <input 
                            className="w-full rounded-xl" 
                            type="text" 
                            placeholder={formData.fotoPerfil} 
                            name="fotoPerfil" 
                            value={formData.fotoPerfil} 
                            onChange={handleChange}  
                        />
                    </div>
                    <br />

                    <label>Nome</label>
                    <input 
                            className="w-full rounded-xl" 
                            type="text" 
                           placeholder={user.name}
                           
                        />
                    <label>Imagem de Fundo</label>
                    <div className='flex items-center justify-between gap-4 '>
                        <input 
                            className="w-full rounded-xl" 
                            type="text" 
                            placeholder={formData.imagemFundo} 
                            name="imagemFundo" 
                            value={formData.imagemFundo} 
                            onChange={handleChange}  
                        />
                    </div>

                    {isProfissional && // Renderiza o botão de salvar apenas se o usuário for do tipo profissional
                        <div className='flex justify-center'>
                            <button className='text-lg rounded-full h-12  w-56 text-center bg-azul text-branco shadow-2xl' type="submit">Salvar</button>
                        </div>
                    }
                </form>
            </div>
            
            <br />
        </div>
    );
}

export default PerfilUsuario;
