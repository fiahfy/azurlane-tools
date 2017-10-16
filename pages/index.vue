<template>
  <section class="container">
    <div>
      <h1 class="title">
        azurlane-tools
      </h1>
      <h2 class="subtitle">
        Azurlane tools
      </h2>
    </div>
  </section>
</template>

<script>
export default {
  head () {
    return {
      title: 'Azurlane tools',
      titleTemplate: null
    }
  }
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
  word-break: break-all;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
