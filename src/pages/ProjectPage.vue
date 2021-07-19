<template>
<div>
  <app v-if="project.macro_category === 'App'" :project="project" />

  <div v-else-if="project.macro_category === 'Project'">
    ok2
  </div>

  <div v-else-if="project.macro_category === 'Competition'">
    ok3
  </div>

  <div v-if="project.macro_category === 'App'">
    <h2>Other Apps</h2>
    <div class="others">
      <div class="other" v-for="app in filtered_apps" :key="app">
        <div><img :src="app.icon" alt="app icon"></div>
        {{ app.title }}
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import App from '@/pages/projects/App'

export default {
  name: 'project-page',
  props: {
    project_path: String
  },
  components: {
    App
  },
  data () {
    return {
      project: {},
      filtered_apps: {}
    }
  },
  computed: {
    ...mapGetters([
      'all',
      'allApps',
      'allProjects',
      'allCompetitions'
    ])
  },
  created () {
    this.getAll()
    this.getAllApps()
    this.getAllProjects()
    this.getAllCompetitions()

    this.filtered_apps = this.allApps.filter(project => {
      return project.path !== this.project_path
    })
    const foundProject = this.all.filter(project => {
      return project.path === this.project_path
    })
    if (foundProject.length > 0) {
      this.project = foundProject[0]
    }
    for (let i = 1; i < this.project.contents.length; i++) {
      this.project.contents[i] = this.parseMarkdown(this.project.contents[i])
    }
  },
  methods: {
    ...mapActions([
      'getAll',
      'getAllApps',
      'getAllProjects',
      'getAllCompetitions'
    ]),
    parseMarkdown (md) {
      const html = md
        .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
        .replace(/\*(.*)\*/gim, '<label class="gray">$1</label>')
        .replace(/_(.*)_/gim, '<p class="underline">$1</p>')
        .replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")

      return html.trim()
    }
  }
}
</script>

<style scoped>
.others {
  display: flex;
  flex-flow: row wrap;

  gap: 30px 50px;
}

.other{
  display: flex;
  flex-flow: column;

  align-items: center;

  gap: 20px 0;
}

.other > div {
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  width: 130px;
  height: 130px;

  background: #F1F3F6;
  box-shadow: inset 0 0 15px rgb(55 84 170 / 0%), inset 0 0 20px rgb(255 255 255 / 0%), 7px 7px 15px rgb(55 84 170 / 15%), -7px -7px 20px rgb(255 255 255), inset 0px 0px 4px rgb(255 255 255 / 20%);
  border-radius: 32px;
}

.other > div > img {
  width: 50%;
}
</style>
