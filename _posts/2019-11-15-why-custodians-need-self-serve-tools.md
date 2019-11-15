---
title: Why custodians need self-serve tools
author: Simon Worthington
image: "img/custodians-need-self-service-tools.png"
excerpt: |
  Cultural change around data without self-service custodianship is hard to achieve. Central data teams need to provide simple tools to custodians in order to scale their architecture and governance to a whole organisation. We've identified three key features that self-serve tools need in order to build and manage canonical datasets.
---
It's well understood that having a foundation of [standard and common definitions](https://www.bsigroup.com/en-GB/standards/Information-about-standards/what-is-a-standard/) leads to better use of data in businesses and governments. With common definitions, teams can communicate smoothly with each other. Without them, teams disagree on what data means. They cannot deliver efficient and cost-effective decision-making, policy-making and business processes, and they miss opportunities to fully unlock the potential of data. Common definitions are often represented as code lists or canonical datasets.

Creating high quality and machine-readable canonical datasets is a task that requires both expert domain knowledge and technical experience. It takes a domain expert to know what the appropriate datasets should be and a technical expert to be able to model them correctly in the data domain using the right tooling and architecture. These two skills are not often found together.

This means that cultural change is hindered: the organisation can’t get fully on board with creating and using canonical data because its domain experts aren’t appropriately enabled. What they need is simple and intuitive self-service tools and processes that make their job of authoring and managing canonical data easy.

