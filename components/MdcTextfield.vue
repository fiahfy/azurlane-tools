<template>
  <div>
    <div
      class="mdc-textfield"
      :class="classes"
    >
      <input
        class="mdc-textfield__input"
        :type="type"
        :step="step"
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
    <slot/>
    <p v-if="helptext" class="mdc-textfield-helptext mdc-textfield-helptext--persistent">
      {{ helptext }}
    </p>
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
    step: {
      type: String,
      input: ''
    },
    label: {
      type: String
    },
    helptext: {
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
      MDCTextfield.attachTo(this.$el.querySelector('.mdc-textfield'))
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
.mdc-textfield__input {
  /* Fix border for mobile */
  border-radius: 0;
  margin: 0;
}
.mdc-textfield__input {
  border-bottom: 1px solid rgba(0,0,0,.12);
  padding-bottom: 7px;
}
.mdc-textfield__label {
  font-family: Roboto,sans-serif;
  height: 19px;
  white-space: nowrap;
}
</style>

