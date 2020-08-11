<template>
  <div
    class="column my-card relative-position"
    @mouseenter="$emit('mouseenter')"
    @mouseleave="$emit('mouseleave')"
    @click="$emit('click')"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'RkCard'
}
</script>

<style>
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