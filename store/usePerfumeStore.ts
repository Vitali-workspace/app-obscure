import { defineStore } from "pinia";
import { ref } from "vue";

export const usePerfumeStore = defineStore("perfume", () => {
  const selectedPerfumes = ref<any[]>([]);

  // Экшен для обновления данных
  function setPerfumes(perfumes: any[]) {
    selectedPerfumes.value = perfumes;
  }

  return { selectedPerfumes, setPerfumes };
});
