<template>
    <div class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3">
        <div v-for="book in booksStore.filterBooks">
            <Book
                :title="book.title" 
                :cover="book.cover" 
                :synopsis="book.synopsis"
                :ISBN="book.ISBN"
            />
        </div>
    </div>
    <div v-if="booksStore.filterBooks.length === 0" class="text-center p-6 text-[#A5A5A5] my-10 font-bold">
        <h1>Parece que no quedan más libros disponibles!</h1>
    </div>
</template>

<script setup>
import Book from './Book.vue'
import { useBooksStore } from "../stores/library"

const booksStore = useBooksStore()
</script>