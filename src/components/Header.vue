<template>
    <header class="my-10 grid grid-cols-2">
        <div class="text-start">
            <router-link to="/">
                <h1 class="flex items-baseline text-white text-2xl font-black">
                    Biblioteca
                </h1>
            </router-link>
        </div>
        <div class="text-end">
            <router-link v-show="$route.name!=='home'" to="/" class="inline-flex items-center px-5 py-2 text-sm font-bold text-center text-white bg-[#1da556] rounded-lg ml-2">
                Ver libros disponibles
            </router-link>
            <router-link v-show="$route.name!=='reading-list'" to="/reading-list" class="inline-flex items-center px-5 py-2 text-sm font-bold text-center text-white bg-[#2ECC71] rounded-lg ml-2">
                Lista de lectura
                <span class="inline-flex items-center justify-center w-5 h-5 ml-2 text-xs font-semibold text-[#A5A5A5] bg-white rounded-full">
                    {{ booksStore.inReadingList.length }}
                </span>
            </router-link>
        </div>
    </header>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { useBooksStore } from "../stores/library"

const booksStore = useBooksStore()
</script>