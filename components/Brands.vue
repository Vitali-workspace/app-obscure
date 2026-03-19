<script setup lang="ts">
import { perfumesTierF } from "../utils/list-tier-F";
import { perfumesTierD } from "../utils/list-tier-D";
import { perfumesTierC } from "../utils/list-tier-C";
import { perfumesTierB } from "../utils/list-tier-B";
import { perfumesTierA } from "../utils/list-tier-A";
import { perfumesTierS } from "../utils/list-tier-S";
import { perfumesTierIDK } from "../utils/list-tier-IDK";
import { perfumesTierSoon } from "../utils/list-tier-soon";

import { usePerfumeStore } from '../stores/usePerfumeStore';

type BrandsMode = 'sidebar' | 'modal';
const props = withDefaults(defineProps<{ mode?: BrandsMode }>(), { mode: 'sidebar' });

const perfumeStore = usePerfumeStore();

// save store
function handleSelect(perfumes: any[]) {
  perfumeStore.setPerfumes(perfumes);
}
</script>


<template>
  <div>
    <section
      :class="[
        'min-w-[240px] bg-[#FFF1E8] border-4 border-black rounded-xl',
        props.mode === 'sidebar'
          ? 'h-[520px] max-[1001px]:hidden'
          : 'h-auto max-h-[80vh] overflow-y-auto'
      ]"
    >
      <h3 class="border-b-4 border-black py-2 text-lg text-center font-semibold">Уровни</h3>

      <ul class="text-center">
        <li class="py-2 border-b-2 border-black">
          <button @click="handleSelect(perfumesTierF)">Ванильный (Tier F)</button>
        </li>

        <!-- необычный -->
        <li class="py-2 border-b-2 border-black">
          <button @click="handleSelect(perfumesTierD)">Казуальный (Tier D)</button>
        </li>

        <li class="py-2 border-b-2 border-black">
          <button @click="handleSelect(perfumesTierC)">Странный (Tier C)</button>
        </li>

        <li class="py-2 border-b-2 border-black">
          <button @click="handleSelect(perfumesTierB)">Эксперементальный (Tier B)</button>
        </li>

        <li class="py-2 border-b-2 border-black">
          <button @click="handleSelect(perfumesTierA)">Хардкорный (Tier A)</button>
        </li>

        <li class="py-2 border-b-2 border-black">
          <button @click="handleSelect(perfumesTierS)">Экстремальный (Tier S)</button>
        </li>

        <li class="py-2 hidden">
          <button @click="handleSelect(perfumesTierIDK)">Неопределённый (Tier IDK)</button>
        </li>


        
        <li class="py-2 border-t-4 border-b-2 border-black">
          <button @click="handleSelect(perfumesTierSoon)">Скоро приедет</button>
        </li>

        <li class="py-2 border-b-2 border-black">
          <button @click="">Наборы пробников</button>
        </li>

        <li class="py-2 border-b-2 border-black">
          <button @click="">Услуги / Встречи</button>
        </li>

        <li class="py-2 border-b-2 border-black">
          <button @click="handleSelect(perfumesTierIDK)">Остатки во флаконах (test)</button>
        </li>

        <li class="py-2">
          <button @click="">Временные предложения</button>
        </li>

      </ul>
    </section>

    <!--
    <section
      class="min-w-[240px] h-[140px] bg-[#FFF1E8] border-4 border-black rounded-xl mt-4 max-[1001px]:hidden"
    >
      <ul class="text-center">
        <li class="border-t-4 border-b-2 border-black py-2">Наборы пробников</li>
        <li class="py-2 border-b-2 border-black">Услуги / Встречи</li>
        <li class="py-2">Остатки во флаконах</li>
      </ul>
    </section>
    -->
  </div>
</template>
