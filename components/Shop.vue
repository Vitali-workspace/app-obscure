<script setup lang="ts">
import { ref } from 'vue';
import { perfumesTierF, perfumesTierD, perfumesTierC, perfumesTierB, perfumesTierA, perfumesTierS, perfumesTierIDK } from '../utils/perfumes';

// visibility: visible - hidden
// url - src

type PerfumeType = {
    brand: string;
    perfumeName: string;
    promoText: string;
    imagePerfume: string;
    price05ml: number;
    price1ml: number;
    price2ml: number;
    price5ml: number;
    price10ml: number;
    priceFull: number;
    visibility: "visible" | "hidden";
    volumeMl: number;
    notes: {
        top: Array<{ name: string; src: string }>;
        middle: Array<{ name: string; src: string }>;
        base: Array<{ name: string; src: string }>;
    };
};

type PromoType = Array<{
    titlePage: string;
    descriptionPage: string;
    listPerfumes: Array<{
        brand: string;
        perfumeName: string;
        promoText: string;
        imagePerfume: string;
        price05ml: number;
        price1ml: number;
        price2ml: number;
        price5ml: number;
        price10ml: number;
        priceFull: number;
        visibility: "visible" | "hidden";
        volumeMl: number;
        notes: {
            top: Array<{ name: string; src: string }>;
            middle: Array<{ name: string; src: string }>;
            base: Array<{ name: string; src: string }>;
        };
    }>;
}>;

//const testList: PromoType = perfumesTierS;

const textBrand = `Pictura Fragrans воплощает в себе совокупность жизненных влияний — художественных, научных и гуманитарных. 
Это не просто парфюмерная компания; Это симфония жизненного опыта, ода искусной науке ароматов и стремление 
улучшать жизнь с помощью мощного языка запахов.`;


//=====================

interface Purchase {
    volume: string;
    price: number;
    timestamp: Date;
}


// -------------------------------
// Состояние модального окна
// -------------------------------
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

//======================

const handleBuy = (volume: string, price: number) => {
    const purchase: Purchase = {
        volume: volume,
        price: price,
        timestamp: new Date()
    }
    console.warn('Покупка сохранена:', purchase)
}

</script>



<template>
    <section
        class="w-[clamp(320px,100vw,1200px)] max-[801px]:mx-0 mx-4 bg-[#FFF1E8] border-4 border-black rounded-xl over">

        <div class="flex flex-col py-2 px-4">
            <h2 class="text-xl text-center">Borntostandout</h2>
            <p class="">{{ textBrand }}</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
            <div v-for="(item, index) in perfumesTierS[0]?.listPerfumes" :key="index" @click="openModal(item)"
                class="border-4 border-black rounded-xl bg-white aspect-square w-full max-w-[300px] mx-auto cursor-pointer">
                <!-- Контент квадрата -->
                <NuxtImg class="rounded-t-lg aspect-square w-full max-w-[300px]" :src="item.imagePerfume"
                    :alt="item.perfumeName" />
                <h3 class="text-center">{{ item.perfumeName }}</h3>
                <h3 class="text-center">{{ item.promoText }}</h3>
                <p class="text-center">
                    <span>{{ item.price1ml }}</span>
                    -
                    <span>{{ item.price10ml }}</span>
                    <span> BYN</span>
                </p>
            </div>
        </div>
    </section>


    <!-- ============== -->
    <!-- Модальное окно -->
    <!-- ============== -->
    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <section
            class="bg-white w-[clamp(320px,90vw,1200px)] border-4 border-black rounded-xl p-4 relative max-h-[90vh] overflow-y-auto">
            <button
                class="absolute top-2 right-2 border-2 border-black rounded-md px-3 py-1 bg-red-400 hover:bg-red-500 transition"
                @click="closeModal">
                Закрыть окно
            </button>

            <div v-if="selectedPerfume" class="flex flex-col md:flex-row gap-6 mt-8">
                <div class="flex flex-col items-center ">
                    <NuxtImg class="rounded-lg border-2 border-black w-full max-w-sm"
                        :src="selectedPerfume.imagePerfume" :alt="selectedPerfume.perfumeName" />


                    <div class="mt-4 w-full">
                        <h3 class="text-lg font-bold text-center mb-2">Пирамида нот</h3>
                        <div class="flex flex-col text-center">

                            <h4 class="font-semibold border-t-2 border-black py-2 text-lg">Верхние</h4>
                            <ul class="flex flex-wrap justify-center gap-4">
                                <li v-for="note in selectedPerfume.notes.top" :key="note.name" class="">
                                    <NuxtImg class="aspect-square max-w-[120px] rounded-lg border-2 border-black"
                                        :src="note.src" :alt="note.name" />
                                    <p class="inline-block max-w-[100px] leading-tight mt-1">{{ note.name }}</p>
                                </li>
                            </ul>

                            <h4 class="font-semibold mt-4 border-t-2 border-black py-2 text-lg">Сердце</h4>
                            <ul class="flex flex-wrap justify-center gap-4">
                                <li v-for="note in selectedPerfume.notes.middle" :key="note.name" class="">
                                    <NuxtImg class="aspect-square max-w-[120px] rounded-lg border-2 border-black"
                                        :src="note.src" :alt="note.name" />
                                    <p class="inline-block max-w-[100px] leading-tight mt-1">{{ note.name }}</p>
                                </li>
                            </ul>

                            <h4 class="font-semibold mt-4 border-t-2 border-black py-2 text-lg">База</h4>
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

.grid-map {
    gap: 20px;
}
</style>
