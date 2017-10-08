<template>
  <ul class="mdc-list" :class="classes">
    <slot/>
  </ul>
</template>

<script>
export default {
  props: {
    twoLine: {
      type: Boolean,
      default: false
    },
    dense: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return {
        'mdc-list--two-line': this.twoLine,
        'mdc-list--dense': this.dense
      }
    }
  }
}
</script>
