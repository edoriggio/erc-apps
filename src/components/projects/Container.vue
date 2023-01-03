<template>
    <div>
        <h2 class="title-new">
            {{ title }}
        </h2>

        <div class="projects">
            <project v-for="project in data" :key="project.name" :icon="project.icon" :title="project.title"
                     :category="project.category" :path="project.path" :demo="project.demo"/>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import Project from '@/components/projects/Project'

export default {
    name: 'container',
    props: {
        title: String
    },
    components: {
        Project
    },
    data() {
        return {
            data: []
        }
    },
    async mounted() {
        switch (this.title) {
            case 'Apps':
                this.getAllApps()
                this.data = this.allApps
                break
            case 'Projects':
                this.getAllProjects()
                this.data = this.allProjects
                break
            case 'Competitions':
                this.getAllCompetitions()
                this.data = this.allCompetitions
                break
            default:
                break
        }
    },
    computed: {
        ...mapGetters([
            'allApps',
            'allProjects',
            'allCompetitions'
        ])
    },
    methods: {
        ...mapActions([
            'getAllApps',
            'getAllProjects',
            'getAllCompetitions'
        ])
    }
}
</script>

<style scoped>
.title-new-new {
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

@media (max-width: 962px) {
    .projects {
        justify-content: center;
    }
}
</style>
