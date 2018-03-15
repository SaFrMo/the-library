<template>

    <section class="main-paper">

        <div class="overlay" :style="{ opacity: 1 - $store.state.amountLit }"/>

    </section>

</template>

<script>

export default {

}

</script>

<style lang="scss">
@import 'src/styles/vars';

section.main-paper {
    background-color: $color1;
    width: 75vw;
    min-height: calc(100vh - 80px);
    margin: auto;

    // Overlay
    .overlay {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(#000, 0.7);
        pointer-events: none;
    }
}

</style>
