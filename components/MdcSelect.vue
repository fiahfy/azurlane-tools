<template>
  <div class="mdc-select" role="listbox" tabindex="0">
    <label v-if="label">{{ label }}</label>
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
    },
    label: {
      type: String
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

<style scoped>
.mdc-select {
  margin-top: 31px;
  margin-bottom: 8px;
  position: relative;
}
label {
  bottom: 7px;
  color: rgba(0,0,0,.5);
  cursor: auto;
  font-size: medium;
  left: 0;
  letter-spacing: initial;
  line-height: initial;
  position: absolute;
  transform: translateY(-100%) scale(.75);
  transform-origin: left top;
  white-space: nowrap;
}
.mdc-select__selected-text:empty:before {
  content: "\200b";
}
</style>
