const app = Vue.createApp({
    //data, functions
    /* template: '<h2>I am the template</h2>' */
    data() {
        return {
            showBooks: true,
            title: 'Title from data return',
            author: 'Name',
            age: 45,
            x: 0,
            y: 0
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log (e, e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})

app.mount('#app')