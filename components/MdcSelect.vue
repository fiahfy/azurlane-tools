<template>
  <div class="mdc-select" role="listbox" tabindex="0">
    <span class="mdc-select__selected-text">{{ text }}</span>
    <div class="mdc-simple-menu mdc-select__menu">
      <ul class="mdc-list mdc-simple-menu__items">
        <slot/>
      </ul>
    </div>
  </div>
</template>

<script>
import { MDCSelect } from '@material/select/dist/mdc.select'

export default {
  props: {
    value: {
      type: [String, Number]
    }
  },
  data () {
    return {
      text: ''
    }
  },
  mounted () {
    const select = new MDCSelect(this.$el) // eslint-disable-line
    select.listen('MDCSelect:change', () => {
      this.text = select.selectedOptions[0].textContent
      const value = typeof (this.value) === 'number' ? +select.value : select.value
      this.$emit('input', value)
    })
  }
}
</script>
