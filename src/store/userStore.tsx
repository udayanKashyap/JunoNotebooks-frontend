import { create } from "zustand";

interface UserState {
  user: {
    username: string;
    token: string;
  } | null;
  login: (userData: { username: string; token: string }) => void;
  logout: () => void;
}

const useUserStore = create<UserState>((set) => ({
  user: null,
  login: (userData) => set({ user: userData }),
  logout: () => set({ user: null }),
}));

export default useUserStore;
