<template>
    <div>
        <rasterizer v-if="demo_path === 'rasterizer'"/>
        <cape v-if="demo_path === 'cape'"/>
    </div>
</template>

<script>
import Rasterizer from "@/pages/demos/Rasterizer.vue";
import Cape from "@/pages/demos/Cape.vue";

export default {
    name: 'DemoPage',
    components: {
        Rasterizer,
        Cape
    },
    props: {
        demo_path: String
    },
    mounted() {
        window.scrollTo(0, 0)
    }
}
</script>

<style scoped>
.main-wrapper {
    display: flex;
    flex-direction: row;

    align-content: center;
    justify-content: center;

    gap: 100px;
}
</style>