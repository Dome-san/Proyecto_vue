<template>
  <div>
    <ul>
      <li v-for="(result, index) in resultado" :key="index">
        {{ index + 1 }} x {{ resultado[0] }} = {{ result }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  resultado: Array,
})
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>
