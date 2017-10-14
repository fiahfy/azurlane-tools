<template>
  <div
    class="mdc-snackbar"
    aria-live="assertive"
    aria-atomic="true"
    aria-hidden="true"
  >
    <div class="mdc-snackbar__text"/>
    <div class="mdc-snackbar__action-wrapper">
      <button type="button" class="mdc-snackbar__action-button"/>
    </div>
  </div>
</template>

<script>
import { MDCSnackbar } from '@material/snackbar/dist/mdc.snackbar'

export default {
  props: {
    open: {
      type: Boolean,
      defaults: false
    },
    message: {
      type: String
    }
  },
  mounted () {
    this.snackbar = MDCSnackbar.attachTo(this.$el)
    this.show()
  },
  methods: {
    show () {
      if (!this.open) {
        return
      }
      const dataObj = {
        message: this.message,
        actionText: 'Close',
        actionHandler: () => {}
      }
      this.snackbar.show(dataObj)
      this.$emit('requestClose')
    }
  },
  watch: {
    message () {
      this.show()
    }
  }
}
</script>
