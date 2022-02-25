<template>
  <Layout>
    <section class="body-font">
      <div class="container mx-auto py-8">
        <h2 class="heading mb-5">Category: {{ $page.category.id }}</h2>
        <div class="flex flex-wrap">
          <div class="w-full md:w-2/3 flex flex-col pr-0 md:pr-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div
                v-for="post in $page.category.belongsTo.edges"
                :key="post.node.id"
              >
                <post-card :post="post"></post-card>
              </div>
            </div>
            <pagination-posts
              class="mt-10"
              v-if="$page.category.belongsTo.pageInfo.totalPages > 1"
              :base="`/category/${$page.category.id}`"
              :totalPages="$page.category.belongsTo.pageInfo.totalPages"
              :currentPage="$page.category.belongsTo.pageInfo.currentPage"
            />
          </div>
          <aside
            class="
              w-full
              md:w-1/3
              flex flex-col
              pl-2
              pr-2
              mt-5
              md:mt-0 md:pr-0 md:pl-6 md:border-l-1
              border-gray-300
              dark:border-gray-700
            "
          >
            <app-sidebar sidebar="Categories" />
          </aside>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query Category ($id: ID!, $page: Int) {
  category: category (id: $id) {
    id
    belongsTo (page: $page, perPage: 6) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ...on Post {
            title
            timeToRead
            date (format: "MMMM D, YYYY")
            path
            summary
            thumbnail
            categories {
              id
              path
            }
            tags {
              title
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: 'Tag: ' + this.$page.category.id,
    }
  },
  components: {
    AppSidebar: () => import('~/components/parts/AppSidebar'),
    PaginationPosts: () => import('~/components/PaginationPosts'),
    PostCard: () => import('~/components/PostCard'),
  },
}
</script>
