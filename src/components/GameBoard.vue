<template>

    <main class="game-board">

        <candle-module />

        <main-paper/>

    </main>

</template>

<script>

export default {
    data () {
        return {
        }
    },
    methods: {
        relight () {

        }
    }
}

</script>

<style lang="scss">
@import 'src/styles/vars';

main.game-board {
    padding: 40px;

    button {
        background-color: $white;
        color: $black;
        padding: 10px;
        border-radius: 5px;
        transition: background-color 0.4s, color 0.4s, border 0.4s;
        border: 2px solid transparent;

        &:hover {
            background-color: $black;
            color: $white;
            border: 2px solid $white;
        }
    }
}

</style>
