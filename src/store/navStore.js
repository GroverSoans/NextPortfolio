import { create } from 'zustand'

export const useNavStore = create((set) => ({
  isNavOpen: false,
  toggleNav: () => set((state) => ({ isNavOpen: !state.isNavOpen })),
  closeNav: () => set({ isNavOpen: false }),
})) 