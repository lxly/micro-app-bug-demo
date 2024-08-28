<script setup>
import { ref } from 'vue';
const open1 = ref(false);
const toggle1 = () => {
  open1.value = !open1.value
}
</script>

<template>
  <div>
    <h1>子应用👇</h1>
    <!-- name：应用名称, url：应用地址 -->
    <div class="container">
      <div class="sub-app">
        <p>vite+vue3:</p>
        <button @click="toggle1">加载my-app-vite-vue3</button>
        <micro-app v-if="open1" name='my-app-vite-vue3' url='http://127.0.0.1:5173/' iframe></micro-app>
      </div>
    </div>

  </div>
</template>

<style scoped>
.container {
  height: 500px;
  position: relative;
  overflow: auto;
}

.sub-app {
  border: 1px solid black;
}
</style>
