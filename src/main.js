import Vue from 'vue'
import App from './App'
import router from './router'
import fullHeight from 'fh-components/v-full-height'
import store from './store'
import CandleModule from '@/components/board/CandleModule'
import MainPaper from '@/components/board/MainPaper'
import TheIncantation from '@/components/board/TheIncantation'
import SketchHint from '@/components/utils/SketchHint'
import LedgerModule from '@/components/board/LedgerModule'
import ProgressModule from '@/components/board/ProgressModule'
import ProgressBar from '@/components/utils/ProgressBar'
import ObservedBook from '@/components/board/ObservedBook'
import ShelfMap from '@/components/board/ShelfMap'

Vue.config.productionTip = false

// Register components
Vue.component('candle-module', CandleModule)
Vue.component('main-paper', MainPaper)
Vue.component('the-incantation', TheIncantation)
Vue.component('sketch-hint', SketchHint)
Vue.component('ledger-module', LedgerModule)
Vue.component('progress-module', ProgressModule)
Vue.component('progress-bar', ProgressBar)
Vue.component('observed-book', ObservedBook)
Vue.component('shelf-map', ShelfMap)

// Register directives
Vue.directive('full-height', fullHeight)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
