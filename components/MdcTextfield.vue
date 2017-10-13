<template>
  <div
    class="mdc-textfield"
    :class="classes"
  >
    <input
      class="mdc-textfield__input"
      :type="type"
      :id="id"
      :placeholder="placeholder"
      :aria-label="placeholder"
      :value="value"
      @input="updateValue"
      @keyup="keyup"
    />
    <label
      class="mdc-textfield__label"
      :for="id"
      v-if="!fullwidth"
    >{{ label }}</label>
    <div
      class="mdc-textfield__bottom-line"
      v-if="!fullwidth"
    />
  </div>
</template>

<script>
import { MDCTextfield } from '@material/textfield/dist/mdc.textfield'

export default {
  props: {
    value: {
      type: [String, Number]
    },
    type: {
      type: String,
      input: 'text'
    },
    label: {
      type: String
    },
    fullwidth: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      id: -1
    }
  },
  mounted () {
    this.$nextTick(() => {
      MDCTextfield.attachTo(this.$el)
    })
    this.id = this._uid // eslint-disable-line no-underscore-dangle
  },
  computed: {
    classes () {
      return {
        'mdc-textfield--fullwidth': this.fullwidth
      }
    },
    placeholder () {
      return this.fullwidth ? this.label : null
    }
  },
  methods: {
    updateValue (e) {
      this.$emit('input', e.target.value)
    },
    keyup (e) {
      this.$emit('keyup', e)
    }
  }
}
</script>

<style scoped>
input {
  /* Fix border for mobile */
  border-radius: 0;
}
.mdc-textfield__input {
  border-bottom: 1px solid rgba(0,0,0,.12);
  padding-bottom: 7px;
}
.mdc-textfield__label {
  font-family: Roboto,sans-serif;
  white-space: nowrap;
}
</style>

