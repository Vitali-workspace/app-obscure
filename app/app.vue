<script setup lang="ts">

import { onBeforeUnmount, onMounted, ref } from 'vue';
import Shop from '../components/Shop.vue';
import Brands from '../components/Brands.vue'; // Menu
import Cart from '../components/ShoppingCart.vue';
import Profile from '../components/Profile.vue';
import ScreenMode from '../components/Testscreen.vue';


type ModalName = 'brands' | 'cart';
const activeModal = ref<ModalName | null>(null);

const openBrandsModal = () => {
  activeModal.value = 'brands';
};

const openCartModal = () => {
  activeModal.value = 'cart';
};

const closeModal = () => {
  activeModal.value = null;
};

const onKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') closeModal();
};

onMounted(() => window.addEventListener('keydown', onKeyDown));
onBeforeUnmount(() => window.removeEventListener('keydown', onKeyDown));

</script>



<template>
  <div class="flex min-[801px] justify-center h-screen bg-[#FFB904]">

    <main class="flex w-[clamp(500px,99vw,1800px)] max-[801px]:m-0 m-4 overflow-hidden">
      <Brands />
      <Shop />
      <!-- <ScreenMode /> -->
      <Cart />
    </main>

    <nav
      class="flex bottom-0 w-screen justify-around fixed text-lg pb-8 pt-4 bg-[#FFB904] min-[1001px]:hidden border-t-4 border-black">
      <button @click="openBrandsModal" class="mx-4">Бренды</button>
      <button @click="openCartModal" class="ml-4">Корзина</button>

      <button @click="" class="">Магазин</button>
      <button @click="" class="mx-4">Профиль</button>
    </nav>

    <div
      v-if="activeModal"
      class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      @click.self="closeModal"
    >
      <section class="flex flex-col max-w-[900px] w-[90vw] max-h-[90vh] bg-white border-4 border-black rounded-xl p-4 overflow-y-auto">
        <button
          class="self-end border-2 border-black rounded-md px-3 py-1 bg-red-400 hover:bg-red-500 transition"
          @click="closeModal"
        >
          Закрыть окно
        </button>

        <div class="mt-4">
          <Brands v-if="activeModal === 'brands'" mode="modal" @select="closeModal" />
          <Cart v-else-if="activeModal === 'cart'" mode="modal" />
        </div>
      </section>
    </div>
  </div>
</template>




