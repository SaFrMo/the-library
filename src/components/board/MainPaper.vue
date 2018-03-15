<template>

    <section class="main-paper">

        <the-incantation/>

        <div class="top-wrap">
            <ledger-module/>
            <progress-module/>
        </div>

        <div class="overlay" :style="{ opacity: 1 - $store.state.amountLit }"/>

    </section>

</template>

<script>

export default {
    data () {
        return {
        }
    },
    computed: {

    }
}

</script>

<style lang="scss">
@import 'src/styles/vars';
@import 'src/styles/animations';

section.main-paper {
    background-color: $color1;
    width: 75vw;
    min-height: calc(100vh - 80px);
    margin: auto;
    font-family: $font2;
    color: $black;
    padding: 15px;
    max-width: 900px;

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
