<template>
  <div class="flex min-[801px] justify-center h-screen bg-[#FFB904]">
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->

    <!-- ! рамку из мейн убрать -->
    <!-- ! мейн по высоте экрана -->
    <main class="flex w-[clamp(500px,99vw,1800px)] max-[801px]:m-0 m-4 overflow-hidden">

      <!-- ! Бренды -->
      <!-- <Brands /> -->

      <section class="min-w-[220px] h-[400px] bg-[#FFF1E8] border-4 border-black rounded-xl max-[1001px]:hidden">
        <h3 class="border-b-2 border-black py-2 text-lg text-center">Все Бренды</h3>
        <ul class="mt-2 text-center">
          <li>Filippo Sorcinelli</li>
          <li>Etat Libre d'Orange</li>
          <li>Orto Parisi</li>
          <li>Остатки во флаконах</li>
          <li>Услуги / Встречи</li>
          <li>Все</li>
        </ul>
      </section>

      <!-- ! Магазин -->
      <Shop />


      <!-- ! Корзина -->
      <Cart />

      <!-- <section></section> -->


      <!-- <section class="max-[801px]:hidden">
        <div class="w-[320px] h-[400px] bg-[#FFF1E8] border-4 border-black rounded-xl">

          <h3 class="border-b-2 border-black py-2 text-lg text-center">Корзина</h3>
          <ul class="mt-2 text-center">
            <li>
              <div class="flex w-[300px] border-2 border-black rounded-xl mx-2 my-3">
                
                <NuxtImg class="rounded-lg aspect-square w-full max-w-[50px]" :src="imageUrl" />
                <div class="flex flex-col ml-2">
                  <h3>Borntostandout</h3>
                  <h4>Naked Laundry</h4>
                </div>
                <p class="ml-2"><span>5 руб</span><sup> 2 мл</sup></p>
                <button class="border-l-2 border-black ml-auto px-4">x</button>
              </div>
            </li>
            <li>
              <div class="flex w-[300px] border-2 border-black rounded-xl mx-2 my-3">
                
                <NuxtImg class="rounded-lg aspect-square w-full max-w-[50px]" :src="imageUrl" />
                <div class="flex flex-col ml-2">
                  <h3>Borntostandout</h3>
                  <h4>Naked Laundry</h4>
                </div>
                <p class="ml-2"><span>5 руб</span><sup> 2 мл</sup></p>
                <button class="border-l-2 border-black ml-auto px-4">x</button>
              </div>
            </li>
          </ul>
        </div>


        
        <div class="flex flex-col mt-8">
          <button @click="" class="bg-[#FFF1E8] border-4 border-black rounded-xl">
            Войти / Выйти
          </button>
          <button @click="" class="bg-[#FFF1E8] border-4 border-black rounded-xl">
            Профиль
          </button>
          <button @click="" class="bg-[#FFF1E8] border-4 border-black rounded-xl">
            История покупок
          </button>
        </div>

      </section> -->


    </main>
    <nav
      class="flex bottom-0 w-screen justify-around fixed text-lg pb-8 pt-4 bg-[#FFB904] min-[1001px]:hidden border-t-4 border-black">
      <button class="mx-4">Бренды</button>
      <button class="">Магазин</button>
      <button class="ml-4">Корзина</button>
      <button class="mx-4">Профиль</button>
    </nav>
  </div>
</template>



<script setup lang="ts">
import Shop from '../components/Shop.vue';
import Brands from '../components/Brands.vue'
import Cart from '../components/ShoppingCart.vue'

const imageUrl = 'https://lulua.pl/wp-content/uploads/2024/10/perfumeria_lulua_naked_laundry_btso-900x900.jpg';
</script>
