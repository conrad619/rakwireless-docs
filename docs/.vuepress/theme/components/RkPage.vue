<template>
  <q-page style="max-width: 1200px; margin: 0 auto;">
    <rk-breadcrumbs :sidebar-items="sidebarItems" />
    <Content id="nodeToRenderAsPDF" class="fit theme-default-content" />
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />
  </q-page>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
import RkBreadcrumbs from '@theme/components/RkBreadcrumbs.vue'

export default {
  components: { PageEdit, PageNav, RkBreadcrumbs },
  props: ['sidebarItems']
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl';

.page {
  padding-bottom: 2rem;
  display: block;
}
.theme-default-content {
  max-width: 2000px !important;
}
</style>
