import Vue from 'vue'
import App from './App'
import router from './router'
import fullHeight from 'fh-components/v-full-height'
import store from './store'
import CandleModule from '@/components/board/CandleModule'

Vue.config.productionTip = false

// Register components
Vue.component('candle-module', CandleModule)

// Register directives
Vue.directive('full-height', fullHeight)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
