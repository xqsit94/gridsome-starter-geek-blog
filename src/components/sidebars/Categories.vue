<template>
  <div className="w-full flex flex-col my-4">
    <h2 class="title-font text-lg font-medium mb-3">CATEGORIES</h2>
    <nav class="list-none mb-5">
      <ul v-for="category in $static.category.edges">
        <li>
          <g-link :to="category.node.path">{{ category.node.title | capitalise }} ({{ category.node.belongsTo.totalCount }})</g-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<static-query>
query {
  category: allCategory(sortBy: "title", order: ASC) {
    edges {
      node {
        id
        title
        path
        belongsTo {
          totalCount
        }
      }
    }
  }
}
</static-query>