import { DeepMap, FieldError, UseFormRegister } from "react-hook-form";

export interface ITags {
  id?: string;
  title: string;
  description: string;
}

export interface INovels {
  title: string;
  description: string;
  author: string;
  artist: string | undefined;
  coverUrl: string | undefined;
  language: Languages;
  type: NovelTypes;
  chapter: number | undefined;
  status: Status;
  releaseYear: number;
  totalReader?: number;
  id?: string;
  createdAt?: date;
  updatedAt?: date;
  tags?: ITags[];
  readers?: string[];
}

export interface NovelProps {
  register: UseFormRegister<INovels>;
  errors: DeepMap<INovels, FieldError>;
}
