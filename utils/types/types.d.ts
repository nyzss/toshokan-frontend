export type Lang = {
  code: string;
  name: string;
};

export interface INovels {
  title: string;
  author: string;
  description: string;
  id: string;
  totalReader: number;
  createdAt: string;
  updatedAt: string;
  coverUrl: string;
}
