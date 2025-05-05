---
note-type: highlight
medium: articles
author: Read the Tea Leaves
reviewed: false
publish: true
title: "Let’s Learn How Modern JavaScript Frameworks Work by Building One"
cover_url: https://nolanwlawson.files.wordpress.com/2023/12/js-diy.png
---
# Let’s Learn How Modern JavaScript Frameworks Work by Building One

![rw-book-cover](https://nolanwlawson.files.wordpress.com/2023/12/js-diy.png)

## Highlights
- From my perspective, the post-React frameworks have all converged on the same foundational ideas:
  1. Using reactivity (e.g. [signals](https://dev.to/this-is-learning/the-evolution-of-signals-in-javascript-8ob)) for DOM updates.
  2. Using cloned templates for DOM rendering.
  3. Using modern web APIs like `<template>` and `Proxy`, which make all of the above easier. ([View Highlight](https://read.readwise.io/read/01jagks41x09pq7wawzbwv9q6v))
- It’s often said that [“React is not reactive”](https://dev.to/this-is-learning/how-react-isn-t-reactive-and-why-you-shouldn-t-care-152m). What this means is that React has a more pull-based rather than a push-based model. To grossly oversimplify things: React assumes that your entire virtual DOM tree needs to be rebuilt from scratch, and the only way to prevent these updates is to implement `useMemo` (or in the old days, `shouldComponentUpdate`). ([View Highlight](https://read.readwise.io/read/01jagktmhmtkxnpy4t8sf2ea8a))
- For a long time, the collective wisdom in JavaScript frameworks was that the fastest way to render the DOM is to create and mount each DOM node individually. In other words, you use APIs like `createElement`, `setAttribute`, and `textContent` to build the DOM piece-by-piece: ([View Highlight](https://read.readwise.io/read/01jagkxpc7e6njwza9ydxmcwgj))
- Here I’m using a [`<template>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template) tag, which has the advantage of creating “inert” DOM. In other words, things like `<img>` or `<video autoplay>` don’t automatically start downloading anything. ([View Highlight](https://read.readwise.io/read/01jagm03gbjceqd4yyt1ghwjhg))
- Another one that’s steadily gaining traction is [`Proxy`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy), which can make building reactivity system much simpler. ([View Highlight](https://read.readwise.io/read/01jagm3612apn349ke0exnp5s4))
- So let’s use a `Proxy`, which can react whenever a new value is set:
  const state = new Proxy({}, {
  get(obj, prop) {
  onGet(prop)
  return obj[prop]
  },
  set(obj, prop, value) {
  obj[prop] = value
  onSet(prop, value)
  return true
  }
  }) ([View Highlight](https://read.readwise.io/read/01jagm8rvv752cg8cr8tkrsnq6))
- let queued = false function onSet(prop, value) { if (!queued) { queued = true queueMicrotask(() => { queued = false flush() }) } } ([View Highlight](https://read.readwise.io/read/01jagma2hc2y2setfczj9m1a31))
- **Note:** if you’re not familiar with [`queueMicrotask`](https://developer.mozilla.org/en-US/docs/Web/API/queueMicrotask), it’s a newer DOM API that’s basically the same as `Promise.resolve().then(...)`, but with less typing. ([View Highlight](https://read.readwise.io/read/01jagmafq20qbmx90w9dej7ry0))
- Why flush updates? Mostly because we don’t want to run too many computations. ([View Highlight](https://read.readwise.io/read/01jagmbtmxr2jt5gk6n98b404b))
- Our `html` tag is just a function that receives two arguments: the `tokens` (array of static HTML strings) and `expressions` (the evaluated dynamic expressions):
  function html(tokens, ...expressions) {
  }
  In this case, the `tokens` are (whitespace removed):
  [
  "<div class=\"",
  "\">",
  "</div>"
  ]
  And the `expressions` are:
  [
  "blue",
  "Blue!"
  ] ([View Highlight](https://read.readwise.io/read/01jagms086ts80qns665av3h99))
- This template contains our inert DOM (technically a [`DocumentFragment`](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment)), which we can clone at will:
  const cloned = template.content.cloneNode(true) ([View Highlight](https://read.readwise.io/read/01jagmxgzay421yferdvvrgf59))
- parsing the full HTML whenever the `html` function is called would not be great for performance. Luckily, tagged template literals have a built-in feature that will help out a lot here.
  For every unique usage of a tagged template literal, the `tokens` array is [always the same](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates) whenever the function is called – in fact, it’s the exact same object! ([View Highlight](https://read.readwise.io/read/01jagmy7ksw8bqbk2cz9wxekk0))
- We can use this to our advantage by using a `WeakMap` to keep a mapping of the `tokens` array to the resulting `template`:
  const tokensToTemplate = new WeakMap()
  function html(tokens, ...expressions) {
  let template = tokensToTemplate.get(tokens)
  if (!template) {
  // ...
  template = parseTemplate(htmlString)
  tokensToTemplate.set(tokens, template)
  }
  return template
  } ([View Highlight](https://read.readwise.io/read/01jagn11b8mjt8sms0w21gpq0c))
- Now, this is still not terribly efficient – notably, we are updating `textContent` and attributes that don’t necessarily need to ([View Highlight](https://read.readwise.io/read/01jajpjwnrcpppddtqm8hkhszs))
