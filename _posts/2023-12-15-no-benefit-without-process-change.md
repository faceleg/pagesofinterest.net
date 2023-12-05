---
layout: post
title: "No Benefit Without Process Change"
author: michael-robinson
date: "2023-12-15"
categories: [leadership]
tags: [organisations, culture, featured]
image: "/images/no-benefit-without-process-change.jpg"
---

We need constant change to keep a company in business. To get the full benefit of change we need to consider process changes as well.

Modern organisations are large and complex. On top of that any company older than five years has organisational and technical debt. Unchecked, this debt grows until it becomes impossible for teams to move the business forward.

In a lecture based on his book [The Theory of Constraints](https://www.amazon.com/Theory-Constraints-Eliyahu-M-Goldratt/dp/0884271668), Eliyahu Goldratt outlines a concise and effective method to analyse technology changes.

## How to understand technology change

Follow these two simple rules:

1. A technology can bring benefits if and only if it removes a limitation.
2. A technology can only be leveraged properly if the relevant rules are changed.

### 1. Removing a limitation

When analysing a change before it is implemented, consider the limitations it removes. The best way I've found to identify the limitations is to ask: what is it that we _won't do_ or we _can do that we could not before_ after this change has been implemented?

An example related to managing engineering teams is a change to provide a code quality analysis and gating tool such as [SonarQube](https://www.sonarsource.com/products/sonarqube/). What we won't do after this change is commit code that is _generally worse_ than the specified quality gates. What we will do is learn how to be better programmers.

If nobody can answer this, it may be time to question whether this change is worth it at all.

Even when the answer to this question is clear - we have more work to do before understanding how easily we can benefit from this change.

### 2. Changing the rules

What process or behaviour allows us to function now, before this change? To get the full benefit this needs to be considered and changes planned else we have possibly the worst case: a technology change that results in people working around it in an attempt to continue their habits as before.

Using the SonarQube example above, what needs to change in order to get the most out of this new tool are the rules we bound development by. We need to go from pull reqeusts being manual review only to requiring automated quality gates as well. If this isn't done we actually increase variability across teams and fail to fix this [Fault of our System](/faults-of-the-system#faults-of-the-system).

## Expanding on the two rules

{% picture jpt-webp "/images/no-benefit-without-process-change-1.jpg" --alt {{ The Three Threads of Leadership }} --picture class="post-inline-image-right" %}

When coaching teams through discussions on what might be done to improve outcomes, or when analysing various suggestions use this cheat sheet. For each suggestion, ask:

1. What is the power of the technology?
2. What limitations does this technology diminish?
3. What rules helped us to accomodate this limitation?
4. What rules should we use now?

Only by considering these questions will you give your team the best chance of success. Teams who consider, implement and analyse change by these means will also get better value for each dollar spent.
