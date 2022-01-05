<template>
<div class="bar"><div class="bar-inner" :style="vars"></div></div>
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
      width: Number,
      proportion: Number,
      color_one: String,
      color_two: String
    }
  },
  mounted () {
    this.color_one = this.color[0]
    this.color_two = this.color[1]
    this.proportion = (100 * this.rating) / 5
  },
  computed: {
    vars () {
      return {
        '--proportion': `${this.proportion}%`,
        '--color-one': `#${this.color_one}`,
        '--color-two': `#${this.color_two}`
      }
    }
  }
}
</script>

<style scoped>
.bar {
  height: 15px;
  width: -moz-available;
  width: -webkit-fill-available;
  width: stretch;

  border-radius: 10px;

  background: #F1F3F6;
  box-shadow: inset 2px 2px 3px #d1d3d6,
              inset -2px -2px 3px #ffffff;
}

.bar-inner {
  height: 15px;

  border-radius: 10px;

  background: var(--color-one);
  box-shadow: inset 2px 2px 3px var(--color-two);
  animation: progressBar 2.5s ease-in-out;
  animation-fill-mode: both; 
}

@keyframes progressBar {
  0% { width: 0; }
  100% { width: var(--proportion); }
}
</style>
