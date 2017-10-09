<template>
  <section class="container">
  </section>
</template>

<script>
export default {
  asyncData ({ store }) {
    const title = 'Ship EXP calculator'
    store.commit('setTitle', { title })
    return { title }
  },
  head () {
    return {
      title: this.title
    }
  },
  data () {
    return {
    }
  }
}
</script>
