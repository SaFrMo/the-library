<template>

    <section class="candle-module">

        <h2>{{ Math.floor($store.state.amountLit * 100) }}%</h2>

        <p>
            <button @click="$store.commit('RELIGHT')">Relight</button>
        </p>

        <p>
            <span>Candles remaining: {{ $store.state.candles }}</span>
        </p>

    </section>

</template>

<script>

export default {
    data () {
        return {
        }
    }
}

</script>

<style lang="scss">
@import 'src/styles/vars';

section.candle-module {
    display: inline-block;
    height: auto;
    border: 2px solid $white;
    padding: 20px;
}
</style>