At [Register Dynamics](https://register-dynamics.co.uk), we have worked with many organisations who want to make cultural change around how data is used and shared but have struggled to scale their canonical data production. In this article, we’ll share what we’ve learned about custodians and what an organisation needs to put in place to embrace a culture of canonical data.

## Domain experts are not always data experts

To understand why it is difficult to scale agreement on common definitions, we should first think about who are the users that are involved.

The **domain authority** (often called the custodian or steward) is the person or team who has the responsibility to decide what is in a canonical dataset. They are domain experts, usually in a policy or business role. They have authority for making decisions within their domain and communicating them to other teams or organisations, and responsibility for keeping these decisions correct (meaning up-to-date and accurate).

For example, the domain authority may be a veterinary expert deciding which diseases are considered dangerous or a business manager deciding what geographical areas are covered by a service. It is this decision-making that forms the basis for a canonical dataset.

The **data manager** is the person or people who actually apply the decisions of the custodian, but don’t make big decisions themselves. They might sit under the custodian in a hierarchical organisation or in a different team. They might also be responsible for dissemination of and access to the decisions and be on the receiving end of support queries from users.

Typically whilst both custodians and managers are highly skilled they don’t describe themselves as technical experts. The tools both of these users are most familiar with are desktop office applications – for sending email, writing documents and maintaining spreadsheets.

## Cultural change is hindered by bad tooling

Domain experts can and do create their own canonical datasets using tools like Excel. We have talked previously in our article on [usable data management](https://www.register-dynamics.co.uk/blog/usable-data-management-for-everyone) about how desktop spreadsheet tools are great for users because they provide necessary autonomy and control. Users have direct agency over their own domain, without having to rely on a central function which removes that agency.

But organisations typically need more than a simple spreadsheet for their canonical data. They need a governance process that ensures the canonical data is applied and evolves appropriately. They also need the data in a format (or multiple formats) that can be used easily by others and in a location that is discoverable. They want data to be shared widely and usable by everyone, maybe even people outside of their organisation.

This isn’t a need that a custodian with a spreadsheet is able to satisfy efficiently. Desktop spreadsheet tools don't have the strictness of validation that a standard dataset requires, and rarely are they particularly optimized for allowing datasets to be linked between each other. It's also hard for users of the data to [keep their copy of a spreadsheet up to date]({{ site.url }}{% post_url 2019-06-12-solving-conundrums-of-spreadsheets-at-scale %}).

The tools required to manage useful canonical data often require technical skills the custodian doesn’t have. Where tools do exist, they are not designed like office applications the custodian is most familiar with. They are also commonly centralised and tightly controlled which disrupts the custodian’s otherwise autonomous working.

A central team might be able to step in and facilitate, providing the necessary technical skills and tools to get a dataset made. But the resources of a central team are often limited – they can’t scale to every use case.

![Scale up with self-service]({{ site.baseurl }}img/custodians-need-self-service-tools.png)

## Self-service tools enable change to happen

To make canonical data more widely useful, custodians need simple tools and processes for outputting useful and visible datasets. They also need to be able to produce datasets at their own pace, without relying on a small central pool of resources for each and every one. In short, they need self-service tools and processes.

With self-service, custodians are able to make and use their own canonical data. Each has full control over their domain and are able to use their data themselves whilst making it accessible to others. The organisation gets interoperable and secure data to a higher quality and with shorter lead times whilst still maintaining the safety of appropriate governance.

Freed from the burden of creating and managing every canonical dataset themselves, the central team can now utilise its resources more effectively. They can now focus on delivering the correct governance processes and cross-organisational data architecture.

## Three elements of a good self-service foundation

What does such a self-serve system look like? What properties does a good foundation have that lets cultural change scale?

We've identified three key elements that custodians need:

### An intuitive data interface

To lower the barriers to entry, a self-service interface needs to be intuitive. Custodians need to feel in control of the experience of managing their data. Without this, they don't have autonomy and will struggle to accept a new tool.

We recognise that making use of concepts and metaphors that users already recognise helps to deliver an intuitive experience. A spreadsheet interface (like that of LibreOffice or Excel) is already well recognised by custodians and data managers. Even though a spreadsheet is not enough, the interface is a good foundation to start from with editing canonical lists.

Exactly what elements are important for a spreadsheet interface to have in order to be recognised is an important question. For example, most spreadsheet applications have a "formula bar" that allows users to edit formulas to compute a value. Is this important for familiarity? Do users recognise how to use the interface without one? How does this map to a tool for creating a canonical dataset?

The areas in which it should differ from a spreadsheet includes advanced features that help with data validation, data cleaning and other common tasks that data managers face. We’ll share more about those in a later article.

### Customisable governance

Any system that supports editing canonical data needs to fit around the processes that an organisation has put in place for quality assurance. Such processes typically involve a data manager making changes ahead of time so that they are ready for a specific go-live date, or a custodian reviewing and approving a set of changes. Alternatively, a collaborative process where multiple domain stakeholders all contribute to a shared data standard is also possible.

Allowing the organisation to have control over governance whilst still giving individual teams agency to find a process that works for them is a subtle balance. The governance process that best fits is highly dependent on the domain and many different models may be appropriate in the same organisation. Any self-serve tool needs to be able to represent different models and not enforce a particular model for technical reasons.

Instead, a self-serve tool will need to allow governance to be customised on a per-dataset basis, and again allow this to be controlled intuitively without requiring technical understanding.

### Workflows that support drafting and review

Regardless of the exact governance process an organisation wants to use, the ability to review draft changes is a key element that a self-serve interface needs. As well as showing the proposed changes and allowing them to be approved or sent back, review tools have a role to play in ensuring canonical data remains high quality.

Highlighting validation results is one such important feature. Structural validation that fields meet a certain pattern is key, but there are also plenty of non-structural validations that can help reviewers. For example, are the items linked to in another dataset the correct ones? Or, what impact do the changes here have on any dataset that is derived from this one? Questions like these require human input but any self-serve interface needs to make finding these answers easy.

Changes to canonical datasets are also rarely done in isolation. Often, a business process change may result in changes to several datasets at once, and it isn’t necessarily safe to make these changes separately from each other. It’s therefore necessary that drafting tools let changes to multiple datasets be drafted together, even across separate teams. Review tools need to show changes in the context of a bigger picture, which might also involve changes to documentation and workflow.

## Registers.app is the self-serve you need

We've specifically designed Registers.app with all of this research in mind, and have built a sophisticated self-serve platform. Using Registers.app, organisations can empower their teams to create their own canonical datasets and discover those of others.

Our spreadsheet editor meets the challenge of editing canonical data whilst including all the elements necessary to be familiar with desktop spreadsheet users, including many of the expert keyboard shortcuts that users have learnt. Our free Community edition shows off our spreadsheet technology as well as [our static demonstration]({{ site.url }}{% post_url 2019-09-04-excel-yourself-with-our-web-spreadsheet-editor %}).

Using Registers.app, organisations can free their central data teams from the resource-intensive task of owning every dataset themselves and allow them to focus their efforts. Organisations can drive cultural change around authoritative data, make it easy for business owners to take responsibility for their data, and scale up the number and rate of canonical datasets in use.

Visit us at [Registers.app](https://registers.app) to find out more about our platform, get in touch or sign up for the Community edition.
