<template>
  <main class="mx-auto max-w-[1300px] xl:px-4 lg:px-6 md:px-8 px-10">
    <Header></Header>
    <Filters></Filters>
    <BookList></BookList>
  </main>
</template>

<script>
import BookList from './components/BookList.vue'
import Header from './components/Header.vue'
import Filters from './components/Filters.vue'

export default {
  data() {
    return {
      books: null,
      readList: null,
    }
  },
  components: {
    Header,
    Filters,
    BookList,
  }
}

</script>