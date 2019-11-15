---
title: "Registers are everybody's business"
author: Andy Bennett
image: img/register-composition.jpg
---

Building useful things requires useful data. Data that remains locked behind propietary APIs in outdated formats and can't be automatically kept up-to-date makes building next generation services tricky, error prone and time consuming. This blog post discusses some of the issues through the lens of creating a list of businesses in the UK and proposes a solution that allows data to flow more freely whilst offering far stronger accountability than today's data sources.

<img src="{{ site.baseurl }}img/register-composition.jpg">

Imagine you want to provide a service to businesses. When someone applies, you need to be sure that the application refers to a real business. Maybe you're running a service that lets people [register for trademarks](https://www.gov.uk/how-to-register-a-trade-mark/apply), maybe you're an industry watchdog, or maybe another business selling something exclusively to other businesses.

But what even is a business?

Ask a dictionary and you'll get something like "a person, or a group of people, who conduct commercial trade in goods or services". If something does that then it's probably a business. However, working out whether a particular legal entity is a business in the UK can be tricky. There's no single person you can ask and something that counts as a business for one purpose may not count for another.

For example, certain types of businesses are able to raise capital by issuing shares or other securities in exchange for investment. If you are an investor you need to know whether the legal entity you would like to invest in is able to issue the kind of collateral that you are interested in. Sole traders can't but companies limited by shares can!

Our customers often ask us how they can get a single, complete list of all the businesses in the UK. Drawing up such a list is a challenge. The list must be compiled from a range of sources, some of which are listed below. Not all of the lists are public.

+ Companies House [publish a list](https://beta.companieshouse.gov.uk/) of all the companies that have been registered.

+ The Charity Commission [publish a list](https://www.gov.uk/find-charity-information) of all the charities that have been registered.

+ Unincorporated associations are not required to be registered with anyone but if they start trading and making a profit they must pay corporation tax and so HMRC must [maintain a private list](https://www.gov.uk/unincorporated-associations) of them.

+ Sole traders [make up over 60%](https://www.thecompanywarehouse.co.uk/sole-trader-business-names) of businesses in the UK. They are not legally distinct from the person behind them and need only [declare it on their self assessment tax return](https://www.gov.uk/set-up-sole-trader).

Providing a single list of all these businesses involves gathering data from all these different sources and republishing it in a new form. There's a lot of manual effort involved in getting access to the lists, finding a common vocabulary, and reformatting the data.

Worse, no-one else can trust your list of businesses because it's hard to check whether it's correct – they'd have to get all the source lists and do the same manual processing as you, and then check the results. They might as well have done the work themselves.

So we're developing tools and products that help people to solve this problem.

Registers are lists built from [standards developed at the Government Digital Service](https://github.com/openregister/specification) and using technology derived from Google's [Certificate Transparency project](http://www.certificate-transparency.org/). They allow anyone to create a list that meets their specific needs, share it with others, and provide updates to the list as they happen.

You can also create Registers out of existing lists published by others, either in whole or in part. You can add your own items to the list or annotate items from other lists with extra information. This list can then be published as a new Register which can be used and remixed by others in turn. Where data has been drawn from other sources, it will automatically be kept up-to-date.

Registers are more than just simple lists though. Because they securely keep track of where each and every item in the list has come from it's possible to build up a picture of the authority of the list as a whole. If someone publishes a list based on official government data, you can quickly check to see whether they've removed certain things or added extras. You can see which bits are offical and which bits have been crowd-sourced. Where information has been crowd-sourced you can see how many other people agree.

This embedded provenance is what gives Registers their power. Anyone can build a list, or comission someone else to do it on their behalf, and everyone else can know that the list is a true and accurate picture of the  data it's made from. This means people outside Government can solve the problem of a single, unified list of UK businesses and everyone is able to trust their solution because they can track back to the original Registers it was built from.

Moreover, we all know that mistakes happen and, when they do, Registers allow the question "why" to be asked. It makes it possible to work out how the mistake happened and where it needs to be fixed rather than leaving the aggrieved party with "computer says no".

As a society we're using more data in our day-to-day interactions and automating more of our services. Trustworthy and reliable data that's always up-to-date must become a cornerstone of our infrastructure so that we can prove that data is correct and do something about it when it is not.

_Registers are a state-of-the-art way of publishing reliable data that's good enough to build things on. Get started with your own list or a remix of an existing list over at [Registers.app](https://registers.app/)._
