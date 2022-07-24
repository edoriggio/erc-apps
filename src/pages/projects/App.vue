<template>
    <div>
        <project-header :title="project.title" :category="`${project.macro_category}s`"
                        :icon="project.icon" :path="project.path"/>

        <div class="body">
            <div class="description">
                <h2>Description</h2>
                <p class="justify">{{ project.description }}</p>
            </div>

            <div class="screenshots">
                <h2>Screenshots</h2>
                <div class="images">
                    <img v-for="image in project.screenshots" :src="getIcon(image)" alt="" :key="image">
                </div>
            </div>

            <div class="contents">
                <h2>Contents</h2>
                <p>{{ project.contents[0] }}</p>
                <ul>
                    <li v-for="content in contents" :key="content">
                        <span v-html="content"/>
                    </li>
                </ul>
            </div>

            <div v-if="project.achievements.length > 0" class="contents">
                <h2>Achievements</h2>
                <ul>
                    <li v-for="achievement in achievements" :key="achievement">
                        <span v-html="achievement"/>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import ProjectHeader from '@/components/projects/ProjectHeader'

export default {
    name: 'app',
    components: {
        ProjectHeader
    },
    props: {
        project: {}
    },
    data() {
        return {
            contents: Array,
            achievements: Array
        }
    },
    created() {
        this.contents = this.project.contents.slice(1)
        this.achievements = this.project.achievements
    },
    methods: {
        getIcon(icon) {
            return require(`@/${icon}`)
        }
    }
}
</script>

<style scoped>
.body {
    display: flex;
    flex-direction: column;

    gap: 10px 0;

    margin-top: 100px;
}

p,
li {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    text-align: justify;

    color: #000000;
}

.contents > p {
    margin-bottom: -3px;
}

.images {
    display: flex;
    flex-flow: row wrap;

    justify-content: center;
    align-items: center;

    margin-top: -30px;
}

.images > img {
    height: 423px;
    width: 249.5px;
}
</style>

<style>
.gray {
    color: #868686 !important;
}

.underline {
    text-decoration: underline;
}
</style>
