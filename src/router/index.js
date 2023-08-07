import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import ReadingList from '../components/ReadingList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: App },
    { path: '/reading-list', component: ReadingList }
  ]
})

export default router
