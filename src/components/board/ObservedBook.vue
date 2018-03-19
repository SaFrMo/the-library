<template>

    <transition name="slide-up">

        <section class="observed-book">

            <div class="meta-wrap">

                <h2 v-html="book.title"/>

                <ul class="info">
                    <li class="row" v-for="(row, i) in book.info" :key="i">
                        <span>{{ row[0] }}:</span>
                        <span>{{ row[1] }}</span>
                    </li>
                </ul>

                <div class="summary-wrap" v-html="book.summary"/>

            </div>

            <sketch-hint color="#f1f1f1">
                <button class="shelve" @click="$store.commit('START_SHELVING_OBSERVED_BOOK'); $store.commit('STOP_OBSERVING_BOOK')">
                    {{ $store.state.observedBook.shelf == null ? 'Shelve' : 'Reshelve' }}
                </button>
            </sketch-hint>

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
    font-family: $font2;
    font-size: 20px;

    display: flex;
    flex-direction: column;

    .meta-wrap {
        flex: 1;
    }
    h2 {
        padding-bottom: 5px;
        border-bottom: 3px solid $white;
    }
    .summary-wrap {
        line-height: 1.4;
    }
    .sketch-hint {
        text-align: right;
    }
    button {
        background-color: transparent;
        border: none;
        color: $white;
        font-family: $font2;
        font-variant: small-caps;
        text-align: right;
        font-size: 28px;
        display: block;
        width: 100%;

        &:hover,
        &:focus {
            background-color: transparent;
            border: none;
        }
    }
}

</style>
