<template>
  <div class="header">
    <Weather></Weather>
  </div>
</template>

<script setup>
import Weather from './WeatherComponent.vue'
</script>

<style scoped>
.header {
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 10px 10px;
  position: fixed;
  top: 0;

  right: 0;
  background-color: #323;
  color: white;
}
h3 {
  margin: 0;
}
</style>
