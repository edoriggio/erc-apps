<template>
    <div>
        <v-timeline-item color="transparent">
            <template v-slot:icon>
                <v-avatar>
                    <img :src="getIcon(job.icon)">
                </v-avatar>
            </template>

            <div v-if="job.type !== 'school'">
                <h2 class="mb-1"> {{ job.title }} </h2>
                <div class="mb-1"> {{ job.company }} · {{ job.type }} </div>
                <div v-if="job.description === undefined" class="secondary-text"> {{ job.period }} </div>
                <div v-else class="mb-5 secondary-text"> {{ job.period }} </div>
                <div class="justify"> {{ job.description }} </div>
            </div>

            <div v-else>
                <h2 class="mb-1"> {{ job.company }} </h2>
                <div class="mb-1"> {{ job.title }} </div>
                <div class="secondary-text"> {{ job.period }} </div>
            </div>
        </v-timeline-item>
    </div>
</template>

<script>
export default {
    name: "SingleTimelineItem",
    props: {
        job: Object
    },
    methods: {
        getIcon(icon) {
            return require(`@/${icon}`)
        }
    }
}
</script>
