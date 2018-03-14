<template>

    <main class="welcome-speech">

        <h2>The Library with No Windows</h2>

        <div class="wrap">
            <p v-html="cmpOpening"/>

            <div class="button-wrap">
                <button v-if="index > 0" @click="index = Math.max(index - 1, 0)">←</button>
                <button v-if="index < opening.length - 1" @click="index = Math.min(opening.length, index + 1)">→</button>
                <router-link to="/level-1" v-if="index >= opening.length - 1">Continue</router-link>
            </div>
        </div>

    </main>

</template>

<script>
import opening from '@/assets/opening'

export default {
    data () {
        return {
            index: 0,
            opening
        }
    },
    computed: {
        cmpOpening () {
            return opening[this.index]
        }
    }

}

</script>

<style lang="scss">
@import 'src/styles/vars';

main.welcome-speech {
    padding: 40px;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    box-sizing: border-box;

    h2 {
        margin-top: 0;
        font-size: 36px;
        padding-bottom: 20px;
        border-bottom: 5px solid $white;
    }
    .wrap {
        display: flex;
        justify-content: space-between;
        min-height: 150px;
    }
    p {
        font-size: 18px;
        max-width: 400px;
        line-height: 1.4;
        margin: 0;
    }
    button,
    a {
        height: 100%;
        font-size: 24px;
        font-weight: 700;
        transition: background-color 0.4s, color 0.4s;

        &:hover,
        &:focus {
            background-color: $white;
            color: $black;
        }
        & + button {
            margin-left: 20px;
        }
    }
}

</style>
