<template>
    <h3>La temperatura actual es:  {{ weathherStore.temperatura }} °</h3>

</template>

<script setup>
import { useWeather } from '../composables/useWeather';
import { onMounted } from 'vue';
import { useWeatherStore } from '../stores/weathherStore';

const weathherStore = useWeatherStore();

onMounted(() => {
    useWeather();
})
</script>

<style scoped>
</style>