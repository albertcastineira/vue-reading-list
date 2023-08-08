<template>
  <main class="mx-auto max-w-[1300px] xl:px-4 lg:px-6 md:px-8 px-10">
    <Header></Header>
    <router-view />
  </main>
</template>

<script setup>
import Header from "./components/Header.vue"
import { useBooksStore } from "./stores/library"

const storeBooks = useBooksStore()

if (!storeBooks.books.length) {    
     import("./data/books.json").then((module) => { 
       let dataJson = module.default;
       let arrBooks = dataJson.library.map((x) => { return { ...x.book, inReadingList: false }; });
       storeBooks.initialize(arrBooks);
     }
)}
</script>