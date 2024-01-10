---
layout: post
title: "No Benefit Without Process Change"
author: michael-robinson
date: "2024-01-10"
categories: [leadership]
tags: [organisations, culture, featured]
image: "/images/no-benefit-without-process-change.jpg"
---

We need constant change to keep a company in business. To get the full benefit of change one must consider process and behavioural changes alongside new capabilities.

Modern organisations are large and complex, any company older than five years has organisational and technical debt. Unchecked, that debt grows until it becomes impossible for teams to move the business forward.

In a lecture based on his book [The Theory of Constraints](https://www.amazon.com/Theory-Constraints-Eliyahu-M-Goldratt/dp/0884271668), Eliyahu Goldratt outlines a concise and effective method to analyse technology changes with a view towards ensuring the company realises the maximum benefit of the change.

## How to understand technology change

Follow these two simple rules:

1. A technology can bring benefits if and only if it removes a limitation.
2. A technology can only be leveraged properly if the relevant rules are changed.

### 1. Removing a limitation

When analysing potential benefits of a change before it is implemented, consider the limitations it removes. The best way I've found to identify the limitations is to ask:

1. After this change, what is it that we don't need to do or can't do any longer?
2. After this change, what is it that we can do that we could not before?

Answers to these questions will reveal work to be done if the full benefits of the change are to be realised.

An example related to managing engineering teams is a change to provide a code quality analysis and gating tool such as [SonarQube](https://www.sonarsource.com/products/sonarqube/).

1. What we won't be able to do after this change is commit code that is _generally worse_ than the specified quality gates.
2. What we will need to do is learn how to be better programmers.

If nobody can answer these questions, it may be time to consider whether the business really needs to undergo this change.

### 2. Changing the rules

What process or behaviour allowed teams to function before this change? To get the full benefit this needs to be considered and changes planned to avoid the worst case: a technology change that results in people working around it in an attempt to continue their work governed by habits learned with the old systems.

Using the SonarQube example above, what needed to change in order to get the most out of this new tool were the rules that bound development. Specifically the need to go from pull requests being reviewed manually to pull requests requiring automated quality gates in addition to manual review. If this isn't done, variability across teams increases (some use SonarQube, some do not) and the [Fault of our System](/faults-of-the-system#faults-of-the-system) remains. The full benefit of the change would not have been realised and the business might arguably be worse off with the tool (at least before, all teams managed pull requests via the same process).

## Power, limitations, rules old and new

{% picture jpt-webp "/images/no-benefit-without-process-change-1.jpg" --alt {{ The Three Threads of Leadership }} --picture class="post-inline-image-right" %}

When working through options for action that require a new tool or system to succeed, this cheat sheet can be useful to ensure participants are thinking of second and third degree changes required alongside the act itself. For each suggestion, ask:

1. What is the power of the technology?
2. What limitations does this technology diminish?
3. What rules helped us to accommodate this limitation?
4. What rules should we use now?

Only by considering these questions will you give your team the best chance of success. Teams who consider, implement and analyse change by these means will also get better value for each dollar spent.
