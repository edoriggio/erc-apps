<template>
    <div>
        <div v-if="!language" :id="`${id_name}`" class="back" @click="toggle_dropdown()">
            <i class="si si--color" :class="`si-${icon}`"/>
            <span><p>{{ name }}</p></span>
            <i v-if="projects" :id="`toggle-${id_name}`" class="ri-arrow-down-s-line dropdown-button down"></i>
        </div>

        <div v-else :id="`${id_name}`" class="back" @click="toggle_dropdown()">
            <flag :iso="icon" :squared="false"/>
            <span><p>{{ name }}</p></span>
            <span class="secondary-span"><p class="secondary">{{ rating }}</p></span>
        </div>

        <div v-if="projects" :id="`dropdown-${id_name}`" class="back-card">
            <div v-for="project in projects" :key="project.path" class="row" :id="project.name.replaceAll(/[^\w+/]/g, '-').toLowerCase()">
                <img class="icon" :src="getIcon(project.icon)" alt="project icon">

                <div class="title">
                    <p class="name">{{ project.category }}</p>
                    <p>&nbsp;/&nbsp;</p>
                    <router-link v-if="!project.path.includes('https://')" :to="`/projects/${project.path}`" v-text="project.name"/>
                    <a v-else :href="project.path" target="_blank">{{ project.name }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'skill',
    props: {
        id: Number,
        name: String,
        rating: undefined,
        icon: String,
        color: Array,
        projects: Array,
        language: Boolean
    },
    data() {
        return {
            id_name: String,
        }
    },
    created() {
        this.id_name = this.name.replaceAll(/[^\w+/]/g, '-').toLowerCase()
    },
    mounted() {
        if (this.projects) document.getElementById(`${this.id_name}`).classList.add(`has-projects`)
    },
    methods: {
        toggle_dropdown() {
            let back = document.getElementById(`${this.id_name}`)
            let arrow = document.getElementById(`toggle-${this.id_name}`)
            let dropdown = document.getElementById(`dropdown-${this.id_name}`)
            let is_up = arrow.classList.contains('up')

            if (is_up) {
                back.classList.remove('open')
                arrow.classList.remove('up')
                arrow.classList.remove('ccw-rotate')

                arrow.classList.add('down')
                arrow.classList.add('cw-rotate')

                dropdown.style.display = 'none'
            } else {
                arrow.classList.remove('cw-rotate')

                arrow.classList.add('up')
                back.classList.add('open')
                arrow.classList.add('ccw-rotate')
                arrow.classList.add('down')

                dropdown.style.display = 'flex'
            }
        },
        getIcon(icon) {
            return require(`@/${icon}`)
        }
    }
}
</script>

<style scoped>
.back,
.back-card {
    border-radius: 10px;

    gap: 0 20px;

    background-color: #F1F3F6;
    box-shadow: inset 0 0 15px rgba(55, 84, 170, 0),
                inset 0 0 20px rgba(255, 255, 255, 0),
                7px 7px 15px rgba(55, 84, 170, .15),
                -7px -7px 20px rgba(255, 255, 255, 1),
                inset 0 0 4px rgba(255, 255, 255, .2);
}

.skill-elements {
    display: flex;
    flex-direction: row;

    height: 60px;
}

.back {
    display: flex;
    flex-direction: row;

    align-items: center;

    padding: 0 25px;

    height: 60px;
}

.back-card {
    display: none;
    flex-direction: column;

    align-items: flex-start;

    margin-top: 10px;

    padding: 20px 20px;
    gap: 20px 0;
}

.has-projects {
    transition: box-shadow 399ms ease-in-out;
}

.has-projects:hover {
    box-shadow: inset 7px 7px 15px rgb(55 84 170 / 15%),
                inset -7px -7px 20px rgb(255 255 255),
                0 0 4px rgb(255 255 255 / 20%);
    transition: box-shadow 399ms ease-in-out;

    cursor: pointer;
}

.back > i {
    font-size: 30px;
}

.back > span > p {
    width: max-content;

    margin-right: 0;

    font-style: normal;
    font-weight: bold;
    font-size: 18px;

    color: black;
}

.open > i:last-child {
    margin-left: auto;
}

.dropdown-button {
    text-decoration: none !important;
    font-weight: bold;
    font-size: 20px !important;
}

.dropdown-button:hover {
    color: black !important;
}

.back-card > .row > img {
    width: 30px;
    height: 30px;
}

.row {
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: flex-start;

    height: 30px;
}

.title {
    display: flex;
    flex-direction: row;

    align-content: center;
    justify-content: center;
}

.title > p,
.title > a {
    margin: auto;
}

.title > p {
    color: #AFAFAF
}

.title > a {
    text-decoration: none;
}

.icon {
    margin-right: 10px;
}

#china-convitto > img {
    margin-right: 20px;
    margin-left: 6px;
}

#montessori > img,
#airlinr > img,
#covid-newsletter > img,
#duplicate-finder > img,
#tsp-ai-cup > img,
#raytracer > img {
    margin-right: 25px;
    margin-left: 10px;
}

#game-of-life > img,
#checq-me > img,
#erc-apps > img {
    margin-right: 20px;
    margin-left: 5px;
}

#montessori > img,
#airlinr > img,
#game-of-life > img,
#duplicate-finder > img,
#covid-newsletter > img,
#tsp-ai-cup > img,
#raytracer > img {
    width: 20px;
    height: 20px;
}

#checq-me > img {
    filter: invert(20%) sepia(63%) saturate(1709%) hue-rotate(216deg) brightness(95%) contrast(88%);
}

.cw-rotate {
    transform: rotate(0deg);
    transition: transform 0.2s ease-in-out;
}

.ccw-rotate {
    transform: rotate(-180deg);
    transition: transform 0.2s ease-in-out;
}

.secondary {
    color: #AFAFAF !important;

    font-weight: normal !important;
}

.fi {
    border-radius: 3px;

    font-size: 23px;
}

@media (max-width: 551px) {
    .back > i:last-child {
        margin-left: auto;
    }

    .back > .secondary-span {
        margin-left: auto;
    }
}
</style>
