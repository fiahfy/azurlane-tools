<template>
  <a class="mdc-list-item" @click.prevent="click">
    <slot/>
  </a>
</template>

<script>
export default {
  props: {
    to: {
      type: [String, Object]
    }
  },
  methods: {
    click () {
      if (this.to.indexOf('http') === 0) {
        window.location.href = this.to
        return
      }
      this.$router.push(this.to)
    }
  }
}
</script>
