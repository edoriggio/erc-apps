<template>
<div class="footer">
  <img src="/static/assets/logo/logo_clear.png" alt="erc apps logo">

  <div class="social">
    <i class="ri-github-fill" @click="open_link('http://www.github.com/edoriggio')" />
    <i class="ri-instagram-line" alt="instagram logo" @click="open_link('http://www.instagram.com/erc_apps')" />
    <i class="ri-linkedin-box-fill" @click="open_link('http://www.linkedin.com/in/edoardo-riggio')" />
  </div>

  <p>&copy; 2021 ERC Apps</p>
</div>
</template>

<script>
export default {
  name: 'footer-view',
  methods: {
    open_link (url) {
      window.open(url, '_blank')
    }
  }
}
</script>

<style scoped>
.footer {
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  height: 100px;
  width: 90%;

  margin-bottom: 50px;
  margin-top: 120px;

  background: #F1F3F6;
  box-shadow: inset 7px 7px 15px rgba(55, 84, 170,.15),
              inset -7px -7px 20px rgba(255, 255, 255,1),
              0px 0px 4px rgba(255, 255, 255,.2);
  border-radius: 30px;
}

.footer > img {
  margin-left: 40px;
}

.footer > p {
  margin-right: 50px;

  font-family: Consolas, monospace;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  max-height: 20px;
}

img {
  height: 100px;
  width: 100px;
}

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
