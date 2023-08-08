<template>
  <main class="mx-auto max-w-[1300px] xl:px-4 lg:px-6 md:px-8 px-10">
    <Header></Header>
    <router-view />
  </main>
</template>

<script setup>
import Header from "./components/Header.vue"
import { useBooksStore } from "./stores/library"

const booksStore = useBooksStore()
// Fetch Data
booksStore.getBooks()

</script>