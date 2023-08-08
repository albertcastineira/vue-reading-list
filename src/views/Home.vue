<template>
    <Filters></Filters>
    <BookList></BookList>
</template>

<script>
import BookList from '../components/BookList.vue'
import Filters from '../components/Filters.vue'

export default {
  components: {
    Filters,
    BookList,
  }
}
</script>