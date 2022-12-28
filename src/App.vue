<template>
    <v-app>
        <div class="app">
            <menu-bar/>

            <div class="body">
                <router-view/>
            </div>

            <footer-view v-if="name !== 'home'"/>
        </div>
    </v-app>
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
* {
    margin: revert !important;
    line-height: normal !important;
}

html {
    font-family: Proxima Nova, sans-serif !important; /* 1 */
    -ms-text-size-adjust: 100% !important; /* 2 */
    -webkit-text-size-adjust: 100% !important; /* 2 */
}

body {
    margin: 0 !important;
    overflow-x: hidden !important;
    background-color: #f1f3f6 !important;
}

.justify {
    text-align: justify;
    display: table-row;
    text-align-last: left;
}

.v-application p {
    margin: 0 !important;
}

a {
    color: #000000 !important;
}

a:hover {
    color: #3776AB !important;
}

.theme--light.v-application {
    background-color: transparent !important;
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
    margin-top: 170px !important;
    width: 80vw;
}
</style>
