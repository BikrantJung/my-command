import { Session } from "next-auth";
import create from "zustand";
interface IUser {
  user: Session;
  setUser: (userData: Session) => void;
  clearUser: () => void;
}

const defaultUser: Session = {
  user: {
    email: "",
    image: "",
    name: "",
  },
  expires: "",
};
export const useUserStore = create<IUser>()((set) => ({
  user: defaultUser,
  setUser: (userData: Session) =>
    set(() => ({
      user: userData,
    })), // Sets new user
  clearUser: () => set({ user: defaultUser }), // Remove the user after logged out
}));
