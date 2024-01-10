---
sidebar_position: 1
Title: 'Introduction to Unified API'
sidebar_label: 'Introduction to Unified API'
---

## What is Alloy UnfiedAPI?

Learn what Alloy Unified API is and how it can help save you both time and money while streamlining your development processes.

## Where to go from here

Welcome to Alloy's Unified API (UAPI). The Unified API allows any ISV to seamlessly integrate with dozens of APIs in mere minutes – all with a consistent and standardized schema.

UAPI makes it easy to build an integration without worrying about the complexities most APIs typically present: we handle authentication, rate limits, webhooks, etc for you all inside the box. Let's take a look at some of the benefits to using a Alloy's UAPI below:

- **Rate Limits**: Alloy's UAPI automatically has built in rate limiting technology. Once you connect an app to Alloy, we automatically cache the most up to date data. When you want to pull data, you hit our cache first (which has significantly higher rate limits than most publically available APIs) meaning you can pull vast sums of data in a more time efficient manner than if you invoked the app's API directly.
- **Webhooks and Reconciliation**: In order to make sure our cache is always up to date, we subscribe to all relevant webhooks. When a new event hits our servers, we add it to the cache.  To be extra safe, we also perform recurring polling jobs to reconcile any dropped webhooks. Moreover, if an app doesn't have webhooks out of the box, we use our built in polling infrastructure to support almost real time events.
- **Standardized Data Schema**: UAPI makes it easy and fast to build integrations using our standardized data schema. For example, let's assume you want to build an integration that pulls all orders from Shopify. A week later, you also decide you need to support Magento and WooCommerce, other popular e-commerce site providers. With UAPI, you can easily support multiple apps with minimal work since our schemas are standardized across supported apps.