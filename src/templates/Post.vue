<template>
  <Layout>
    <div class="container px-5 py-8 mx-auto flex flex-wrap">
      <aside class="w-full md:w-1/7 sm:w-0 flex flex-col pr-3">
        <div class="w-full flex flex-col my-4">
          <p class="text-base font-semibold pb-5">Ads</p>
        </div>
      </aside>

      <section class="w-full md:w-4/7 flex flex-col px-3">
        <g-image
          class="mb-8"
          v-if="$page.post.thumbnail"
          :src="$page.post.thumbnail.src"
        />
        <h1 class="text-4xl font-bold leading-tight">{{ $page.post.title }}</h1>
        <div class="text-xl text-gray-400 mt-2 mb-4">
          <g-link
            v-if="parentCategoryPath($page.post.categories)"
            :to="parentCategoryPath($page.post.categories)"
          >
            <span title="CATEGORY">
              {{ parentCategory($page.post.categories) }}
            </span>
          </g-link>
          <span v-else title="CATEGORY">
            {{ parentCategory($page.post.categories) }}
          </span>
          - {{ $page.post.date }}
        </div>
        <div class="markdown-body mb-8" v-html="$page.post.content" />
        <div class="flex mb-8 text-sm">
          <g-link
            :to="tag.path"
            v-for="tag in $page.post.tags"
            :key="tag.id"
            class="
              bg-transparent
              text-secondary-500
              hover:bg-secondary-500 hover:text-white
              font-semibold
              py-2
              px-4
              border border-secondary-500
              hover:border-transparent
              rounded-full
              mr-4
            "
          >
            {{ tag.title }}
          </g-link>
        </div>
        <div class="text-center mb-8">
          <g-link
            to="/blog"
            class="
              font-bold
              uppercase
              inline-flex
              px-6
              py-2
              font-medium
              text-xs
              leading-6
              text-center text-gray-800
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
              mr-4
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clip-rule="evenodd"
              />
            </svg>
            <span>Back to Blog</span>
          </g-link>
        </div>

        <div class="pb-6 hidden sm:block" v-if="$page.post.related.length > 0">
          <related-post :posts="$page.post.related"></related-post>
        </div>

        <Vssue :title="$page.post.title" />
      </section>

      <aside class="w-full md:w-2/7 flex flex-col pl-3">
        <app-sidebar />
      </aside>
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    thumbnail
    date (format: "MMMM D, Y")
    content
    categories {
      id
      path
    }
    tags {
      title
      path
    }
    related {
      id
      path
      title
      thumbnail
      date (format: "MMMM D, Y")
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
    }
  },

  components: {
    AppSidebar: () => import('~/components/parts/AppSidebar'),
    RelatedPost: () => import('~/components/RelatedPost'),
  },
}
</script>

<style src="../css/github-markdown.css" />
