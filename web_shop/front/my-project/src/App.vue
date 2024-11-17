<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Proizvod from './components/Proizvod.vue';
import ProductView from './components/Proizvod.vue';
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <ProductView />
  </div>
  </template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
