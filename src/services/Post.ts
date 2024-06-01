// import api from '../utils/axios';
// import { Post } from '../interfaces/Post'; // Importe a interface Post aqui

// // Função para buscar os posts do backend e mapeá-los para a interface Post
// const fetchPosts = async (): Promise<Post[]> => {
//   try {
//     const response = await api.get<Post[]>('/api/post'); // Substitua '/api/posts' pela URL real do seu backend
//     return response.data; // Retorna os dados mapeados para a interface Post
//   } catch (error) {
//     console.error('Error fetching posts:', error);
//     return []; // Retorna um array vazio em caso de erro
//   }
// };

// // Exemplo de uso da função fetchPosts
// async function exampleUsage() {
//   try {
//     const posts: Post[] = await fetchPosts();
//     console.log(posts); // Aqui você terá os dados dos posts mapeados para a interface Post
//   } catch (error) {
//     console.error('Error fetching and mapping posts:', error);
//   }
// }

// // Chama a função para buscar os posts
// exampleUsage();


// export async function getPost(id: string) {
//   return await posts.filter((post) => post.id === id)[0];
// }





import { Post } from "../interfaces/Post";

export const posts: Post[] = [
  {
    category: "Domésticos",
    createdAt: 23/12/2004,
    id: "1",
    author: {
      name: "Carlos Souza",
      imageUrl:
        "https://soscasacuritiba.com.br/wp-content/uploads/2023/11/como-iniciar-na-profissao-de-pedreiro.webp",
       
      job: "Pedreiro",
      id: "2"
    },
    imageUrl:
      "https://mapa-da-obra-producao.s3.amazonaws.com/wp-content/uploads/2023/02/iStock-587206190-scaled.jpg",
    content:
      "Disponível para serviços de alvenaria e reformas. Entre em contato para um orçamento gratuito!",
    likes: 15,
    comments: [
      {
        name: "Maria Souza",
        comment: "Ótimo profissional, recomendo!",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Marcha_das_Mulheres_Negras_%2823137790481%29.jpg/400px-Marcha_das_Mulheres_Negras_%2823137790481%29.jpg?20151128183444",
        id: "3",
      },
      {
        name: "Carlos Oliveira",
        comment: "Qual o valor para uma pequena reforma?",
        imageUrl: "https://c.pxhere.com/photos/48/b6/front_view_face_close_man_men_indian_asian_person-1413323.jpg!d",
        id: "4",
      },
    ],
  },
  {
    category: "Domésticos",
    createdAt: 23/12/2004,
    id: "2",
    author: {
      name: "Alex Pinto",
      imageUrl:
        "https://tacontratado.com.br/wp-content/uploads/2021/10/marceneiro.jpg",
     
      job: "Marceneiro",
     id: "1"
    },
    imageUrl:
      "https://soscasacuritiba.com.br/wp-content/uploads/2023/09/Bancada-de-Marceneiro.jpg",
    content:
      "Fabrico móveis sob medida com qualidade e pontualidade na entrega. Faça já seu pedido!",
    likes: 30,
    comments: [
      {
        name: "Pedro Almeida",
        comment: "Estou precisando de um armário, vou entrar em contato!",
        imageUrl: "https://c.pxhere.com/images/73/98/0a1d8467fd87d185306582c35cae-1620092.jpg!d",
        id: "2",
      },
    ],
  },
  {
    category: "Domésticos",
    createdAt: 23/12/2004,
    id: "3",
    author: {
      name: "Marcos Santos",
      imageUrl: "https://japinturasereformas.com.br/wp-content/webp-express/webp-images/uploads/2018/12/pintura-de-parede..jpg.webp",
      job: "Pintor",
      id: "1",
    },
    imageUrl: "https://tintasaquarios.com.br/wp-content/uploads/2019/11/pintura.jpg",
    content: "Pintura residencial e comercial com excelência e preços acessíveis. Agende seu serviço agora mesmo!",
    likes: 20,
    comments: [
      {
        name: "Juliana Lima",
        comment: "Que cores você recomenda para um quarto pequeno?",
        imageUrl: "https://c.pxhere.com/photos/9f/a9/model_girl_linda_woman_hair_look_mouth_beautiful-604781.jpg!d",
        id: "1",
      },
    ],
  
  },
];

export async function getPost(id: string) {
  return await posts.filter((post) => post.id === id)[0];}