export interface IUserStore {
  user: UserData;
  setUser: () => Promise<void>;
}
export type UserData = {
  about?: string;
  createdAt?: string;
  id?: string;
  role?: string;
  updatedAt?: string;
  username?: string;
};
