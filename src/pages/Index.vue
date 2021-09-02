<template>
  <Layout>
    <section class="body-font">
      <div class="container px-5 py-8 mx-auto">
        <h2 class="heading mb-5">Recent Posts</h2>
        <div class="flex flex-wrap -m-4">
          <div
            v-for="post in $page.recentPosts.edges"
            :key="post.id"
            class="p-4 md:w-1/3"
          >
            <post-card :post="post"></post-card>
          </div>
        </div>
        <div class="text-center my-8">
          <g-link
            to="/blog/"
            class="
              inline-block
              px-6
              py-2
              text-xs
              font-medium
              leading-6
              text-center text-gray-900
              hover:text-white
              uppercase
              transition
              bg-primary-500
              rounded
              shadow
              ripple
              hover:shadow-lg hover:bg-primary-600
              focus:outline-none
              waves-effect
            "
          >
            More Posts
          </g-link>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query Posts {
  recentPosts: allPost (sortBy: "date", order: DESC, perPage: 6) {
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

<static-query>
query {
  metadata {
    siteTitle
  }
}
</static-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$static.metadata.siteTitle,
    }
  },

  components: {
    PostCard: () => import('~/components/PostCard'),
  },
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
