<template>

    <section class="main-paper">

        <div class="overlay" :style="overlayStyle"/>

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
}

</style>
