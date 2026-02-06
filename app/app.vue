<template>
  <div class="flex min-[801px] justify-center h-screen bg-[#FFB904]">
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->

    <!-- ! рамку из мейн убрать -->
    <!-- ! мейн по высоте экрана -->
    <main class="flex w-[clamp(500px,99vw,1800px)] max-[801px]:m-0 m-4 overflow-hidden">

      <!-- ! Бренды -->
      <Brands />

      <!-- <section class="min-w-[220px] h-[400px] bg-[#FFF1E8] border-4 border-black rounded-xl max-[1001px]:hidden">
        <h3 class="border-b-2 border-black py-2 text-lg text-center">Все Бренды</h3>
        <ul class="mt-2 text-center">
          <li>Filippo Sorcinelli</li>
          <li class="hidden">Etat Libre d'Orange</li>
          <li>Наборы пробников</li>
          <li>Остатки во флаконах</li>
          <li class="hidden">Услуги / Встречи</li>
          <li>Все</li>
        </ul>
      </section> -->

      <!-- ! Магазин -->
      <Shop />


      <!-- ! Корзина -->
      <Cart />


    </main>
    <nav
      class="flex bottom-0 w-screen justify-around fixed text-lg pb-8 pt-4 bg-[#FFB904] min-[1001px]:hidden border-t-4 border-black">
      <button @click="" class="mx-4">Бренды</button>
      <button @click="" class="">Магазин</button>
      <button @click="" class="ml-4">Корзина</button>
      <button @click="" class="mx-4">Профиль</button>
    </nav>
  </div>
</template>



<script setup lang="ts">
import Shop from '../components/Shop.vue';
import Brands from '../components/Brands.vue'
import Cart from '../components/ShoppingCart.vue'

const imageUrl = 'https://lulua.pl/wp-content/uploads/2024/10/perfumeria_lulua_naked_laundry_btso-900x900.jpg';
</script>
