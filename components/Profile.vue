<script setup lang="ts"></script>

<template>
    <section>
        <p>Адресс доставки</p>
        <ul>
            <li>Город доставки
                <input type="text">
            </li>
            <li>Улица и номер дома</li>
            <li>Почтовый индекс Белпочты</li>
            <li>Данные Европочты</li>
            <li>Номер телефона</li>
            <li>Тег в телеграм</li>
        </ul>
        <button>Сохранить данные</button>
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
