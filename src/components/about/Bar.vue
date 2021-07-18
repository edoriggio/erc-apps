<template>
  <div class="bar"><div class="bar-inner" :style="`width: calc()`"></div></div>
</template>

<script>
export default {
  name: 'bar',
  props: {
    id: Number,
    rating: Number,
    color: Array
  },
  data () {
    return {
      width: 0
    }
  },
  mounted () {
    const bar = document.querySelectorAll('.bar-inner')[this.id - 1]
    const width = document.getElementsByClassName('bar')[0].offsetWidth
    const proportion = (width - (width / 5) * this.rating)
    const shadow = `box-shadow: inset 2px 2px 3px #${this.color[1]}, inset -2px -2px 3px #${this.color[2]}`
    const background = `background: #${this.color[0]}`
    bar.setAttribute('style', `margin-right: ${proportion}px; ${shadow}; ${background}`)
  }
}
</script>

<style scoped>
.bar {
  height: 15px;
  width: -moz-available;
  width: -webkit-fill-available;
  width: fill-available;

  border-radius: 10px;

  background: #F1F3F6;
  box-shadow: inset 2px 2px 3px #b5b6b9,
              inset -2px -2px 3px #ffffff;
}

.bar-inner {
  height: 15px;

  border-radius: 10px;
}
</style>
