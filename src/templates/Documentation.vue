<template>
  <Layout>
    <section class="body-font">
      <div class="container mx-auto flex flex-wrap py-8">
        <div class="w-full md:w-2/3 flex flex-col">
          <div class="markdown-body pl-2 pr-2 md:pr-10">
            <h1 class="text-3xl font-bold mb-7">
              {{ $page.documentation.title }}
            </h1>
            <div class="markdown-body">
              <VueRemarkContent />
            </div>
          </div>
        </div>
        <aside
          class="
            w-full
            md:w-1/3
            flex flex-col
            pl-2
            pr-2
            md:pr-0 md:pl-6 md:border-l-1
            border-gray-300
            dark:border-gray-700
          "
        >
          <app-sidebar />
        </aside>
      </div>
    </section>
  </Layout>
</template>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query Documentation ($id: ID!) {
  documentation(id: $id) {
    path
    title
    excerpt
  }
}
</page-query>

<static-query>
query {
  metadata {
    siteTitle
    siteDescription
    siteAuthor
  }
}
</static-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.documentation.title,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$page.documentation.excerpt,
        },
        { name: 'description', content: this.$page.documentation.excerpt },
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          name: 'twitter:description',
          content: this.$page.documentation.excerpt,
        },
        { name: 'twitter:title', content: this.$page.documentation.title },
        {
          name: 'twitter:site',
          content: `@${this.$static.metadata.siteAuthor}`,
        },
        {
          name: 'twitter:image',
          content: `${this.getBaseUrl}/default-thumb.png`,
        },
        {
          name: 'twitter:creator',
          content: `@${this.$static.metadata.siteAuthor}`,
        },
        { property: 'og:type', content: 'document' },
        { property: 'og:title', content: this.$page.documentation.title },
        {
          property: 'og:description',
          content: this.$page.documentation.excerpt,
        },
        {
          property: 'og:url',
          content: `${this.getBaseUrl}${this.$page.documentation.path}/`,
        },
        {
          property: 'og:image',
          content: `${this.getBaseUrl}/default-thumb.png`,
        },
        {
          property: 'og:image:secure_url',
          content: `${this.getBaseUrl}/default-thumb.png`,
        },
      ],
    }
  },

  components: {
    AppSidebar: () => import('~/components/parts/AppSidebar'),
  },
}
</script>

<style src="../css/github-markdown.css" />
