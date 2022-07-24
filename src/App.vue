<template>
    <div class="app">
        <menu-bar/>

        <div class="body">
            <router-view/>
        </div>

        <footer-view v-if="name !== 'home'"/>
    </div>
</template>

<script>
import MenuBar from "@/components/MenuBar";
import FooterView from "@/components/FooterView";

export default {
    name: "app",
    components: {
        MenuBar,
        FooterView,
    },
    data() {
        return {
            name: "",
        };
    },
    watch: {
        $route(to) {
            this.name = to.name;
        },
    },
    mounted() {
        this.name = this.$route.name;
    },
};
</script>

<style>
html {
    font-family: Proxima Nova, sans-serif; /* 1 */
    -ms-text-size-adjust: 100%; /* 2 */
    -webkit-text-size-adjust: 100%; /* 2 */
}

body {
    margin: 0;
    overflow-x: hidden;
    background-color: #f1f3f6;
}

.justify {
    text-align: justify;
    display: table-row;
    text-align-last: left;
}
</style>

<style scoped>
.app {
    display: flex;
    flex-direction: column;

    align-items: center;

    width: 100vw;
}

.body {
    margin-top: 170px;
    width: 80vw;
}
</style>
