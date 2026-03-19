<script setup lang="ts">
// Тестовая страница

import { perfumesTierF } from "../utils/list-tier-F";
import { perfumesTierD } from "../utils/list-tier-D";
import { perfumesTierC } from "../utils/list-tier-C";
import { perfumesTierB } from "../utils/list-tier-B";
import { perfumesTierA } from "../utils/list-tier-A";
import { perfumesTierS } from "../utils/list-tier-S";
import { perfumesTierIDK } from "../utils/list-tier-IDK";
import type { PerfumeType, PerfumesTierType } from '../utils/constants';
import { ref, computed } from "vue";
import { storeToRefs } from 'pinia';
import { usePerfumeStore } from '../stores/usePerfumeStore';

import Shop from '../components/Shop.vue';
import Brands from '../components/Brands.vue';

// type PerfumeType = {
//     brand: string;
//     perfumeName: string;
//     promoText: string;
//     imagePerfume: string;
//     price05ml: number;
//     price1ml: number;
//     price2ml: number;
//     price5ml: number;
//     price10ml: number;
//     priceFull: number;
//     visibility: "visible" | "hidden";
//     volumeMl: number;
//     notes: {
//         top: Array<{ name: string; src: string }>;
//         middle: Array<{ name: string; src: string }>;
//         base: Array<{ name: string; src: string }>;
//     };
// };

// type PromoType = Array<{
//     titlePage: string;
//     descriptionPage: string;
//     listPerfumes: Array<{
//         brand: string;
//         perfumeName: string;
//         promoText: string;
//         imagePerfume: string;
//         price05ml: number;
//         price1ml: number;
//         price2ml: number;
//         price5ml: number;
//         price10ml: number;
//         priceFull: number;
//         visibility: "visible" | "hidden";
//         volumeMl: number;
//         notes: {
//             top: Array<{ name: string; src: string }>;
//             middle: Array<{ name: string; src: string }>;
//             base: Array<{ name: string; src: string }>;
//         };
//     }>;
// }>;

const perfumeStore = usePerfumeStore();

// selectedPerfumes = selectedTier
const { selectedPerfumes } = storeToRefs(perfumeStore);

// если пустой, то выводим perfumesTierF
const displayedPromo = computed<PerfumesTierType>(() => {
    return selectedPerfumes.value.length
        ? (selectedPerfumes.value as PerfumesTierType)
        : (perfumesTierF as PerfumesTierType);
});


// Состояние модального окна
const showModal = ref(false);
const selectedPerfume = ref<PerfumeType | null>(null);

const openModal = (perfume: PerfumeType) => {
    selectedPerfume.value = perfume;
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
    selectedPerfume.value = null;
};

</script>

<template>
   
    <!-- <Shop /> -->

    <section
        class=" mx-4 bg-[#FFF1E8] border-4 border-black rounded-xl over">

        <div class="flex flex-col py-2 px-4">
            <h2 class="text-xl text-center">Тестовая</h2>
            <p class="">{{ "" }}</p>
        </div>

        <div class="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 p-4">
            <div v-for="(item, index) in displayedPromo[0]?.listPerfumes" :key="index" @click="openModal(item)"
                class="border-4 border-black rounded-xl bg-white aspect-square w-full max-w-[300px] mx-auto cursor-pointer">

                <NuxtImg class="rounded-t-lg aspect-square w-full max-w-[300px]" :src="item.imagePerfume"
                    :alt="item.perfumeName" />

                <p class="text-center leading-tight mt-1 text-sm">{{ item.brand }}</p>
                <h3 class="px-1 text-center leading-tight truncate max-w-[280px]">{{ item.perfumeName }}</h3>
                <!-- <h3 class="text-center leading-tight text-sm">{{ item.promoText }}</h3>
                <p class="text-center leading-tight mb-1">
                    <span>{{ item.price1ml }}</span>
                    -
                    <span>{{ item.price10ml }}</span>
                    <span> BYN</span>
                </p> -->
            </div>
        </div>
    </section>



    <!-- Модальное -->
    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <section
            class="bg-white mx-4 border-4 border-black rounded-xl p-4 relative min-h-[80vh] overflow-y-auto">


            <div v-if="selectedPerfume" class="flex items-center">
                
                    <div class="block">
                        <NuxtImg class="rounded-lg border-2 border-black w-[400px] max-w-sm"
                        :src="selectedPerfume.imagePerfume" :alt="selectedPerfume.perfumeName" />
                    </div>
                    

                    <div class="">
                        
                       <div class="flex items-center justify-center w-full">
                        <h3 class="perfume-title text-center font-bold mb-2">
                            {{ selectedPerfume.brand }} - {{ selectedPerfume.perfumeName }}
                        </h3>
                       </div> 


                        
                        <!-- <h3 class="text-lg font-bold text-center mb-2">Пирамида нот</h3> -->
                        <div class="max-w-fit  flex flex-col text-center ml-4">

                            <div class="flex items-center w-full">
                            <hr class="flex-1 border-t-2 border-black" />
                            <h4 class="font-semibold p-2 text-lg">Верхние ноты</h4>
                            <hr class="flex-1 border-t-2 border-black" />
                            </div>
                            <ul class="flex flex-wrap justify-center gap-4 mt-4 mb-2">
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
                            <ul class="flex flex-wrap justify-center gap-4 mt-4 mb-2">
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
                            
                            <ul class="flex flex-wrap justify-center gap-4 mt-4 mb-2">
                                <li v-for="note in selectedPerfume.notes.base" :key="note.name" class="">
                                    <NuxtImg class="aspect-square max-w-[120px] rounded-lg border-2 border-black"
                                        :src="note.src" :alt="note.name" />
                                    <p class="inline-block max-w-[100px] leading-tight mt-1">{{ note.name }}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                



            </div>

            <button
                class="relative mb-2 top-4 right-2 border-2 border-black rounded-md px-3 py-1 bg-red-400 hover:bg-red-500 transition"
                @click="closeModal">
                Закрыть окно
            </button>

        </section>
    </div>


</template>

<style>
  .perfume-title {
     font-size: 1.9rem; /* как text-6xl */
     width: 700px;
     text-align: center;
   }

   .block {
     /* width: 500px; */
     margin: 30px;
   }

</style>