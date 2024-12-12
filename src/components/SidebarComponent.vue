<template>
  <div class="sidesbar">
    <h2>Barra lateral</h2>
    <ul>
      <li><RouterLink to="/contador">Contador</RouterLink></li>
      <li><RouterLink to="/Lista-de-tareas">Lista De Tareas</RouterLink></li>
    </ul>
  </div>
</template>

<script setup></script>

<style>
.sidebar {
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
}
</style>
