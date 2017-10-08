<template>
  <component :is="tag" :to="to" class="mdc-list-item">
    <slot/>
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'li'
    },
    to: {
      type: [String, Object]
    }
  }
}
</script>
