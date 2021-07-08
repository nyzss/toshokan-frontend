import create from "zustand";
import { CheckLoggedIn } from "./../utils/api";

interface IloggedInStore {
  user: any;
  setUser: () => any;
}

const userStore = create<IloggedInStore>((set, get) => ({
  user: {},
  setUser: async () => {
    const userData = await CheckLoggedIn();
    set({ user: userData });
  },
}));

export { userStore };

// const userStore = create<IUser>(
//   persist(
//     (set) => ({
//       user: {},
//       setUser: (value) => set({ user: value }),
//     }),
//     {
//       name: "user",
//     }
//   )
// );
