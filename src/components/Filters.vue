<template>
    <div class="mb-2">
        <div class="grid grid-cols-4">
            <div class="text-start">
                <h1 class="text-white font-semibold text-lg"><span class="text-[#2ECC71]">13</span> Libros disponibles</h1>
            </div>
            <div class="text-end col-span-3">
                <input type="text" name="book-search" placeholder="Buscar por título" class="px-2 py-1 outline-none rounded bg-[#474747] w-[20vw] mr-4 text-white">
                <select id="genre" class="px-2 py-1 bg-[#474747] rounded text-white w-[10vw] mr-4 outline-none">
                    <option selected>Selecciona el género</option>
                    <option class="text-white">United States</option>
                    <option class="text-white">Canada</option>
                    <option class="text-white">France</option>
                    <option class="text-white">Germany</option>
                </select>
                <select id="genre" class="px-2 py-1 bg-[#474747] rounded text-white w-[10vw] outline-none">
                    <option selected>Número de páginas</option>
                    <option class="text-white">> 40 páginas</option>
                    <option class="text-white">> 100 páginas</option>
                    <option class="text-white">> 200 páginas</option>
                    <option class="text-white">> 500 páginas</option>
                </select>
            </div>
        </div>
        <hr class="h-px my-4 bg-[#474747] border-0">
            
    </div>
</template>

<script>

</script>