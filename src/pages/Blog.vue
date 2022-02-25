<template>
  <Layout>
    <section class="body-font">
      <div class="container mx-auto flex flex-wrap py-8">
        <div class="w-full md:w-2/3 flex flex-col pr-0 md:pr-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div v-for="post in $page.posts.edges" :key="post.id">
              <post-card :post="post"></post-card>
            </div>
          </div>

          <pagination-posts
            class="mt-10"
            v-if="$page.posts.pageInfo.totalPages > 1"
            base="/blog"
            :totalPages="$page.posts.pageInfo.totalPages"
            :currentPage="$page.posts.pageInfo.currentPage"
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
    </section>
  </Layout>
</template>

<page-query>
query Posts ($page: Int) {
  posts: allPost (sortBy: "date", order: DESC, perPage: 6, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        categories {
          id
          path
        }
        date (format: "MMMM D, Y")
        summary
        thumbnail
        timeToRead
        path
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Blog',
  },
  components: {
    AppSidebar: () => import('~/components/parts/AppSidebar'),
    PaginationPosts: () => import('~/components/PaginationPosts'),
    PostCard: () => import('~/components/PostCard'),
  },
}
</script>
