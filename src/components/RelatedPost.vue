<template>
  <div class="grid grid-cols-3 gap-4 text-center">
    <div
      class="
        p-3
        w-full
        rounded-lg
        shadow-xl
        dark:bg-gray-800 dark:text-gray-300
      "
      v-for="post in posts"
      :key="post.path"
    >
      <g-link :to="post.path" class="block relative rounded overflow-hidden">
        <g-image
          :alt="post.title"
          class="
            object-cover object-center
            w-full
            block
            bg-transparent
            hover:bg-gray-100
            dark:hover:bg-gray-600
          "
          :src="
            post.thumbnail ? post.thumbnail.src : '/images/default-thumb.png'
          "
        />
      </g-link>
      <div class="mt-4">
        <h2
          class="
            text-gray-900
            title-font
            text-lg
            font-medium
            dark:text-gray-200
          "
        >
          {{ post.title }}
        </h2>
        <h3
          class="
            text-gray-500 text-xs
            tracking-widest
            title-font
            mb-1
            dark:text-gray-500
          "
        >
          {{ post.date }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      default: null,
    },
  },
}
</script>
