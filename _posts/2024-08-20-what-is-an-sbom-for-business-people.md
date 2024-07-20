---
layout: post
title: "What is an SBOM/Software Bill of Materials"
author: michael-robinson
date: "2024-08-20"
categories: [management]
tags: [organisations, culture, featured]
image: "/images/what-is-an-sbom-for-business-people.webp"
---

A Software Bill of Materials, or SBOM, is a data exchange format that describes the ingredients of an application. Learn why they are critical for the safety of your business here.

<!-- TOC -->

- [Introduction](#introduction)
  - [Some Statistics on the Explosion of Complexity](#some-statistics-on-the-explosion-of-complexity)
  - [Why Should You Care About This Complexity?](#why-should-you-care-about-this-complexity)
    - [Completely In-house Benefits & Risks](#completely-in-house-benefits--risks)
    - [Mixed In-house and Open Source Benefits & Risks](#mixed-in-house-and-open-source-benefits--risks)
- [Governance of Licensing & Security Exposure](#governance-of-licensing--security-exposure)
  - [SBOMs as an Automated Supply Chain-Governance Framework](#sboms-as-an-automated-supply-chain-governance-framework)
    - [Assurance of Content](#assurance-of-content)
    - [Insight During Emergencies](#insight-during-emergencies)
    - [Automated Policy Enforcement](#automated-policy-enforcement)
- [Summary](#summary)

<!-- /TOC -->

## Introduction

Software complexity has increased exponentially over the past 20 years. Long gone are the days when teams wrote the entire codebase themselves. Nowadays, engineering in your company is more similar to plumbing:

1. Product decides what, and Engineering decides how to build it.
2. Engineers go to the store and choose which components to use.
3. Engineers plumb components together, writing comparatively small amounts of differentiating functionality on top of the glued-together parts.
4. Repeat as market demand and company goals change.

For almost all industries, this process is correct and unavoidable if an organisation wishes to remain competitive. Software is too complex, and the demand for speed to market is too great for any company to survive the extended time it would take to "hand craft" every building block, glue tube, and button required.

It is only in the most critical applications that teams must still write or closely review every line of code, such as in some areas of health, aviation, and, one hopes, all military software.

Before diving into why SBOMs truly matter and how teams can leverage them, it is important to cover some high-level points outlining how the technology industry got into this situation.

### Some Statistics on the Explosion of Complexity

Open source has become a cornerstone of modern development. The [Linux Foundation](https://www.linuxfoundation.org/blog/blog/a-summary-of-census-ii-open-source-software-application-libraries-the-world-depends-on) estimates over 70% of any given piece of software is made up of Free and Open Source components, while the [2024 Open Source Security and Risk Analysis Report](https://www.synopsys.com/blogs/software-security/open-source-trends-ossra-report.html#:~:text=An%20average%20500%2B%20open%20source%20components%20per%20app,-The%20OSSRA%20report) suggests this percentage may represent upwards of 500 individual open source components per application. Finally, the [Sonatype 9th Annual State of the Software Supply Chain](https://www.sonatype.com/state-of-the-software-supply-chain/open-source-supply-and-demand) reveals the average version updates released per project (across the average of 500 components in your application!) is roughly 15 per year.

| Number of Components | Updates per Component | Updates per Application per Year |
| -------------------- | --------------------- | -------------------------------- |
| 500                  | 15                    | 7,500                            |

Consider the implications: for each application in your business, there are on average 7,500 changes being made to the underlying pieces your team has chosen to use per year. This is a wildly different and more complicated supply chain than previous development methodologies used. As we learned in WWII, long and complex supply chains are fragile and vulnerable to attack.

Multiply these numbers by your major applications and consider if you are confident in your team's ability to manage this complexity, detect and respond to threats, or even just stay on top of updates without some form of assistance and structure.

### Why Should You Care About This Complexity?

{% picture jpt-webp "/images/what-is-an-sbom-for-business-people-2.webp" --alt {{ What is an SBOM, for Business People }} --picture class="post-inline-image-left" %}

You, the business person, demand speed, quality, and safety in all your company produces. This drives the adoption of tools and processes to enable this. Technology teams, therefore, rightly focus time on only work that differentiates your product from competitors.

Fundamentally, the trade-off made with this decision is between speed to market and control. The more open source or third-party code we use, the faster we get to market but the less we control our codebase. Statistics quoted above make it clear which option most companies have chosen.

Unchecked, this abrogation of control and understanding can have profoundly negative consequences if the risks are not managed. This element of product development is so fundamentally important to security that it has been legislated in multiple jurisdictions. Most notably in the United States with the [Executive Order on Improving the Nation's Cybersecurity](https://www.whitehouse.gov/briefing-room/presidential-actions/2021/05/12/executive-order-on-improving-the-nations-cybersecurity/?_sm_au_=iVVH4WMff4DDt60P6Jq71KH4JcNQp), in the EU with the [NIS 2 Directive](https://eur-lex.europa.eu/eli/dir/2022/2555), and the [Cyber Resilience Act](https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act).

#### Completely In-house Benefits & Risks

| Benefit                                       | Risk                                   |
| --------------------------------------------- | -------------------------------------- |
| Simple licencing model (wholly owned)         | **Slower time to market**              |
| Simple governance                             | Greater reliance on internal knowledge |
| Reduced exposure to third-party security issues |                                        |

#### Mixed In-house and Open Source Benefits & Risks

| Benefit                                | Risk                                            |
| -------------------------------------- | ----------------------------------------------- |
| **Faster time to market**              | Complex licensing exposure                      |
| Reduced reliance on internal knowledge | Increased exposure to third-party security issues |
|                                        | Complex governance                              |

Clearly, we prefer faster time to market over all else. This has exposed us to undue and unacceptable risk, which can be mitigated via proper use of SBOMs.

## Governance of Licensing & Security Exposure

In the completely in-house model, there are only a few items to govern: the codebase itself, the language it's written in, and any associated tooling. Humans are pretty good at understanding small handfuls of things, so governance is easy.

With mixed in-house and open source, the numbers involved leave humans in the dust. This is where SBOMs come in.

[SBOMs have been around since 2010](https://billbensing.com/software-supply-chain/history-software-bill-of-material-sbom/), but legislative changes combined with a greater industry focus on security have seen momentum towards adoption build.

There are currently two main SBOM types: SBDX, a [public standard](https://spdx.dev/spdx-specification-is-now-an-iso-standard/) initially focused on licensing, and [CycloneDX](https://cyclonedx.org/), which was initially focused on cybersecurity elements but can also be used to track licensing.

Don't get too caught up in this element: your team likely uses tools that offer SBOM creation and management, so it's better to leverage what is present than introducing "the best" tool.

The key point here is that SBOMs track this complexity in applications, providing one file outlining the contents, licences, and potential cybersecurity risks of an application. This feature of the SBOM model makes it perfect for automated governance and alerting of complex mixed in-house and open source creations.

### SBOMs as an Automated Supply Chain-Governance Framework

{% picture jpt-webp "/images/what-is-an-sbom-for-business-people-1.webp" --alt {{ What is an SBOM, for Business People }} --picture class="post-inline-image-right" %}

Governance conjures images of people devoted to asking for data, creating reports, and chasing down non-compliance. Things don't need to be this way. Organisations should hate manual governance. Done properly, SBOM setups provide assurance of content, insight during emergencies, and automated policy enforcement, all automatically.

#### Assurance of Content

Engineers on modern teams are used to automation having opinions about their job, so adding SBOM creation and scanning won't be surprising. If there is existing build automation, adding SBOMs isn't too difficult.

The overall process from changes to release can be understood as below. Note the only new checks going in here are 3.1 to 3.3. Engineers should already have multiple robots combing through their code checking for style, correctness, and legibility.

1. When Engineers finish their work and check it in, automation creates a file with licenses and versions of open source components, alongside the normal build process.
2. This gets sent to a central location.
3. Scanners pick up the file and check it for:
   1. Licence violations, e.g. licences your legal team have vetoed or projects with no licence.
   2. Cybersecurity vulnerabilities, based on criteria your cybersecurity team have set.
   3. Known threats and malicious actors, again based on your cybersecurity team's settings.
4. If the scanners show green, the build can go to production.
5. If not, the team is alerted and get to work fixing the issues.

These three scans are sufficient for an organisation's first foray into automated

 supply chain governance.

#### Insight During Emergencies

The central location SBOMs are stored within is invaluable during cybersecurity incidents as the organisation now has one place to look for whatever open source component needs to be urgently remediated. I have led teams through urgent vulnerability investigation and remediation activities. Without SBOMs, this is a hair-raising and time-consuming activity. With SBOMs, at least the hairs raise only for a short time due to the easier time teams have to locate problems that need fixing.

Adopting SBOMs saves time during cybersecurity incidents. Saved time saves money and reduces risk exposure.

#### Automated Policy Enforcement

It is uncommon for engineers to understand the implications of open source licences. Licences are often ignored when selecting which component to use in favour of documentation quality, marketing, or familiarity.

This means it is likely your organisation has not only tens of thousands of open source components but many tens or hundreds of licence agreements that have been injected and tacitly agreed with by employees with no legal knowledge.

Adopting SBOMs allows Legal to be engaged up-front, confirm acceptable licences, and automate enforcement. Nothing but hard work and a solid exemption process will get past the historic load, but without implementing governance going forward, the problem silently worsens.

## Summary

{% picture jpt-webp "/images/what-is-an-sbom-for-business-people-3.webp" --alt {{ What is an SBOM, for Business People }} --picture class="post-inline-image-right" %}

All companies today rely on software to function, and many companies have large teams working hard to build software themselves. Most projects contain a large amount of code downloaded for free from third parties, which has largely gone ungoverned and represents material risk to the business.

This risk can be mitigated by implementing SBOMs appropriately. This requires collaboration between Cyber, Legal, the Business, and Technology but should mitigate the risk or alert on violations automatically going forward.

Go talk to your friendly Technology teams today about SBOMs and how they can help us create safer and more resilient software for customers.