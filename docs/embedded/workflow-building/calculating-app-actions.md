---
sidebar_label: 'Calculating App Actions'

---
## Overview

An "app action" is counted every time a workflow moves data or takes action for you. You can think of it as every time an app is involved as well.

## How to Calculate App Actions

### Example #1

Let's take a look at the example workflow below. This workflow triggers every time a Custom Event is called.  Since this workflow has two blocks, a single run will result in two app actions.




### Example #2

In the next example, we have a workflow that runs once upon installation, then gets a list of sales orders from NetSuite, and subsequently streams them to your sever via Data Stream. Let's say you have 1,000 orders in NetSuite. 

This workflow is a bit more complex to calculate the action usage for:

- The upon installation trigger counts as one action
- The NetSuite list all Sales Orders counts as another single action
- The Stream Data block needs to page through all the sales orders returned from NetSuite.  Assuming the chunk size is set to 50 in Stream Data, then this block will result in 20 actions.

Therefore, we have a total of 52 actions for this workflow (1 + 1 + 50).




### Example #3

Now let's consider a slightly more advanced workflow.  The workflow below runs once upon installation, then gets a list of sales orders from NetSuite, iterates through each item in the list, and subsequently inserts each record into Snowflake. Once again, let's assume you have 1,000 orders in NetSuite.

The action count would be as follows:

- The upon installation trigger counts as one action
- The NetSuite list all Sales Orders counts as another single action
- The Iterate block runs through every item returned by NetSuite. However, the block itself only counts as one action.
- Inside the Iterate block, we add each record to Snowflake. Because we need to iterate through 1,000 records in NetSuite, we multiple the Snowflake block by this value (1 \* 1,000). This results in 1,000 actions.

Therefore, we have a total action count of 1,003 (1 + 1 + 1 + 1,000).




## Wrapping Up

In this article, we took a look at how to calculate app actions using Alloy Embedded.
