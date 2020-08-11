<template>
  <div class="q-gutter-y-md" style="max-width: 80vw; margin: 0 auto;">
    <div class="row justify-end">
      <q-select
        class="full-width"
        label="Filter tags"
        filled
        v-model="qsModel"
        use-input
        use-chips
        multiple
        input-debounce="0"
        :options="filterOptions"
        @filter="filterFn"
        style="max-width: 25rem"
        clearable
      />
    </div>
    <q-separator class="q-mb-md" color="blue-10" />
    <div class="row justify-center" style="margin: 0 auto;">
      <div
        class="col-12 col-xs-6 col-sm-4 cursor-pointer q-pa-sm"
        v-for="(article, id) in filteredArticles"
        :key="`article-${id}`"
        style="width: 20rem;"
      >
        <div
          class="column my-card full-width relative-position"
          style="height: 22rem;"
          @mouseenter="hovered=article.path"
          @mouseleave="hovered=null"
          @click="nav(article.path)"
        >
          <div class="col overflow-hidden relative-position">
            <q-img :src="coverPhoto(article)" :ratio="1" class="fit absolute" style="z-index: 1" />
            <transition
              appear
              enter-active-class="animated slideInUp"
              leave-active-class="animated slideOutDown"
            >
              <div
                v-show="hovered === article.path"
                class="fit absolute q-pa-sm"
                style="background-color: rgba(255,255,255,0.95); z-index: 2"
              >{{ article.frontmatter.rak_desc || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut aliquam massa. Curabitur pellentesque, neque in cursus lobortis, lacus nibh tincidunt erat, eget mollis justo augue ac risus. Duis gravida, erat ut mollis volutpat, ex arcu gravida elit, vel aliquam turpis nulla quis tellus.' }}</div>
            </transition>
          </div>
          <div class="col-3 q-px-md q-py-sm">
            <div
              class="text-weight-medium ellipsis-2-lines"
              style="font-size: 1.25rem; line-height: normal"
            >{{ article.title }}</div>
          </div>
          <div class="col-2 q-px-md q-py-none">
            <q-item class="q-pa-none" style="font-size: 0.8rem" dense>
              <q-item-section>
                <div class="row q-gutter-x-sm">
                  <q-icon name="far fa-calendar" size="0.9rem" />
                  <div>{{ article.lastUpdated || td }}</div>
                </div>
                <div class="row q-gutter-x-sm q-mt-sm">
                  <q-icon name="fas fa-tags" size="0.9rem" />
                  <div>{{ stringTags(article) }}</div>
                </div>
              </q-item-section>
            </q-item>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RkBlog',
  data: () => ({
    hovered: null,
    qsModel: [],
    td: new Date().toISOString(),
    model: null,
    filterOptions: []
  }),
  computed: {
    activeTags() {
      return this.qsModel || []
    },
    articles() {
      return this.$site.pages.filter(t => {
        return t.path.match(/^\/Knowledge-Hub\/Learn\/[\w\d-._]{2,}\/$/g)
      })
    },
    filteredArticles() {
      if (!this.activeTags.length) return this.articles
      return this.articles.filter(
        t =>
          t.frontmatter.tags &&
          t.frontmatter.tags.some(tt =>
            this.activeTags.includes(tt.replace(/-/g, ' '))
          )
      )
    },
    tags() {
      const tags = []
      this.articles.map(a => {
        tags.push(
          ...(a.frontmatter.tags || []).map(t => {
            t = t.replace(/-/g, ' ')
            return tags.includes(t) ? null : t
          })
        )
      })
      return tags.filter(t => t !== null)
    }
  },
  methods: {
    filterFn(val, update) {
      update(() => {
        if (val === '') {
          this.filterOptions = this.tags
        } else {
          const needle = val.toLowerCase()
          this.filterOptions = this.tags.filter(
            v => v.toLowerCase().indexOf(needle) > -1
          )
        }
      })
    },
    stringTags(article) {
      // show only first 3 tags
      return (article.frontmatter.tags || [])
        .map(t => {
          return t.replace(/-/g, ' ')
        })
        .slice(0, 3)
        .join(' • ')
    },
    onTagClick(tag) {
      if (this.activeTags.includes(tag))
        this.activeTags = this.activeTags.filter(t => t != tag)
      else this.activeTags = [...this.activeTags, tag]
    },
    nav(path) {
      this.$router.push(path)
    },
    coverPhoto(page) {
      return page.frontmatter.rak_img || '/assets/rakwireless/rak-blue-dark.svg'
    },
    category(page) {
      return page.path.split('/')[2] || 'Unknown'
    }
  },
  mounted() {
    const x = document.getElementsByClassName('theme-default-content')
    for (const sub of x) {
      sub.classList.add('rk-content')
    }
    this.filterOptions = this.tags
    this.qsModel = this.$root.tag ? [this.$root.tag] : []
    if (this.$root.tag) delete this.$root.tag
  }
}
</script>

<style>
.rk-content {
  max-width: 100vw !important;
  padding: 2rem 1rem !important;
}

.my-card {
  border-radius: 10px;
}
.my-card:before {
  content: '';
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 3px;
  border-radius: 10px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
}
</style>