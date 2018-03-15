import Vue from 'vue'
import Vuex from 'vuex'
import Book from '@/gameplay/Book'

Vue.use(Vuex)

function clamp (val, min, max) {
    return Math.max(Math.min(max, val), min)
}

// GAME CONSTANTS
const bookDelta = 0.01

// STORE
export default new Vuex.Store({
    state: {
        // candle information
        amountLit: 0,
        darkPerSecond: 0.005,
        candles: 10,

        // incantation info
        incantationBlocked: false,
        incantationsSpoken: 0,

        // book info
        books: [],
        bookProgress: 0,
        bookDelta: 0,

        // meta info
        updatesPerSecond: 10
    },
    mutations: {
        'RELIGHT': state => {
            if (state.candles > 0) {
                state.amountLit = 1
                state.candles--
            }
        },
        'CANDLE_DECAY': state => {
            const decay = (1 / state.updatesPerSecond) * state.darkPerSecond
            state.amountLit = clamp(state.amountLit - decay, 0, 1)
        },
        'CHANGE_AMOUNT_LIT': (state, payload) => {
            state.amountLit += payload
            state.amountLit = clamp(state.amountLit, 0, 1)
        },
        'INCANTATION_SPOKEN': state => {
            state.incantationsSpoken++
            state.incantationBlocked = true
            state.bookDelta += bookDelta
        },
        'ACQUIRE_BOOK': state => {
            state.books.push(new Book())
            state.incantationBlocked = false
        }

    },
    actions: {
        'UPDATE': ({ state, commit }) => {
            state.bookProgress += state.bookDelta
            if (state.bookProgress >= 1) {
                state.bookProgress = 0
                state.bookDelta = 0
                commit('ACQUIRE_BOOK')
            }
        }
    }
})
