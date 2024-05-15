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
export interface book {
  id: number;
  title: string;
  description: string;
  rating: string;
  status: string;
  author: { name: string; about: string };
  publishedYear: number;
  publishedPlatform: string;
  lang: string;
  availability: string;
  cover?: string;
  ebook?: string;
  parts: number;
}
