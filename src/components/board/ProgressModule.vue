<template>

    <section class="progress-module">

        <h2>Progress</h2>

        <transition name="slow-fade">
            <progress-bar v-if="$store.state.bookProgress"/>
        </transition>

    </section>

</template>

<script>

export default {}

</script>

<style lang="scss">

section.progress-module {
    h2 {
        font-size: 36px;
        text-align: center;
    }
}

</style>
