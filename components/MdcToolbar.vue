<template>
  <div>
    <header class="mdc-toolbar" :class="headerClasses">
      <div class="mdc-toolbar__row">
        <section class="mdc-toolbar__section mdc-toolbar__section--align-start">
          <slot name="left"/>
          <span class="mdc-toolbar__title">{{ title }}</span>
        </section>
      </div>
    </header>
    <main :class="mainClasses">
      <slot name="main"/>
    </main>
  </div>
</template>

<script>
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
  }
}
</script>
