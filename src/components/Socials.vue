<template>
<div class="social">
  <i class="ri-github-fill" @click="open_link('http://www.github.com/edoriggio')" />
  <i class="ri-instagram-line" alt="instagram logo" @click="open_link('http://www.instagram.com/erc_apps')" />
  <i class="ri-linkedin-box-fill" @click="open_link('http://www.linkedin.com/in/edoardo-riggio')" />
</div>
</template>

<script>
export default {
  name: 'socials',
  methods: {
    open_link (url) {
      window.open(url, '_blank')
    }
  }
}
</script>

<style scoped>
.social {
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  gap: 0 15px;

  color: black;
  font-size: 30px;
}

.social > i {
  height: 30px;
  width: 30px;

  cursor: pointer;
}
</style>
