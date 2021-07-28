<template>
<div>
  <app v-if="project.macro_category === 'App'" :project="project" />
  <div v-else-if="project.macro_category === 'Project'" />
  <div v-else-if="project.macro_category === 'Competition'" />

  <div v-if="project.macro_category === 'App'">
    <h2>Other Apps</h2>
    <div class="others">
      <router-link class="other" v-for="app in filtered_apps" :key="app"
      :to="`/projects/${app.path}`">
        <div><img :class="`${app.path}-logo`" :src="app.icon" alt="app icon"></div>
        <span>{{ app.title }}</span>
      </router-link>
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
  watch: {
    $route (to, _) {
      this.getProject(to.name)
      location.reload()
      window.scrollTo(0, 0)
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
    window.scrollTo(0, 0)

    this.getProject(this.project_path)
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
    },
    getProject (path) {
      this.filtered_apps = this.allApps.filter(project => {
        return project.path !== path
      })
      const foundProject = this.all.filter(project => {
        return project.path === path
      })
      if (foundProject.length > 0) {
        this.project = foundProject[0]
      }
      for (let i = 1; i < this.project.contents.length; i++) {
        this.project.contents[i] = this.parseMarkdown(this.project.contents[i])
      }
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

.others > a {
  text-decoration: none;

  color: #000000;
}

.others > a:hover {
  text-decoration: underline;
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
