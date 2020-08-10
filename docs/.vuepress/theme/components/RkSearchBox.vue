<template>
  <div class="q-mx-md full-height flex flex-center">
    <q-btn v-if="minimized" icon="search" @click="showDlg=true" round flat />
    <q-input
      v-else
      v-model="filter"
      color="white"
      style="width: 20rem;"
      rounded
      dark
      dense
      standout="bg-white text-black"
      :debounce="250"
      @focus="focused=true"
      @blur="delayed(() => { focused=false })"
      @keyup.enter="go(focusIndex)"
      @keyup.up="onUp"
      @keyup.down="onDown"
    >
      <template v-slot:append>
        <q-icon v-if="filter === ''" name="search" />
        <q-icon v-else name="clear" class="cursor-pointer" @click="filter = ''" />
      </template>
    </q-input>
    <q-menu
      v-model="showMenu"
      no-focus
      no-refocus
      @focus="menuFocused=true"
      @blur="menuFocused=false"
    >
      <q-list style="max-width: 30rem">
        <q-item v-for="f in filtered" :key="f.path" :to="f.path" @click="filter=''">
          <q-item-section>
            <q-item-label caption>
              <q-breadcrumbs class="text-grey-7" gutter="xs">
                <q-breadcrumbs-el icon="home" />
                <q-breadcrumbs-el
                  v-for="(item, id) in breadcrumbs(f.path)"
                  :key="`${f.path}-${id}`"
                  :label="item.replace(/-/g, ' ')"
                />
              </q-breadcrumbs>
            </q-item-label>
            <q-item-label>{{ f.title }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-menu>
    <q-dialog v-model="showDlg" maximized>
      <q-card>
        <q-btn
          icon="close"
          class="float-right q-pa-sm"
          style="z-index: 1"
          color="grey-7"
          round
          flat
          v-ripple
          v-close-popup
        />
        <q-card-section>
          <q-input
            v-model="filter"
            color="white"
            style="width: 20rem"
            rounded
            dense
            standout="bg-white text-black"
          >
            <template v-slot:append>
              <q-icon v-if="filter === ''" name="search" />
              <q-icon v-else name="clear" class="cursor-pointer" @click="filter = ''" />
            </template>
          </q-input>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name: 'RkSearchBox',
  props: {
    minimized: { type: Boolean, default: false }
  },
  data() {
    return {
      focused: false,
      focusIndex: 0,
      filter: '',
      showDlg: false,
      menuFocused: false
    }
  },

  computed: {
    showMenu: {
      get() {
        return (this.focused || this.menuFocused) && this.filtered.length > 0
      },
      set(val) {}
    },
    filterString() {
      return this.filter.trim().toLowerCase()
    },
    filtered() {
      if (!this.filterString) return []

      return this.$site.pages.filter(p => {
        let query = p.title || ''
        let tags = p.frontmatter.tags
        if (Array.isArray(tags) && tags.length)
          query = `${query} ${tags.join(' ')}`
        const x = query.toLowerCase().includes(this.filterString)
        // console.log(query.toLowerCase(), this.filterString, x)
        return x
      })
    }
  },

  mounted() {
    this.placeholder = this.$site.themeConfig.searchPlaceholder || ''
    document.addEventListener('keydown', this.onHotkey)
  },

  beforeDestroy() {
    document.removeEventListener('keydown', this.onHotkey)
  },

  methods: {
    delayed(fn) {
      setTimeout(fn, 100)
    },
    test(t) {
      console.log(t)
    },
    breadcrumbs(path) {
      const splits = path === '/' ? [] : path.slice(1, -1).split('/')
      return splits
    },
    onEnter() {
      this.$router.push(this.$refs[`pk-${this.focusIndex}`][0].to)
      this.query = null
      this.focusIndex = 0
      this.$refs.qinput.blur()
    },

    onUp() {
      if (this.showSuggestions) {
        if (this.focusIndex > 0) {
          this.focusIndex--
        } else {
          this.focusIndex = this.counter - 1
        }
      }
    },

    onDown() {
      if (this.showSuggestions) {
        if (this.focusIndex < this.counter - 1) {
          this.focusIndex++
        } else {
          this.focusIndex = 0
        }
      }
    },

    go(focusIndex) {
      if (!this.showSuggestions) {
        return
      }
      this.$router.push(this.suggestionList[focusIndex].path)
      this.query = ''
      this.focusIndex = 0
    },

    focus(i) {
      this.focusIndex = i
    },

    unfocus() {
      this.focusIndex = -1
    }
  }
}
</script>