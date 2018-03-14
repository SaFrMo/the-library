<template>

    <div id="app" v-full-height>

        <router-view/>

    </div>

</template>

<script>
export default {
    name: 'App'
}
</script>

<style lang="scss">
@import 'src/styles/vars';

body {
    margin: 0;
    background-color: $black;
    color: $white;
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
button {
    appearance: none;
    outline: none;
    background-color: transparent;
    border: none;
    color: $white;
    font-family: Helvetica, Arial, sans-serif;
    cursor: pointer;
}
a {
    color: $white;
    text-decoration: none;
    background-color: transparent;
    transition: background-color 0.4s, color 0.4s;

    &:hover,
    &:focus {
        color: $black;
        background-color: $white;
    }
}
</style>
