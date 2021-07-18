<template>
<div class="back">
  <i class="si si--color" :class="`si-${icon}`" />
  <span><p>{{ name }}</p></span>
  <bar :color="color" :rating="rating" :id="id" />
</div>
</template>

<script>
import Bar from './Bar'

export default {
  name: 'skill',
  components: {
    Bar
  },
  props: {
    id: Number,
    name: String,
    rating: Number,
    icon: String,
    color: Array
  }
}
</script>

<style scoped>
.back {
  display: flex;
  flex-direction: row;

  gap: 0 20px;
  padding: 0 25px;

  align-items: center;

  height: 60px;

  border-radius: 100px;
  background-color: #F1F3F6;
  box-shadow: inset 0 0 15px rgba(55, 84, 170,0),
              inset 0 0 20px rgba(255, 255, 255,0),
              7px 7px 15px rgba(55, 84, 170,.15),
              -7px -7px 20px rgba(255, 255, 255,1),
              inset 0px 0px 4px rgba(255, 255, 255,.2);
}

.back > i {
  font-size: 30px;
}

.back > span > p {
  width: 61px;

  margin-right: 0;

  font-style: normal;
  font-weight: bold;
  font-size: 18px;

  color: black;
}
</style>
