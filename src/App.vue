<template>
  <main class="flex flex-col min-h-screen mx-auto max-w-[1300px] xl:px-4 lg:px-6 md:px-8 px-10">
    <Header></Header>
    <router-view />
  </main>
  <Footer></Footer>
</template>

<script setup>
import Header from "./components/Header.vue"
import { useBooksStore } from "./stores/library"
import Footer from "./components/Footer.vue"

const booksStore = useBooksStore()
// Fetch Data
booksStore.getBooks()
booksStore.getGenres()

</script>