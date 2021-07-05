---
title: Trials and tribulations of creating a schools register
author: Owain Jones
excerpt: |
  We look at the data modelling process behind creating a UK-wide register of educational institutions and some of the lessons learned about to make combining multiple disparate data sources easier.
image: "img/geometric-solid-sphere.jpg"
licenses:
  - "Solid geometry images by [hmvierow](https://pixabay.com/users/hmvierow-4191750/) used under [Pixabay License](https://pixabay.com/service/license/)."
---
Greetings reader! Today we will be giving you a peek behind the curtain by looking at some of our modelling process behind creating a [UK-wide register of educational institutions](https://registers.app/register/11:431866). The register in question draws on a variety of sources. The starting point was three published registers of schools data: a list of educational institutions in England & Wales [published by the UK government](https://get-information-schools.service.gov.uk/Downloads), specifically Get Information About Schools (GIAS), a list of schools in Scotland [published by the Scottish government](https://www.gov.scot/publications/school-contact-details/), and a list of schools in Northern Ireland [published by the Northern Irish government](http://apps.education-ni.gov.uk/appinstitutes/default.aspx).

On the face of it the process of creating a UK-wide register should be a simple process of combining three similar datasets, but fun fact: it was not.

Firstly the datasets vary greatly in the amount of data they contain. The England and Wales dataset contains over 100 variables, from the standard ID and name, right through to the head teachers' names and preferred titles and a whole range of geographic data, such as [LSOA/MSOA codes](https://www.ons.gov.uk/methodology/geography/ukgeographies/censusgeography#output-area-oa). The other two datasets are not nearly as detailed, containing around 10 variables each, mostly just the ID code, school name and address, along with a few other variables.

Differences in the number of variables is not a major issue as the average user would likely find many of the variables in the England and Wales dataset to be superfluous. Ideally we can identify a core set of variables that are useful and are common to all three datasets (or can at least be derived from information that is contained in the datasets).

For the purposes of this register these variables were identified as the ID, school name, address, postcode, local authority (name and code), school type (i.e. the phase of education it provides), management type (i.e. local authority, academy, etc), open/closed status, and school website.

![Books with a models of a cone, sphere and cylinder]({{ page.image }})

## There is no common unique identifier for schools

Having identified these variables, the next step is to ensure each dataset has them and to extract and format the relevant information. We immediately ran into a minor issue with the ID. Schools in England and Wales use a six digit unique reference number (they also use an older DfE number – more on this later), Scottish schools use a seven digit SEED number and Northern Irish schools use an Institution reference number (IRN).

Despite being mildly frustrating that there is not a common UK wide reference ID, the differences are quite surmountable – thankfully each nation uses a different number of digits, ensuring that schools in different nations will definitely have different ID codes. If, for example, England and Scotland used six digit codes, we would have to check that no two schools in the different nations had the same code, which would cause a larger issue. So we just have a collective ID variable using each region's respective ID numbers and explain the differences in the variable or register description.

It is worth noting here that a type model would make such combinations easier. Assigning specific types to variables within a register column (in this case ID) would make it easy to combine similar registers, even if the naming or nature of the variables differs, as which value has come from which source register could be identified even if their content was the same.

School name is mercifully simple. School address is a little more complicated, some datasets use a single address variable, others use multiple, and some of these multiple variables may or may not contain data depending on the nature of the address. So, we identify for each record which of the address variables have data in and combine them to create a single address variable. Postcodes are also helpfully simple, and can simply be combined across datasets in a straightforward manner.

## The UK has a complex structure of local government

Local authority (LA) names and their codes is where it gets complicated. The England and Wales dataset contains variables for local authority name and code, however the main code variable uses the older format of a three digit code rather than the more standard eight digit code prefaced by a letter designating the country ([the change was made in 2011](https://www.gov.uk/government/statistics/new-local-authority-codes-january-2011)). The latter code is contained in the data, but listed way down the dataset among other locality codes. Also, there is a further complication: the changing nature of local authorities in England and the fact that some locations have two tiers of local government.

Throughout most of the UK there is only a single tier of local government. However in parts of England there remain two tiers, the first being a county council which itself contains several borough or district councils. This poses a slight problem as most published lists of local authorities in England (or the UK as a whole) only contain the lower tier of local government in these areas. In areas with two tiers it is the upper tier county council that is responsible for education.

Thus if you only had the local authority codes and wanted to match them to a list of names, you would need to source both a list of local authority names and a list of county council names (when searching for such datasets, the author was able to find an up to date, 2021, list of local authority names, but only a 2017 list of county council names). Fortunately in this data both of these are included. However this gave rise to another problem.

![Book with a cone model](img/book-cone-model.jpg)

## Local authority data changes more often than expected

Several of these county council areas have undergone changes in recent years with several more planned – in many cases these changes either remove the county council and merge some of the boroughs together to create some new unitary authorities or simply reduce the number of boroughs in the county. There have been [several such changes since 2019](https://en.wikipedia.org/wiki/2019%E2%80%932023_structural_changes_to_local_government_in_England) with a few more planned for future years.

This is a slight issue with the England and Wales data as the local authority variable for some schools is listed as 'Pre-LGR (local government reform) 20XX *county council name*', which means the data contains potentially out of date and incorrect information (the information, however, is at least flagged as being out of date). This outdated information is not uniform across these councils that have experienced changes, i.e. some schools do have new local authority designations listed.

Ultimately it was decided to keep the data as it is presented in the original dataset due to not having a clear way of identifying the local authority the school is currently in. However this did pose interesting questions about how to handle data which is explicitly known to be out of date, and where no up to date substitute is available, and whether it is worth including such data on the basis that out of date information is better than no information.

It also raises questions around the mutability of data and the need to keep it up to date, and how to do so, even with datasets that seem to be mostly constant. Most people would assume that local authorities only rarely change, and while this is potentially true for individual LAs, when looking across all LAs changes can be quite frequent. Since 2019 at least one LA has changed each year which means the LA register has changed each year, and is expected to do so for the next few years. Data users that assume the list of LAs doesn’t change much are [introducing data quality problems into their products](https://registers.blog/how-to-keep-data-up-to-date-at-scale).

## Completeness varies between the national registers

For management type, in England this fell into local authority, free school, independent, etc, however in Scotland only local authority managed schools are listed in the data, and in Northern Ireland and Wales, independent schools are listed but the data for local authority schools is more nuanced, split into maintained, volunteer, community and combinations of the above to indicate whether and how much involvement voluntary or community organisations have in the running of the school (though in all cases the LA is still ultimately responsible).

Instead of simply recategorizing all these as Local Authority, we decided to keep the nuanced data and note in the register metadata that all these categories were local authority managed schools.

I said in the previous paragraph that certain categories were listed for Wales, however it wasn't quite this straightforward. In the England and Wales dataset, all schools in Wales simply have the management type 'Welsh school' and the school type 'Not applicable'.

As such it was necessary to source another list of Welsh schools from the Welsh government  which did contain this information. Unfortunately, not all Welsh schools listed in the England and Wales dataset were contained in the Welsh government data (most, but not all, of those were schools that were flagged as closed), meaning that there are still some Welsh schools in the data that have incomplete information.

Combining the datasets together was also tricky – while the GIAS data uses the URN, the Welsh government data uses the DfE number. Fortunately the elements that make up this number are contained in the GIAS dataset so it was still possible to combine the two.

For the school type (i.e. the phase of education the school provides) there were a few discrepancies between the datasets, with some containing more nuanced data than others, but it was relatively straightforward to collapse this data into a handful of categories (i.e. primary, secondary, sixth-form). The final variable was the school website, which was mercifully simple as all datasets had some form of this (though it did not contain data for all the schools), so it was a simple case of combining all the data.

![Registers keep data up-to-date.](img/registers-make-changes-easier.png)

## Keeping derived data high quality requires special tools

And that was that, we now have a fully functioning schools register. This process teaches us a lot about the very disparate nature of data about devolved government responsibilities – despite modelling very much the same thing (educational institutions) each source dataset approaches the problem in a very different way and with results that are not trivial to combine. This is, unfortunately, the common case rather than an exception.

It also highlights some of the features that are necessary to keep complex registers high quality – expressive types that can combine multiple types of ID, linking back to source rows, and metadata that can express the provenance of that data it describes. We want to make building registers like this easy – which is why we’re building all these features (and more) into [Registers.app](https://registers.app/). Head on over to try out our next generation data management tools for yourself!

