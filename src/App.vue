<template>
<div class="app">
  <menu-bar />

  <div class="body">
    <router-view />
  </div>
</div>
</template>

<script>
import MenuBar from '@/components/MenuBar'

export default {
  components: {
    MenuBar
  },
  name: 'app'
}
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;

  align-items: center;

  height: 100vh;
  width: 100vw;

  background-color: #F1F3F6;
}

.body {
  margin-top: 170px;

  width: 80vw;
}
</style>
