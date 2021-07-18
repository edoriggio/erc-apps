<template>
<div class="app">
  <menu-bar />

  <div class="body">
    <router-view />
  </div>
  
  <footer-view v-if="name !== 'home'" />
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
  },
  data () {
    return {
      name: ''
    }
  },
  watch: {
    $route (to, _) {
      this.name = to.name
      console.log(this.name)
    }
  },
  mounted () {
    this.name = this.$route.name
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
