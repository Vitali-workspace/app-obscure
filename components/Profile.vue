<script setup lang="ts">

</script>


<template>
    <section class="min-w-[520px] bg-[#FFF1E8] border-4 border-black rounded-xl mx-auto">
        <h2 class="text-center py-2">Адресс доставки</h2>


        <ul class="flex flex-col mx-4">
            <li class="flex flex-col">
                <label for="name">Имя</label>
                <input class="p-2 border-2 border-black rounded-xl" type="text" placeholder="Имя" id="name">
            </li>
            <li class="flex flex-col">
                <label for="surname">Фамилия</label>
                <input class="border-2 border-black rounded-xl" type="text" placeholder="Фамилия" id="surname">
            </li>
            <li class="flex flex-col">
                <label for="delivery-city">Город доставки</label>
                <input class="border-2 border-black rounded-xl" type="text" placeholder="Минск" id="delivery-city">
            </li>
            <li class="flex flex-col">
                <label for="delivery-address">Адрес и номер дома</label>
                <input class="border-2 border-black rounded-xl" type="text" placeholder="ул Ленина, 44"
                    id="delivery-address">
            </li>
            <li class="flex flex-col">
                <label for="belposhta-index">Почтовый индекс Белпочты</label>
                <input class="border-2 border-black rounded-xl" type="text" placeholder="220011" id="belposhta-index">
            </li>
            <li class="flex flex-col">
                <label for="europost-address">Адрес европочты</label>
                <input class="border-2 border-black rounded-xl" type="text" placeholder="ул Ленина, 29"
                    id="europost-address">
            </li class="flex flex-col">
            <li class="flex flex-col">
                <label for="phone-number">Номер телефона</label>
                <input class="border-2 border-black rounded-xl" type="text" placeholder="+375291112233"
                    id="phone-number">
            </li>
            <li class="flex flex-col">
                <label for="telegram-tag">Тег в телеграм</label>
                <input class="border-2 border-black rounded-xl" type="text" placeholder="@name" id="telegram-tag">
            </li>
        </ul>


        <div class="flex justify-center mt-2">
            <button class="m-4 p-3 bg-[#FFF1E8] border-4 border-black rounded-xl">Сохранить данные</button>
        </div>

    </section>


    <!-- <section>
        <p>История заказов</p>
        <ul>
            <li>
                <div>
                    <p>{{ 'бренд' }}<span>{{ 'название' }}</span> <span>{{ 'цены' }}</span></p>
                </div>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </section> -->

</template>

<style></style>
