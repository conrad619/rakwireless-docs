<template>
  <div class="bg-white text-grey-7 q-pa-md" style="padding: 2.5rem 0">
    <div class="full-height flex flex-center q-py-md">
      <img :src="`/assets/rakwireless/RAK-only-gray.svg`" style="width: 12.5rem" />
    </div>
    <div
      class="q-mx-md text-center"
      v-for="(footer, id) of $site.themeConfig.pageFooter"
      :key="`footer-${id}`"
    >{{ footer }}</div>
  </div>
</template>