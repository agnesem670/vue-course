const app = Vue.createApp({
    //data, functions
    /* template: '<h2>I am the template</h2>' */
    data() {
        return {
            url: 'http://hoborg.pl/react',
            showBooks: true,
            books: [
                {title: "name of the wind", author: "patric r.", img:"", isFav: true },
                {title: "the way of kings", author: "brandon s.", img:"", isFav: false},
                {title: "the final empire", author: "brandon s.", img:"", isFav: true},
            ]
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        toggleFav(book) {
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book)=> book.isFav)
        }
    }
})

app.mount('#app')