const app = Vue.createApp({
    //data, functions
    /* template: '<h2>I am the template</h2>' */
    data() {
        return {
            url: 'http://hoborg.pl/react',
            showBooks: true,
            books: [
                {title: "name of the wind", author: "patric r.", img:""},
                {title: "the way of kings", author: "brandon s.", img:""},
                {title: "the final empire", author: "brandon s.", img:""},
            ]
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
})

app.mount('#app')