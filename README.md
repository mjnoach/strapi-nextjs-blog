# Programming assignment

## Installation

```
git clone https://github.com/mjnoach/strapi-nextjs-blog.git
yarn --cwd frontend install
yarn --cwd backend install
cp backend/.env.example backend/.env // <-- JWT_SECRET
yarn develop
```

## Assignment

Your assignment is to create a commenting system for the individual blog items on an existing website. There is NO account / login required to place comments. They do require moderation by the blog team for the comments to be visible on the blog item.

## Prerequisites

1. yarn installed

## Preparation

For our assignment, we will use a template. Run the following command to create the base project:

1. `yarn create strapi-starter my-project next-blog`

   a. Choose your installation type: Quickstart (recommended)

2. The Strapi register-admin page will open automatically after installation:

   a. http://localhost:1337/admin/auth/register-admin

   b. Create an admin account for yourself

The application is available through:

- Front-end blog: http://localhost:3000/
- Back-end CMS: http://localhost:1337/

## Details

### CMS

In the CMS: Start by creating a Content Type in the Content-Types Builder for Comment in the CMS with the following fields (models are always singular):

```
1. approved (default: false)
2. name (text)
3. email (email)
4. body (rich text)
```

### Form

In the front-end project: add a form to post a comment with fields:

```
1. name
2. email
3. body
4. send button
```

When you fill in the form and click the send button, a new comment needs to be created. Check the helpful link [#1](#helpful-links) for more information.

### Show comments under blog form

In the front-end project: show comments under blog items and order by date created (new to old).

### Custom controller / validation (node.js)

Add a bad word filtering by overriding the default create function in the controller. Check the helpful link [#2](##helpful-links).

## Helpful links

1. Check this link for working with the REST Content API to post a new comment or retrieve the comments:

   https://strapi.io/documentation/developer-docs/latest/developer-resources/content-api/content-api.html

2. Override default controller actions:

   https://strapi.io/documentation/developer-docs/latest/guides/send-email.html#override-controller-action
