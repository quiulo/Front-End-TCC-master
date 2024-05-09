export interface Post {
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
      name: string;
      comment: string;
    }[];
  }
  