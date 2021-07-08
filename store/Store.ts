import create from "zustand";
import { Global } from "../utils/types";

const userStore = create<Global>((set, get) => ({
  username: "",
  changeUsername: (value) => {
    set(() => ({
      username: value,
    }));
  },
}));

export { userStore };
