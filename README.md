<div align="center">
    <h1>Geek Blog</h1>
    <a href="https://sonarcloud.io/summary/new_code?id=xqsit94_geek-blog"><img src="https://sonarcloud.io/api/project_badges/measure?project=xqsit94_geek-blog&metric=alert_status" alt="Quality Gate"></a>
    <a href="https://github.com/xqsit94/gridsome-starter-geek-blog/blob/main/LICENSE"><img alt="GitHub" src="https://img.shields.io/github/license/xqsit94/gridsome-starter-geek-blog?color=green&logo=github"></a>
    <a href="https://github.com/xqsit94/gridsome-starter-geek-blog/pulls"><img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen"></a>
</div>

## About

Geek blog built with [Gridsome](https://gridsome.org) that uses Markdown for writing content

## Built with
- [Gridsome 0.7](https://gridsome.org/)
- [Windi CSS 3](https://windicss.org/) (top of Tailwind CSS v2)

## Features
- [x] Markdown Parser (for creating post and pages)
- [x] [Blog Post](blog)
- [x] [Pages](docs)
- [x] Taxonomies: Categories and Tags
- [x] Featured Image (recommended size 16:9 ratio)
- [x] Code Syntax Highlighter ([shikijs](https://github.com/shikijs/shiki))
- [x] Global Search for Posts and Pages ([fuse.js](https://fusejs.io/))
- [x] Post Excerpt
- [x] Recent Post
- [x] Related Post
- [x] Approximate read time for posts
- [x] Pagination for Blog, Tags, Categories
- [x] Github Comments (issue based) ([VSSUE](https://github.com/meteorlxy/vssue))
- [x] SEO Friendly
- [x] Sitemap
- [x] RSS Feed
- [x] TOC
- [x] Google Analytics
- [x] [Archive Post](blog/2021-10-18-archived.md)
- [x] [Dynamic Sidebar Component](https://github.com/xqsit94/gridsome-starter-geek-blog/pull/6) (by [@neilherbertuk](https://github.com/neilherbertuk))
- [x] [Cover Image Generator](https://gridsome-geek-blog.netlify.app/cover-image/) (by [@neilherbertuk](https://github.com/neilherbertuk))
- and more in future maybe 🥳

## Todo
- VSSUE update css for dark theme support (pull-request is appreciated 😝 )

## Demo URL
https://gridsome-geek-blog.netlify.app

# Installation

There are several ways to to install this theme.

## Using the Gridsome CLI

The easiest way to install this theme or a Gridsome theme in general is by using their CLI tool.

If you don't already have it installed, simply run:

```bash
yarn global add @gridsome/cli
```

or using npm:
```bash
npm i -g @gridsome/cli
```

After that run `gridsome -v` to verify that the tool is working.

If everything is working as expected, run the following command:

```bash
gridsome create your-project-name https://github.com/xqsit94/gridsome-geek-blog
```

This command creates a folder named `your-project-name` in your current working directory, clones the repository and automatically installs the dependencies.

If everything is downloaded and installed you can now run `gridsome develop` which starts the development server and bundles all assets. After bootstrapping has finished, head to `http://localhost:8080` to view your freshly created site!

## Installing manually

To install this theme manually you need to:

1. Clone the repository
2. Install the dependencies

To clone the repository simply run:

```bash
git clone https://github.com/xqsit94/gridsome-geek-blog.git
```

After cloning the project, change to the project you just created.

```bash
cd gridsome-geek-blog
```

Now you only need to install the dependencies.

Using yarn:
```bash
yarn
```

Or by using npm:
```bash
npm install
```

After all dependencies are installed you can now run `yarn develop` if you're using yarn or `npm run develop` if you are using npm to start the development server!

## Configuring Environmental Variables
This boilerplate helps to configure important data using `.env`. All you need to do is just copy `.env.example` to `.env`
and fill the data for following variables

```dotenv
SITE_NAME=
SITE_TITLE=
SITE_DESCRIPTION=
SITE_AUTHOR=
SITE_AUTHOR_URL=
SITE_FAVICON_PATH="./static/images/favicon.png"

ARCHIVE_TITLE=
ARCHIVE_TEXT=

AUTO_GENERATE_COVER=false

GRIDSOME_BASE_URL=http://localhost:8080
GRIDSOME_VSSUE_OWNER=
GRIDSOME_VSSUE_REPO=
GRIDSOME_VSSUE_CLIENT_ID=
GRIDSOME_VSSUE_CLIENT_SECRET=
GRIDSOME_VSSUE_PERPAGE=
GRIDSOME_VSSUE_CREATE_ISSUE=

GOOGLE_ANALYTICS_ID=
```

## More Configuration
You can edit other configuration values inside `gridsome.config.js`
