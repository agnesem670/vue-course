const app = Vue.createApp({
    //data, functions
    /* template: '<h2>I am the template</h2>' */
    data() {
        return {
            title: 'Title from data return',
            author: 'Name',
            age: 45
        }
    },
    methods: {
        changeTitle(abc) {
            //this.title = 'title changed by click'
            this.title = abc
        }
    }
})

app.mount('#app')