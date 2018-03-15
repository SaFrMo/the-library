<template>

    <section class="ledger">

        <h2>Debts</h2>

        <div class="row" v-for="(row, i) in ledger" :key="i">
            <span class="label">{{ row[0] }}</span>
            <span class="value">{{ row[1] }}</span>
        </div>

        {{ $store.state.books }}

    </section>

</template>

<script>

export default {
    computed: {
        ledger () {
            return [
                ['Incantations', this.$store.state.incantationsSpoken],
                ['Books', this.$store.state.books.length]
            ]
        }
    }
}

</script>

<style lang="scss">
@import 'src/styles/vars';
@import 'src/styles/animations';

section.ledger {
    font-family: $font3;

    h2 {
        border-bottom: 2px solid $color2;
    }
    .row {
        display: flex;
        justify-content: space-between;
        padding: 5px;

        .label {
            font-variant: small-caps;
        }
        &:nth-of-type(even) {
            background-color: $color1-dark;
        }
    }

    // slow-fade delay
    &.slow-fade-enter-active {
        transition-delay: 0.5s;
    }
}

</style>
