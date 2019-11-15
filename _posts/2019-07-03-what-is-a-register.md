---
title: What is a Register?
author: Simon Worthington
image: "img/good-enough-to-build-things-on.png"
excerpt: |
  You’ve probably heard the R-word several times before, but may never have had a concrete explanation of what a Register is. In this post, we explore some of the properties that make a Register an excellent fit for holding important shared data.
---
Over our [many years of experience](https://www.register-dynamics.co.uk), we at Register Dynamics have noticed people struggle to make wider use of their most important datasets. There’s a gap for technology to help here, and that’s [why we built Registers.app](https://www.register-dynamics.co.uk/blog/usable-data-management-for-everyone.html). In this post, we explore some of the properties that make a Register an excellent fit for holding important shared data.

![Registers are good enough to build things with.]({{ site.baseurl }}img/good-enough-to-build-things-on.png)

## Registers contain useful and usable data
You’ve probably heard the R-word several times before, but may never have had a concrete explanation of what a Register is. So let’s start with the main question: what is a Register?

To put it simply, **a Register is a dataset that is good enough for people to build things with**. The “good enough” comes from both the data and the technology: the data itself is useful and the technology helps to turn it into something usable by real people.

Registers can contain any kind of data but behind the scenes they are powered by modern cryptographic data technology that gives them all the properties important for reference data management – they’re linkable, version-controlled, auditable and distributable.

First pioneered by the Government Digital Service (GDS) as a government standard for reference data, use of Registers and reference data management in general have come to be seen as best practice data governance for organisations. [Multiple government departments](https://www.registers.service.gov.uk/registers?show_by=organisation) now practice data management using Registers.

## Registers have unique features that make them useful
Registers are set apart from other data technologies due to a few key properties that give them significant advantages.

### A Register stays live even when someone takes a copy
Registers are designed to be kept up-to-date when distributed widely. When someone downloads or copies a Register, they don't just get the data, they also get everything they need to keep the data up-to-date.

When the data steward or their team provide an update to their canonical data, users can easily update their copy too and can define automated actions to occur for each change. This means no matter where a Register goes or what it is used for, the data can stay live and services won’t fall out of date.

### A Register remembers how the data has changed
Every Register is also a miniature version control system for data. Just like in Google Sheets, changes are recorded and past history can be viewed, compared and restored. Version control applies to schema changes and metadata too. Version control helps a Register’s users to understand what has changed and why – giving them confidence to apply the latest updates.

### A Register connects with other Registers
Registers embrace fully the ideas behind linked data, recognised as necessary for [five-star data](https://5stardata.info/en/). Every data item in a Register is inherently linkable: other Registers and systems can reference that item directly. Linking takes account of versioning, so that linking will always reference the correct version of the data. Registers are designed to be used together and form an ecosystem of data that is useful for stewards and users.

### A Register includes context around the data
Each Register comes with a core set of metadata that describes what the Register contains and what each column means. Users don’t just get a confusing sheet of values with opaque column names – they get all the contextual information they need to start using the data quickly and correctly.

A Register’s columns also know what type of data they contain and how to provide that data in other formats. If, for example, a Register contains map grid references but a user needs coordinates, the Register can transform the data automatically. Developer time and cost is saved by re-using the many existing transformations.

### A Register ensures data stays safe and secure
Every Register contains a complete log of all activity that is cryptographically secure and tamper-evident. Changes can't be made to the data or metadata without that change being visible, so stewards can have confidence that their data and processes are safe and secure. Registers can also be digitally signed, meaning that users can trust they're getting the data directly from source without any tampering.

### A Register integrates with cloud-first services
Registers are the perfect shape to drive cloud-based services and apps. Simple control over versioning makes data as easy to test and deploy as code. APIs and SDKs make consuming data straight-forward and building workflows that push to a Register easy.

## How to get started with Registers
Our list complements the [characteristics of a Register](https://gds.blog.gov.uk/2015/10/13/the-characteristics-of-a-register/) set out by GDS – we’re focusing on behaviours that are enabled by the technology and that let people use Registers in the way they want to. We’re trying to make Registers more available and open up more use cases, so we’re deliberately separating the policy for how a Register should be used from the mechanisms for how they can be used.

These properties make Registers a perfect fit for managing important datasets, so we’re building Registers.app to unlock their value for more people. Using Registers.app, anyone can create a Register by simply uploading a spreadsheet of their existing data. We’ve taken the powerful Registers technology and make it as simple to use as we can.

We’ll be talking more about Registers over the coming months. Hop over to [Registers.app](https://registers.app) and start using Registers today for your data.

