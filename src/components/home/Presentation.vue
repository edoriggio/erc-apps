<template>
<div>
  <div class="left">
    <div class="name">
      Hello,
      <h1>I'm Edoardo</h1>
    </div>

    <div class="description">
      Computer Science Student. Web and Mobile Developer.
      Into UI/UX design. Creator of ERC Apps.
    </div>
    
    <div class="links">
      <a href="mailto:officialercapps@gmail.com"> 
        <span>Contact Me</span>
      </a>

      <socials />
    </div>
  </div>

  <div class="right">
    <img src="" alt="">
  </div>
</div>
</template>

<script>
import Socials from '@/components/Socials'

export default {
  components: {
    Socials
  }
}
</script>

<style scoped>
.left {
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: center;
}

.links {
  display: flex;
  flex-direction: row;
}

.links > a {
  padding: 5px 10px;

  border-radius: 10px;

  background: #F1F3F6;
  box-shadow: inset 0 0 15px rgb(55 84 170 / 0%),
              inset 0 0 20px rgb(255 255 255 / 0%),
                    7px 7px 15px rgb(55 84 170 / 15%),
                    -7px -7px 20px rgb(255 255 255),
              inset 0px 0px 4px rgb(255 255 255 / 20%);
  transition: box-shadow 399ms ease-in-out;
}

.links > a:hover {
  box-shadow: inset 7px 7px 15px rgb(55 84 170 / 15%),
              inset -7px -7px 20px rgb(255 255 255),
                    0px 0px 4px rgb(255 255 255 / 20%);
  transition: box-shadow 399ms ease-in-out;
}

.description {
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  color: #6D6D6D;
}
</style>
