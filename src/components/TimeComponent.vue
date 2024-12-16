<template>
  <div>
    <p>Hora: {{ timeStore.hour }}</p>
    <p>Fecha: {{ timeStore.date }}</p>
  </div>
</template>
<script setup>
import { useTime } from '@/composable/useTime'
import { onMounted } from 'vue'
import { useTimeStore } from '@/stores/timeStore'

const timeStore = useTimeStore()

onMounted(() => {
  useTime()
})
</script>
<style scoped></style>
