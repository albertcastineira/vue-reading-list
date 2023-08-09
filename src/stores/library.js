import { defineStore } from 'pinia'

export const useBooksStore = defineStore("books",{
  state: () => ({
    books: [],
  }),
  getters: {
    availableBooks() {
      return this.books.filter(book => !book.inReadingList)
    },
    inReadingList() {
      return this.books.filter(book => book.inReadingList)
    },
    getBook(isbn) {
      return this.books.filter(book => book.ISBN === isbn)
    }
  },
  actions: {
    async getBooks() {
      if (!this.books.length) {
          import("../data/books.json").then((module) => { 
            let dataJson = module.default;
            let arrBooks = dataJson.library.map((x) => { return { ...x.book, inReadingList: false }; });
            this.books = arrBooks
          },
      )}
    },
    // Not woriking => Error finding the specific book or not
    toggleReadingList(ISBN) {
      const book = this.books.find(b => b.ISBN === ISBN)
      book.inReadingList = !book.inReadingList
    }
  },
  persist: true,
})



