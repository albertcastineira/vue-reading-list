<template>
    <article>
        <div class="mt-2">
            <div class="relative">
                    <img @click="router.push(`/book/${ISBN}`)" :src="cover" class="h-[35vh] w-full rounded cursor-pointer">
                <div class="absolute inset-2 flex items-end place-content-end h-10">
                    <button @click="booksStore.toggleReadingList(ISBN)" class="bg-[#242424] hover:bg-black rounded-md text-[#A5A5A5] p-2">
                        <Icon v-if="!inReadingList" icon="ic:outline-bookmark-border" class="w-5 h-5" />
                        <Icon v-if="inReadingList" icon="ic:baseline-bookmark" class="w-5 h-5" />
                    </button>
                </div>
            </div>
            <div class="h-[15vh]">
                <h1 @click="router.push(`/book/${ISBN}`)" class="font-semibold text-md my-2 text-white cursor-pointer hover:underline ">{{ title }}</h1>
                <p class="text-sm text-[#A5A5A5]">{{ synopsis }}</p>
            </div>            
        </div> 
    </article>
    
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { useBooksStore } from '../stores/library';
import router from "@/router";

const props = defineProps({
    title: String,
    pages: String,
    genre: String,
    cover: String,
    synopsis: String,
    inReadingList: Boolean,
    year: String,
    ISBN: String,
    author: Object
})

const booksStore = useBooksStore()
</script>