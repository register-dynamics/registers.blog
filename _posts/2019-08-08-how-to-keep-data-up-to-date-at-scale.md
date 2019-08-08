---
title: How to keep data up‑to‑date at scale
author: Simon Worthington
image: "img/communication-between-teams-is-hard.png"
excerpt: |
  Keeping important data up-to-date is critical. Organisations commonly centralise their key data – but this creates three hard problems. In this post, we explore a better way of keeping data up-to-date that keeps data scalable and flexible.
---
As we’ve talked about [previously](https://registers.blog/solving-conundrums-of-spreadsheets-at-scale), data becomes important and valuable when people build new things with it – like services, apps or dashboards. Important data is not a static thing being analysed once to inform a single decision; it’s a live component of a real service.

Keeping this data up-to-date is critical. Out-of-date data leads at best to manual human workarounds that affect data quality and at worst to erroneous automated decisions. If an organisation wants to make more use of automated decision making (such as AI or machine learning), keeping their most important data current is a key priority.

Best practice says that disaster strikes if every team or service has their own copy of the data because copies get stale and incorrect.

The most common solution organisations use to make sure reference data stays current is to centralise it. Organisations buy a big data storage system (a “lake”, “warehouse”, “cave”, “swamp” or whatever) and pour all their data into that one place. Everyone is told that they’re only allowed to access important data from this system and that way everyone is always using the latest version. They’re forced to use whatever API the system makes available – and no copies!

But organisations that do this have just invented three hard problems for themselves.

## Centralised data leads to problems

### 1. Coordination between independent teams is now required

New versions of data can break systems, be they legacy or otherwise. The more complicated the data is, the more likely it is that whoever designed the system assumed some constraints about the data that no longer hold. Now that everyone has to use a central store that only has one “current” version, making changes to the data without checking that downstream systems will keep working is risky – it could break something.

![Communication between teams is hard]({{ site.url }}/img/communication-between-teams-is-hard.svg)

Many organisations handle this problem using a schedule. The team responsible for the central store publish a date and a description of what they’re going to update and communicate this to downstream consumers who make the appropriate checks and tests. If problems are found, there’s a delay to ensure the systems are updated to handle the data.

Scheduling can work, but it has serious drawbacks. It requires excellent communication between potentially very independent teams, and getting people across multiple teams to work together is a challenge. Trying to scale this coordination beyond a handful of teams requires significant resources, limiting the scalability of the data. It also places pressure on individuals – if the central data team receive changes late, they’ll have to work harder to meet the deadline of the schedule.

### 2. Data updates happen less frequently

Secondly, the organisation has just bound together its data publishing to the system update lifecycle of all of their consuming systems. Now, data can only get published at the rate the slowest consumer can test and update. For organisations with complicated or legacy systems, this can be very slow indeed. Not to mention expensive, especially where vendor change requests are involved. The data is now harder to update overall, meaning changes to it are harder and slower to integrate everywhere. Counter-intuitively, it’s now more difficult to keep the data current.

### 3. Data is harder to scale to new users

Thirdly, the new central data store comes with some serious security measures – after all, a malicious user might be able to take down the store and disrupt many services, or even access all the valuable data in just one attack. So the barriers to teams using the data are now even higher. Anyone from outside the organisation (either an external partner or the general public) are pretty much completely excluded from having access. They’re forced to keep relying on copies even though the organisation has much to gain from them using the most current data too.

So an organisation that’s picked a centralised approach has just invented a difficult team coordination problem and a data scalability problem for themselves. That’s without even mentioning the new costs associated with running the store. How could they have done better?

## Make it easy to keep copies current

We need to start by unpicking the starting assumption. Yes, copies of data do get out of date, but it’s not because they’re copies. It’s because they are never actual copies of the source – they’re just a cut-down view or a subset and are missing key metadata. With a spreadsheet or a result set from an API, all you have is the data – there’s no way of telling when the source changes or what has changed. Constantly discovering and integrating changes to data in these formats is hard and a manual task, which is why they fall out of date easily.

If we can make it easy to keep copies up to date, a better solution to the data staleness problem appears. We need to give everyone a copy of the data they need in a format that is trivially easy to keep up-to-date. Then, each team can update data versions according to their own lifecycle, rather than requiring the whole organisation to behave in lockstep.

By removing the need for everyone to be using the same version, we’ve vastly simplified the data management – no schedule is required, independent teams no longer have to coordinate, and the source data can be updated as often as necessary. Because new changes are available more often, teams are more practiced at integrating the changes and are incentivised to automate. Teams can also easily try the real data in a test environment first, and roll it back to the previous version if there are problems.

Instead of days, it now takes just minutes for the organisation to get new data loaded. Counter-intuitively, keeping everyone up-to-date is not the same as enforcing that everyone must use the same version – allowing people to update on their own terms actually increases the amount of time that the most relevant and correct data is being used.

With no coordination required, the data can also now scale to a far greater number of teams, and with more flexible system security, it’s easy to share the data with whoever needs it.

But what does it actually mean to give everyone a “full copy” of data and to make integrating changes easy?

![Keep data up-to-date]({{ site.url }}/img/registers-make-changes-easier.png)

## Registers are updatable, automatable copies

It turns out that developers and engineers are already doing this with software source control and continuous integration and deployment (CI/CD). With source code systems like Git, everyone gets a complete history of the source code and it’s easy to see what’s changed. Automation with CI/CD means that small changes happen often as opposed to big changes happening infrequently. [This is much less risky and allows faster results](https://books.google.co.uk/books?id=10xeDQAAQBAJ&pg=PT89).

How do we get the same powers for data? How do we arrange for a full history of the data to be available and changes easy to integrate?

This is where Registers come in. Registers record the full history of the data, so teams can choose whatever version they need. It’s easy to compare changes between Register versions so that when updates are made, it’s clear what has changed. Even when only a small subset of the data is used, the Register retains the history of the subset and can apply changes to it.

Registers are also easy to automate. Using [Registers.app](https://registers.app) tooling, teams can define how they take changes to the data and apply them in their own services – just like a CI pipeline for data.

Having multiple versions of data and automatic updates make data much easier to manage in organisations. The choice is clear: put the data where it’s needed and use a rich format that is easy to update. Pick Registers and the [Registers.app](https://registers.app) tooling to start making data management easier today!

