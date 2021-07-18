<template>
<div class="footer">
  <img src="https://raw.githubusercontent.com/edoriggio/erc-apps/gh-pages/static/assets/logo/logo_clear.png?token=AEKYMKY64CQM3QINNLNJXFLA7QFXS" alt="erc apps logo">
  <socials />
  <p>&copy; 2021 ERC Apps</p>
</div>
</template>

<script>
import Socials from '@/components/Socials'

export default {
  name: 'footer-view',
  components: {
    Socials
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
  margin-top: 90px;

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
</style>
