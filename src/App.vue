<template>
<div class="app">
  <menu-bar />

  <div class="body">
    <router-view />
  </div>
  
  <footer-view />
</div>
</template>

<script>
import MenuBar from '@/components/MenuBar'
import FooterView from '@/components/FooterView'

export default {
  name: 'app',
  components: {
    MenuBar,
    FooterView
  }
}
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;

  align-items: center;

  width: 100vw;
}

.body {
  margin-top: 170px;

  width: 80vw;
}
</style>
