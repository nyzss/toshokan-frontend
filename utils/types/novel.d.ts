import { DeepMap, FieldError, UseFormRegister } from "react-hook-form";

export interface INovels {
  title: string;
  description: string;
  author: string;
  artist: string;
  coverUrl: string;
  language: Languages;
  type: NovelTypes;
  chapter: number;
  status: Status;
  releaseYear: number;
  totalReader?: number;
  id?: string;
}

export interface NovelProps {
  register: UseFormRegister<INovels>;
  errors: DeepMap<INovels, FieldError>;
}
