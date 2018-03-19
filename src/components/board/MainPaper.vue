<template>

    <section class="main-paper">

        <the-incantation/>

        <transition name="slow-fade">
            <div class="top-wrap" v-if="$store.state.incantationsSpoken > 0">
                <ledger-module/>
                <progress-module/>
            </div>
        </transition>

    </section>

</template>

<style lang="scss">
@import 'src/styles/vars';
@import 'src/styles/animations';

section.main-paper {
    @include paper-styling;
    position: relative;

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
