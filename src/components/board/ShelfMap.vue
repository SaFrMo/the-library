<template>

    <section :class="['shelf-map', { activated }]">

        <button class="label" @click="activated = !activated">Shelf Map</button>

        <h2>The Shelves</h2>

    </section>

</template>

<script>

export default {
    data(){
        return {
            activated: false
        }
    }
}

</script>

<style lang="scss">
@import 'src/styles/vars';

section.shelf-map {
    @include paper-styling;
    position: absolute;
    right: 0;
    left: 0;
    transform: rotate(3deg);
    transition: transform 0.4s;

    // focus tab
    button.label {
        position: absolute;
        top: 0;
        right: 0;
        transform-origin: top right;
        transform: rotate(-90deg) translate(0.5px, -1px);
        border-radius: 0;
        border: 0;
        font-family: $font2;
        font-variant: small-caps;
        font-size: 24px;
        line-height: 1;
        background-color: lighten($color1, 10%);

        &:hover,
        &:focus {
            color: $black;
            background-color: lighten($color1, 20%);
        }
    }

    // activated state
    &.activated {
        z-index: 2;
        transform: rotate(0) translate(0, 0);
    }
}

</style>
