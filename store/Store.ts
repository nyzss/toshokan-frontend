import create from "zustand";
import { devtools } from "zustand/middleware";
import { IUserStore } from "../utils/types/store";
import { CheckLoggedIn } from "./../utils/api";

const userStore = create<IUserStore>(
  devtools((set, get) => ({
    user: {},
    setUser: async () => {
      const userData = await CheckLoggedIn();
      set({ user: userData });
    },
  }))
);

export { userStore };
