<template>
    <div>
        <app v-if="project.macro_category === 'App'" :project="project"/>
        <project v-else-if="project.macro_category === 'Project'" :project="project"/>
        <competition v-else-if="project.macro_category === 'Competition'" :project="project"/>

        <div v-if="project.macro_category === 'App'">
            <h2>Other Apps</h2>
            <div class="others">
                <router-link class="other" v-for="app in filtered_apps" :key="app.title"
                             :to="`/projects/${app.path}`">
                    <div><img :class="`${app.path}-logo`" :src="getIcon(app.icon)" alt="app icon"></div>
                    <span>{{ app.title }}</span>
                </router-link>
            </div>
        </div>

        <div v-else-if="project.macro_category === 'Project'">
            <h2>Other Projects</h2>
            <div class="others">
                <router-link class="other" v-for="project in filtered_projects" :key="project.title"
                             :to="`/projects/${project.path}`">
                    <div><img :class="`${project.path}-logo`" :src="getIcon(project.icon)" alt="project icon"></div>
                    <span>{{ project.title }}</span>
                </router-link>
            </div>
        </div>

        <div v-else-if="project.macro_category === 'Competition'">
            <h2>Other Competitions</h2>
            <div class="others">
                <router-link class="other" v-for="project in filtered_competitions" :key="project.title"
                             :to="`/projects/${project.path}`">
                    <div><img :class="`${project.path}-logo`" :src="getIcon(project.icon)" alt="project icon"></div>
                    <span>{{ project.title }}</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

import App from '@/pages/projects/App'
import Project from '@/pages/projects/Project'
import Competition from '@/pages/projects/Competition'

export default {
    name: 'project-page',
    props: {
        project_path: String
    },
    components: {
        App,
        Project,
        Competition
    },
    data() {
        return {
            project: {},
            filtered_apps: {},
            filtered_projects: {},
            filtered_competitions: {}
        }
    },
    watch: {
        $route(to) {
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
    created() {
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
        parseMarkdown(md) {
            const html = md
                    .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
                    .replace(/\*(.*)\*/gim, '<label class="gray">$1</label>')
                    .replace(/__(.*)__/gim, '<span class="underline">$1</span>')
                    .replace(/\[(.*?)\]\((.*?)\)/gim, '<a target="_blank" href="$2">$1</a>')

            return html.trim()
        },
        getProject(path) {
            this.filtered_apps = this.allApps.filter(project => {
                return project.path !== path
            })
            this.filtered_projects = this.allProjects.filter(project => {
                return project.path !== path
            })
            this.filtered_competitions = this.allCompetitions.filter(project => {
                return project.path !== path
            })
            const foundProject = this.all.filter(project => {
                return project.path === path
            })
            if (foundProject.length > 0) {
                this.project = foundProject[0]
            }

            if (this.project.macro_category === 'App') {
                for (let i = 1; i < this.project.contents.length; i++) {
                    this.project.contents[i] = this.parseMarkdown(this.project.contents[i])
                }

                for (let i = 0; i < this.project.achievements.length; i++) {
                    this.project.achievements[i] = this.parseMarkdown(this.project.achievements[i])
                }
            } else if (this.project.macro_category === 'Project') {
                for (let i = 0; i < this.project.technologies.length; i++) {
                    this.project.technologies[i] = this.parseMarkdown(this.project.technologies[i])
                }

                this.project.description = this.parseMarkdown(this.project.description)
            } else if (this.project.macro_category === 'Competition') {
                for (let i = 0; i < this.project.technologies.length; i++) {
                    this.project.technologies[i] = this.parseMarkdown(this.project.technologies[i])
                }

                this.project.competition = this.parseMarkdown(this.project.competition)
                this.project.description = this.parseMarkdown(this.project.description)

                for (let i = 0; i < this.project.achievements.length; i++) {
                  this.project.achievements[i] = this.parseMarkdown(this.project.achievements[i])
                }
            }
        },
        getIcon(icon) {
            return require(`@/${icon}`)
        }
    }
}
</script>

<style scoped>
div > h2 {
    margin-top: 30px !important;
}

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

.other {
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
    box-shadow: inset 0 0 15px rgb(55 84 170 / 0%),
                inset 0 0 20px rgb(255 255 255 / 0%),
                7px 7px 15px rgb(55 84 170 / 15%),
                -7px -7px 20px rgb(255 255 255),
                inset 0 0 4px rgb(255 255 255 / 20%);
    border-radius: 32px;
    transition: box-shadow 399ms ease-in-out;
}

.other > div:hover {
    text-decoration: none;

    box-shadow: inset 7px 7px 15px rgba(55, 84, 170, .15),
                inset -7px -7px 20px rgba(255, 255, 255, 1),
                0 0 4px rgba(255, 255, 255, .2);
    transition: box-shadow 399ms ease-in-out;
}

.other > div > img {
    width: 50%;
}

@media (max-width: 527px) {
    .others {
        justify-content: center;
    }
}
</style>
