<template>
  <Header></Header>
  <div class="container">
    <Sidebar></Sidebar>
    <div class="content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/HeaderComponent.vue'
import Sidebar from '@/components/SidebarComponent.vue'
</script>

<style>
.container {
  display: flex;
}
.content {
  flex: 1;
  padding: 20px;
}
</style>
