<template>
  <div class="fit q-pa-xs sidebar column no-wrap">
    <div class="lt-md">
      <rk-toolbar-dropdown class="text-black" vertical />
      <q-separator class="q-mt-md" inset />
    </div>
    <div v-if="buySection" class="column flex flex-center q-mt-md" style="max-height: 100%;">
      <div class="gt-sm column flex flex-center q-gutter-y-sm">
        <img :src="buySection.img" style="max-width: 80%; max-height: 80%" />
        <q-btn
          class="q-my-md"
          label="Buy from Store"
          color="primary"
          style="width: 15rem"
          type="a"
          :href="buySection.store"
          target="_blank"
          no-caps
          rounded
        />
      </div>
      <q-expansion-item class="lt-md full-width" default-opened>
        <template #header>
          <div
            class="fit q-px-lg text-weight-medium"
            style="margin:auto"
          >{{ buySection.label || 'Device Info' }}</div>
        </template>
        <div class="column flex flex-center q-gutter-y-sm">
          <img :src="buySection.img" style="max-width: 80%; max-height: 80%" />
          <q-btn
            class="q-my-md"
            label="Buy from Store"
            color="primary"
            style="width: 15rem"
            type="a"
            :href="buySection.store"
            target="_blank"
            no-caps
            rounded
          />
        </div>
      </q-expansion-item>
      <q-separator class="q-mb-md" inset />
    </div>
    <q-scroll-area
      v-if="$page.frontmatter.sidebar !== false"
      ref="scrollArea"
      class="col"
      :thumb-style="thumbStyle"
      :bar-style="barStyle"
    >
      <slot name="top" />
      <SidebarLinks :depth="0" :items="items" style="padding-bottom: 2.5rem" />
      <slot name="bottom" />
    </q-scroll-area>
  </div>
</template>

<script>
import SidebarLinks from '@theme/components/SidebarLinks.vue'
import NavLinks from '@theme/components/NavLinks.vue'
import RkToolbarDropdown from '@theme/components/RkToolbarDropdown.vue'
import Buy from '../../includes/buy'

export default {
  name: 'Sidebar',
  props: ['items'],
  components: { SidebarLinks, NavLinks, RkToolbarDropdown },
  data: () => ({
    thumbStyle: {
      right: '4px',
      borderRadius: '5px',
      backgroundColor: '#027be3',
      width: '5px',
      opacity: 0.75
    },

    barStyle: {
      right: '2px',
      borderRadius: '9px',
      backgroundColor: '#027be3',
      width: '9px',
      opacity: 0.2
    }
  }),
  computed: {
    buySection() {
      const match = this.$page.path.match(
        /\/Product-Categories\/[\w\d-]+\/[\w\d-]+\//g
      )
      if (!(match && match.length) || !Object.keys(Buy).includes(match[0]))
        return null

      return Buy[match[0]]
    }
  },
  methods: {
    setInitialScroll() {
      const { path } = this.$page
      const element = document.getElementById(path)
      if (!element) return

      this.$refs.scrollArea.setScrollPosition(element.offsetTop)
    }
  },
  updated() {
    this.setInitialScroll()
  }
  // not applicable for ssr
  // watch: {
  //   $page: function (val) {
  //     this.setInitialScroll()
  //   }
  // }
}
</script>

<style lang="stylus">
.sidebar {
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  a {
    display: inline-block;
  }

  .nav-links {
    display: none;
    border-bottom: 1px solid $borderColor;
    padding: 0.5rem 0 0.75rem 0;

    a {
      font-weight: 600;
    }

    .nav-item, .repo-link {
      display: block;
      line-height: 1.25rem;
      font-size: 1.1em;
      padding: 0.5rem 0 0.5rem 1.5rem;
    }
  }

  & > .sidebar-links {
    padding: 1.5rem 0;

    & > li > a.sidebar-link {
      font-size: 1.1em;
      line-height: 1.7;
      font-weight: bold;
    }

    & > li:not(:first-child) {
      margin-top: 0.75rem;
    }
  }
}

@media (max-width: $MQMobile) {
  .sidebar {
    .nav-links {
      display: block;

      .dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after {
        top: calc(1rem - 2px);
      }
    }

    & > .sidebar-links {
      padding: 1rem 0;
    }
  }
}
</style>
