---
title: "Registers are everybodys' business"
author: Andy Bennett
---

Data is only useful if you can use it to build things. Data that remains locked behind propietary APIs in outdated formats and can't be automatically kept up-to-date makes building next generation services tricky, error prone and time consuming. This blog post discusses some of the issues through the lense of creating a list of businesses in the UK and proposes a solution that allows data to flow more freely whilst offering far stronger provenance than today's data sources.

dictionary.com defines a business as "a person, partnership, or corporation engaged in commerce, manufacturing, or a service; profit-seeking enterprise or concern".

i.e. a person, or a group of people, who conduct commercial trade in goods or services.

If something does that then it's probably a business. However, working out whether a particular legal entity is a business in the UK can be tricky. There's no single person you can ask and something that counts as a business for one purpose may not count for another.

For example, certain types of businesses are able to raise capital by issuing shares or other securities in exchange for investment. If you are an investor you need to know whether the legal entity you would like to invest in is able to issue the kind of collateral that you are interested in. Sole traders can't but companies limited by shares can!

When a business reaches a certain size it is required by law to charge VAT on the things that it sells and collect this tax on behalf of the government. Both sole traders and companies limited by shares must do this.

Despite, or perhaps because of, this our customers often ask us how they can get a single, complete list of all the businesses in the UK. Even drawing up a complete list of things that could be thought of as businesses in at least one way is a challenge. The list must be compiled from a range of sources, some of which are listed below. Not all of the lists are public.

+ Companies House [publish a list](https://beta.companieshouse.gov.uk/) of all the companies that have been registered.

+ The Charity Commission [publish a list](https://www.gov.uk/find-charity-information) of all the charities that have been registered.

+ Unincorporated associations are not required to be registered with anyone but if they start trading and making a profit they must pay corporation tax and so HMRC must [maintain a private list](https://www.gov.uk/unincorporated-associations) of them.

+ Sole traders [make up over 60%](https://www.thecompanywarehouse.co.uk/sole-trader-business-names) of businesses in the UK. They are not legally distinct from the person behind them and need only [declare it on their self assessment tax return](https://www.gov.uk/set-up-sole-trader).

Many of these businesses might end up [registering for trademarks](https://www.gov.uk/how-to-register-a-trade-mark/apply) or with an industry watchdog. For example, a boiler repair business could be set up as a sole trader and must be registered with the gas safe register.

Providing a single list of all these businesses involves gathering data from all these different sources and republishing it in a new form.


Using [standards developed at the Government Digital Service](https://github.com/openregister/specification) and technology derived from Google's [Certificate Transparency](http://www.certificate-transparency.org/), we're developing tools and products that help people to solve this problem.

[Registers.app](https://registers.app) allows anyone to create a list that meets their specific needs. They can draw on existing lists published by others either in whole or in part. If needed, they can add their own items to the list or annotate items from other lists with extra information. This list can then be publised as a Register which can be used and remixed by others in turn. Where data has been drawn from other sources, it will automatically be kept up-to-date.

Registers are more than just simple lists though. Because they securely keep track of the provenenance of each and every item in the list it is possible to build up a picture of the authority of the list as a whole. If someone publishes a list based on official government data, you can quickly check to see whether they've excluded certain entities or included extra ones. You can see which bits are offical and which bits have been crowd-sourced. Where information has been crowd-sourced you can see how many other people agree.

This embedded provenance is what gives registers their power. Anyone can build a list, or comission someone else to do it on their behalf, and be able to know that the list is a true and accurate picture of the underlying data. This allows individual providers to go to work in solving the needs around a single, unified list of UK businesses and the market is able to assess their offerings based on quality. Moreover, we all know that mistakes happen and, when they do, this provenance allows the question "why" to be asked. It makes it possible to work out how the mistake happened and where it needs to be fixed rather than leaving the aggrieved party with "computer says no".

As a society we're using more data in our day-to-day interactions and automating more and more of our services. Trustworthy, reliable, data that's always up-to-date must become a cornerstone of our infrastructure so that we can prove it when things are right and do something about it when they are not.

Registers are a state-of-the-art way of publishing reliable data that's good enough to build things on. Get started with your own list or a remix of an existing list over at [Registers.app](https://registers.app/).
