import create from "zustand";
interface IUser {
  user: UserType;
  setUser: (userData: UserType) => void;
  clearUser: () => void;
}
type UserType = {
  name: string;
  email: string;
};
export const useUserStore = create<IUser>()((set) => ({
  user: {
    email: "",
    name: "",
  },
  setUser: (userData) =>
    set(() => ({ user: { email: userData.email, name: userData.name } })), // Sets new user
  clearUser: () => set({ user: { email: "", name: "" } }), // Remove the user after logged out
}));
