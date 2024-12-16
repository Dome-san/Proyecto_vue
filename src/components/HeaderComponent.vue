<template>
  <div class="header">
    <ul class="info">
      <li><Weather></Weather></li>
      <li><Time></Time></li>
    </ul>
  </div>
</template>

<script setup>
import Weather from './WeatherComponent.vue'
import Time from './TimeComponent.vue'
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
.info {
  margin: 0;
  padding-left: 0;
}
ul li {
  list-style-type: none;
}
</style>
