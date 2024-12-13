<template>
  <h1>Hola Mundo</h1>
  <p>{{ contador }}</p>
  <button @click="sumar">Suma</button>
  <button @click="restar">Resta</button>
</template>

<script setup>
import { ref } from 'vue'
const contador = ref(0)
const sumar = () => {
  contador.value++
}
const restar = () => {
  contador.value--
}
</script>

<style scoped>
p {
  color: red;
}
</style>
