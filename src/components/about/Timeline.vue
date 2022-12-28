<template>
    <div class="timeline-wrap">
        <v-timeline dense>
            <div v-for="item in itemsRetrieved" :key="item.company">
                <multiple-timeline-item v-if="item.jobs !== undefined" :job="item"/>
                <single-timeline-item v-else :job="item"/>
            </div>
        </v-timeline>
    </div>
</template>

<script>
import MultipleTimelineItem from "@/components/about/timeline/MultipleTimelineItem.vue";
import SingleTimelineItem from "@/components/about/timeline/SingleTimelineItem.vue";

export default {
    name: "Timeline",
    components: {
        SingleTimelineItem,
        MultipleTimelineItem
    },
    props: {
        itemsRetrieved: Array
    }
}
</script>

<style>
.timeline-wrap {
    display: flex;
    justify-content: center;
}

.v-avatar {
    height: 38px !important;
    width: 38px !important;
}

.theme--light.v-timeline .v-timeline-item__dot {
    background-color: #f1f3f6;
    border-radius: 50px;
    box-shadow: 2px 2px 5px #cdcfd1,
    -2px -2px 5px #ffffff;
}

.theme--light.v-timeline .v-timeline-item__dot {
    background-color: #f1f3f6 !important;
    border-radius: 50px !important;
    box-shadow: 2px 2px 5px #cdcfd1,
    -2px -2px 5px #ffffff !important;
}

.v-timeline-item__dot .v-timeline-item__inner-dot {
    margin: 4px !important;
}

.theme--light.v-timeline::before {
    background-color: #ffffff !important;
}

.secondary-text {
    color: #AFAFAF !important;

    font-weight: normal !important;
}
</style>