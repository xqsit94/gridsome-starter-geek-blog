---
title: Installation of Gridsome Geek Blog
cover_title: Installation
path: /installation
date: 2021-10-19
summary: There are several ways to install this boilerplate.
tags: ['installation']
categories: ['installation']
thumbnail: ./installation.png
---

## Installation

There are several ways to install this theme.

### Using the Gridsome CLI

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

### Installing manually

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
