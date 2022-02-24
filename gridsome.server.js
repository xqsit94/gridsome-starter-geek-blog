// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addMetadata, addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/

    addMetadata(
      'siteTitle',
      process.env.SITE_TITLE || 'Technology Guide, Tips, HowTo, Coding etc'
    )
    addMetadata('siteAuthor', process.env.SITE_AUTHOR || 'xqsit94')
    addMetadata(
      'siteAuthorUrl',
      process.env.SITE_AUTHOR_URL || 'https://github.com/xqsit94'
    )
    addMetadata(
      'archive_title',
      process.env.ARCHIVE_TITLE ||
        'NOTE: THIS ARTICLE IS PART OF OUR ARCHIVE AND IS LIKELY OUT OF DATE.'
    )
    addMetadata(
      'archive_text',
      process.env.ARCHIVE_TEXT ||
        '(LINKS MAY NOT WORK, DOWNLOADS HAVE NOT BEEN RECENTLY TESTED FOR SAFETY)'
    )

    const category = addCollection('Category')
    category.addReference('categories', 'Category')
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })

  api.loadSource(({ addSchemaResolvers }) => {
    // Schema API here: https://gridsome.org/docs/schema-api/
    // Create a default value for "sidebar" to prevent Cannot query errors if not used
    addSchemaResolvers({
      Post: {
        sidebar: {
          type: 'String',
          resolve(obj) {
            return (obj.sidebar === undefined ? 'Default' : obj.sidebar)
          }
        }
      }
    })
  })
}
