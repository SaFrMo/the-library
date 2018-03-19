<template>

    <main class="game-board">

        <candle-module />

        <shelf-map v-if="$store.state.books.length"/>

        <main-paper/>

        <observed-book v-if="$store.state.observedBook"/>

        <div class="overlay" :style="{ opacity: 1 - $store.state.amountLit }"/>

    </main>

</template>

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

    // Overlay (simulates darkness)
    .overlay {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        // background-color: rgba(#000, 0.85);
        pointer-events: none;
    }
}

</style>
