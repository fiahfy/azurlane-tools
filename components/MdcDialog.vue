<template>
  <aside
    class="mdc-dialog"
    role="alertdialog"
    aria-labelledby="mdc-dialog-label"
    aria-describedby="mdc-dialog-description"
  >
    <div class="mdc-dialog__surface">
      <header class="mdc-dialog__header">
        <h2 id="mdc-dialog-label" class="mdc-dialog__header__title">
          {{ title }}
        </h2>
      </header>
      <section id="mdc-dialog-description" class="mdc-dialog__body">
        <slot/>
      </section>
      <footer class="mdc-dialog__footer">
        <button type="button" class="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--cancel">Decline</button>
        <button type="button" class="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--accept">Accept</button>
      </footer>
    </div>
    <div class="mdc-dialog__backdrop"></div>
  </aside>
</template>

<script>
import { MDCDialog } from '@material/dialog/dist/mdc.dialog'

export default {
  props: {
    title: {
      type: String
    },
    open: {
      type: Boolean,
      defaults: false
    }
  },
  mounted () {
    this.dialog = MDCDialog.attachTo(this.$el)
    this.dialog.listen('MDCDialog:accept', () => {
      this.$emit('requestClose')
    })
    this.dialog.listen('MDCDialog:cancel', () => {
      this.$emit('requestClose')
    })
    this.show()
  },
  methods: {
    show () {
      if (!this.open) {
        return
      }
      this.dialog.show()
    }
  },
  watch: {
    open () {
      this.show()
    }
  }
}
</script>
