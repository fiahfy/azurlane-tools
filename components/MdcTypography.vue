<template>
  <component :is="tag" class="mdc-typography" :class="classes">
    <slot/>
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'p'
    },
    type: {
      type: String
    },
    adjustMargin: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      const classes = { 'mdc-typography--adjust-margin': this.adjustMargin }
      if (this.type) {
        return {
          ...classes,
          ['mdc-typography--' + this.type.toLowerCase()]: true
        }
      }
      return classes
    }
  }
}
</script>
