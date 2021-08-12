<template>
<div class="project-card">
  <div class="project-icon" :class="path">
    <img :src="icon" alt="app icon">
  </div>

  <div class="project-title">
    {{ title }}
  </div>

  <div class="project-category">
    {{ category }}
  </div>

  <router-link class="project-button" :to="`projects/${path}`">
    <p>View</p>
  </router-link>
</div>
</template>

<script>
export default {
  name: 'project',
  props: {
    icon: String,
    title: String,
    category: String,
    path: String
  }
}
</script>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;

  align-items: center;

  width: 210px;

  border-radius: 25px;
  background-color: #F1F3F6;
  box-shadow: inset 0 0 15px rgba(55, 84, 170,0),
              inset 0 0 20px rgba(255, 255, 255,0),
              7px 7px 15px rgba(55, 84, 170,.15),
              -7px -7px 20px rgba(255, 255, 255,1),
              inset 0px 0px 4px rgba(255, 255, 255,.2);
}

.project-icon img{
  margin: 30px 0;
  width: 120px;
}

.project-title {
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  
  color: #000000;
}

.project-category {
  margin-top: 5px;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  text-align: center;
  
  color: #868686;
}

.project-button {
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  margin-top: 35px;
  margin-bottom: 20px;

  width: 170px;
  height: 34px;

  border-radius: 10px;
  background-color: #F1F3F6;
  box-shadow: inset 0 0 15px rgba(55, 84, 170,0),
              inset 0 0 20px rgba(255, 255, 255,0),
              7px 7px 15px rgba(55, 84, 170,.15),
              -7px -7px 20px rgba(255, 255, 255,1),
              inset 0px 0px 4px rgba(255, 255, 255,.2);
}

a, p {
  margin: auto;

  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  text-decoration: none;

  color: #000000;

  transition: box-shadow 399ms ease-in-out;
}

p {
  margin-top: 7px;
}

a:hover {
  text-decoration: none;
  
  box-shadow: inset 7px 7px 15px rgba(55, 84, 170,.15),
              inset -7px -7px 20px rgba(255, 255, 255,1),
              0px 0px 4px rgba(255, 255, 255,.2);
  transition: box-shadow 399ms ease-in-out;
}

.montessori > img {
  margin: 55px 0;
  width: 80px;
}

.party > img {
  margin: 50.9px 0;
  width: 80px;
}

.usi-productivity > img {
  margin: 57px 0;
  width: 90px;
}

.airlinr > img {
  margin: 36px 0;
  width: 110px;
}

.duplicate-finder > img {
  margin: 51px 0;
  width: 80px;
}

.game-of-life > img {
  margin: 68px 0;
  width: 100px;
}

.checq-me > img {
  filter: invert(20%) sepia(63%) saturate(1709%) hue-rotate(216deg) brightness(95%) contrast(88%);
}

.classical-music img,
.pet-companion img,
.covid-newsletter img {
  margin: 46px 0;
  width: 90px;
}
</style>
