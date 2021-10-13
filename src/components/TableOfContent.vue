<template>
  <div class="my-4">
    <p class="text-xl font-semibold pb-5">Table of content</p>
    <ul>
      <li
        v-for="(heading, index) in headings"
        :key="`${page.path}${heading.anchor}`"
        :class="{
          'border-t border-dashed border-ui-border border-gray-500 dark:border-gray-600 pt-2 mt-2':
            index > 0 && heading.depth === 2,
          'font-light': heading.depth === 2,
          [`depth-${heading.depth}`]: true,
        }"
      >
        <g-link
          :to="`${page.path}/${heading.anchor}`"
          class="
            relative
            flex
            items-center
            py-1
            text-sm
            transition
            transform
            hover:translate-x-1
            font-normal
          "
          :class="{
            'pl-2': heading.depth === 3,
            'pl-3': heading.depth === 4,
            'pl-4': heading.depth === 5,
            'pl-5': heading.depth === 6,
            'font-semibold text-secondary-500': activeAnchor === heading.anchor,
          }"
        >
          <span
            class="
              absolute
              w-2
              h-2
              -ml-4
              rounded-full
              opacity-0
              bg-secondary-500
              transition
              transform
              scale-0
              origin-center
            "
            :class="{
              'opacity-100 scale-100': activeAnchor === heading.anchor,
            }"
          ></span>
          {{ heading.value }}
        </g-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeAnchor: '',
      observer: null,
    }
  },

  computed: {
    page() {
      return this.$page.post
    },
    headings() {
      return this.page.headings.filter((h) => h.depth > 1)
    },
  },

  watch: {
    $route: function () {
      if (process.isClient && window.location.hash) {
        this.activeAnchor = window.location.hash
      }

      if (this.observer) {
        // Clear the current observer.
        this.observer.disconnect()

        // And create another one for the next page.
        this.$nextTick(this.initObserver)
      }
    },
  },

  methods: {
    observerCallback(entries, observer) {
      // This early return fixes the jumping
      // of the bubble active state when we click on a link.
      // There should be only one intersecting element anyways.
      if (entries.length > 1) {
        return
      }

      const id = entries[0].target.id

      // We want to give the link of the intersecting
      // headline active and add the hash to the url.
      if (id) {
        this.activeAnchor = '#' + id

        if (history.replaceState) {
          history.replaceState(null, null, '#' + id)
        }
      }
    },

    initObserver() {
      this.observer = new IntersectionObserver(this.observerCallback, {
        // This rootMargin should allow intersections at the top of the page.
        rootMargin: '0px 0px 99999px',
        threshold: 1,
      })

      const elements = document.querySelectorAll(
        '.markdown-body h2, .markdown-body h3, .markdown-body h4, .markdown-body h5, .markdown-body h6'
      )

      for (const element of elements) {
        this.observer.observe(element)
      }
    },
  },

  mounted() {
    if (process.isClient) {
      if (window.location.hash) {
        this.activeAnchor = window.location.hash
      }
      this.$nextTick(this.initObserver)
    }
  },
}
</script>
