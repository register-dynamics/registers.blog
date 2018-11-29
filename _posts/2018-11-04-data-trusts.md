---
title: Social trust, technical trust, data trusts
author: Andy Bennett
---

Society demands a certain amount of transparency and auditability over
financial matters <!-- link -->. We want to be sure that those in charge of
vast wealth are acting properly and within what we as a society have
decided is acceptable. Financial improprietary can make or break a
reputation. Whether you're an institution or an individual,
if you're found to be acting improperly with finances, it's either a
serious blow to your reputation, the end of your career,
[or worse](https://www.bbc.co.uk/news/uk-20338042).

As everyday interactions and institutions are moving increasingly online,
data about us is becoming ever more important and valuable. We are starting
to see that the reputations of the people and companies controlling our data
is increasingly based on how they handle it and what they use it for. These
institutions are being asked to meet similar levels of accountability over
how they put their data assets to work.

European societies took the first step in this direction
with the broad reaching and flexible GDPR legislation <!-- link --> that has
overhauled most of the existing data protection law <!-- link -->
dating from the late 20th century. It considers real, currently relevant
scenarios and makes an effort to anticipate the implications of
widespread use of AI and other kinds of automated decision making in the
future <!-- deep link to gdpr clause -->.

Along with the [Open Data Institute](https://theodi.org/), we believe
that other legal and legislative changes are necessary in order to
support a fully accountable digital future. In their [work on
data trusts](https://theodi.org/article/defining-a-data-trust/),
the ODI outline a legal structure that enables data assets to be
held in trust, much like financial assets can be today. Along with
organisations such as [DeepMind](https://deepmind.com), we believe that there
must be a technical angle to the protection so that organisations that
store and process data can be publicly audited and are able to prove
their good standing <!-- link deepmind blog post -->.

There are many ways of linking social trust with technical trust so that
effective data audit can take place. Techniques such as those pioneered
by Google's [Certificate Transparency project](https://www.certificate-transparency.org/)
allow certificate authorities to operate under a "trust but verify" model
<!-- deep link certificate transparency --> whereby they continue to issue certificates to
their customers as they always have but they are able to demonstrate to
"monitors" <!-- deep link ct --> that they have shown the same certificates to
everyone and have not covertly issued certificates improperly when under
pressure, such as political pressure from a nation state <!-- link news article -->.

Deep Mind is using
[similar technology](https://deepmind.com/blog/working-nhs-build-lifesaving-technology/)
to ensure that, as an organisation, it maintains proper control
over the data that has been entrusted to it by medical organisations
whilst still being able to use it effectively for the proper purpose.

In a data trust, the trust's charter could require that the trustors (those
who hold the data) store it in a verifiable structure that records all of
the changes that are made to the data. For open data sets, this extra
transparency allows the trustees and general public to be sure that no
data improperiety is occuring.

If an organisation holds very sensitive data it can instead publish
secure metadata that opaquely describes the state of their database,
without revealing any of the sensitive data. Periodically the organisation
can show the data and the trustees can check that the organisation's claimed
audit trail matches the historically published secure metadata and publicly
vouch that the organisation has stored and processed the data properly.

Having such a level of transparency could form part of the requirement
for being certified as a [B Corporation](https://bcorporation.net/), or
it could lead to an entirely new, publically-recognisable certificate
that data is held in a proper manner.

Just like accountancy and financial audit today is a very technical field,
requiring work by certified experts, this auditing process might also be
a specialist undertaking. It may be appropraite for trustees to instead
appoint an auditor. Performing audit of data trusts could represent a
new line of work for traditional auditors and require a new kind of
certification that shows the auditor has the relevant processes,
protections, assurance and vetting in place.

By privately inspecting the organisation and publicly vouching for it,
existing social systems of trust <!-- link news article re finance scandal?? -->
and reputation can be used to ensure that data management is taken as
seriously as financial management.

By using a fully integrated technical component to do the auditing, the
organisation could appoint more than one auditing firm who would work
independently to come to the same conclusions, thus further increasing
the reliability of the claims.

The requirements around the social and legal structures of data trusts
and data-transparent organisations are only just beginning to surface.
Register Dynamics have already been working on a proof of concept
implementation, powered by [Registers technology](https://registers.app).
We also embedded the ideas of mutually reinforcing audit logs and
independent auditability in our work on the UK government's
[AQuAE personal data exchange specification](https://docs.google.com/document/d/1bYxzS5Tmh8cn6WqfERr720JRu7Jax5jLDaiDi82c5Jc/edit).

If you'd like to talk more about data trusts and marrying social and
technical trust, please [get in touch with us](mailto:hello@register-dynamics.co.uk).
