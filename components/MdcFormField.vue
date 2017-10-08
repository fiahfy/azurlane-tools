<template>
  <div class="mdc-form-field" :class="classes">
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    align: {
      type: String
    }
  },
  computed: {
    classes () {
      return {
        'mdc-form-field--align-end': this.align === 'end'
      }
    }
  }
}
</script>
