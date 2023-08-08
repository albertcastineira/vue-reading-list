<template>
    <div class="my-4">
        <div class="text-start">
            <h1 class="text-white font-semibold text-lg"><span class="text-[#2ECC71]">0</span> Libros en tú lista</h1>
        </div>
        <hr class="h-px my-5 bg-[#474747] border-0">
        <div class="text-center text-[#A5A5A5] my-10">
            <div class="flex justify-center items-center my-4">
                <p><Icon class="w-20 h-20" icon="material-symbols:book-outline" /></p>
            </div>
            <p class="block">Parece que no tienes ningún libro añadido a tú lista aún.</p>
        </div>
    </div>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
	components: {
		Icon,
	},
}
</script>