<template>
<div>
  <h2 class="title">
    {{ title }}
  </h2>

  <div class="projects">
    <project v-for="project in allProjects" :key="project.id" :icon="project.icon"
     :title="project.title" :category="project.category" :path="project.path" />
  </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Project from '@/components/projects/Project'

export default {
  name: 'container',
  props: {
    title: String
  },
  components: {
    Project
  },
  mounted () {
    this.getAllProjects()
  },
  computed: {
    ...mapGetters([
      'allProjects'
    ])
  },
  methods: {
    ...mapActions([
      'getAllProjects'
    ])
  }
}
</script>

<style scoped>
.title {
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  align-items: center;
  
  color: black;
}

.projects {
  display: flex;
  flex-flow: row wrap;

  gap: 50px 70px;
}
</style>
