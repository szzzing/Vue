import {createRouter, createWebHistory} from 'vue-router'
import MainComponent from '../components/MainComponent.vue'
import MovieContent from '../components/MovieContent.vue'

const routes = [
    {
        path: '/',
        component: MainComponent
    },
    {
        path: '/content/:id',
        component: MovieContent
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})