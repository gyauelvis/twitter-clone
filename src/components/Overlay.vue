<template>
    <a class="overlay" @click.prevent="store.toggleSidebar">
    </a>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter';
const store = useCounterStore();
</script>

<style scoped>
    a{
        display: none;
        position: fixed;
        width: 100%;
        background-color: #ffffff31;
        height: 100%;
        z-index: 20;
        top:0;
    }
</style>