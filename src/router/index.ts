import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import home from "../views/home/index.vue"
const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: home
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router