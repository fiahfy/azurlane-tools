<template>
  <button
    class="mdc-fab material-icons"
    :aria-label="icon"
    @click="click"
  >
    <span class="mdc-fab__icon">
      {{ icon }}
    </span>
  </button>
</template>

<script>
import { MDCRipple } from '@material/ripple/dist/mdc.ripple'

export default {
  props: {
    icon: {
      type: String
    }
  },
  mounted () {
    MDCRipple.attachTo(this.$el)
  },
  methods: {
    click () {
      this.$emit('click')
    }
  }
}
</script>
