<template>
    <div class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3">
        <div v-for="item in data">
            <Book
                :title="item.book.title"
                :cover="item.book.cover" 
                :synopsis="item.book.synopsis" 
            />
        </div>
    </div>
</template>

<script>
import Book from './Book.vue'

import booksJson from '../data/books.json'

export default {
    data() {
        return {
            data: booksJson.library
        }
    },
    components: {
        Book
    },
}

</script>