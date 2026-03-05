<script setup lang="ts">
import { ref, computed } from "vue";
import { storeToRefs } from 'pinia';
import { usePerfumeStore } from '../stores/usePerfumeStore';
import { perfumesTierF } from "../utils/list-tier-F";

import ModalCard from '../components/ModalCard.vue';
import type { PerfumeType, PerfumesTierType } from '../utils/constants';


const textBrand = `Pictura Fragrans воплощает в себе совокупность жизненных влияний — художественных, научных и гуманитарных. 
Это не просто парфюмерная компания; Это симфония жизненного опыта, ода искусной науке ароматов и стремление 
улучшать жизнь с помощью мощного языка запахов.`;


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
    <section
        class="w-[clamp(320px,100vw,1200px)] max-[801px]:mx-0 mx-4 bg-[#FFF1E8] border-4 border-black rounded-xl over">

        <div class="flex flex-col py-2 px-4">
            <h2 class="text-xl text-center">Borntostandout</h2>
            <p class="">{{ textBrand }}</p>
        </div>

        <div class="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 p-4">
            <div v-for="(item, index) in displayedPromo[0]?.listPerfumes" :key="index" @click="openModal(item)"
                class="border-4 border-black rounded-xl bg-white aspect-square w-full max-w-[300px] mx-auto cursor-pointer">

                <NuxtImg class="rounded-t-lg aspect-square w-full max-w-[300px]" :src="item.imagePerfume"
                    :alt="item.perfumeName" />

                <p class="text-center leading-tight mt-1 text-sm">{{ item.brand }}</p>
                <h3 class="px-1 text-center leading-tight truncate max-w-[280px]">{{ item.perfumeName }}</h3>
                <h3 class="text-center leading-tight text-sm">{{ item.promoText }}</h3>
                <p class="text-center leading-tight mb-1">
                    <span>{{ item.price1ml }}</span>
                    -
                    <span>{{ item.price10ml }}</span>
                    <span> BYN</span>
                </p>
            </div>
        </div>
    </section>

    <!--  -->
    <div class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
    max-w-[700px] max-h-[95vh] my-2 overflow-y-auto">
    
    <ModalCard
        :show="showModal"
        :selectedPerfume="selectedPerfume"
        @close="closeModal"
    />
     </div>


</template>


<style>
.over {
    overflow: auto;
}
</style>

