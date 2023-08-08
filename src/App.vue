<template>
  <main class="mx-auto max-w-[1300px] xl:px-4 lg:px-6 md:px-8 px-10">
    <Header></Header>
    <router-view />
  </main>
</template>

<script>
import Header from './components/Header.vue'

export default {
  data() {
    return {
      books: null,
      readList: null,
    }
  },
  components: {
    Header,
  }
}

</script>