import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        amountLit: 1,
        candles: 10
    },
    mutations: {
        'RELIGHT': state => {
            if (state.candles > 0) {
                state.amountLit = 1
                state.candles--
            }
        }
    }
})
