<script setup lang="ts">

const imageUrl = 'https://lulua.pl/wp-content/uploads/2024/10/perfumeria_lulua_naked_laundry_btso-900x900.jpg';
</script>


<template>
    <section class="max-[1001px]:hidden">
        <div class="w-[320px] min-h-[400px] h-fit bg-[#FFF1E8] border-4 border-black rounded-xl">

            <h3 class="border-b-2 border-black py-2 text-lg text-center">Корзина</h3>
            <ul class="mt-2 text-center">
                <li>
                    <div v-for="(item, index) in 5" :key="index"
                        class="flex w-[300px] border-2 border-black rounded-xl mx-2 my-3">
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
        </div>


        <!-- кнопки для профиля -->
        <div class="flex flex-col mt-2">
            <button @click="" class="mt-2 py-2 bg-[#FFF1E8] border-4 border-black rounded-xl">
                Войти / Выйти
            </button>
            <button @click="" class="mt-2 py-2 bg-[#FFF1E8] border-4 border-black rounded-xl">
                Профиль
            </button>
            <button @click="" class="mt-2 py-2 bg-[#FFF1E8] border-4 border-black rounded-xl">
                История покупок
            </button>


            <!-- <div class="border-[10px_5px_5px_5px_#000000]">
                Содержимое div
            </div> -->
        </div>

    </section>
</template>


<style></style>
