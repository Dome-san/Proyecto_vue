<template>
  <div class="sidebar">
    <h2>Bienvenido</h2>
    <h3>Nombre: {{ registrarStore.nombre }}</h3>
    <h3>Email: {{ registrarStore.email }}</h3>
    <ul class="list">
      <li><RouterLink to="/contador" class="link">Contador</RouterLink></li>
      <li><RouterLink to="/lista-de-tareas" class="link">Lista De Tareas</RouterLink></li>
      <li><RouterLink to="/registrar" class="link">Registrar</RouterLink></li>
      <li><RouterLink to="/calcular" class="link">Calcular</RouterLink></li>
    </ul>
  </div>
</template>

<script setup>
import { useRegisterStore } from '@/modules/register/stores/registerStore'

const registrarStore = useRegisterStore()
</script>

<style scoped>
.sidebar {
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
}
.list {
  list-style-type: none;
  padding: 10px;
}
.link {
  text-decoration: none;
}
</style>
