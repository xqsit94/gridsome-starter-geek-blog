// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import GlobalMixin from '~/mixins/GlobalMixin'
import Vssue from 'vssue'
import Fuse from 'fuse.js'
import GithubV4 from '@vssue/api-github-v4'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.mixin(GlobalMixin)

  Vue.prototype.$search = function (term, list, options) {
    return new Promise(function (resolve, reject) {
      const run = new Fuse(list, options)
      const results = run.search(term)
      resolve(results)
    })
  }

  Vue.use(Vssue, {
    api: GithubV4,
    owner: process.env.GRIDSOME_VSSUE_OWNER,
    repo: process.env.GRIDSOME_VSSUE_REPO,
    clientId: process.env.GRIDSOME_VSSUE_CLIENT_ID,
    clientSecret: process.env.GRIDSOME_VSSUE_CLIENT_SECRET,
    perPage: process.env.VSSUE_GRIDSOME_PERPAGE || 15,
    autoCreateIssue: process.env.GRIDSOME_VSSUE_OWNER || false,
  })
}
