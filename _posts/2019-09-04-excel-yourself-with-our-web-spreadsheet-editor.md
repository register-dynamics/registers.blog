---
title: Excel yourself with our web spreadsheet editor
author: Simon Worthington
image: "img/our-new-web-spreadsheet-editor.png"
excerpt: |
  We wanted to use a spreadsheet interface to let our users feel at home editing Registers. But we needed an editor that was similar to desktop office apps but didn't confuse users in areas that Registers and spreadsheets differ. So, we built our own spreadsheet widget and we're now using it everywhere in Registers.app.
licenses:
  - "Data from the Welsh Government Principal Local Authority register used under the [Open Government License v3](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/)."
---
Traditional data management techniques take control of data away from the people who understand it the most – the domain experts. We started building [Registers.app](https://registers.app) to give back [agency and autonomy of important, canonical data](https://www.register-dynamics.co.uk/blog/usable-data-management-for-everyone) so we knew that we needed a way for these users to insert and update their data that was intuitive, familiar and didn’t require massive technical knowledge.

We’ve talked before about [how everyone already uses spreadsheet tools](https://dataingovernment.blog.gov.uk/2019/06/10/improving-how-we-manage-spreadsheet-data/) and how they meet the needs of their users well. They offer a direct interface for users to manage structured data in a simple way. Through experience with tools like LibreOffice or Excel, many users already feel at home with a spreadsheet. We’ve found that many of our enterprise users are also already managing their data with these tools.

We wanted to capture some of that familiarity and make users feel at home straight away when they made a Register for the first time in Registers.app. We decided to use a spreadsheet-style interface to tap into a user’s existing experience and help them feel comfortable with inserting data.

## Registers are more than spreadsheets

One problem with this approach is that [a Register is not exactly like a spreadsheet](https://registers.blog/what-is-a-register). Because columns in a Register can link directly to whole items in another Register, cells often need to contain more than simple string values. We also knew that to help our users the most, we should help them insert correct values for types like dates or codes from another Register with context-specific editors and metadata per cell.

So we had to use a spreadsheet widget that got the right balance of being similar to our favourite spreadsheet programs whilst being different in the ways that Registers are different. We also knew that we’d want to use a similar spreadsheet view for letting users review draft changes and showing differences between historical Register updates, so the interface had to scale to those challenges too.

We looked at lots of existing spreadsheet components on the web to see whether they’d fit our use cases and to mine them for UX features that helped them feel like a spreadsheet. Despite finding some great work, none of the components we identified had quite the right balance for us to use directly. We did, however, draw a lot of inspiration from them to form a list of key features that made them approachable whilst also allowing expert behaviour.

## We made our own spreadsheet for the web

So, we decided to implement our own spreadsheet interface for the web. Without any further ado, here it is!

<script type="text/javascript" src="{{ site.baseurl }}js/spreadsheet.js"></script>
<link rel="stylesheet" href="{{ site.baseurl }}css/spreadsheet.css" />
<table class="register editing data">
  <thead>
    <tr>
      <th>Principal-Local-Authority</th>
      <th>Name</th>
      <th>Name-Cy</th>
      <th>Official-Name</th>
      <th>Official-Name-Cy</th>
      <th>Start-Date</th>
      <th>End-Date</th></tr>
    <tr>
      <th>A principal local authority in Wales.</th>
      <th>The commonly-used name of a record.</th>
      <th>The commonly-used Welsh name of a record.</th>
      <th>The official or technical name of a record.</th>
      <th>The official or technical Welsh name of a record.</th>
      <th>The date a record first became relevant to a register.</th>
      <th>The date a record stopped being applicable.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/AGY/NDgwMQ==/data/principal-local-authority" value="AGY"></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/AGY/NDgwMQ==/data/name" value="Isle of Anglesey"></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/AGY/NDgwMQ==/data/name-cy" value="Sir Ynys Môn"></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/AGY/NDgwMQ==/data/official-name" value="Isle of Anglesey County Council"></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/AGY/NDgwMQ==/data/official-name-cy" value="Cyngor Sir Ynys Môn"></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/AGY/NDgwMQ==/data/start-date" value="1996-04-01"></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/AGY/NDgwMQ==/data/end-date" value=""></td>
    </tr>
    <tr>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/BGE/NDgxNA==/data/principal-local-authority" value="BGE"></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/BGE/NDgxNA==/data/name" value="Bridgend"></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/BGE/NDgxNA==/data/name-cy" value="Pen-y-bont ar Ogwr"></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/BGE/NDgxNA==/data/official-name" value="Bridgend County Borough Council"></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/BGE/NDgxNA==/data/official-name-cy" value="Cyngor Bwrdeistref Sirol Pen-y-bont ar Ogwr"></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/BGE/NDgxNA==/data/start-date" value="1996-04-01"></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/BGE/NDgxNA==/data/end-date" value=""></td>
    </tr>
    <tr>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/BGW/NDgxMw==/data/principal-local-authority" value="BGW"></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/BGW/NDgxMw==/data/name" value="Blaenau Gwent"></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/BGW/NDgxMw==/data/name-cy" value="Blaenau Gwent"></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/BGW/NDgxMw==/data/official-name" value="Blaenau Gwent County Borough Council"></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/BGW/NDgxMw==/data/official-name-cy" value="Cyngor Bwrdeistref Sirol Blaenau Gwent"></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/BGW/NDgxMw==/data/start-date" value="1996-04-01"></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/BGW/NDgxMw==/data/end-date" value=""></td>
    </tr>
    <tr>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/CAY/NDgxNg==/data/principal-local-authority" value="CAY"></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/CAY/NDgxNg==/data/name" value="Caerphilly"></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/CAY/NDgxNg==/data/name-cy" value="Caerffili"></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/CAY/NDgxNg==/data/official-name" value="Caerphilly County Borough Council"></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/CAY/NDgxNg==/data/official-name-cy" value="Cyngor Bwrdeistref Sirol Caerffili"></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/CAY/NDgxNg==/data/start-date" value="1996-04-01"></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/CAY/NDgxNg==/data/end-date" value=""></td>
    </tr>
    <tr>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/CGN/NDgwNg==/data/principal-local-authority" value="CGN"></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/CGN/NDgwNg==/data/name" value="Ceredigion"></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/CGN/NDgwNg==/data/name-cy" value="Ceredigion"></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/CGN/NDgwNg==/data/official-name" value="Ceredigion County Council"></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/CGN/NDgwNg==/data/official-name-cy" value="Cyngor Sir Ceredigion"></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/CGN/NDgwNg==/data/start-date" value="1996-04-01"></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/CGN/NDgwNg==/data/end-date" value=""></td>
    </tr>
    <tr>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/CMN/NDgxMQ==/data/principal-local-authority" value="CMN"></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/CMN/NDgxMQ==/data/name" value="Carmarthenshire"></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/CMN/NDgxMQ==/data/name-cy" value="Sir Gaerfyrddin"></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/CMN/NDgxMQ==/data/official-name" value="Carmarthenshire County Council"></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/CMN/NDgxMQ==/data/official-name-cy" value="Cyngor Sir Gâr"></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/CMN/NDgxMQ==/data/start-date" value="1996-04-01"></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/CMN/NDgxMQ==/data/end-date" value=""></td>
    </tr>
    <tr>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/CRF/NDgwNQ==/data/principal-local-authority" value="CRF"></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/CRF/NDgwNQ==/data/name" value="Cardiff"></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/CRF/NDgwNQ==/data/name-cy" value="Caerdydd"></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/CRF/NDgwNQ==/data/official-name" value="City of Cardiff Council"></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/CRF/NDgwNQ==/data/official-name-cy" value="Cyngor Dinas Caerdydd"></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/CRF/NDgwNQ==/data/start-date" value="1996-04-01"></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/CRF/NDgwNQ==/data/end-date" value=""></td>
    </tr>
    <tr>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/CWY/NDgwMg==/data/principal-local-authority" value="CWY"></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/CWY/NDgwMg==/data/name" value="Conwy"></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/CWY/NDgwMg==/data/name-cy" value="Conwy"></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/CWY/NDgwMg==/data/official-name" value="Conwy County Borough Council"></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/CWY/NDgwMg==/data/official-name-cy" value="Cyngor Bwrdeistref Sirol Conwy"></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/CWY/NDgwMg==/data/start-date" value="1996-04-01"></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/old/CWY/NDgwMg==/data/end-date" value=""></td>
    </tr>
    <tr>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/new/0/data/principal-local-authority" value="" /></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/new/0/data/name" value="" /></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/new/0/data/name-cy" value="" /></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/new/0/data/official-name" value="" /></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/new/0/data/official-name-cy" value="" /></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/new/0/data/start-date" value="" /></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/new/0/data/end-date" value="" /></td>
    </tr>
    <tr>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/new/1/data/principal-local-authority" value="" /></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/new/1/data/name" value="" /></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/new/1/data/name-cy" value="" /></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/new/1/data/official-name" value="" /></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/new/1/data/official-name-cy" value="" /></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/new/1/data/start-date" value="" /></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/new/1/data/end-date" value="" /></td>
    </tr>
    <tr>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/new/2/data/principal-local-authority" value="" /></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/new/2/data/name" value="" /></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/new/2/data/name-cy" value="" /></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/new/2/data/official-name" value="" /></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/new/2/data/official-name-cy" value="" /></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/new/2/data/start-date" value="" /></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/new/2/data/end-date" value="" /></td>
    </tr>
    <tr>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/new/3/data/principal-local-authority" value="" /></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/new/3/data/name" value="" /></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/new/3/data/name-cy" value="" /></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/new/3/data/official-name" value="" /></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/new/3/data/official-name-cy" value="" /></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/new/3/data/start-date" value="" /></td>
      <td><input type="text" name="welsh-government/principal-local-authority/WnnE4SXksjo-jskf-2gzFm61IhAUlFXPHrpr6brjs60=/new/3/data/end-date" value="" /></td>
    </tr>
  </tbody>
</table>

The sheet is displaying a subset of the data from the Welsh Government’s [Principal Local Authority register](https://registers.app/register/11:148).

We’ve designed the interface to be familiar to users of desktop office programs. The look and feel of cursor movement and selection is familiar, and copy/paste and undo functionality are available. It sits on top of [an ordinary HTML table](https://github.com/register-dynamics/registers.blog/blob/master/{{ page.path }}) and falls back gracefully if Javascript is not running. In addition, it makes prominent space for column metadata and the side gutter can be used to display an indication of row changes (try editing or clearing a row!).

## There’s more still to do

We’re very happy with what we’ve achieved so far, but there’s still lots more to do. We’re going to be expanding it to use in our Register creation process, including allowing multiple cell selections to tie in with our step-by-step creation flow.

We hope you think the widget is as cool as we do! We’ll be posting further updates on our work as it progresses. If you’d like to give us some feedback (maybe on some killer features we’re missing) or tell us how much you’d like to use it, drop us a note [by e-mail](mailto:hello@register-dynamics.co.uk) or [on Twitter](https://twitter.com/regdyn)!
