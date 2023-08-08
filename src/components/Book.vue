<template>
    <div>
        <div class="mt-2">
            <div class="relative">
                <img :src="cover" class="h-[35vh] w-full rounded">
                <div class="absolute inset-2 flex items-end place-content-end">
                    <button class="bg-[#242424] hover:bg-black rounded-md text-[#A5A5A5] p-2">
                        <Icon icon="ic:outline-bookmark-border" class="w-5 h-5" /> 
                    </button>
                </div>
            </div>
            <div class="h-[15vh]">
                <h1 class="font-semibold text-md my-2 text-white">{{ title }}</h1>
                <p class="text-sm text-[#A5A5A5]">{{ synopsis }}</p>
            </div>            
        </div> 
    </div>
    
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
    props: ["title","pages","genre","cover","synopsis","year","ISBN","author"],
    components: {
        Icon
    }
}
</script>