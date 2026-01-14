<script setup lang="ts">

const imageUrl = 'https://lulua.pl/wp-content/uploads/2024/10/perfumeria_lulua_naked_laundry_btso-900x900.jpg';
</script>


<template>
    <section class="w-[320px] h-[400px] bg-[#FFF1E8] border-4 border-black rounded-xl max-[801px]:hidden">

        <h3 class="border-b-2 border-black py-2 text-lg text-center">Корзина</h3>
        <ul class="mt-2 text-center">
            <li>
                <div class="flex w-[300px] border-2 border-black rounded-xl mx-2 my-3">
                    <!-- фотка -->
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
                    <!-- фотка -->
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

        <!-- кнопки для профиля -->
    </section>

</template>
