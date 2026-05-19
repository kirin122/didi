<!-- pages/HomePage.vue -->

<script setup lang="ts">
import Card from '../components/Card.vue'
import { list } from '../data/list'
</script>

<template>
    <main class="container">
        <h1>列表</h1>
        <div v-if="list.length === 0" class="empty">
            沒有資料
        </div>
        <div v-else>
            <Card v-for="item in list" :key="item.id" :item="item" />
        </div>
    </main>
</template>

<style scoped lang="scss">
.container {
    margin: 0 auto;
    padding: 16px;
    min-height: 100vh;
    width: 100%;
    background-color: #fff;

    h1 {
        text-align: left;
        font-weight: 700;
        color: black;
        margin: 16px autoßß;
    }
}

.empty {
    text-align: center;
    color: black;
}
</style>
