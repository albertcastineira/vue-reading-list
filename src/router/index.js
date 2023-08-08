import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ReadingList from '../views/ReadingList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home, name: "home" },
    { path: '/reading-list', component: ReadingList, name: "reading-list" }
  ]
})

export default router
