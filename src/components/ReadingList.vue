<template>
    <div class="text-start">
        <h1 class="text-white font-semibold text-lg"><span class="text-[#2ECC71]">{{ booksStore.inReadingList.length }}</span> Libros en tú lista</h1>
    </div>
    <hr class="h-px my-5 bg-[#474747] border-0">
    <div v-if="booksStore.inReadingList.length === 0" class="text-center text-[#A5A5A5] my-10">
        <div class="flex justify-center items-center my-4">
            <p><Icon class="w-20 h-20" icon="material-symbols:book-outline" /></p>
        </div>
        <p class="block">Parece que no tienes ningún libro añadido a tu lista de lectura aún.</p>
    </div>
    <div class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3">
        <div v-for="book in booksStore.inReadingList">
            <Book
                :title="book.title"
                :cover="book.cover" 
                :synopsis="book.synopsis"
                :ISBN="book.ISBN"
                :inReadingList="book.inReadingList"
            />
        </div>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import Book from './Book.vue'
import { useBooksStore } from "../stores/library"

const booksStore = useBooksStore()
</script>