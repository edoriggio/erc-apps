<template>
    <div class="header">
        <div class="title">
            <router-link to="/projects" v-text="category"/>
            <p>/</p>
            <p class="name">{{ title }}</p>
        </div>

        <div class="logo">
            <img :class="`${path}-logo`" :src="getIcon(icon)" alt="app icon">
        </div>
    </div>
</template>

<script>
export default {
    name: 'project-header',
    props: {
        title: String,
        category: String,
        icon: String,
        path: String
    },
    methods: {
        getIcon(icon) {
            return require(`@/${icon}`)
        }
    }
}
</script>

<style scoped>
.header {
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    gap: 80px 0;

    margin-top: 50px;
}

.title {
    display: flex;
    flex-direction: row;

    justify-content: center;
    align-items: center;

    gap: 0 10px;
}

.title > a,
.title > p:not(.name) {
    font-style: normal;
    font-weight: bold;
    font-size: 25px;

    text-decoration: none;

    color: #AFAFAF;
}

.title > a:hover {
    text-decoration: underline;
}

.name {
    font-style: normal;
    font-weight: bold;
    font-size: 25px;

    color: #000000;
}

.logo {
    display: flex;
    flex-direction: row;

    justify-content: center;
    align-items: center;

    height: 200px;
    width: 200px;

    background: #F1F3F6;
    box-shadow: inset 0 0 15px rgb(55 84 170 / 0%),
                inset 0 0 20px rgb(255 255 255 / 0%),
                7px 7px 15px rgb(55 84 170 / 15%),
                -7px -7px 20px rgb(255 255 255),
                inset 0 0 4px rgb(255 255 255 / 20%);
    border-radius: 50px;
}

.logo > img {
    width: 50%;
}
</style>

<style>
.chinaconvitto-logo {
    width: 70% !important;
}

.checq-me-logo {
    width: 70% !important;

    filter: invert(20%) sepia(63%) saturate(1709%) hue-rotate(216deg) brightness(95%) contrast(88%);
}
</style>
