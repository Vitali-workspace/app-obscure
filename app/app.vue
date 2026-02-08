<template>
  <div class="flex min-[801px] justify-center h-screen bg-[#FFB904]">
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->

    <!-- ! рамку из мейн убрать -->
    <!-- ! мейн по высоте экрана -->
    <main class="flex w-[clamp(500px,99vw,1800px)] max-[801px]:m-0 m-4 overflow-hidden">

      <!-- ! Бренды -->
      <!-- <Brands /> -->
      <Brands />

      <!-- ! Магазин -->
      <!-- <Shop /> -->
      <component :is="viewComponents[currentView]" />

      <!-- ! Корзина -->
      <Cart />


    </main>
    <nav
      class="flex bottom-0 w-screen justify-around fixed text-lg pb-8 pt-4 bg-[#FFB904] min-[1001px]:hidden border-t-4 border-black">
      <button @click="setView('Brands')" class="mx-4">Бренды</button>
      <button @click="setView('Shop')" class="">Магазин</button>
      <button @click="setView('Cart')" class="ml-4">Корзина</button>
      <button @click="setView('Profile')" class="mx-4">Профиль</button>
    </nav>
  </div>
</template>



<script setup lang="ts">

import { ref } from 'vue';
import Shop from '../components/Shop.vue';
import Brands from '../components/Brands.vue';
import Cart from '../components/ShoppingCart.vue';
import Profile from '../components/Profile.vue'


// Тип для названий вкладок
type ViewName = 'Brands' | 'Shop' | 'Cart' | 'Profile';

// Карта компонентов (для строгой типизации)
const viewComponents = {
  Brands,
  Shop,
  Cart,
  Profile,
} as const;

// Текущее активное представление (типизированное)
const currentView = ref<ViewName>('Shop');

// Функция для переключения, с типом аргумента
function setView(view: ViewName): void {
  currentView.value = view
}


</script>
