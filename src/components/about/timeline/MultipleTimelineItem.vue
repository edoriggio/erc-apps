<template>
    <v-div>
        <v-timeline-item class="pa-0" color="transparent">
            <template v-slot:icon>
                <v-avatar>
                    <img :src="getIcon(job.icon)">
                </v-avatar>
            </template>

            <div>
                <h2> {{ job.company }} </h2>
            </div>
        </v-timeline-item>

        <v-timeline-item
                v-for="element in job.jobs"
                :key="element.period"
                small
                color="transparent"
        >
            <div v-if="element.description === undefined" class="mt-2">
                <h3 class="mb-1"> {{ element.title }} </h3>
                <div class="mb-1"> {{ element.type }} </div>
                <div class="secondary-text"> {{ element.period }} </div>
                <div class="justify"> {{ element.description }} </div>
            </div>

            <div v-else>
                <h3 class="mb-1"> {{ element.title }} </h3>
                <div class="mb-1"> {{ element.type }} </div>
                <div class="mb-5 secondary-text"> {{ element.period }} </div>
                <div class="justify"> {{ element.description }} </div>
            </div>
        </v-timeline-item>
    </v-div>
</template>

<script>
export default {
    name: "MultipleTimelineItem",
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
