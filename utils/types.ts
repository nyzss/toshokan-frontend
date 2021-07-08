export type Lang = {
  code: string;
  name: string;
};

export interface Global {
  username: string;
  changeUsername: (value: string) => void;
}
