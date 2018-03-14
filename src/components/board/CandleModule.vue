<template>

    <section class="candle-module">

        <div class="candle-holder">
            <div class="bg" v-html="candleSvg"/>
            <svg class="blocker" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <rect x="0" y="0" width="512" :height="blockHeight" fill="#222"/>
            </svg>
        </div>

    </section>

</template>

<script>
import candleSvg from '@/assets/svg/candle-holder.svg'

const fullBlockHeight = 141

export default {
    data () {
        return {
            candleSvg
        }
    },
    computed: {
        blockHeight () {
            return fullBlockHeight
        }
    }
}

</script>

<style lang="scss">
@import 'src/styles/vars';

section.candle-module {
    width: 200px;
    height: auto;

    .candle-holder {
        position: relative;

        path {
            fill: $color1;
        }
        .blocker {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }
}

</style>
