<template>
  <div class="q-mx-md full-height flex flex-center">
    <q-btn v-if="minimized" icon="search" @click="showDlg=true" round flat />
    <q-input
      v-else
      v-model="filter"
      color="white"
      style="width: 20rem"
      rounded
      dark
      dense
      standout="bg-white text-black"
    >
      <template v-slot:append>
        <q-icon v-if="filter === ''" name="search" />
        <q-icon v-else name="clear" class="cursor-pointer" @click="filter = ''" />
      </template>
    </q-input>
    <q-dialog v-model="showDlg" maximized>
      <q-card>
        <q-btn icon="close" class="float-right q-pa-sm" color="grey-7" round flat v-ripple v-close-popup />
      </q-card>
    </q-dialog>
  </div>
  <!-- <div class="search-box">
    <input
      ref="input"
      aria-label="Search"
      :value="query"
      :class="{ 'focused': focused }"
      :placeholder="placeholder"
      autocomplete="off"
      spellcheck="false"
      @input="query = $event.target.value"
      @focus="focused = true"
      @blur="focused = false"
      @keyup.enter="go(focusIndex)"
      @keyup.up="onUp"
      @keyup.down="onDown"
    >

    <ul
      v-if="showSuggestions"
      class="suggestions q-pa-none"
      :class="{ 'align-right': false }"
      @mouseleave="unfocus"
    >
      <li
        class="q-pa-xs"
        v-for="(key, i) in this.$site.themeConfig.test"
        :key="`${key}-${i}`"
      >
        <div
          class="q-pa-xs bg-light-blue-10 text-white text-weight-medium rounded-borders"
          style="text-transform: capitalize"
        >{{ clean(key) }}</div>
        <ul
          class="column"
          style="list-style: none"
        >
          <li
            class="suggestion full-width q-pa-xs"
            v-for="(s, i) in suggestions[key]"
            :key="i"
            :class="{ focused: focusIndex === s.pk }"
            @mousedown="go(s.pk)"
            @mouseenter="focus(s.pk)"
          >
            <a
              :href="s.path"
              @click.prevent
            >
              <span class="page-title">{{ s.title || s.path }}</span>
              <span
                v-if="s.header"
                class="header"
              >&gt; {{ s.header.title }}</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>-->
</template>

<script>
import get from 'lodash/get'

const matchTest = (query, domain) => {
  const escapeRegExp = str => str.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')

  const words = query
    .split(/\s+/g)
    .map(str => str.trim())
    .filter(str => !!str)
  const hasTrailingSpace = query.endsWith(' ')
  const searchRegex = new RegExp(
    words
      .map((word, index) => {
        if (words.length === index + 1 && !hasTrailingSpace) {
          // The last word - ok with the word being "startswith"-like
          return `(?=.*\\b${escapeRegExp(word)})`
        } else {
          // Not the last word - expect the whole word exactly
          return `(?=.*\\b${escapeRegExp(word)}\\b)`
        }
      })
      .join('') + '.+',
    'gi'
  )
  return searchRegex.test(domain)
}

const matchQuery = (query, page, additionalStr = null) => {
  let domain = get(page, 'title', '')

  if (get(page, 'frontmatter.tags')) {
    domain += ` ${page.frontmatter.tags.join(' ')}`
  }

  if (additionalStr) {
    domain += ` ${additionalStr}`
  }

  return matchTest(query, domain)
}

/* global SEARCH_MAX_SUGGESTIONS, SEARCH_PATHS, SEARCH_HOTKEYS */
const SEARCH_MAX_SUGGESTIONS = 5
const SEARCH_PATHS = null
const SEARCH_HOTKEYS = ['s', '/']

