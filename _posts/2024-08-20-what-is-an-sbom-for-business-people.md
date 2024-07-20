---
layout: post
title: "What is an SBOM/Software Bill of Materials"
author: michael-robinson
date: "2024-08-20"
categories: [management]
tags: [organisations, culture, featured]
image: "/images/what-is-an-sbom-software-bill-off-materials.wepb"
---

An Software Bill of Materials, or SBOM is a data exchange format that describes the ingredients of an application. Learn why they are critical for the safety of your business here.

<!-- TOC -->

- [Introduction](#introduction)
  - [Some Statistics on the explosion of complexity](#some-statistics-on-the-explosion-of-complexity)
  - [Why should you care?](#why-should-you-care)
- [Single source of truth](#single-source-of-truth)
  - [Governance hooks](#governance-hooks)
  - [Easily scanned & archived](#easily-scanned--archived)
  - [Quick reference & automation friendly](#quick-reference--automation-friendly)
- [Simplify incident response](#simplify-incident-response)
- [How to get started?](#how-to-get-started)

<!-- /TOC -->

## Introduction

Software complexity has increased exponentially over the past 20 years. Long gone are the days where teams wrote the entire codebase themselves. Nowadays, engineering in your company is more similar to plumbing:

1. Product decides what & Engineering decide how to build it.
2. Engineers go to the store & choose which components to use.
3. Engineers plumb components together, writing comparatively small amounts of differentiating functionality on top of the glued-together parts.
4. Repeat as market demand & company goals change.

For almost all industries, this process is correct and unavoidable if an organisation wishes to remain competitive. Software is too complex and demand for speed to market is too great for any company to survive the extended time it would to take to "hand craft" every building block, glue tube and button required.

It is only in the most critical applications that teams must still write or closely review every line of code such as some areas of health, aviation and one hopes, all military software.

Before diving into why SBOM's truly matter and what how teams can leverage them, it's important to cover some high level points outlining how the Technology industry got ourselves into this situation.

### Some Statistics on the explosion of complexity

Open source has become a cornerstone of modern development. The [Linux Foundation](https://www.linuxfoundation.org/blog/blog/a-summary-of-census-ii-open-source-software-application-libraries-the-world-depends-on) estimates over 70% of any given piece of software is made up of Free and Open Source components, while the [2024 Open Source Security and Risk Analysis Report](https://www.synopsys.com/blogs/software-security/open-source-trends-ossra-report.html#:~:text=An%20average%20500%2B%20open%20source%20components%20per%20app,-The%20OSSRA%20report) suggests this percentage may represent upwards of 500 individual open source components per application. Finally, the [Sonatype 9th Annual State of the Software Supply Chain](https://www.sonatype.com/state-of-the-software-supply-chain/open-source-supply-and-demand) reveals the average version updates released per project (across the average of 500 components in your application!) is roughly 15 per year.

Consider the implications - for each application in your business, there are on average 7,500 changes being made to the underlying pieces your team has chosen to use, per year. Are you confident the teams are across all this change, or able to respond to urgent updates if necessary to keep customers safe?

| Number of Components | Updates per Component | Updates per Application per Year |
| --------------- | --------------------- | -------------------------------- |
| 500             | 15                    | 7,500                            |

### Why should you care?

You, the business person demand speed, quality and safety in all your company produces. This drives adoption of tools & process to enable this. Technology teams, therefore, rightly focus time on only work that differentiates your product from competitors.

Fundamentally, the trade off made with this decision is between speed to market and control. The more open source or 3rd party code we use - the faster we get to market but the less we control our codebase. Statistics quoted above make it clear which option most companies have chosen.

Unchecked, this abrogation of control and understanding can have profoundly negative consequences if the risks are not managed.

#### Completely in-house

| Benefit                                       | Risk                                   |
| --------------------------------------------- | -------------------------------------- |
| Simple licencing model (wholly owned)         | **Slower time to market**              |
| Simple governance                             | Greater reliance on internal knowledge |
| Reduced exposure to 3rd party security issues |                                        |

#### Mixed in-house and open source

| Benefit                                | Risk                                            |
| -------------------------------------- | ----------------------------------------------- |
| **Faster time to market**              | Complex licensing exposure                      |
| Reduced reliance on internal knowledge | Increased exposure to 3rd party security issues |
|                                        | Complex governance                              |

## Control shifts from line-of-code level to governance

In the completely in-house model, there is only a few items to govern - the codebase itself, the language it's written in, any associated tooling. Humans are pretty good at understanding small handfuls of things so governance is easy.

With mixed in-house and open source, the numbers involved leave humans in the dust. This is where SBOM's come in.

### Robotic governance is the best governance

The most expensive thing about Technology tends to be our people. The most exciting thing for Technologists is to work on things that deliver value to customers. Therefore both the business and their teams should hate manual governance. Done properly, SBOM setups provide assurance of content, insight during emergencies and automated policy enforcement.

#### Assurance of content

#### Insight during emergencies

#### Automated policy enforcement

### Components required to get value from SBOM's

To provide value, organisations must implement three key items when deploying SBOM's:

1. A scanner that builds the SBOM for each project, when it is changed.
2. A place to store SBOM's for each version of each project in an organisation.
3. Multiple scanners that scan SBOM's for licensing, security or other purposes.

## How to get started?

list of SBOM services and things that already use them e.g. dependency track, github, bb, artifactory