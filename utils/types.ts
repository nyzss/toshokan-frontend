export type Lang = {
  code: string;
  name: string;
};

export interface User {
  username: string;
  setUsername: (by: string) => void;
}

export interface Global {
  lang: string;
  setLang: (by: string) => void;
}
