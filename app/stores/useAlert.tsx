import { create } from "zustand";

type State = {
  isOpen: boolean;
};

type Action = {
  openAlert: () => void;
  closeAlert: () => void;
};

export const useAlertStore = create<State & Action>((set) => ({
  isOpen: false,
  openAlert: () => set({ isOpen: true }),
  closeAlert: () => set({ isOpen: false }),
}));
