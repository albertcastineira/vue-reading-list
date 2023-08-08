<template>
    <div class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3">
        <div v-for="book in storeBooks.books">
            <Book
                :title="book.title"
                :cover="book.cover" 
                :synopsis="book.synopsis" 
            />
        </div>
    </div>
</template>

<script setup>
import Book from './Book.vue'
import { useBooksStore } from "../stores/library"

const storeBooks = useBooksStore()

</script>