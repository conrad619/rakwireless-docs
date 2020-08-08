<template>
  <ClientOnly>
    <q-layout view="hHh LpR lfr">
      <q-header class="bg-primary text-white">
        <q-toolbar style="height: 70px">
          <q-btn
            flat
            @click="showDrawer = !showDrawer"
            round
            dense
            :icon="showDrawer ? 'menu_open' : 'menu'"
            class="lt-md"
          />
          <div class="full-height flex flex-center">
            <q-item :to="`/`" class="q-pa-none full-height">
              <q-item-section>
                <!-- <a href="/"> -->
                <img :src="`/assets/rakwireless/rak-white.svg`" style="width: 7.5rem" />
                <!-- </a> -->
              </q-item-section>
            </q-item>
          </div>
          <div class="gt-xs text-h5 q-px-sm">{{ $siteTitle }}</div>
          <q-space />
          <rk-toolbar-dropdown class="gt-md" />
          <rk-search-box class="lt-md" minimized />
        </q-toolbar>
        <q-separator class="bg-primary" style="padding: 0.1px" />
      </q-header>

      <q-drawer
        v-if="shouldShowSidebar || $q.screen.lt.md"
        v-model="showDrawer"
        content-class="bg-grey-1 text-grey-9 q-pa-none"
        @show="onDrawerShow"
        @hide="onDrawerHide"
      >
        <rk-sidebar :items="sidebarItems">
          <template #top>
            <slot name="sidebar-top" />
          </template>
          <template #bottom>
            <slot name="sidebar-bottom" />
          </template>
        </rk-sidebar>
      </q-drawer>
      <q-page-container @scroll="onPageScroll">
        <rk-header v-if="shouldHaveHeader" />
        <rk-page :sidebar-items="sidebarItems" />
        <rk-zoom />
        <q-page-sticky position="top-right" :offset="[15, 15]">
          <transition
            appear
            enter-active-class="animated bounceIn"
            leave-active-class="animated bounceOut"
          >
            <q-btn
              v-if="showBack2Top"
              color="primary"
              icon="fas fa-chevron-up"
              @click="back2Top"
              round
              v-ripple
            >
              <q-tooltip
                content-class="bg-black text-white"
                transition-show="scale"
                transition-hide="scale"
              >Back to Top</q-tooltip>
            </q-btn>
          </transition>
        </q-page-sticky>
      </q-page-container>
      <q-footer>
        <rk-footer />
      </q-footer>
    </q-layout>
  </ClientOnly>
</template>

<script>
import Home from '@theme/components/Home.vue'
import Navbar from '@theme/components/Navbar.vue'
import Page from '@theme/components/Page.vue'
import Sidebar from '@theme/components/Sidebar.vue'

import RkToolbarDropdown from '@theme/components/RkToolbarDropdown.vue'
import RkPage from '@theme/components/RkPage.vue'
import RkFooter from '@theme/components/RkFooter.vue'
import RkSidebar from '@theme/components/RkSidebar.vue'
import RkHeader from '@theme/components/RkHeader.vue'
import RkZoom from '@theme/components/RkZoom.vue'
import RkSearchBox from '@theme/components/RkSearchBox.vue'

import ScrollMixin from '@theme/components/mixins/scroll.mixin'

import { resolveSidebarItems } from '../util'

export default {
  name: 'Layout',

  components: {
    Home,
    Page,
    Sidebar,
    Navbar,
    RkToolbarDropdown,
    RkPage,
    RkFooter,
    RkSidebar,
    RkHeader,
    RkZoom,
    RkSearchBox
  },
  mixins: [ScrollMixin],

  data() {
    return {
      isSidebarOpen: false,
      mounted: false,
      showDrawer: true,
      showBack2Top: false,
      disableActiveHash: false
    }
  },

  computed: {
    shouldHaveHeader() {
      return this.$page.frontmatter.header || this.$page.frontmatter.article
    },
    shouldShowNavbar() {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (frontmatter.navbar === false || themeConfig.navbar === false) {
        return false
      }
      return (
        this.$title ||
        themeConfig.logo ||
        themeConfig.repo ||
        themeConfig.nav ||
        this.$themeLocaleConfig.nav
      )
    },

    shouldShowSidebar() {
      const { frontmatter } = this.$page
      return (
        !frontmatter.home &&
        frontmatter.sidebar !== false &&
        this.sidebarItems.length
      )
    },

    sidebarItems() {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    },

    pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar
        },
        userPageClass
      ]
    }
  },

  mounted() {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false
    })
    this.showDrawer = this.$q.screen.gt.md
    this.mounted = true
    // console.log('pages: ', this.$site.pages)
    // console.log('page: ', this.$page)

    // const min = Math.min(window.innerHeight, window.innerWidth)
    // document.documentElement.style.fontSize = `${0.015 * min}px`
    // document.documentElement.style.fontSize = '14px'
    // console.log('mounted: ', window.innerHeight, window.innerWidth, min, document.documentElement.style)
    // console.log('sidebaritems: ', this.sidebarItems)

    window.onscroll = this.onPageScroll
  },
  updated() {
    // replace all table with q-table instances
    const tables = document.getElementsByTagName('table')
    for (const tbl of tables) {
      // skip processed
      if (
        tbl.parentNode &&
        Array.from(tbl.parentNode.classList).includes('q-markup-table')
      )
        continue

      const tbl_ = tbl
      const parent = tbl.parentNode

      const qtable = document.createElement('div')
      qtable.classList.add(
        'q-markup-table',
        'q-table__container',
        'q-table__card',
        'q-table--horizontal-separator'
      )

      parent.replaceChild(qtable, tbl)
      tbl_.classList.add('q-table')
      qtable.appendChild(tbl_)
    }

    // toggle sidebar correctly
    if (this.$q.screen.gt.md) this.showDrawer = true
  },

  methods: {
    onDrawerShow() {
      if (this.$q.screen.lt.md) {
        // temporarily disabled setting active hash and smooth scroll
        document.documentElement.style.scrollBehavior = 'unset'
        this.disableActiveHash = true
      }
    },
    onDrawerHide() {
      const self = this
      setTimeout(() => {
        // re-enabled stuffs
        document.documentElement.style.scrollBehavior = 'smooth'
        self.disableActiveHash = true
      }, 100)
    },
    back2Top() {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    },
    onPageScroll() {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      )
        this.showBack2Top = true
      else this.showBack2Top = false
    },
    toggle() {},
    toggleSidebar(to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
      this.$emit('toggle-sidebar', this.isSidebarOpen)
    },

    // side swipe
    onTouchStart(e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },

    onTouchEnd(e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    }
  }
}
</script>

<style>
/* html {
  scroll-behavior: unset !important;
} */
</style>