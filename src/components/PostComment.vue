<template>
  <Vssue :title="title" />
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style src="../css/vssue.css" />
