import { defineStore } from 'pinia'

export const useBooksStore = defineStore("books",{
  state: () => ({
    books: [],
  }),
  actions: {
    initialize(data) {
      this.books = data
    }
  }
})

