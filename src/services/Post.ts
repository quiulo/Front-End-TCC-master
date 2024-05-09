import { Post } from "../interfaces/Post";

export const posts: Post[] = [
  {
    id: "1",
    author: {
      name: "Carlos Souza",
      imageUrl:
        "https://soscasacuritiba.com.br/wp-content/uploads/2023/11/como-iniciar-na-profissao-de-pedreiro.webp",
      job: "Pedreiro",
      id: "1",
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
      },
      {
        name: "Carlos Oliveira",
        comment: "Qual o valor para uma pequena reforma?",
      },
    ],
  },
  {
    id: "2",
    author: {
      name: "Alex Pinto",
      imageUrl:
        "https://tacontratado.com.br/wp-content/uploads/2021/10/marceneiro.jpg",
      job: "Marceneiro",
      id: "2",
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
      },
    ],
  },
  {
    id: "3",
    author: {
      name: "Marcos Santos",
      imageUrl:
        "https://japinturasereformas.com.br/wp-content/webp-express/webp-images/uploads/2018/12/pintura-de-parede..jpg.webp",
      job: "Pintor",
      id: "3",
    },
    imageUrl:
      "https://tintasaquarios.com.br/wp-content/uploads/2019/11/pintura.jpg",
    content:
      "Pintura residencial e comercial com excelência e preços acessíveis. Agende seu serviço agora mesmo!",
    likes: 20,
    comments: [
      {
        name: "Juliana Lima",
        comment: "Que cores você recomenda para um quarto pequeno?",
      },
    ],
  },
];

export async function getPost(id: string) {
  return await posts.filter((post) => post.id === id)[0];
}
