<template>
  <component :is="component" />
</template>

<script>
export default {
  name: 'sidebar',
  props: {
    sidebar: {
      default: 'Default'
    }
  },
  computed: {
    component() {
      return () => import(`~/components/sidebars/${this.sidebar}`)
    }
  }
}
</script>