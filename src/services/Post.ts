import { Post } from "../interfaces/Post";

export const posts: Post[] = [
  {
    id: "1",
    author: {
      name: "Carlos Souza",
      imageUrl:
        "https://soscasacuritiba.com.br/wp-content/uploads/2023/11/como-iniciar-na-profissao-de-pedreiro.webp",
      backgroundImageUrl:
        "https://www.google.com/imgres?q=imagem%20constru%C3%A7%C3%A3o%20obra%20jpg&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F5%2F58%2FCONSTRU%25C3%2587%25C3%2583O_CIVIL.jpg&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ACONSTRU%25C3%2587%25C3%2583O_CIVIL.jpg&docid=bTfYbQE5nrMr0M&tbnid=MsKJpRVD39Jw9M&vet=12ahUKEwifseq_9ImGAxXgr5UCHWI_BzcQM3oECBoQAA..i&w=1024&h=683&hcb=2&itg=1&ved=2ahUKEwifseq_9ImGAxXgr5UCHWI_BzcQM3oECBoQAA",
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
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Marcha_das_Mulheres_Negras_%2823137790481%29.jpg/400px-Marcha_das_Mulheres_Negras_%2823137790481%29.jpg?20151128183444",
      },
      {
        name: "Carlos Oliveira",
        comment: "Qual o valor para uma pequena reforma?",
        imageUrl:
          "https://c.pxhere.com/photos/48/b6/front_view_face_close_man_men_indian_asian_person-1413323.jpg!d",
      },
    ],
  },
  {
    id: "2",
    author: {
      name: "Alex Pinto",
      imageUrl:
        "https://tacontratado.com.br/wp-content/uploads/2021/10/marceneiro.jpg",
      backgroundImageUrl:
        "https://www.google.com/imgres?q=imagem%20obra%20marcenaria%20jpg&imgurl=https%3A%2F%2Fus.123rf.com%2F450wm%2Fprostooleh%2Fprostooleh1910%2Fprostooleh191001578%2F131991957-homem-que-trabalha-com-uma-madeira-carpinteiro-em-uma-camisa-branca.jpg%3Fver%3D6&imgrefurl=https%3A%2F%2Fpt.123rf.com%2Fstock-photo%2Fmarcenaria.html&docid=F365W8KQeBoVrM&tbnid=QFKPOeFBxWLqSM&vet=12ahUKEwj85L6g9YmGAxU8PrkGHcX1C7QQM3oECDIQAA..i&w=450&h=300&hcb=2&ved=2ahUKEwj85L6g9YmGAxU8PrkGHcX1C7QQM3oECDIQAA",
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
        imageUrl:
          "https://c.pxhere.com/images/73/98/0a1d8467fd87d185306582c35cae-1620092.jpg!d",
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
      backgroundImageUrl:
        "https://www.google.com/imgres?q=imagem%20obra%20pintor%20jpg&imgurl=https%3A%2F%2Fpng.pngtree.com%2Fbackground%2F20230330%2Foriginal%2Fpngtree-painter-working-at-the-construction-site-painter-working-at-construction-site-picture-image_2201470.jpg&imgrefurl=https%3A%2F%2Fpt.pngtree.com%2Ffreebackground%2Fpainter-working-at-the-construction-site-painter-working-at-construction-site-photo_2201470.html&docid=PqueLq8WcD5-rM&tbnid=_c4TAe0URzFF6M&vet=12ahUKEwjm8uW19YmGAxWGqZUCHZ1UBvUQM3oECCIQAA..i&w=1200&h=800&hcb=2&ved=2ahUKEwjm8uW19YmGAxWGqZUCHZ1UBvUQM3oECCIQAA",
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
        imageUrl:
          "https://c.pxhere.com/photos/9f/a9/model_girl_linda_woman_hair_look_mouth_beautiful-604781.jpg!d",
      },
    ],
  },
];

export async function getPost(id: string) {
  return await posts.filter((post) => post.id === id)[0];
}
