<template>

    <section :class="['candle-module', { hidden }]">

        <h2>{{ Math.floor($store.state.amountLit * 100) }}%</h2>

        <p>
            <button @click="$store.commit('RELIGHT')">Relight</button>
        </p>

        <p>
            <span>Candles remaining: {{ $store.state.candles }}</span>
        </p>

        <button class="hide" @click="hidden = !hidden">{{ hidden ? 'Show' : 'Hide' }}</button>

    </section>

</template>

<script>

export default {
    data () {
        return {
            hidden: false
        }
    }
}

</script>

<style lang="scss">
@import 'src/styles/vars';

section.candle-module {
    background-color: $black;
    position: fixed;
    display: inline-block;
    height: auto;
    border: 2px solid $white;
    padding: 20px;
    transition: transform 0.5s cubic-bezier(.23,.06,.11,.98);

    // Hidden state
    &.hidden {
        transform: translateX(calc(-100% - 30px));
    }

    // Hide button
    button.hide {
        position: absolute;
        top: calc(100% + 2px);
        left: 100%;
        transform: rotate(-90deg);
        transform-origin: top left;
        border-radius: 0;
        text-transform: uppercase;
        transition: none;
    }
}
</style>
