import {createRouter, createWebHistory} from 'vue-router'
import MovieMain from '../components/MovieMain.vue'
import MovieContent from '../components/MovieContent.vue'

const routes = [
    {
        path: '/',
        component: MovieMain
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