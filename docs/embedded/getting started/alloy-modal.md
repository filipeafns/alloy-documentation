---
sidebar_label: 'Alloy Modal'
---
> 🚧 Reader Alert
> 
> This tutorial assumes you have read our [Quick Start](https://docs.runalloy.com/docs/embedded-quick-start) guide. General Alloy Embedded concepts will not be re-explained in this article.

## Overview

The Alloy Modal is a frontend component designed to abstract away authentication complexities.  

## How it Works

One of the biggest headaches when building new integrations is authentication. Third Party Apps support a wide range of authentication options. Here's a few examples:

- Shopify uses OAuth 2.0 but requires you collect a store subdomain first
- Magento has a custom OAuth flow that completely deviates from the OAuth standard
- WooCommerce only supports API keys

Below is an example of the Alloy Modal. The modal must be embedded within your application's frontend and accessible to your users. The modal will collect all required information (i.e. API Keys, OAuth tokens, etc) for every app you wish to integrate with.

An example of the Alloy Modal can be found below:

![](https://files.readme.io/8c1bc72-Group_1.png)

To get started with the Alloy Modal, reference this [article](https://docs.runalloy.com/docs/frontend-javascript-sdk).

## Other Presentation Options

Alloy Embedded offers a number of ways to customize the look and feel of our product:

- **[Frontend Modal Component](https://docs.runalloy.com/docs/embedded-modal)**: Use our Frontend SDK to embed the Alloy Modal into your product. This approach is discussed in the Quick Start guide.
- **[Alloy Link](https://docs.runalloy.com/docs/embedded-link)**: Embedded link can be used in lieu of the Alloy Modal. Using Alloy Link, Alloy will generate a unique link (similar to a Google Doc) which can be shared for authentication.
- **Headless (Coming Soon)**Use our Headless option to programmatically generate credentials and securely pass them to our API.

## Wrapping Up

In this article, we learned how the Alloy Modal solves various authentication. To get started with the modal, read our [authentication guide](https://docs.runalloy.com/docs/authorization).
