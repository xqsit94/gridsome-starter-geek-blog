<template>
  <Layout>
    <div
      class="
        bg-gradient-to-r
        from-secondary-300
        to-primary-200
        dark:from-gray-600 dark:to-gray-700
      "
    >
      <div class="m-auto py-16 flex items-center justify-center">
        <div
          class="
            bg-white
            dark:bg-gray-700
            shadow
            overflow-hidden
            sm:rounded-lg
            pb-8
          "
        >
          <div
            class="
              border-t border-gray-200
              dark:border-gray-600
              text-center
              pt-8
            "
          >
            <h1 class="text-9xl font-bold">404</h1>
            <h1 class="text-6xl font-medium py-8">oops! Page not found</h1>
            <p class="text-2xl pb-8 px-12 font-medium">
              Oops! The page you are looking for does not exist. It might have
              been moved or deleted.
            </p>
            <g-link
              to="/"
              class="
                bg-primary-500
                hover:bg-secondary-500
                text-white
                font-semibold
                hover:text-white
                py-3
                px-3
                rounded-md
                mr-6
              "
            >
              Home
            </g-link>
            <g-link
              to="/contact-us/"
              class="
                bg-primary-500
                hover:bg-secondary-500
                text-white
                hover:text-white
                font-semibold
                py-3
                px-3
                rounded-md
              "
            >
              Contact Us
            </g-link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
