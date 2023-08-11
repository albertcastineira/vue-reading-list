<template>
    <div class="grid grid-cols-4 my-10">
        <div>
            <img :src="book.cover" class="h-[40vh] w-[20wh]">
        </div>
        <div class="col-span-3 text-start">
            <div>
                <h1 class="text-white font-bold text-2xl mb-2">{{ book.title }}</h1>
                <p class="text-[#A5A5A5] text-md mb-4">{{ book.synopsis }}</p>
                <p>
                    <span class="rounded-full px-4 py-1 text-sm bg-[#A5A5A5] font-semibold mr-2">{{ book.genre }}</span>
                    <span class="rounded-full px-4 py-1 text-sm bg-[#848484] font-semibold mr-2">{{ book.pages }} páginas</span>
                </p>
            </div>
            <div class="mt-10">
                <h2 class="text-[#A5A5A5] font-semibold mb-2">Escrito por <span class="font-bold text-white italic">{{ book.author.name }}</span> en {{ book.year }}</h2>
                <div v-if="book.author.otherBooks.length">
                    <p class="text-[#A5A5A5] ">Otros de sus libros: </p>
                    <ul class="text-white list-disc">
                        <li class="ml-6 my-2 italic font-semibold text-sm" v-for="authorOtherBook in book.author.otherBooks">{{ authorOtherBook }}</li>
                    </ul>
                </div>
            </div>
            <div class="mt-10">
                <div>
                    <button v-if="book.inReadingList" @click="booksStore.toggleReadingList(book.ISBN)" class="inline-flex items-center px-5 py-2 text-sm font-bold text-center text-white bg-[#1da556] rounded-lg mr-2">
                        <Icon icon="ic:outline-bookmark-border" class="w-5 h-5 mr-2" />
                        Quitar de mi lista de lectura
                    </button>
                    <button v-if="!book.inReadingList" @click="booksStore.toggleReadingList(book.ISBN)" class="inline-flex items-center px-5 py-2 text-sm font-bold text-center text-white bg-[#2ECC71] rounded-lg mr-2">
                        <Icon icon="ic:baseline-bookmark" class="w-5 h-5 mr-2" />
                        Añadir a mi lista de lectura
                    </button>                       
                </div>
            </div>            
        </div>
    </div>
    
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useBooksStore } from "../stores/library"
import { Icon } from '@iconify/vue';

const booksStore = useBooksStore()
const route = useRoute();

// Get book by route params
booksStore.currentISBN = route.params.isbn
const book = booksStore.getBook
</script>