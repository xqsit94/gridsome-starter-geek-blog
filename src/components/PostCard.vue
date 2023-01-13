<template>
  <div
    class="
      h-full
      overflow-hidden
      md:space-x-4
      text-gray-700
      rounded-lg
      shadow-xl
      dark:bg-gray-800 dark:text-gray-300
    "
  >
    <g-link :to="`${post.node.path}/`" class="text-copy-primary">
      <g-image
        class="lg:h-48 md:h-36 w-full object-cover object-center"
        :src="
          post.node.thumbnail
            ? post.node.thumbnail.src
            : '/images/default-thumb.png'
        "
        :alt="post.node.title"
      />
    </g-link>
    <div class="p-6">
      <h2
        class="
          tracking-widest
          text-xs
          title-font
          font-medium
          mb-1
          text-secondary-500
        "
      >
        {{ parentCategory(post.node.categories) }}
      </h2>
      <h1 class="title-font text-xl font-medium text-gray-900 mb-3">
        <g-link :to="`${post.node.path}/`" class="text-copy-primary">
          {{ post.node.title }}
        </g-link>
      </h1>
      <p class="leading-relaxed mb-3">{{ post.node.summary }}</p>
      <div class="flex items-center flex-wrap">
        <g-link
          :to="`${post.node.path}/`"
          class="text-pink-500 inline-flex items-center md:mb-2 lg:mb-0"
          >Read More
          <svg
            class="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </g-link>
        <div
          class="
            inline-flex
            items-center
            lg:ml-auto
            md:ml-0
            ml-auto
            leading-none
            text-sm
            mt-5
            md:mt-0
          "
        >
          <span class="border-r-2 border-gray-200 px-3 mr-3">{{
            post.node.date
          }}</span>
          <span class="mr-3">☕</span>
          <span>{{ post.node.timeToRead }} min read</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['post'],
}
</script>
