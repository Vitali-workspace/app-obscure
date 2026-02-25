import { defineStore } from "pinia";

export const usePerfumeStore = defineStore('perfumeStore', {
  state: () => ({
    selectedPerfumes: [] as any[], // типизировать интерфейс
  }),

  actions: {
    setPerfumes(perfumes: any[]) {
      this.selectedPerfumes = perfumes;
    },
  },
});
