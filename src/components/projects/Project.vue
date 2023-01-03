<template>
    <div class="project-card">
        <div class="project-icon" :class="path">
            <img :src="getIcon(icon)" alt="project icon">
        </div>

        <div class="project-title">
            {{ title }}
        </div>

        <div class="project-category">
            {{ category }}
        </div>

        <div class="buttons-wrapper">
            <router-link class="project-button" :to="`projects/${path}`">
                <p>View</p>
            </router-link>

            <router-link v-if="demo !== ''" class="project-button icon-width" :to="`demos/${demo}`">
                <i class="ri-global-line"/>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'project',
    props: {
        icon: String,
        title: String,
        category: String,
        path: String,
        demo: String
    },
    methods: {
        getIcon(icon) {
            return require(`@/${icon}`)
        }
    }
}
</script>

<style scoped>
.project-card {
    display: flex;
    flex-direction: column;

    align-items: center;

    width: 210px;

    border-radius: 25px;
    background-color: #F1F3F6;
    box-shadow: inset 0 0 15px rgba(55, 84, 170, 0),
                inset 0 0 20px rgba(255, 255, 255, 0),
                7px 7px 15px rgba(55, 84, 170, .15),
                -7px -7px 20px rgba(255, 255, 255, 1),
                inset 0 0 4px rgba(255, 255, 255, .2);
}

.project-icon img {
    margin: 30px 0 !important;
    width: 120px;
}

.project-title {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    text-align: center;

    color: #000000;
}

.project-category {
    margin-top: 5px !important;

    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    text-align: center;

    color: #868686;
}

.buttons-wrapper {
    display: flex;
    flex-direction: row;

    justify-content: stretch;
    gap: 15px;

    margin-top: 35px !important;
    margin-bottom: 20px !important;

    padding-left: 20px !important;
    padding-right: 20px !important;

    width: 100%;
}

.project-button {
    display: flex;
    flex-direction: row;

    justify-content: center;
    align-items: center;

    width: 100%;
    height: 34px;

    border-radius: 8px;
    background-color: #F1F3F6;
    box-shadow: inset 0 0 15px rgba(55, 84, 170, 0),
                inset 0 0 20px rgba(255, 255, 255, 0),
                7px 7px 15px rgba(55, 84, 170, .15),
                -7px -7px 20px rgba(255, 255, 255, 1),
                inset 0 0 4px rgba(255, 255, 255, .2);
}

.icon-width {
    width: 50px !important;
    font-weight: normal;
}

.icon-width:hover {
    color: #000000 !important;
}

a, p {
    margin: auto !important;

    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    text-decoration: none;

    color: #000000;

    transition: box-shadow 399ms ease-in-out;
}

p {
    margin-top: 7px !important;
}

a:hover {
    text-decoration: none;

    box-shadow: inset 7px 7px 15px rgba(55, 84, 170, .15),
                inset -7px -7px 20px rgba(255, 255, 255, 1),
                0 0 4px rgba(255, 255, 255, .2);
    transition: box-shadow 399ms ease-in-out;
}

.montessori > img {
    margin: 55px 0 !important;
    width: 80px;
}

.party > img {
    margin: 50.9px 0 !important;
    width: 80px;
}

.usi-productivity > img {
    margin: 57px 0 !important;
    width: 90px;
}

.airlinr > img {
    margin: 36px 0 !important;
    width: 110px;
}

.duplicate-finder > img {
    margin: 51px 0 !important;
    width: 80px;
}

.game-of-life > img {
    margin: 68px 0 !important;
    width: 100px;
}

.checq-me > img {
    filter: invert(20%) sepia(63%) saturate(1709%) hue-rotate(216deg) brightness(95%) contrast(88%);
}

.classical-music > img,
.pet-companion > img,
.covid-newsletter > img,
.ai-cup > img {
    margin: 46px 0 !important;
    width: 90px;
}

.cape > img {
    margin: 56px 0 !important;
    width: 59px;
}

.rasterizer > img {
    margin: 56px 0 !important;
    width: 90px;
}

.formula-usi > img {
  margin: 54px 0 !important;
  width: 127px;
}

.raytracer > img {
    margin: 63px 0 !important;
    width: 90px;
}
</style>
