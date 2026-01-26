<script setup lang="ts"></script>

<template>
    <section>
        <h2>Адресс доставки</h2>
        <ul>
            <li>
                <label for="name">Имя</label>
                <input type="text" placeholder="Имя" id="name">
            </li>
            <li>
                <label for="surname">Фамилия</label>
                <input type="text" placeholder="Фамилия" id="surname">
            </li>
            <li>
                <label for="delivery-city">Город доставки</label>
                <input type="text" placeholder="Минск" id="delivery-city">
            </li>
            <li>
                <label for="delivery-address">Адрес и номер дома</label>
                <input type="text" placeholder="ул Ленина, 44" id="delivery-address">
            </li>
            <li>
                <label for="belposhta-index">Почтовый индекс Белпочты</label>
                <input type="text" placeholder="220011" id="belposhta-index">
            </li>
            <li>
                <label for="europost-address">Адрес европочты</label>
                <input type="text" placeholder="220011" id="europost-address">
            </li>
            <li>
                <label for="phone-number">Номер телефона</label>
                <input type="text" placeholder="+375..." id="phone-number">
            </li>
            <li>
                <label for="telegram-tag">Тег в телеграм</label>
                <input type="text" placeholder="@name" id="telegram-tag">
            </li>
        </ul>
        <button class="">Сохранить данные</button>
    </section>


    <section>
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
    </section>
</template>
