import { create } from "zustand";

//Interface for the array
interface Joke {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}

interface yourStore {
  jokes: Joke | null;
  setJoke: (val: Joke | null) => void;
  fetchJoke: () => Promise<void>;
}
export const appStore= create<yourStore>((set) => ({
  jokes: null,
  setJoke: (val: Joke | null) => set(() => ({ jokes: val })),

  fetchJoke: async () => {
    try {
      console.log("Fetching jokes...");
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      if (!response.ok) {
        throw new Error(`status:${response.status}`);
      }
      const data = await response.json();
      set(() => ({ jokes: data }));
    } catch (error) {
      console.error("Error fetching movies:", error);
      throw error;
    }
  },



}));
