<template>

    <h2 class="incantation">

        <sketch-hint>
            <span class="word-wrap">

                <button class="words" @click="onIncantation">{{ incantation }}</button>

                <transition name="bounce">
                    <span class="slider" v-if="blocked"/>
                </transition>

                <span class="shadow"/>
            </span>
        </sketch-hint>

    </h2>

</template>

<script>

export default {
    data () {
        return {
            blocked: false,
            incantation: 'Grata domum, perdidit fabulis; quo manebo huc pertinent.'
        }
    },
    methods: {
        onIncantation () {
            this.blocked = true
            this.$store.commit('INCANTATION_SPOKEN')
        }
    }
}

</script>

<style lang="scss">
@import 'src/styles/vars';
@import 'src/styles/animations';

h2.incantation {
    color: $black;
    text-align: center;
    padding: 40px 60px 0;
    margin: 0 auto;
    position: relative;

    // word wrap
    .word-wrap {
        display: inline-block;
        position: relative;
        overflow: hidden;
        padding: 5px 10px;
    }

    // button
    .words {
        font-family: $font2;
        background-color: transparent;
        border: none !important;

        &:hover {
            background-color: transparent;
            color: $black;
        }
    }

    // slider
    .slider {
        width: 100%;
        height: 100%;
        top: 0;
        bottom: 0;
        left: 0;
        position: absolute;
        background-color: $color1-dark;
    }

    // box shadow
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

</style>
