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
        <p>vue2:</p>
        <button @click="toggle1">加载my-app-vue2</button>
        <micro-app v-if="open1" name='my-app-vue2' url='http://127.0.0.1:8080/'></micro-app>
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
