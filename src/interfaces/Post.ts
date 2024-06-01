export interface Post {
  category: string;
  createdAt: string | number | Date;
  id: string;
  author: {
    name: string;
    imageUrl: string;
    job: string;
    id: string;
  };
  imageUrl: string;
  content: string;
  likes: number;
  comments: {
    id: string;
    name: string;
    comment: string;
    imageUrl: string;
  }[]

}