export default {
  name: 'RkSearchBox',
  props: {
    minimized: { type: Boolean, default: false }
  },
  data() {
    return {
      query: '',
      focused: false,
      focusIndex: 0,
      placeholder: undefined,
      counter: 0,
      filter: '',
      showDlg: false
    }
  },

  computed: {
    showSuggestions() {
      return (
        this.focused && this.suggestions && Object.keys(this.suggestions).length
      )
    },

    suggestions() {
      if (!this.query) return
      this.counter = 0
      const query = this.query.trim().toLowerCase()
      const matchPage = p =>
        this.$site.themeConfig.test.find(pth => p.path.match(pth))
      const pushPage = (res, p) => {
        const idx = matchPage(p)
        p.pk = this.counter++
        if (!res[idx]) res[idx] = []
        res[idx].push(p)
      }

      const { pages } = this.$site
      const max =
        this.$site.themeConfig.searchMaxSuggestions || SEARCH_MAX_SUGGESTIONS
      const localePath = this.$localePath
      const res = {}
      for (let i = 0; i < pages.length; i++) {
        const p = pages[i]
        const mp = matchPage(p)
        if (res[mp] && res[mp].length >= max) continue

        // filter out results that do not match current locale
        if (this.getPageLocalePath(p) !== localePath) {
          continue
        }

        // filter out results that do not match searchable paths
        if (!this.isSearchable(p)) {
          continue
        }

        if (matchQuery(query, p)) {
          pushPage(res, p)
        } else if (p.headers) {
          for (let j = 0; j < p.headers.length; j++) {
            if (res[mp] && res[mp].length >= max) break
            const h = p.headers[j]
            if (h.title && matchQuery(query, p, h.title)) {
              pushPage(
                res,
                Object.assign({}, p, {
                  path: p.path + '#' + h.slug,
                  header: h
                })
              )
            }
          }
        }
      }

      return res
    },

    suggestionList() {
      const res = []
      for (const key in this.suggestions) res.push(...this.suggestions[key])
      return res
    },

    // make suggestions align right when there are not enough items
    alignRight() {
      const navCount = (this.$site.themeConfig.nav || []).length
      const repo = this.$site.repo ? 1 : 0
      return navCount + repo <= 2
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
    clean(path) {
      return path
        .split('/')
        .find(t => t !== '')
        .replace('-', ' ')
    },
    getPageLocalePath(page) {
      for (const localePath in this.$site.locales || {}) {
        if (localePath !== '/' && page.path.indexOf(localePath) === 0) {
          return localePath
        }
      }
      return '/'
    },

    isSearchable(page) {
      let searchPaths = this.$site.themeConfig.test || SEARCH_PATHS

      // all paths searchables
      if (searchPaths === null) {
        return true
      }

      searchPaths = Array.isArray(searchPaths)
        ? searchPaths
        : new Array(searchPaths)

      return (
        searchPaths.filter(path => {
          return page.path.match(path)
        }).length > 0
      )
    },

    onHotkey(event) {
      if (
        event.srcElement === document.body &&
        SEARCH_HOTKEYS.includes(event.key)
      ) {
        this.$refs.input.focus()
        event.preventDefault()
      }
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

<style lang="stylus">
.search-box {
  display: inline-block;
  position: relative;
  margin-right: 1rem;

  input {
    cursor: text;
    width: 10rem;
    height: 2rem;
    color: lighten($textColor, 25%);
    display: inline-block;
    border: 1px solid darken($borderColor, 10%);
    border-radius: 2rem;
    font-size: 0.9rem;
    line-height: 2rem;
    padding: 0 0.5rem 0 2rem;
    outline: none;
    transition: all 0.2s ease;
    background: #fff url('/assets/search.svg') 0.6rem 0.5rem no-repeat;
    background-size: 1rem;

    &:focus {
      cursor: auto;
      border-color: $accentColor;
    }
  }

  .suggestions {
    background: #fff;
    width: 20rem;
    position: absolute;
    top: 2 rem;
    border: 1px solid darken($borderColor, 10%);
    border-radius: 6px;
    // padding: 0.4rem;
    list-style-type: none;

    &.align-right {
      right: 0;
    }
  }

  .suggestion {
    line-height: 1.4;
    // padding: 0.4rem 0.6rem;
    border-radius: 4px;
    cursor: pointer;

    a {
      white-space: normal;
      color: lighten($textColor, 35%);

      .page-title {
        font-weight: 600;
      }

      .header {
        font-size: 0.9em;
        margin-left: 0.25em;
      }
    }

    &.focused {
      background-color: #f3f4f5;

      a {
        color: $accentColor;
      }
    }
  }
}

@media (max-width: $MQNarrow) {
  .search-box {
    input {
      cursor: pointer;
      width: 0;
      border-color: transparent;
      position: relative;

      &:focus {
        cursor: text;
        left: 0;
        width: 10rem;
      }
    }
  }
}

// Match IE11
@media all and (-ms-high-contrast: none) {
  .search-box input {
    height: 2rem;
  }
}

@media (max-width: $MQNarrow) and (min-width: $MQMobile) {
  .search-box {
    .suggestions {
      left: 0;
    }
  }
}

@media (max-width: $MQMobile) {
  .search-box {
    margin-right: 0;

    input {
      left: 1rem;
    }

    .suggestions {
      right: 0;
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .search-box {
    .suggestions {
      width: calc(100vw - 4rem);
    }

    input:focus {
      width: 8rem;
    }
  }
}
</style>
