<template>
  <div>
    <header class="mdc-toolbar" :class="headerClasses">
      <div class="mdc-toolbar__row">
        <section class="mdc-toolbar__section mdc-toolbar__section--align-start">
          <mdc-icon icon="menu" class="mdc-toolbar__icon--menu" @click.native="menuClick"/>
          <span class="mdc-toolbar__title">{{ title }}</span>
        </section>
      </div>
    </header>
    <main :class="mainClasses">
      <slot/>
    </main>
  </div>
</template>

<script>
import MdcIcon from '~/components/MdcIcon'

export default {
  props: {
    title: {
      type: String
    },
    fixed: {
      type: Boolean,
      defaults: false
    }
  },
  components: {
    MdcIcon
  },
  computed: {
    headerClasses () {
      return {
        'mdc-toolbar--fixed': this.fixed
      }
    },
    mainClasses () {
      return {
        'mdc-toolbar-fixed-adjust': this.fixed
      }
    }
  },
  methods: {
    menuClick (e) {
      this.$emit('menuClick', e)
    }
  }
}
</script>
