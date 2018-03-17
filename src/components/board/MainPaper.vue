<template>

    <section class="main-paper">

        <the-incantation/>

        <transition name="slow-fade">
            <div class="top-wrap" v-if="$store.state.incantationsSpoken > 0">
                <ledger-module/>
                <progress-module/>
            </div>
        </transition>

        <shelf-map/>

    </section>

</template>

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

    .top-wrap {
        display: flex;

        & > * {
            width: 50%;
            padding: 20px;
            box-sizing: border-box;
        }
    }
}

</style>
