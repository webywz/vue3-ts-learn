<template>
  <HelloWorld msg="Vite + Vue" />
  <div class="header">
    <div class="title">Hello</div>
  </div>
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>
<style scoped lang="scss">
.header {
  .title {
    font-size: 30px;
    color: #897389;
  }
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
