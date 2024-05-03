export interface bookType {
  listType: string | string[];
  book: {
    id: number;
    status: string;
    title: string;
    description: string;
    author: {
      name: string;
    };
    publishedYear: number | null;
    lang: string;
    cover: string | null;
  };
}
