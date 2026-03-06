<script setup lang="ts">

import type { PerfumeType } from '../utils/constants';
import { usePerfumeStore } from '../stores/usePerfumeStore';
import type { CartItem } from '../stores/usePerfumeStore';

const perfumeStore = usePerfumeStore();

const props = defineProps<{
  show: boolean;
  selectedPerfume: PerfumeType | null;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'buy', volume: string, price: number): void;
}>();

const closeModal = () => emit('close');

const handleBuy = (volume: string, price: number) => {
  if (!props.selectedPerfume) return;

  const item: CartItem = {
    brand: props.selectedPerfume.brand,
    perfumeName: props.selectedPerfume.perfumeName,
    price,
    volume,
  };

  perfumeStore.addToCart(item);
  emit('buy', volume, price);
};

</script>



<template>
  <div v-if="show" class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
    
    <section class="flex flex-col max-w-[900px] min-w-[320px] max-h-[90vh] bg-white border-4 border-black rounded-xl p-4 overflow-y-auto">
            
            <button
                class="top-2 right-2 border-2 border-black rounded-md px-3 py-1 bg-red-400 hover:bg-red-500 transition"
                @click="closeModal">
                Закрыть окно
            </button>

            <div v-if="selectedPerfume" class="flex flex-col md:flex-row gap-6 mt-8">
                <div class="flex flex-col items-center">
                    <NuxtImg class="rounded-lg border-2 border-black w-full max-w-sm"
                        :src="selectedPerfume.imagePerfume" :alt="selectedPerfume.perfumeName" />


                    <div class="mt-4 w-full">
                        <h3 class="text-lg font-bold text-center mb-2">Пирамида нот</h3>
                        <div class="flex flex-col text-center">

                            <div class="flex items-center w-full">
                            <div class="flex-1 h-px bg-black"></div>
                            <h4 class="font-semibold p-2 text-lg">Верхние ноты</h4>
                            <div class="flex-1 h-px bg-black"></div>
                            </div>
                            
                            <ul class="flex flex-wrap justify-center gap-4">
                                <li v-for="note in selectedPerfume.notes.top" :key="note.name" class="">
                                    <NuxtImg class="aspect-square max-w-[120px] rounded-lg border-2 border-black"
                                        :src="note.src" :alt="note.name" />
                                    <p class="inline-block max-w-[100px] leading-tight mt-1">{{ note.name }}</p>
                                </li>
                            </ul>


                            <div class="flex items-center w-full">
                            <hr class="flex-1 border-t-2 border-black" />
                            <h4 class="font-semibold p-2 text-lg">Средние ноты</h4>
                            <hr class="flex-1 border-t-2 border-black" />
                            </div>
                            
                            <ul class="flex flex-wrap justify-center gap-4">
                                <li v-for="note in selectedPerfume.notes.middle" :key="note.name" class="">
                                    <NuxtImg class="aspect-square max-w-[120px] rounded-lg border-2 border-black"
                                        :src="note.src" :alt="note.name" />
                                    <p class="inline-block max-w-[100px] leading-tight mt-1">{{ note.name }}</p>
                                </li>
                            </ul>


                            <div class="flex items-center w-full">
                            <hr class="flex-1 border-t-2 border-black" />
                            <h4 class="font-semibold p-2 text-lg">Нижние ноты</h4>
                            <hr class="flex-1 border-t-2 border-black" />
                            </div>
                            
                            <ul class="flex flex-wrap justify-center gap-4">
                                <li v-for="note in selectedPerfume.notes.base" :key="note.name" class="">
                                    <NuxtImg class="aspect-square max-w-[120px] rounded-lg border-2 border-black"
                                        :src="note.src" :alt="note.name" />
                                    <p class="inline-block max-w-[100px] leading-tight mt-1">{{ note.name }}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div class="flex flex-col justify-between md:w-1/2">
                    <div>
                        <h3 class="text-xl font-bold">{{ selectedPerfume.brand }}</h3>
                        <h4 class="text-lg italic">{{ selectedPerfume.perfumeName }}</h4>

                        <p class="text-gray-600 mt-2">{{ selectedPerfume.promoText }}</p>
                        <p class="mt-2">
                            Этот аромат — уникальное сочетание чувственных нот и изящной композиции.
                        </p>
                    </div>

                    <div class="flex gap-4 mt-4">
                        <button class="border-2 border-black rounded-lg px-4 py-2 bg-green-200 hover:bg-green-300"
                            v-if="selectedPerfume.price05ml > 0" @click="handleBuy('0.5мл', selectedPerfume.price05ml)">
                            Купить {{ selectedPerfume.price05ml }} BYN 0.5мл
                        </button>
                        <button class="border-2 border-black rounded-lg px-4 py-2 bg-green-200 hover:bg-green-300"
                            v-if="selectedPerfume.price1ml > 0" @click="handleBuy('1мл', selectedPerfume.price1ml)">
                            Купить {{ selectedPerfume.price1ml }} BYN 1мл
                        </button>

                        <button class="border-2 border-black rounded-lg px-4 py-2 bg-blue-200 hover:bg-blue-300"
                            v-if="selectedPerfume.price2ml > 0" @click="handleBuy('2мл', selectedPerfume.price2ml)">
                            Купить {{ selectedPerfume.price2ml }} BYN 2мл
                        </button>
                        <button class="border-2 border-black rounded-lg px-4 py-2 bg-green-200 hover:bg-green-300"
                            v-if="selectedPerfume.price5ml > 0" @click="handleBuy('5мл', selectedPerfume.price5ml)">
                            Купить {{ selectedPerfume.price5ml }} BYN 5мл
                        </button>
                        <button class="border-2 border-black rounded-lg px-4 py-2 bg-green-200 hover:bg-green-300"
                            v-if="selectedPerfume.price10ml > 0" @click="handleBuy('10мл', selectedPerfume.price10ml)">
                            Купить {{ selectedPerfume.price10ml }} BYN 10мл
                        </button>
                        <button class="border-2 border-black rounded-lg px-4 py-2 bg-green-200 hover:bg-green-300"
                            v-if="selectedPerfume.priceFull > 0" @click="handleBuy('50мл', selectedPerfume.priceFull)">
                            Купить {{ selectedPerfume.priceFull }} BYN Флакон
                        </button>
                    </div>
                </div>
            </div>


        </section>
    </div>
   
</template>


<style>
    .over {
        overflow: auto;
    }
</style>
