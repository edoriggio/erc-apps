<template>
    <div class="all-projects">
        <container title="Apps"/>
        <container title="Projects"/>
        <container title="Competitions"/>
    </div>
</template>

<script>
import Container from '@/components/projects/Container'

export default {
    name: 'projects',
    components: {
        Container
    }
}
</script>

<style scoped>
.all-projects > div:not(:nth-of-type(1)) {
    margin-top: 80px !important;
}
</style>
