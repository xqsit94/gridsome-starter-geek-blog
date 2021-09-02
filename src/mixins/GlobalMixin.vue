<script>
export default {
  methods: {
    parentCategory(categories) {
      const string =
        typeof categories !== 'undefined' && categories.length > 0
          ? categories[0].id
          : 'uncategorized'
      return string.toUpperCase()
    },

    parentCategoryPath(categories) {
      return typeof categories !== 'undefined' && categories.length > 0
        ? categories[0].path
        : false
    },
  },
}
</script>
