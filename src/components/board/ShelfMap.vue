<template>

    <section class="shelf-map">

        <div v-for="i in $store.state.rows" class="row" :key="i">

            <button
                class="shelf"
                @click="shelveBook((i - 1) * $store.state.shelvesPerRow + (j - 1))"
                v-for="j in $store.state.shelvesPerRow"
                :key="j">
                Store in shelf {{ getShelfName(i, j) }}
            </button>

        </div>

    </section>

</template>

<script>
import numberToLetter from 'number-to-letter'

export default {
    methods: {
        shelveBook (i) {
            // TODO: try to shelve, see if book is shelved there already
        },
        getShelfName (row, col) {
            return numberToLetter(row - 1) + col
        }
    }
}

</script>

<style lang="scss">
@import 'src/styles/vars';

section.shelf-map {
    text-align: center;

    .row {
        display: flex;
    }
    .shelf {
        background-color: $color1;
        border: none;

        &:hover,
        &:focus {
            border: none;
        }
    }
}

</style>
