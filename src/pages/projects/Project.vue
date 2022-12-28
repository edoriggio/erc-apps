<template>
    <div>
        <project-header :title="project.title" :category="`${project.macro_category}s`"
                        :icon="project.icon" :path="project.path"/>

        <div class="body">
            <div class="description">
                <h2>Description</h2>
                <span class="justify" v-html="project.description"/>
            </div>

            <div v-if="project.screenshots.length > 0" class="screenshots">
                <h2>Screenshots</h2>
                <div class="images">
                    <img v-for="image in project.screenshots" :src="getIcon(image)" alt="" :key="image">
                </div>
            </div>

            <div class="tecnologies">
                <h2>Technologies</h2>
                <ul>
                    <li v-for="technology in technologies" :key="technology">
                        <span v-html="technology"/>
                    </li>
                </ul>
            </div>

            <div class="github">
                <h2>GitHub</h2>
                <span>A more detailed description of the project can be found in the</span>&nbsp;
                <a :href="project.link" target="_blank">GitHub repo</a>.
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
            technologies: Array
        }
    },
    created() {
        this.technologies = this.project.technologies
    },
    methods: {
        getIcon(icon) {
            return require(`@/${icon}`)
        }
    },
}
</script>

<style scoped>
.body {
    display: flex;
    flex-direction: column;

    gap: 10px 0;

    margin-top: 100px !important;
}

p,
span,
li {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    text-align: justify;

    color: #000000;
}

.tecnologies > ul > li {
    text-align: left !important;
}

.images {
    display: flex;
    flex-flow: row wrap;

    justify-content: center;
    align-items: center;
}

.images > img {
    height: 423px;
    width: 249.5px;
}


</style>

<style>
.github {
    margin-top: -15px !important;
}

a,
a:visited,
a:active {
    color: black;
    font-weight: bold;

    text-decoration: underline;
}

a:hover {
    color: #3776AB;
}

.images {
    margin-top: 0 !important;

    gap: 40px 80px;
}

.images > img {
    width: auto !important;
    height: 300px !important;

    border-radius: 10px;

    transition: transform 0.25s ease-in-out;
}

@media (min-width: 900px) {
    .images > img:hover {
        transform: scale(2);
    }
}

</style>
