---
title: Solving conundrums of spreadsheets at scale
author: Simon Worthington
image: "img/spreadsheets-at-scale-are-confusing.png"
excerpt: "Organisations of all sizes struggle to manage their important, canonical data and face  constant tension around using spreadsheets. Our conclusion is simple: spreadsheets don’t work at scale. What if teams producing canonical data could continue to use their spreadsheets and others who need that data could consume it in a machine-readable, updatable and flexible way?"
licenses:
  - "\"Unordered chaos\" image by [Maddy Mazur](https://pixabay.com/users/mmillustrates-8219771/) used under [Pixabay License](https://pixabay.com/service/license/)."
  - "\"Balance\" image by [Mohamed Hassan](https://pixabay.com/users/mohamed_hassan-5229782/) used under [Pixabay License](https://pixabay.com/service/license/)."
---
Here at [Register Dynamics](https://www.register-dynamics.co.uk), we've helped many organisations figure out how they can make best use of their data. We’ve seen organisations of all sizes struggle to manage their important, canonical data and observed the constant tension they face around using spreadsheets. Our conclusion is simple: spreadsheets don’t work at scale.

We’ve realised that using the right data technology helps organisations solve a lot of these problems. We’ve explored the common issues when trying to use spreadsheets at scale and discovered that Registers – a shareable, version-controlled, linkable reference data technology – hold some of the answers.

## Spreadsheets are great for individuals
When most people want to record something electronically, their first instinct is to reach for a spreadsheet. And with good reason – spreadsheets are simple to use, flexible and can be made with familiar software.

[As we’ve discussed previously](https://dataingovernment.blog.gov.uk/2019/06/10/improving-how-we-manage-spreadsheet-data/), spreadsheets give people agency and autonomy. People can iterate and experiment, and when the requirements change (as all requirements eventually do) they're able to make the change themselves without having to rely on slow and expensive IT. It’s no surprise that spreadsheets end up powering the majority of processes in many organisations.

Problems arise when other teams or individuals need the data to run their processes, make decisions, or improve their services.

## Spreadsheets at scale cause problems
![Person surrounded by many confusing coloured arrows]({{ site.url }}/img/spreadsheets-at-scale-are-confusing.png)

There are two user needs that spreadsheets struggle with. First, more people want a copy of the data. Important datasets end up shared widely across the original organisation, often shared with external partners, and in a few cases published to the whole world.

Second, people want to use the data to build other things. They want to be able to refer to the data in their own datasets, or they want to use the data to power their own service, process or form.

These two needs require a new approach to how the data is managed and consumed. Now that the data is powering a live service, it’s important that:

1. It’s kept up-to-date easily – incorrect data causes bad decisions.
2. It won’t change in a way that will break the service.
3. Users can filter, reformat and modify to match the format expected by the service.

Trying to make spreadsheet technology handle these new needs is a challenge.

The problem with distributing a spreadsheet is that people only get a copy. Copies of spreadsheets are hard to keep up-to-date because users need to do manual work every time the source changes. Where the data is powering a live system, this will typically require a needlessly expensive change request costing thousands of pounds.

Even when using a cloud-first solution (like Google Sheets), people still need to take copies to manipulate for their own use. Existing cloud technology only helps with sharing and collaboration. It doesn't solve the problems with multiple copies and lots of different versions.

## Databases reintroduce friction
Traditionally teams replace the spreadsheet with a database and serve their users data through an API. This solves a few problems, but typically introduces many more.

It doesn't remove the desire for people to keep their own copy of the data – people keep a copy of the API results in case the service goes down. So, people still have to deal with the difficult problem of keeping their copy up-to-date.

Pushing all the data into a database system also takes away the benefits data owners got by using a spreadsheet. They no longer have direct control of their data because they have to go via a database admin or IT team to update it. They're worse off because the database adds friction to something that originally appeared to avoid it.

In our experience working with organisations, we have observed that the first time a significant change needs to be made teams performing important business go back to using their spreadsheet. Updating the database becomes another time-consuming manual task for them.

## Registers get the balance right
![A set of well balanced scales set against a green background]({{ site.url }}/img/registers-bring-balance-to-the-problem.jpg)

What if teams producing canonical data could continue to use their spreadsheets and others who need that data could consume it in a machine-readable, updatable and flexible way?

Our preferred way to solve this is by using a Register – a dataset that is as easy-to-use and as flexible as a spreadsheet, but with the power of a database.

A Register offers the perfect separation of concerns – owners can focus on authoring their data and consumers can focus on using it. It's an idea that allows data management to scale to many thousands of consumers.

[Registers.app](https://registers.app) is a friendly, self-service solution that allows data owners in organisations of all sizes to manage their data as a Register just like the spreadsheets they know and love. Organisations can provide data to others that need it whilst ensuring best practice and information assurance policies are followed. Users can consume it in the way they need to build their apps and services.

We’ll be talking more about Registers in the coming weeks – including what they are and how to use them. Watch this space or (get in touch)[mailto:hello@register-dynamics.co.uk] to hear more about how to solve these conundrums!
