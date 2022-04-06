---
title: Automatic Cover Image Example
cover_title: Cover Image
path: /cover-image
date: 2021-10-18
summary: The cover image for this post has been automatically generated
tags: ['images']
categories: ['images']
thumbnail: ./2021-10-18-cover-images.png
---

## Automatic Cover Image Generation
By default, automatic cover image generation is disabled. To enable it, set `AUTO_GENERATE_COVER` in your `.env` file to `true`. Once enabled, run your build command to generate `png` cover images for posts that do not currently have one and has a `thumbnail` front matter field, this needs to be set as a png and relative to the post e.g. `./filename.png`. If you are not happy with the results, simply delete the cover images and re-run your build command to regenerate.

It is highly recommended that you perform automatic cover generation locally and commit the generated images with your sourcecode. Generating them as part of a pipeline or deployment and not storing them will cause cover images to change on each deploy.

### How Does It Work?

The `gridsome.server.js` file contains an action that is performed each time you run any of the build or deploy commands (`yarn develop` etc...).

If the feature is enabled, it will loop through each post of the collection types defined in the `coverOptions.types` array located at the top of the `gridsome.server.js` file. 

The foreach loop checks to see the entry has a `thumbnail` front matter field and whether a file already exists in that location. 

If a cover image does not already exist, a `png` image is generated using a html template and stored in the same directory as the collection.

The cover image generated will be 1024x576, but can also be changed by updating the `coverOptions.imgWidth` and `coverOptions.imgHeight` values.

The title text used within the image comes from either the `title` or `cover_title` front matter entry. `cover_title` is used if both fields are present.

### Adding new post types

If you have customised geek-blog and added new post types, you can generate cover images for these too by add to the `gridsome-server.js` file. 

```javascript
const coverOptions = {
  ...
  types: [
    {
      name:     "Posts",
      typeName: "Post",
      path:     "blog"
    },
    {
    name:     "Some display name",
    typeName: "CollectionName",
    path:     "directory_collection_is_found_in"
    }
  ]
}
```

### Base Background Colour

By default, a random base colour is used. However, you may provide `coverOptions.colours` with an array of 1 to many hex colours. If an array is provided, a colour will be picked at random.

```javascript
const coverOptions = {
  ...
  // Set Colours
   colours:  [
     "#559BFF",
     "#FFD948",
     "#CD1FFF",
     "#41FFA7",
     "#FF6336",
     "#FF4576"
   ]
}
```

The base colour will be used to generate a background gradient as well as the title box background.

### HTML Template

The cover image is generated from a html template embedded within the `template` variable in `src/functions/generate-cover.js` and can be modified as required.