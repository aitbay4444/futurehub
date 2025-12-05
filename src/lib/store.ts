import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CompareState {
  compareList: string[]; // Массив ID вузов (например ["kbtu", "satbayev"])
  addToCompare: (id: string) => void;
  removeFromCompare: (id: string) => void;
  isInCompare: (id: string) => boolean;
  clearCompare: () => void;
}

export const useCompareStore = create<CompareState>()(
  persist(
    (set, get) => ({
      compareList: [],
      
      addToCompare: (id) => {
        const current = get().compareList;
        // Не даем добавить больше 5 вузов, чтобы таблица не лопнула
        if (current.length >= 5) return; 
        if (!current.includes(id)) {
          set({ compareList: [...current, id] });
        }
      },

      removeFromCompare: (id) => {
        set({ compareList: get().compareList.filter((item) => item !== id) });
      },

      isInCompare: (id) => {
        return get().compareList.includes(id);
      },

      clearCompare: () => set({ compareList: [] }),
    }),
    {
      name: 'compare-storage', // Сохраняем в LocalStorage, чтобы при обновлении страницы выбор не слетал
    }
  )
);