---
title: The next step after a data strategy
author: Simon Worthington
excerpt: |
  We've helped many organisations transform their approach to data and deliver on their data strategy. We’ve learnt lots of lessons with them along the way about why they get stuck with implementation. In this first of a trilogy of articles, we'll share the problems we've helped organistions overcome on their data transformation journey.
image: "img/simon-presenting-the-four-steps-of-data-strategy.jfif"
licenses:
  - "Image taken by and copyright [Hannah Foulds](https://twitter.com/HanFoulds/status/1205474697829371910) and [the ODI](https://theodi.org)."
---
*This is the first of three articles based on [a lecture](https://www.youtube.com/watch?v=1gYf9eCSBYE) that I gave at the Open Data Institute.*

![Simon presenting the four steps of data strategy]({{ site.base_url }}/{{ page.image }})

Nearly every data transformation starts with a senior team wanting to go on a journey. They know they have to change their approach to data and become more “data-driven”. They know they’ll start by writing a data strategy to communicate where they want to end up, but less well understood is how to actually make the changes that a data strategy requires. Their idea of the journey is often pretty well expressed with the [“South Park model”](https://en.wikipedia.org/wiki/Gnomes_(South_Park)):

1. Write a data strategy
2. Make everyone follow standards
3. ???
4. Profit!

At Register Dynamics, we’ve helped many organisations transform their approach to data and deliver on their data strategy. We’ve learnt lots of lessons with them along the way about why they get stuck with step 2, what to do in step 3, and how to actually get to the light at the end of the tunnel in step 4. Let’s start that journey ourselves by focusing on step 2.

## It all starts with standards
You’ve written a data strategy, and it says things about re-using and exploiting data to its full potential, keeping teams out of silos and making data high-quality and interoperable. The way that everyone decides they’re going to achieve this is by having people create and use common _data standards_. (Some people also say _controlled lists_, _vocabularies_ or _taxonomies_, which are all similar concepts.)

As an example, consider an organisation like a veterinary testing laboratory: a bespoke standard they might need could be how they refer to a specific disease (“will we call it bird flu or avian influenza?”), and any [associated codes](https://en.wikipedia.org/wiki/ICD-10) used to identify it in data. To an expert, these two terms might refer to the same disease, but to a layperson (and a machine) it’s hard to know whether they are related or not.

Organisations realise that to get high-quality and interoperable data, they need to agree on some of these terms. One of the ways data teams start to approach this is by getting out into their organisation, finding the experts and making the lists themselves. But it generally turns out to be a lot more work than they imagined.

Making standards is a job that requires expert domain knowledge because it’s quite specific to a certain line of business. Data teams find themselves having to learn a lot of domain knowledge to get standards made, and acting as the arbiter for domain experts with differing views. Teams can have [success](https://registers.blog/custodian-spotlight-gillian-hall) doing this – they can produce [high](https://registers.app/register/11:62) [quality](https://registers.app/register/11:103) [standards](https://registers.app/register/11:85) that are well-factored and sensible – but people quickly realise they simply do not have the resources to create and manage *all* the standards that their organisation needs.

## Help your organisation to help itself
What we have uncovered in many organisations is that domain experts are already keeping these standard lists as part of their job. However, they’re just making the list for themselves and using it for their own purposes, and don’t think of what they’re doing as making authoritative data for the whole organisation – even though they are the person who should be setting the standard.

How do you enable these domain experts to turn their lists into high-quality linked data standards? Without the input of the data team, how will they have enough data knowledge and technical proficiency to do it?

The answer is to give them open access to a self-service tool – one that is accessible enough for them to use, and can bring them value immediately, but also allows their lists to be found and used by others. We’ve written about what good self-service looks like in our article on [self-service for custodians](https://registers.blog/why-custodians-need-self-serve-tools).

## Don’t build walls between you and your users
A natural worry about allowing domain experts to create and share data freely is that they will immediately come along and dump in their messy data. What organisations want to achieve is alignment with their grand architectural vision, and allowing people to do what they want doesn’t encourage any movement towards that goal. So, what we commonly see is that organisations redesign and review data before putting it into any data management process or tool.

The problem we’ve observed is that if you try and force people to clean their data and design it to your specification, they just won’t come on that journey with you. This might be because they don’t see any value in the process for themselves or because your view of what’s correct might not work for them.

As an example of resistance that we’ve seen, consider the list of veterinary diseases from above. Even though your architecture might say “include the date a record is added,” the list owner might resist that because of the potential confusion for a date that a disease was first diagnosed or an epidemic started.

The solution is to strike a balance between flexibility and governance: give people access to tooling, and then work with them to incrementally and iteratively improve their data. This gives the central data team a lot more free resources to focus on the datasets that need the most help without acting as bottleneck for new datasets coming through.

This might seem like a scary thought, but the alternative is worse: with no visibility on what people are really doing with data, you can’t help these people improve. “Showing the mess” is the first step in fixing the mess.

The lesson learned is clear: organisations that use data architecture as a gateway (i.e. by preventing access to tools or a wider audience until data is “good enough”) fare significantly less well than those who get on with using the data that they already have. Their journey is one of iterative improvement through a self-service process and with central teams providing guidance and support.

## Learning the lessons
One of our guiding principles at Register Dynamics is that the shape of the technology you use can either help or hinder cultural change, and that cultural change will ultimately govern success or failure. We’ve noticed that a lot of technology required to learn these lessons properly is challenging for organisations to assemble on their own, and that’s why we’ve built [Registers.app](https://registers.app).

Registers.app mixes an intuitive self-serve interface with customisable governance workflow that ensures organisational alignment. Domain experts can use Registers.app to create and manage their own clean data standards whilst data teams can design the organisation-wide policies that govern them. Check out the site or [get in contact](mailto:hello@register-dynamics.co.uk) to learn more.

In the next article, we’ll look at step 3 (all the things that turn standards into more than just a loose collection) and in a future article we’ll cover step 4 (how to make sure you get to the payoff). Join us on Twitter [@RegDyn](https://twitter.com/RegDyn) to get notified when these articles appear!
