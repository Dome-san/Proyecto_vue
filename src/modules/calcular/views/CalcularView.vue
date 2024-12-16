<template>
  <h3>Propriedades computadas</h3>
  <input type="text" v-model="valor" />
  <ResultSection v-if="isValid" :resultado="valorCalculado"></ResultSection>
  <div v-else-if="isNaN(valor)" class="NAN">El valor introducido debe ser un numero</div>
  <div v-else class="comprendido">Escribe un numero entre 0 y 1000</div>
</template>

<script setup>
import { computed, ref } from 'vue'
import ResultSection from '../components/ResultSection.vue'
const valor = ref('')

const valorCalculado = computed(() => {
  const num = valor.value || 0
  const result = []

  for (let i = 1; i <= 10; i++) {
    result.push(num * i)
  }

  return result
})

const isValid = computed(() => {
  const num = valor.value || 0
  return num >= 0 && num <= 1000
})
</script>

<style>
.NAN,
.comprendido {
  color: red;
}
</style>
