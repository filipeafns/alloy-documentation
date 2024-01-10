---
sidebar_label: 'Managing Users'
---
## Overview

We provide the [Users API](https://alloyautomation.readme.io/reference/create-a-user) to allow you to create, manage, update, and disable individual user accounts. You will need to create a user in Embedded for each individual that intends on using the integrations Embedded powers.  You can think of the User object like a container. The guide covers:

- Creating Users
- Deleting Users
- Managing User Tokens
- Accessing Workflow Logs

![](https://files.readme.io/6c3d898-Group_8.png)

## Creating Users

Each user on your platform that uses Embedded should be tied to a corresponding user in Embedded.  Let's take an example. Assume your company, ACME Co, has purchased Embedded and is building a Slack integration.  A new user called "Joe Smoe [joe@example.com](mailto:joe@example.com)" signs up for your platform. In order to enable Embedded for Joe, you'll need to create a user via the Embedded API. The Create User endpoint takes an email address as input to easily identify the user in question.  For any historical users you have on your platform prior to ACME Co using Embedded, you'll want to create the relevant Embedded users too.

Creating a new user in Embedded returns a unique username. We recommend storing this username somewhere in your database; you can however reference it anytime you like by using our Get User or List Users endpoints. As mentioned above, a best practice when using Embedded would be to create users for all old and new merchants. While accounts can be created on-demand, proactive creation allows you to catch email conflicts and speed up the merchant flow upon the first integration installation.

## Managing User Tokens

Once the user is created, in order to render the Embedded modal, you'll want to [generate a User Token](https://alloyautomation.readme.io/reference/get-user-token). The User Token is a JSON Web Token (JWT) that is required to securely render the Embedded Modal in your application and must be regenerated every time you want to show the modal.

> 📘 Token Refresh
> 
> Remember that you must invoke the User Token endpoint every time you want to render the Embedded modal. For security, the JWT generated only lasts a maximum of 30 minutes.

## Listing and Finding Users

We provide a List Users and Get User endpoints. Using these endpoints, you can lookup any user by their `userId`.

## Deleting Users

While rare, if you need to delete a user you can do so at this endpoint using their userId. Deleting a user removes their account, credentials, and all associated workflows. 

## Accessing Workflow Logs

## Managing Error Logs

Sometimes things don't work out quite as they should. It happens to the best of us. Yes, we're talking about debugging! So if you find yourself in an unfortunate situation where a workflow is erroring unexpectedly, we have a few methods to help you identify exactly where things went wrong. You can either access workflow logs via the [Error Logging API](https://alloyautomation.readme.io/reference/get-error-logs-1), return errors in real-time to your API, or stream error logs via our AWS Eventbridge Integration.

- **Error Logging API**: 
- **Returning Errors in Real-time**: If you prefer to get realtime error alerts about when a workflow fails, we support a few different options. You can set up Alloy Embedded to stream failed error logs to a POST endpoint on your system. In other words, every time an error occurs in a workflow in Embedded, we can make an API call to a webhook on your system with some basic information about the error. You can see a sample of the incoming body data that will be sent to your webhook:

```js
{
    "_id" : ObjectId("6155b192a13d750013322432"),
    "workflowId" : ObjectId("613b2be307575700132ef293"),
    "executionId" : ObjectId("6155ac246093840013297377"),
    "blockId" : "edb4e8e8-1e0e-4fac-84fd-9f9d4855ce93",
    "blockType" : "alloy.shopify",
    "error" : "Error: Request failed with status code 403",
    "createdAt" : ISODate("2021-09-30T12:46:10.562Z"),
    "updatedAt" : ISODate("2021-09-30T12:46:10.562Z"),
    "__v" : 0
}
```

- **AWS EventBridge**: Embedded also supports direct integration with AWS Eventbridge for streaming error logs. To enable this feature, navigate to the AWS Eventbridge connection in the Embedded Settings. You'll be prompted to enter your AWS keys which are securely encrypted in Alloy Embedded. From there, enter your Event Bus Name and hit save. Turning on this integration will automatically stream Alloy Embedded error logs directly to AWS. You can disable this feature at any point by toggling the Event Bridge connector off.
