<template>

    <div id="app" v-full-height>

        <router-view/>

    </div>

</template>

<script>
import { autoBlur } from 'auto-blur'
import Book from '@/gameplay/Book'
import books from '@/assets/books'

export default {
    name: 'App',
    mounted () {
        autoBlur()
        setInterval(this.update, 1000 / this.$store.state.updatesPerSecond)
    },
    methods: {
        update () {
            this.$store.state.bookProgress += this.$store.state.bookDelta
            if (this.$store.state.bookProgress >= 1) {
                this.$store.state.bookProgress = 0
                this.$store.state.bookDelta = 0

                // grab a random book
                // TODO: different difficulty levels, make sure we don't get duplicates
                const newBookIndex = Math.floor(Math.random() * Math.floor(books.easy.length))
                const newBook = new Book(books.easy[newBookIndex])

                this.$store.commit('ACQUIRE_BOOK', newBook)
                this.$store.commit('OBSERVE_BOOK', newBook)
            }
            this.$store.commit('CANDLE_DECAY')
        }
    }
}

</script>

<style lang="scss">
@import 'src/styles/vars';

// import fonts
@import url('https://fonts.googleapis.com/css?family=Crimson+Text');
@import url('https://fonts.googleapis.com/css?family=Ledger');

body {
    margin: 0;
    background-color: $black;
    color: $white;
    font-family: $font1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
button {
    appearance: none;
    outline: none;
    background-color: transparent;
    border: none;
    color: $white;
    font-family: $font1;
    cursor: pointer;
    font-size: inherit;
}
a {
    color: $white;
    text-decoration: none;
    background-color: transparent;
    transition: background-color 0.4s, color 0.4s;

    &:hover,
    &:focus {
        color: $black;
        background-color: $white;
    }
}
</style>
