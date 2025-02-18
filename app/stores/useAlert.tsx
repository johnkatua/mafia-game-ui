import { create } from "zustand";

type AlertData = {
  game_id: string;
  join: string;
  host: string;
};

type State = {
  isOpen: boolean;
  data: AlertData | null;
};

type Action = {
  openAlert: (data: AlertData) => void;
  closeAlert: () => void;
};

export const useAlertStore = create<State & Action>((set) => ({
  isOpen: false,
  data: null,
  openAlert: (data) => set({ isOpen: true, data }),
  closeAlert: () => set({ isOpen: false, data: null }),
}));
