<template>
    <header class="my-10 grid grid-cols-2">
        <div class="text-start">
            <h1 class="flex items-baseline text-white text-2xl font-black">
                Librería
            </h1>
        </div>
        <div class="text-end">
            <router-link v-show="$route.name!=='reading-list'" to="/reading-list" class="inline-flex items-center px-5 py-2 text-sm font-bold text-center text-black bg-[#2ECC71] rounded-lg">
                Lista de lectura
                <span class="inline-flex items-center justify-center w-5 h-5 ml-2 text-xs font-semibold text-[#A5A5A5] bg-black rounded-full">
                    {{ booksStore.inReadingList.length }}
                </span>
            </router-link>
            <router-link v-show="$route.name!=='home'" to="/" class="inline-flex items-center px-5 py-2 text-sm font-bold text-center text-black bg-[#2ECC71] rounded-lg">
                Ver libros disponibles
            </router-link>
        </div>
    </header>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { useBooksStore } from "../stores/library"

const booksStore = useBooksStore()
</script>