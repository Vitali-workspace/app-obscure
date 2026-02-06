<script setup lang="ts">
const brandList = ["Filippo Sorcinelli", "Etat Libre d'Orange", "Дискавери сэты", "Услуги / Встречи", "Все"];
// Остатки во флаконах
</script>


<template>
    <section class="min-w-[220px] h-[400px] bg-[#FFF1E8] border-4 border-black rounded-xl max-[1001px]:hidden">
        <h3 class="border-b-2 border-black py-2 text-lg text-center">Все Бренды</h3>
        <ul class="mt-2 text-center">
            <li v-for="(brands, index) in brandList" :key="index" class="py-1 border-b-2 border-black">{{ brands }}</li>
        </ul>
    </section>
</template>
