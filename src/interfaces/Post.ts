export interface Post {
    id: string;
    author: {
      filter(arg0: (author: any) => any): unknown;
      name: string;
      imageUrl: string;
      backgroundImgUrl: string;
      job: string;
      id: string;
    };
    imageUrl: string;
    content: string;
    likes: number;
    comments: {
      name: string;
      comment: string;
      imageUrl: string;
    }[];
  }
  