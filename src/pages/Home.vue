<template>
<div class="presentation">
  <presentation />
</div>
</template>

<script>
import Presentation from '@/components/home/Presentation'

export default {
  components: {
    Presentation
  }
}
</script>

<style scoped>
.presentation {
  position: absolute !important;

  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;

  margin: auto;

  height: 300px;
  width: 800px;
}
</style>
