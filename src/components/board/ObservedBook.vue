<template>

    <transition name="slide-up">

        <section class="observed-book">

            <h2 v-html="book.title"/>

            <ul class="info">
                <li class="row" v-for="(row, i) in book.info" :key="i">
                    <span>{{ row[0] }}:</span>
                    <span>{{ row[1] }}</span>
                </li>
            </ul>

            <div class="summary-wrap" v-html="book.summary"/>

            <button @click="$store.commit('START_SHELVING_OBSERVED_BOOK'); $store.commit('STOP_OBSERVING_BOOK')">
                {{ $store.state.observedBook.shelf == null ? 'Shelve' : 'Reshelve' }}
            </button>

        </section>

    </transition>

</template>

<script>

export default {
    computed: {
        book () {
            return this.$store.state.observedBook
        }
    }
}

</script>

<style lang="scss">
@import 'src/styles/vars';
@import 'src/styles/animations';

section.observed-book {
    position: fixed;
    top: 40px;
    right: 40px;
    bottom: 40px;
    left: 40px;
    background-color: #333;
    padding: 40px;
    max-width: 550px;
    max-height: 570px;
    margin: auto;

    border: 10px solid $color2;

    h2 {
        padding-bottom: 5px;
        border-bottom: 3px solid $white;
    }
    .summary-wrap {
        line-height: 1.4;
    }
}

</style>
