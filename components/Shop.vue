<script setup lang="ts">

const textBrand = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id eaque quidem mollitia
  voluptatem quaerat ad quos, laboriosam deserunt illum illo vitae officiis sunt optio rerum at numquam earum. Aliquam, voluptas.`;

const imageUrl = 'https://lulua.pl/wp-content/uploads/2024/10/perfumeria_lulua_naked_laundry_btso-900x900.jpg';

</script>



<template>
    <section class="w-[clamp(320px,100vw,1200px)] mx-4 bg-[#FFF1E8] border-4 border-black rounded-xl overflow-y-auto">

        <div class="flex flex-col py-2 px-4">
            <h2 class="text-xl text-center">Borntostandout</h2>
            <p class="">{{ textBrand }}</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
            <div v-for="(item, index) in 6" :key="index"
                class="border-4 border-black rounded-xl bg-white aspect-square w-full max-w-[300px] mx-auto">
                <!-- Контент квадрата -->
                <NuxtImg class="rounded-t-lg aspect-square w-full max-w-[300px]" :src="imageUrl" />
                <h3 class="text-center">Naked Laundry</h3>
                <p class="text-center">9.99<span> BYN</span></p>
            </div>
        </div>
    </section>
</template>
