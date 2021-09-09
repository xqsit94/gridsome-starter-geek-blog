<template>
  <div
    class="
      content-wrapper
      font-sans
      text-copy-primary
      leading-normal
      flex flex-col
      min-h-screen
    "
    :class="theme"
  >
    <header class="top-0 left-0 z-40 w-full">
      <nav
        class="
          container
          mx-auto
          flex flex-wrap
          justify-between
          items-center
          py-6
        "
      >
        <div class="site-logo">
          <g-link to="/">
            <site-logo></site-logo>
          </g-link>
        </div>
        <div class="block lg:hidden">
          <div class="flex">
            <theme-switcher
              class="theme-switch"
              :app-theme="theme"
              @themeChanged="updateTheme"
            />
            <button
              @click="toggle"
              class="
                items-center
                px-3
                py-2
                border
                rounded
                border-gray-500
                hover:text-gray-600 hover:border-gray-600
              "
              data-cypress="hamburger"
            >
              <svg
                class="h-6 w-6"
                :class="!isOpen ? 'block' : 'hidden'"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                class="h-6 w-6"
                :class="isOpen ? 'block' : 'hidden'"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <ul
          class="
            uppercase
            tracking-wide
            font-bold
            w-full
            block
            flex-grow
            lg:space-x-8
            space-y-6
            lg:space-y-0 lg:flex lg:flex-initial lg:w-auto
            items-center
            mt-8
            lg:mt-0
          "
          :class="isOpen ? 'block' : 'hidden'"
          data-cypress="menu"
        >
          <li v-for="menuItem in menuItems" :key="menuItem.key">
            <g-link
              :to="menuItem.to"
              class="text-copy-primary hover:text-gray-600"
              :data-cypress="menuItem.key"
              >{{ menuItem.name }}</g-link
            >
          </li>
          <li class="mb-6 lg:mb-0">
            <search-input />
          </li>
          <li :class="!isOpen ? 'block' : 'hidden'">
            <theme-switcher :app-theme="theme" @themeChanged="updateTheme" />
          </li>
        </ul>
      </nav>
    </header>
    <div class="bg-background-primary">
      <slot />
    </div>
    <app-footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  components: {
    SiteLogo: () => import('~/components/SiteLogo'),
    SearchInput: () => import('~/components/SearchInput'),
    ThemeSwitcher: () => import('~/components/ThemeSwitcher'),
    AppFooter: () => import('~/components/parts/AppFooter'),
  },
  mounted() {
    this.theme = localStorage.getItem('theme') || 'light'
  },
  data() {
    return {
      theme: '',
      isOpen: false,
      menuItems: [
        {
          key: 'blog',
          name: 'Blog',
          to: '/blog/',
        },
      ],
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
    updateTheme(theme) {
      this.theme = theme
    },
  },
}
</script>

<style src="~/css/main.css" />
