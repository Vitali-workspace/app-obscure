<template>
  <div class="flex min-[801px]:justify-center h-screen bg-slate-400">
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->

    <!-- ! рамку из мейн убрать -->
    <!-- ! мейн по высоте экрана -->
    <main class="flex w-[clamp(300px,90vw,1800px)] max-[801px]:flex-col max-[801px]:m-0 m-4">

      <!-- ! Бренды -->
      <section class="w-[320px] h-[400px] bg-[#FFB904] border-4 border-black rounded-xl max-[801px]:hidden">
        <h3 class="border-b-2 border-black py-2 text-lg text-center">Все Бренды</h3>
        <ul class="mt-2 text-center">
          <li>Filippo Sorcinelli</li>
          <li>Etat Libre d'Orange</li>
          <li>Orto Parisi</li>
          <li>Остатки во флаконах</li>
        </ul>
      </section>


      <!-- ! Магазин -->
      <section class="w-[clamp(320px,100vw,1200px)] mx-4 bg-[#FFB904] border-4 border-black rounded-xl">

        <div class="flex flex-col py-2 px-4">
          <h2 class="text-xl text-center">Borntostandout</h2>
          <p class="">{{ textBrand }}</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
          <div v-for="(item, index) in 8" :key="index"
            class="border-4 border-black rounded-xl bg-white aspect-square w-full max-w-[300px] mx-auto">
            <!-- Контент квадрата -->
            <NuxtImg class="rounded-t-lg aspect-square w-full max-w-[300px]" :src="imageUrl" />
            <h3 class="text-center">Naked Laundry</h3>
            <p class="text-center">9.99<span> BYN</span></p>
          </div>
        </div>
      </section>



      <!-- ! Корзина -->
      <section class="w-[320px] h-[400px] bg-[#FFB904] border-4 border-black rounded-xl max-[801px]:hidden">

        <h3 class="border-b-2 border-black py-2 text-lg text-center">Корзина</h3>
        <ul class="mt-2 text-center">
          <li>
            <div class="flex w-[300px] h-[50px] border-2 border-black rounded-xl m-2">
              <!-- фотка -->
              <NuxtImg class="rounded-lg aspect-square w-full max-w-[40px]" :src="imageUrl" />
              <div class="flex flex-col ml-2">
                <h3>Borntostandout</h3>
                <h4>Naked Laundry</h4>
              </div>
              <p class="ml-2"><span>5 руб</span><sup> 2 мл</sup></p>
              <button class="border-l-2 border-black ml-auto px-4">x</button>
            </div>
          </li>
        </ul>
      </section>


    </main>
    <nav
      class="flex bottom-0 w-screen justify-around fixed text-lg pb-8 pt-4 bg-[#FFB904] min-[801px]:hidden border-t-4 border-black">
      <button class="mx-4">Бренды</button>
      <button class="">Магазин</button>
      <button class="ml-4">Корзина</button>
      <button class="mx-4">Профиль</button>
    </nav>
  </div>
</template>



<script setup lang="ts">

const imageUrl = 'https://lulua.pl/wp-content/uploads/2024/10/perfumeria_lulua_naked_laundry_btso-900x900.jpg';
const textBrand = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id eaque quidem mollitia
  voluptatem quaerat ad quos, laboriosam deserunt illum illo vitae officiis sunt optio rerum at numquam earum. Aliquam, voluptas.`;

</script>
