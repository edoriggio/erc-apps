<template>
    <div>
        <project-header :title="project.title" :category="`${project.macro_category}s`"
                        :icon="project.icon" :path="project.path"/>

        <div class="body">
            <div class="description">
                <h2>Description</h2>
                <span v-html="project.description"/>
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
                <span>A more detailed description of the project can be found in the</span>
                <a :href="project.link" target="_blank">GitHub repo</a>
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
span,
li {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    text-align: justify;

    color: #000000;
}

.tecnologies > p {
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
</style>
