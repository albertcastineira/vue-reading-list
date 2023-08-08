import { defineStore } from 'pinia'

export const useBooksStore = defineStore("books",{
  state: () => ({
    books: [],
  }),
  actions: {
    async getBooks() {
      if (!this.books.length) {
          import("../data/books.json").then((module) => { 
            let dataJson = module.default;
            let arrBooks = dataJson.library.map((x) => { return { ...x.book, inReadingList: false }; });
            this.books = arrBooks
          },
      )}
    }
  },
  persist: true,
})



