import Vue from 'vue'
import Router from 'vue-router'
import WelcomeSpeech from '@/components/WelcomeSpeech'
import GameBoard from '@/components/GameBoard'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: WelcomeSpeech
        },
        {
            path: '/book-:nextBook',
            component: GameBoard
        }
    ]
})
