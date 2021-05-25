---
title: Why schemas matter
author: Alaric Snell-Pym
excerpt: |
  Register Schema technology will be used to support powerful data import, processing, and exploration features that will streamline the sharing and managing of high-quality reference data.
image: "img/schemas.png"
---

According to the American Heritage Dictionary of the English Language, a "schema" is "A pattern imposed on complex reality or experience to assist in explaining it, mediate perception, or guide response".

Of course, the word means many things to many people; a database engineer would tell you that a schema is the structure of a database[^1], explaining how real-world things like customers and invoices are represented inside a computer.

## Schemas give databases an advantage over spreadsheets

Databases are composed of a bunch of tables, and a database schema defines what columns each table has, and what type of data goes in that column. This is one of the things that makes a database different to a spreadsheet - in a spreadsheet, a cell may hold any of a number of types of data - text, numbers, formulae, dates, and sometimes a few others. A column in a spreadsheet may hold different types of data in each cell in the column, which is handy for putting text headings at the top of a column of numbers!

But it's a pain for data quality as it's perfectly possible for some text to crop up where a number is expected somewhere in the spreadsheet, and thanks to most spreadsheets guessing the type of data based on what the user types ([for instance, scientists were forced to change the codes they use to identify some human genes as Excel kept interpreting them as dates](https://www.theverge.com/2020/8/6/21355674/human-genes-rename-microsoft-excel-misreading-dates)) often leads to errors.

This is why the fact that databases use a schema, so the database knows that some text turning up in a column intended to contain a number is an error and will reject it, is considered one of the advantages of a database over a spreadsheet: you can know that the data you get back out of it is at least of the right type, meaning that some invalid data was screened out on the way in.

## What are the downsides of database schemas?

The types understood by databases are pretty crude. For instance, you might be able to tell the database that the "price" column contains a number with two decimal places, but you can't tell it the contents is in pounds sterling and includes VAT. You can tell it the "postcode" column is some text at most eight characters long, but you can't tell it that 'XX1 1XX' isn't a real postcode.

This also means that the computer can't tell you what can be done with the data. If the type of a column called `delivery_pc` is just "text up to eight characters long", then it doesn't know that the postcodes therein can easily be display on a map. If you have table called `charges` with a column called `currency` of type "text three characters long" then the computer won't know that those currency codes can be cross-referenced to a column called `code` in a table called `currencies`, letting the user pick currencies by name from a list (from a column called `name` in the `currencies` table) when entering charges rather than needing to remember that `THB` is the code for Baht.

## Schemas for Registers

Unlike databases and spreadsheets, Registers are built to store "information" rather than just "data"; register schemas meet the following objectives:

1. Provide precise tools for data validation. A postcode isn't just at most eight characters long, it follows [certain patterns](https://webarchive.nationalarchives.gov.uk/20101126012154/http://www.cabinetoffice.gov.uk/govtalk/schemasstandards/e-gif/datastandards/address/postcode.aspx), and it's in the official Register of postcodes. Latitude and longitude aren't just numbers, they're in the range from -90 to +90. Using this added information, much more invalid data can be detected automatically.

2. Handle complicated values. An Ordnance Survey National Grid reference has three parts: a grid square, eastings, and northings, each of which have their own validation rules. [A business is a limited company, a sole trader, a partnership, a charity, or a few other cases](https://registers.blog/registers-are-everybodys-business) - each of which is in turn described in more detail (a limited company is an entry in the Register of Companies, for instance).

3. Provide meaning by naming types. Rather than giving a postcode column a type such as "Follows the prescribed pattern and is in the Register of postcodes", we can instead publish that type in a Register of Types as a type called "postcode". This can then can be referenced in other Registers, thereby telling the computer that postcodes that crop up in lots of different Registers are all the same kind of thing. The computer can be told that postcodes can be looked up on maps, at which point all postcodes in all Registers can be made clickable to look them up on a map.

4. Make it easy to customise types. If your application deals with [non-geographic postcodes](https://en.wikipedia.org/wiki/Postcodes_in_the_United_Kingdom#Non-geographic_codes), you can create a type for non-geographic postcodes by customising the common "postcode" type to limit it to the non-geographic forms; and anything the computer already knows about postcodes will still apply to your new type.

5. Allow types to evolve with time. It's great when everyone shares a common published type, but if two teams independently make a type for Pantone colour numbers, it might even be some time before anybody notices that there are two different types for the same thing. Thankfully, when that happens, the Register schema system provides tools for the two teams to migrate to using a shared Pantone colour number type, that others can use as well - or if inter-team rivalry forbids them from cooperating, at the very least users of their registers can tell their own computer about the correspondence between the two types.

## Coming soon to Registers.app

The team here at [Register Dynamics](https://www.register-dynamics.co.uk) are building the Register Schema technology into future releases of [Registers.app](https://registers.app), which is a free and open platform for linked reference data. This will be used to support powerful data import, processing, and exploration features that will streamline the sharing and managing of high-quality reference data.

[^1]: Note that by "database" here we are talking about the widespread SQL databases; other types of database exist with different notions of a schema, but they are rarely encountered.
