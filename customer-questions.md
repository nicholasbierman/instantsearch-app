### Question 1

Hi George,

Thanks for reaching out! I'd be glad to help.

- An Algolia record (or object) is a set of key-value pairs called attributes. Each attribute contains any information that facilitates search, front end display, filtering, or relevance. Attributes don't have to respect a schema and can change from one object to another. 
- Indexing is the process of sending data (in a collection of JSON records) to Algolia so the engine can search into it. To send the data, you can use either the API or Algolia dashboard. These records are then stored on an Algolia index.

Business metrics (price, sales, ratings, etc.) are useful to include as "Custom Rankings." These attributes influence the engine's tie-breaking formula and allow you to fine tune search results specific to your use case.

Here's a link to Algolia's [documentation](https://www.algolia.com/doc/guides/sending-and-managing-data/prepare-your-data/) covering records and indexing more in-depth. Happy to answer any additional questions or schedule a call at your convenience.

Cheers,
<br/>
Nick Bierman

### Question 2

Hi Matt,

Thanks for reaching out. I appreciate your feedback on the new dashboard design and will be sure to forward that to our product team.

To clear or delete an index, you can alo use the Algolia API with the [`index.delete()`](https://www.algolia.com/doc/api-reference/api-methods/delete-index/) and [`index.clearObjects()`](https://www.algolia.com/doc/api-reference/api-methods/clear-objects/) methods, respectively. These methods will have the same effect as performing them from the dashboard and will save you those extra clicks as your team is iterating.

Here's a link to our [installation documentation](https://www.algolia.com/doc/api-client/getting-started/install/javascript/?client=javascript) for the API client.

Please let me know if you have any questions. Happy to jump on a call to walk through the implementation process if that's easier for you.

Regards,
<br/>
Nick Bierman

### Question 3

Hi Leo,

Thanks for reaching out! Glad to hear you're adding Algolia to your search experience.

You can setup Algolia using either the API client or dashboard without a lot of development work. Here's what the process looks like at a high level:
- [Push your data to an Algolia index](https://www.algolia.com/doc/guides/sending-and-managing-data/send-and-update-your-data/#overview)
- Configure [relevance settings](https://www.algolia.com/doc/guides/getting-started/how-algolia-works/in-depth/implementation-process/#configuring-relevance) for the data(searchable attributes, custom ranking, etc.)
- Build search UI (we have 4 [instantSearch libraries](https://community.algolia.com/#instantsearch) to assist with this step)

Here's our [Quick Start Guide](https://www.algolia.com/doc/guides/getting-started/quick-start/) to help you get up and running. Please let me know if you have any additional questions or if there's anything else I can do to assist.

Regards,
<br />
Nick Bierman



