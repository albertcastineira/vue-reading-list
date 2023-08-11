import { defineStore } from 'pinia'

export const useBooksStore = defineStore("books",{
  state: () => ({
    books: [],
    genres: [],
    currentGenreFilter: "all",
    currentPagesFilter: 0,
    search: "",
    currentISBN: "",
  }),
  getters: {
    inReadingList() {
      return this.books.filter(book => book.inReadingList)
    },
    getBook() {
      return this.books.filter(book => book.ISBN === this.currentISBN)[0]
    },
    filterBooks() {
      if(this.currentGenreFilter != "all" || this.currentPagesFilter != 0 || this.search != "") {
        return this.books.filter((book) => {
          if(this.currentGenreFilter != "all") {
            return !book.inReadingList && book.pages >= this.currentPagesFilter && book.genre == this.currentGenreFilter && book.title.toLowerCase().includes(this.search.toLowerCase());
          } else {
            return !book.inReadingList && book.pages >= this.currentPagesFilter && book.title.toLowerCase().includes(this.search.toLowerCase());
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



