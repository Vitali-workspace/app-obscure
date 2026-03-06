<script setup lang="ts">
import { computed } from 'vue';
import { usePerfumeStore } from '../stores/usePerfumeStore';

const imageUrl = 'https://lulua.pl/wp-content/uploads/2024/10/perfumeria_lulua_naked_laundry_btso-900x900.jpg';

const perfumeStore = usePerfumeStore();

const cartItems = computed(() => perfumeStore.cart);

const removeItem = (index: number) => {
  perfumeStore.removeFromCart(index);
};

const placeOrder = () => {
  // Доделать обработку заказа
  perfumeStore.clearCart();
};
</script>


<template>
    <section class="max-[1001px]:hidden">
        <div class="w-[320px] min-h-[400px] h-fit bg-[#FFF1E8] border-4 border-black rounded-xl">

            <h3 class="border-b-4 border-black py-2 text-lg text-center">Корзина</h3>
            <ul class="mt-2 text-center">
                <li v-if="!cartItems.length" class="mt-4 text-sm text-gray-600">
                    Корзина пуста
                </li>

                <li v-for="(item, index) in cartItems" :key="index">
                    <div
                        class="flex w-[300px] border-2 border-black rounded-xl mx-2 my-3 items-center">
                        <!-- фотка (пока заглушка) -->
                        <NuxtImg class="rounded-lg aspect-square w-full max-w-[50px]" :src="imageUrl" />
                        <div class="flex flex-col ml-2 text-left">
                            <h3 class="text-sm font-semibold">{{ item.brand }}</h3>
                            <h4 class="text-sm italic">{{ item.perfumeName }}</h4>
                            <p class="ml-2 text-sm">
                                <span>{{ item.price }} руб</span>
                                <span> • {{ item.volume }}</span>
                            </p>
                        </div>
                        
                        <button
                            class="border-l-2 border-black ml-auto px-4 h-full"
                            @click="removeItem(index)"
                        >
                            x
                        </button>
                    </div>
                </li>
            </ul>
        </div>


        <!-- кнопки для профиля -->
        <div class="flex flex-col mt-2">
            <button
                @click="placeOrder"
                class="mt-2 py-2 bg-[#FFF1E8] border-4 border-black rounded-xl disabled:opacity-50"
                :disabled="!cartItems.length"
            >
                Заказать
            </button>
            
            <!-- <button @click="" class=" mt-2 py-2 bg-[#FFF1E8] border-4 border-black rounded-xl">
                Войти / Выйти
            </button> -->
            
            <button @click="" class="mt-2 py-2 bg-[#FFF1E8] border-4 border-black rounded-xl">
                Профиль
            </button>
            
            <!-- <button @click="" class="mt-2 py-2 bg-[#FFF1E8] border-4 border-black rounded-xl">
                История покупок
            </button> -->


            <!-- <div class="border-[10px_5px_5px_5px_#000000]">
                Содержимое div
            </div> -->
        </div>

    </section>
</template>


<style></style>
