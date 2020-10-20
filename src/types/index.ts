export type Book = {
  id?: number;
  title: string;
  author: string;
  cover: string;
  about: string;
  variation?: number;
  favorite?: boolean;
};

export type Req = {
  ok: boolean;
  data: any;
};

export type BookSelectEvent = {
  detail: { id: number };
};
