import Vue from 'vue'
import Router from 'vue-router'
import WelcomeSpeech from '@/components/WelcomeSpeech'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: WelcomeSpeech
        }
    ]
})
