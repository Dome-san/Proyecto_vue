<template>
  <div class="sidebar">
    <h2>Bienvenido</h2>
    <h3>Nombre: {{ registrarStore.nombre }}</h3>
    <h3>Email: {{ registrarStore.email }}</h3>
    <ul>
      <li><RouterLink to="/contador">Contador</RouterLink></li>
      <li><RouterLink to="/lista-de-tareas">Lista De Tareas</RouterLink></li>
      <li><RouterLink to="/registrar">Registrar</RouterLink></li>
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
</style>
