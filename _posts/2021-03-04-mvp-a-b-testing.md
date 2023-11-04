---
layout: post
title: "MVP A/B Testing"
author: faceleg
date: "2021-03-04"
categories: [ Tooling ]
tags: [ a-b-testing, data, open-source, tooling, featured ]
image: "assets/images/arrows-both-ways.jpg"
---

Does the sign up button work better on the left or the right? What happens to engagement if we move our "you might also like" carousel above the fold? These are the types of questions that A/B testing exists to answer.

**[A/B testing is the best way to empirically prove whether a change has the desired effect](https://hbr.org/2017/06/a-refresher-on-ab-testing)**

> _Sure you might need an expensive solution, but if you're not doing either today, an MVP approach will let you get something into production quickly to prove the value to business, before diving into the excellent, but expensive, SaaS products out there._

From the least-funded startup all the way to the biggest banks, product owners and leadership are waking up to the idea that the best decisions are made based on good data. They read sites like the Harvard Business Review, they learn about things like A/B (or split) testing, they demand to know why your engineering & product teams are not doing it.

What isn't widely known is that like most other aspects of good product design & delivery, A/B testing doesn't sit with engineering alone. It isn't enough to simply pay for a tool - the entire process of delivery has to be changed to accomodate it, else the tool will be a complete waste of money.

Years ago, when I was involved in evaluating and implementing an A/B test solution, I was asked first to find the best tool and for the price. I did my research and came back with some figures. Too expensive, especially for a tool that we've no experience with and whose value we cannot quantify.

## Enter Open Source: SixPack

Determined to give the business a chance to evaluate A/B testing, I canvassed the open source community to see if there was an MVP solution we could get started with.

I found Sixpack, which is best described by the authors themselves:

> Sixpack is a framework to enable A/B testing across multiple programming languages. It does this by exposing a simple API for client libraries. Client libraries can be written in virtually any language.
> 
> Sixpack has two main parts. The first, **Sixpack-server**, is responsible for responding to web requests. The second, **Sixpack-web**, is a web dashboard for tracking and acting on your A/B tests. Sixpack-web is optional.
> 
> [github.com/sixpack/sixpack](https://github.com/sixpack/sixpack)

There are other options out there, sixpack was the easiest for our team to get going, and worked very well for us in the years following.

After we made the tool available, it took many months for the wider team to adopt it and run tests with any regularity. As mentioned above, A/B testing is a new concept for many people, and it takes time for the wider team to understand how to use it appropriately and how to make decisions from the results (statistics is hard).

Sixpack offers the basic features required to get an organisation started with A/B testing. My approach was

1. Install sixpack and integrate it to the point where experiments can be run
2. Work with the wider team to prove/disprove the value of A/B testing itself
3. Evaluate our needs against the features provided by sixpack, and be ready to raise my hand if we started outgrowing the tool

## A/B Testing and Rolls Royce

Our experience with sixpack was excellent. It provided all the features we needed, and cost nothing more than the hosting infrastructure it ran on. Maintenance was negligible. Although it did prove the value of A/B testing for the business, we never outgrew it.

This saved the business 60-100K USD per year, while still allowing us to run experiments and effectively evaluate their results.

If your business is new to A/B testing and data driven decision making generally, if you have a relatively small team and no core "platforms" group you can look to for this sort of tooling, I strongly recommend you consider an open source solution first, before diving into the attractive but expensive SaaS products out there.

If you need to get from A to B but don't enjoy wasting money, go with a proven open source solution before splashing your company's cash on a Rolls Royce. You're likely better off putting that money elsewhere - it's enough to hire another engineer for your team!

## [](https://github.com/sixpack/sixpack#requirements)
