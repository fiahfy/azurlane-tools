<template>
  <aside class="mdc-temporary-drawer mdc-typography">
    <nav class="mdc-temporary-drawer__drawer">
      <header class="mdc-temporary-drawer__header">
        <div class="mdc-temporary-drawer__header-content mdc-theme--primary-bg mdc-theme--text-primary-on-primary">
          {{ header }}
        </div>
      </header>
      <nav id="icon-with-text-demo" class="mdc-temporary-drawer__content mdc-list">
        <slot/>
      </nav>
    </nav>
  </aside>
</template>

<script>
export default {
  props: {
    header: {
      type: String
    },
    open: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    const {MDCTemporaryDrawer} = require('@material/drawer')
    this.drawer = new MDCTemporaryDrawer(this.$el)
    this.$el.addEventListener('MDCTemporaryDrawer:open', () => {
      this.$emit('requestChange', true)
    })
    this.$el.addEventListener('MDCTemporaryDrawer:close', () => {
      this.$emit('requestChange', false)
    })
  },
  watch: {
    open (value) {
      this.drawer.open = value
    }
  }
}
</script>
