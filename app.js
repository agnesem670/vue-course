const app = Vue.createApp({
    //data, functions
    /* template: '<h2>I am the template</h2>' */
    data() {
        return {
            showBooks: true,
            title: 'Title from data return',
            author: 'Name',
            age: 45
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
})

app.mount('#app')