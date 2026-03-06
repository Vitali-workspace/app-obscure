import { defineStore } from "pinia";

export interface CartItem {
  brand: string;
  perfumeName: string;
  price: number;
  volume: string;
}

export const usePerfumeStore = defineStore('perfumeStore', {
  state: () => ({
    selectedPerfumes: [] as any[], // выбранный парфюм
    cart: [] as CartItem[],
  }),

  actions: {
    setPerfumes(perfumes: any[]) {
      this.selectedPerfumes = perfumes;
    },

    addToCart(item: CartItem) {
      this.cart.push(item);
    },

    removeFromCart(index: number) {
      this.cart.splice(index, 1);
    },

    clearCart() {
      this.cart = [];
    },
  },
});
