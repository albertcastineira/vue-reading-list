<template>
    <div class="mb-2">
        <div class="grid grid-cols-4">
            <div class="text-start">
                <h1 class="text-white font-semibold text-lg"><span class="text-[#2ECC71]">{{ booksStore.filterBooks.length }}</span> Libros disponibles</h1>
            </div>
            <div class="text-end col-span-3">
                <input type="text" name="book-search" placeholder="Buscar por título" class="px-2 py-1 outline-none rounded bg-[#474747] w-[20vw] mr-4 text-white">

                <select ref="genreSelect" v-model="booksStore.currentGenreFilter" @change="onChangeGenreFilter($event)" class="px-2 py-1 bg-[#474747] rounded w-[10vw] mr-4 outline-none text-[#A5A5A5]">
                    <option value="all" selected>Todos</option>
                    <option v-for="genre in booksStore.genres" :value="genre" class="text-white">{{ genre }}</option>
                </select>

                <select ref="pageSelect" v-model="booksStore.currentPagesFilter" @change="onChangePageFilter($event)" class="px-2 py-1 bg-[#474747] rounded text-[#A5A5A5] w-[10vw] outline-none">
                    <option value=0 selected>Número de páginas</option>
                    <option value=100 class="text-white">100 o más páginas</option>
                    <option value=250 class="text-white">250 o más páginas</option>
                    <option value=500 class="text-white">500 o más páginas</option>
                </select>
            </div>
        </div>
        <hr class="h-px my-4 bg-[#474747] border-0">
            
    </div>
</template>

<script setup>
import { ref,onMounted } from 'vue'
import { useBooksStore } from "../stores/library"
const booksStore = useBooksStore()

onMounted(() => {
    
}),

function onChangeGenreFilter(event){
    if (event.target.value != "all") {
        event.target.style.color = "white";
    } else {
        event.target.style.color = "#A5A5A5";
    }
}

function onChangePageFilter(event) {
    if (event.target.value != 0) {
        event.target.style.color = "white";
    } else {
        event.target.style.color = "#A5A5A5";
    }  
}
</script>