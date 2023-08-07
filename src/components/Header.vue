<template>
    <header class="my-10 grid grid-cols-2">
        <div class="text-start">
            <h1 class="flex items-baseline text-white text-2xl font-black">
                Librería
            </h1>
        </div>
        <div class="text-end">
            <button :router-link="{ path: '/reading-list' }" type="button" class="inline-flex items-center px-5 py-2 text-sm font-bold text-center text-black bg-[#2ECC71] rounded-lg focus:bg-[#969191]">
                Lista de lectura
                <span class="inline-flex items-center justify-center w-5 h-5 ml-2 text-xs font-semibold text-[#A5A5A5] bg-black rounded-full">
                    0
                </span>
            </button>
        </div>
    </header>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
	components: {
		Icon,
	},
}
</script>