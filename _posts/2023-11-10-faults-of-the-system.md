---
layout: post
title: "Faults of the System"
author: faceleg
date: "2023-11-10"
categories: [culture]
tags: [management, culture, featured, deming]
image: "/images/dall-e-bunny-on-the-line.png"
---

A key element of Deming's teaching is that it is management, not the contributor who is accountable for ensuring the
environment allows for quality output. He's not saying contributors have not responsibility or that they shouldn't try,
in fact that everyone is "trying their best" is a key assumption (see [Deming's 14 Points](/deming-14-points/)).

This is a kindness we can all learn from, and something he proved time and again in his research and consulting. Note this does not mean we shouldn't have high expectations of our teams, only that those expectations should be directed in the right way.

Deming is teaching that if a contributor or a group of contributors aren't improving beyond a certain point, it is not necessarily due to a lack of trying. Instead we should look for a process or environmental factor. It is management's job to identify these processes or environmental issues and remove them.

These are what Deming describes as "Faults of the System":

> One feature, especially applicable to production, is techniques by which to distinguish between (a) special causes of variation of quality and economic loss, which the worker himself can correct on statistical signal, and (b) faults of the system, which only management can correct.

-- [The Essential Deming: Leadership Principles from the Father of Quality](https://learning.oreilly.com/library/view/-/9780071790222/ch01.html)
I want to unpack this quote as it is dense and contains much to learn.

### What is "Variation"?

Variation here means any output that isn't in line with what was desired. In my world, this means bugs and production issues. One could expand it to include failure to deliver outcomes on time as well.

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

The concept of a common cause is important. Special causes are the minority - most variation is caused by common causes, and improving common causes has the effect of improving special causes as well.

Only management can correct these causes as they lie in processes that govern how all contributors operate. Want everyone to use a linter? Provide them tools that have them inbuilt and training to use them. Configure pipelines to lint submissions and block failures. Take away the opportunity to fail and people will be more likely to succeed.

Be kind - look for things in the way and remove them. Identify better processes and implement them. Seek a culture of continuous improvement.

When looking to improve your teams' outcomes, look to the processes and systems that govern their behaviour and seek improvements there. It is much more likely to show results, the results will last. It is also a much kinder approach than seeking individual failings to correct or remove.
