import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import UserList from '../views/UserList.vue'
import BookDetails from '../views/BookDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home, name: "home" },
    { path: '/reading-list', component: UserList, name: "reading-list" },
    { path: '/book/:isbn', component: BookDetails, name: "book" },
  ]
})

export default router
