<template>
<div class="menu">
  <router-link :class="(activeTab === 'project' || activeTab === 'projects') ? 'active' : ''" to="/projects">Projects</router-link>
  <router-link :class="activeTab === 'home' ? 'active' : ''" to="/"><img src="https://i.postimg.cc/0Q1qcqmZ/logo-clear.png"></router-link>
  <router-link :class="activeTab === 'about' ? 'active' : ''" to="/about">About</router-link>
</div>
</template>

<script>
export default {
  name: 'menu-bar',
  watch: {
    $route (to, _) {
      this.activeTab = to.name
    }
  },
  data () {
    return {
      activeTab: ''
    }
  },
  created () {
    this.activeTab = this.$route.name
  }
}
</script>

<style scoped>
.menu {
  position: fixed;
  display: flex;
  flex-direction: row;

  z-index: 1;

  justify-content: center;
  align-items: center;

  margin-top: 35px;

  height: 80px;
  width: 90%;

  border-radius: 70px;
  background-color: #F1F3F6;
  box-shadow: inset 0 0 15px rgba(55, 84, 170,0),
              inset 0 0 20px rgba(255, 255, 255,0),
              7px 7px 15px rgba(55, 84, 170,.15),
              -7px -7px 20px rgba(255, 255, 255,1),
              inset 0px 0px 4px rgba(255, 255, 255,.2);
}

.menu a {
  color: black;

  font-size: 18px;
  text-decoration: none;
}

.menu a:nth-of-type(1) {
  padding: 0 7.5px 0 0;
}

.menu a:nth-of-type(2) {
  padding: 0 7.5px 0 7.5px;
}

.menu a:nth-of-type(3) {
  padding: 0 0 0 7.5px;
}

.menu a:hover {
  text-decoration: underline;
}

.active {
  text-decoration: underline !important;
}

img {
  margin-bottom: -3px;
  height: 80px;
}
</style>
