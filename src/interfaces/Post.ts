export interface Post {
  id: string;
  author: Author;
  imageUrl: string;
  content: string;
  likes: number;
  comments: {
    name: string;
    comment: string;
    imageUrl: string;
  }[];
}
