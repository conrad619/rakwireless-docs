<template>
  <q-dialog v-model="zoom" @show="onShow" maximized persistent>
    <q-card>
      <q-btn
        class="float-right q-ma-md"
        style="z-index: 99"
        icon="close"
        color="grey-8"
        @click="onClose"
        round
        flat
      />
      <q-card-section
        v-touch-pan.prevent.mouse="handlePan"
        class="fit flex flex-center absolute"
        style="overflow: hidden"
        @wheel="onWheel"
      >
        <img
          id="rk-zoom"
          class="absolute"
          :src="img"
          :draggable="false"
          :width="width"
          :height="height"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
let count = 0
let lastPath = null
let zoomFactor = 1.15
let imgEl

export default {
  data: () => ({
    zoom: false,
    img: '',
    width: null,
    height: null
  }),
  methods: {
    onClose() {
      // re-enable smooth scroll
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = 'smooth'
      }, 100)
      this.zoom = false
    },
    onGlobalZoom(path, [width, height]) {
      // temporarily disable smooth scroll
      document.documentElement.style.scrollBehavior = 'unset'
      // console.log('globalzoom: ', path, width, height)
      this.img = path
      this.width = width
      this.height = height
      this.zoom = true
    },
    handlePan({ ev, ...info }) {
      imgEl.style.top = imgEl.offsetTop + info.delta.y + 'px'
      imgEl.style.left = imgEl.offsetLeft + info.delta.x + 'px'
    },
    onWheel(ev) {
      // console.log(ev)
      const fh = imgEl.clientHeight
      const fw = imgEl.clientWidth
      let zHeight = fh
      let zWidth = fw

      if (ev.deltaY < 0) {
        zHeight *= zoomFactor
        zWidth *= zoomFactor
      } else if (ev.deltaY > 0) {
        zHeight /= zoomFactor
        zWidth /= zoomFactor
      }

      imgEl.style.width = zWidth + 'px'
      imgEl.style.height = zHeight + 'px'

      // console.log(zHeight, zWidth)

      // const scalechange = zHeight / fh - 1
      const offsetY = (fh - zHeight) / 2
      const offsetX = (fw - zWidth) / 2

      imgEl.style.top = imgEl.offsetTop + offsetY + 'px'
      imgEl.style.left = imgEl.offsetLeft + offsetX + 'px'
      // console.log(offsetY, offsetX)
    },
    onShow() {
      imgEl = document.querySelector('#rk-zoom')
      imgEl.style.top = imgEl.offsetTop + 'px'
      imgEl.style.left = imgEl.offsetLeft + 'px'
      // setInterval(() => {
      //   const body = document.querySelector('body')
      //   console.log('bdy: ', body)
      //   body.style.position = 'inherit !important'
      // }, 100)
    }
  },
  mounted() {
    this.$root.$on('rk-zoom', this.onGlobalZoom)
  },
  beforeDestroy() {
    this.$root.$off('rk-zoom', this.onGlobalZoom)
  }
}
</script>