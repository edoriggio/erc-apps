import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Projects from '@/pages/Projects'
import ProjectPage from '@/pages/ProjectPage'
import About from '@/pages/About'
import DemoPage from "@/pages/DemoPage.vue";

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects
        },
        {
            path: '/projects/:project_path',
            name: 'project',
            props: true,
            component: ProjectPage
        },
        {
            path: '/demos/:demo_path',
            name: 'project',
            props: true,
            component: DemoPage
        },
        {
            path: '/codi',
            redirect: () => {
                window.location.href = "https://codi.si.usi.ch/";
            }
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
})