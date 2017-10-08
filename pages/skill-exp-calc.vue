<template>
  <section>
    <h1>...</h1>
    <div>
    </div>
  </section>
</template>

<script>
export default {
  asyncData ({ store }) {
    const title = 'Skill EXP calculator'
    store.commit('setTitle', { title })
    return { title }
  },
  head () {
    return {
      title: this.title
    }
  }
}
</script>
