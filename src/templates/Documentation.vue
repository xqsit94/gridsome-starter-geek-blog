<template>
  <Layout>
    <section class="body-font">
      <div class="container mx-auto flex flex-wrap py-8">
        <div class="w-full md:w-2/3 flex flex-col">
          <div class="markdown-body pr-10">
            <h1 class="text-3xl font-bold mb-7">
              {{ $page.documentation.title }}
            </h1>
            <div class="markdown-body">
              <VueRemarkContent />
            </div>
          </div>
        </div>
        <aside class="w-full md:w-1/3 flex flex-col px-6">
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
    title
    excerpt
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.documentation.title,
    }
  },

  components: {
    AppSidebar: () => import('~/components/parts/AppSidebar'),
  },
}
</script>

<style src="../css/github-markdown.css" />
