<template>

    <div class="progress-bar">

        <canvas ref="canvas" :width="width" :height="height"/>

    </div>

</template>

<script>
import rough from 'roughjs'

export default {
    data () {
        return {
            rc: null,
            context: null,
            width: 0,
            height: 0,
            updateInterval: null
        }
    },
    mounted () {
        this.rc = rough.canvas(this.$refs.canvas)
        this.context = this.$refs.canvas.getContext('2d')

        // update 10x/second
        this.updateInterval = setInterval(this.update, 1000 / 10)
    },
    methods: {
        update () {
            this.context.clearRect(0, 0, this.width, this.height)

            const rect = this.$el.getBoundingClientRect()

            this.width = rect.width
            this.height = rect.height

            const padding = 10

            // fill
            this.rc.rectangle(padding / 2, padding / 2, (this.width - padding) * this.$store.state.bookProgress, this.height - padding, {
                fill: '#816a48',
                fillWeight: 1,
                stroke: '#444'
            })
            // border
            this.rc.rectangle(padding / 2, padding / 2, this.width - padding, this.height - padding, {
                rougness: 2,
                stroke: '#444'
            })
        }
    }
}

</script>

<style lang="scss">

div.progress-bar {
    height: 40px;
    position: relative;

    canvas {
        position: absolute;
    }
}

</style>
