<template>
    <div class="presentation">
        <presentation/>
    </div>
</template>

<script>
import Presentation from '@/components/home/Presentation'

export default {
    components: {
        Presentation
    }
}
</script>

<style scoped>
.presentation {
    position: absolute !important;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    margin: auto;

    height: 300px;
    width: 800px;
}

@media (max-width: 856px) {
    .presentation {
        position: relative;
        z-index: -1;

        height: calc(100vh - 100px);
        width: 100vw;

        margin-top: 20px;
    }
}
</style>
