import { defineStore } from 'pinia'

export const useBooksStore = defineStore("books",{
  state: () => ({
    books: [],
    genres: [],
    currentGenreFilter: "all",
    currentPagesFilter: 0
  }),
  getters: {
    inReadingList() {
      return this.books.filter(book => book.inReadingList)
    },
    getBook(isbn) {
      return this.books.filter(book => book.ISBN === isbn)
    },
    filterBooks() {
      if(this.currentGenreFilter != "all" || this.currentPagesFilter != 0) {
        return this.books.filter((book) => {
          if(this.currentGenreFilter !="all") {
            return !book.inReadingList && book.pages >= this.currentPagesFilter && book.genre == this.currentGenreFilter  
          } else {
            return !book.inReadingList && book.pages >= this.currentPagesFilter
          }
        })
      } else {
        return this.books.filter(book => !book.inReadingList)
      }
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
    async getGenres() {
      if (!this.genres.length) {
        import("../data/books.json").then((module) => { 
          this.genres = [...new Set(this.books.map((x) => x.genre))]
        },
      )} 
    },
    toggleReadingList(ISBN) {
      const book = this.books.find(b => b.ISBN === ISBN)
      book.inReadingList = !book.inReadingList
    }
  },
  persist: true,
})



