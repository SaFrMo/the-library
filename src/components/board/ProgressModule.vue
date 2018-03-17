<template>

    <section class="progress-module">

        <h2>Progress</h2>

        <transition name="slow-fade">
            <progress-bar v-if="$store.state.bookProgress"/>

            <h3 class="no-books" v-else>No books arriving</h3>
        </transition>

    </section>

</template>

<script>

export default {}

</script>

<style lang="scss">
@import 'src/styles/vars';

section.progress-module {
    h2 {
        text-align: right;
        border-bottom: 2px solid $color2;
    }
    .no-books {
        text-align: center;
    }
}

</style>
