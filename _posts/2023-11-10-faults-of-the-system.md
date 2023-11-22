---
layout: post
title: "Deming's Perspective on Quality Management: Understanding Faults of the System"
author: michael-robinson
date: "2023-11-10"
categories: [culture]
tags: [management, culture, featured, deming]
image: "/images/demings-perspective-on-quality-management-understanding-faults-of-the-system.png"
---

One of the fundamental principles of W. Edwards Deming's philosophy is that management, rather than individual contributors, bears the responsibility for ensuring a conducive environment for quality output. While Deming doesn't absolve contributors of responsibility or effort, his key assumption is that everyone is "trying their best" already (see [Deming's 14 Points](/deming-14-points/)).

Deming's focus on management's role in creating a successful environment is a valuable lesson for all. Taking this approach does not mean we shouldn't have high expectations of our teams, only that those expectations should be directed in the right way.

Deming's teaching emphasizes that if a contributor or a group of contributors aren't making significant improvements, the issue may not be their effort but rather a systemic problem. It is the responsibility of management to identify and rectify these systemic issues.

Issues that contributors cannot resolve themselves are what Deming refers to as "Faults of the System":

> One feature, especially applicable to production, is techniques by which to distinguish between (a) special causes of variation of quality and economic loss, which the worker himself can correct on statistical signal, and **(b) faults of the system, which only management can correct**.

-- [The Essential Deming: Leadership Principles from the Father of Quality](https://learning.oreilly.com/library/view/-/9780071790222/ch01.html)

Let's break down this quote, as it holds valuable insights.

### What is a "Statistical signal"?

Deming advocated plotting data on [control charts](https://deming.org/the-first-control-chart/) as a way to highlight the normal range of outcomes for a given process. The measures displayed on the chart include the mean (average) and the range or standard deviation. Limits are also defined, showing the expected range for this process. If the chart show data points that fall outside these limits, this is a "statistical signal" that indicates the process is out of control.

### What is "Variation"?

Variation here means any output that isn't in line with what was desired. In my world, this means bugs and production issues. One could expand it to include failure to deliver outcomes on time as well. Anything that deviates from an expected result is variation, and reduces quality.

### Explanation: Special Causes of Variation of Quality and Loss

> ...(a) special causes of variation of quality and economic loss, which the worker himself can correct on statistical signal...

### What is a "Special Cause"?

Anything a contributor can solve by their own action. Things we can expect to be done if we have a culture of continuous improvement. Some examples are:

- Installing a linter to identify basic errors in code as they type
- Writing proper error handling
- Cross checking a presentation with a colleague before submitting it
- Seeking confirmation that a decision has factored relevant context before locking it in

A key element of this definition is that a special cause is specific to a contributor or a group as individuals.

## Faults of the System

> ...(b) faults of the system, which only management can correct.

These faults of the system come from a common cause - or causes that are common to groups of people (from [Deming Speech 1978: 'Quick Review of Some New Principles of Administration'](https://www.qualitydigest.com/inside/management-article/deming-speech-1978-quick-review-some-new-principles-administration-112421), Principle 9). This concept is repeated often in any of Deming's work.

The concept of a common cause is crucial as it highlights that most variations are caused by systemic issues shared by groups of individuals rather than specific contributors. Improving common causes has the effect of improving special causes as well.

Only management can correct these causes as they lie in processes that govern how all contributors operate. Want everyone to use a linter? Provide them tools that have them inbuilt and training to use them. Configure pipelines to lint submissions and block failures. Take away the opportunity to fail and people will be more likely to succeed.

Be kind - look for things in the way and remove them. Identify better processes and implement them. Seek a culture of continuous improvement.

When seeking to enhance your team's performance, focus on refining the processes and systems that influence their actions.
