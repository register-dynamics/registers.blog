---
title: Data trusts
author: Andy Bennett
---

As our everyday interactions and institutions move increasingly online,
control over the data that they process for us and about us is becoming
increasingly important. Those whom the data is about are rarely the
people who get the most value from it. As the value of this data
increases, the reputations of people and companies will come to be based
on how they handle it and what they use it for, much like financial
proprietary can make or break someone's reputation today.

Society allows for a certain amount of transparency, or at least
auditability, over financial matters <link>. Institutions of the future
will have to meet similar levels of accountability over how they put
their data assets to work.

European societies have already taken the first step in this direction
with the broad reaching and flexible GDPR legislation <link> that has
overhauled most of the existing data protection legislation <link>
dating from the late 20th century. It considers real, currently relevant
scenarios and makes an effort to anticipate the implications of
widespread use of AI and other kinds of automated decision making in the
future <deep link to gdpr clause>.

Along with the ODI <link odi>, we believe that other legal and
legislative changes are necessary in order to support a fully
accountable digital future. In their work on Data Trusts <link blog
post>, the ODI outline a legal structure that enables data assets to be
held in trust, much like financial assets can be today. Along with
organisations such as Deep Mind <link deepmind>, we believe that there
must be a technical angle to the protection so that organisations that
store and process data can be publicly audited and are able to prove
their good standing <link deepmind blog post>.

There are many ways of linking social trust with technical trust so that
effective data audit can take place. Techniques such as those pioneered
by Google's Certificate Transparency project <link> allow certificate
authorities to operate under a "trust but verify" model <deep link
certificate transparency> whereby they continue to issue certificates to
their customers as they always have but they are able to demonstrate to
"monitors" <deep link ct> that they have shown the same certificates to
everyone and have not covertly issued certificates improperly when under
pressure, such as political pressure from a nation state <link news
article>. Deep Mind is using similar technology <link their other blog
post> to ensure that, as an organisation, it maintains proper control
over the data that has been entrusted to it by medical organisations
whilst still being able to use it effectively for the proper purpose.
[Now do an explicit callback/example of how this could work in a Data
Trust?]

The Certificate Transparency example is a very public dataset <link
crt.sh>, whilst the Deep Mind one is some of the most sensitive personal
data around <link nhs news article??>. We believe that similar
technologies can be used to mange both and that, by doing so, we can
develop a continuum of transparency [??????????]. The provenance of open
data sets would be fully open and the proper handling of closed datasets
could be vouched for by auditors who have greater access than the
general public.

For example, [do an open example before this - the trust's charter could
require the data to be published in a verifiable structure etc.] an
organisation that holds very sensitive data can periodically publish
secure metadata that opaquely describes the state of their audit system.
From time-to-time the organisation can appoint an auditing firm, such as
one of the Big Four <link wikipedia>, who have the relevant protections,
controls, assurance and vetting in place so that the organisation can
show them the data and how it has been used. The appointed audit firm
can check that the organisation's claimed audit trail matches their
historically published secure metadata and publicly vouch that the
organisation has stored and processed the data properly.

By privately inspecting the organisation and publicly vouching for it,
existing social systems of trust <link news article re finance
scandal??> and reputation can be used to ensure that data management is
taken as seriously as financial management.

By using a fully integrated technical component to the auditing, the
organisation could appoint more than one auditing firm who would work
independently to come to the same conclusions, thus further increasing
the reliability of the claims.

This essay has been light on technical details of how this is can be
achieved in practice because the requirements around the social and
legal structures of Data Trusts are only just beginning to surface.
However, we have been working on a proof of concept implementation. We
also embedded the ideas of mutually reinforcing audit logs and
independent auditability in our work on the Aquae personal data exchange
specification <link to technical analysis>.

something something registers...
