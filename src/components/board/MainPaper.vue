<template>

    <section class="main-paper">

        <h2 class="incantation">
            <span class="word-wrap">
                <span class="words" @click="blocked = true">Grata domum, perdidit fabulis; quo manebo huc pertinent.</span>
                <transition name="bounce">
                    <span class="slider" v-if="blocked"/>
                </transition>
                <span class="shadow"/>
            </span>
        </h2>

        <div class="overlay" :style="{ opacity: 1 - $store.state.amountLit }"/>

    </section>

</template>

<script>

export default {
    data () {
        return {
            blocked: false
        }
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

    // incantation
    .incantation {
        font-family: $font2;
        color: $black;
        text-align: center;
        padding-top: 40px;
        margin: 0 auto;
        position: relative;

        .word-wrap {
            display: inline-block;
            position: relative;
            overflow: hidden;
            padding: 5px 10px;
        }
        .slider {
            width: 100%;
            height: 100%;
            top: 0;
            bottom: 0;
            left: 0;
            position: absolute;
            background-color: darken($color1, 10%);
        }
        .shadow {
            box-shadow: inset 1px 1px 4px lighten($color2, 25%);
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            pointer-events: none;
        }
    }

    .bounce-enter {
        transform: translateX(100%);
    }
    .bounce-enter-active {
        transition: transform 0.6s $easing;
    }

    // Overlay (simulates darkness)
    .overlay {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        // background-color: rgba(#000, 0.7);
        pointer-events: none;
    }
}

</style>
