---
planted: 2024-11-01
stage: seedling
publish: false
title: Web Components Are Important - Playground
note-type: note
modified: 2024-11-01T14:52:49-07:00
tags:
  - playground
---
# Web Components Are Important - Playground

I want to talk about a feature of web components that I have never seen mentioned and is what I believe sets them apart from compiled frameworks, and that's their *uncompiled* nature.

Before you comment, yes, I'm aware that the best and easiest way to write web components is by using compiled frameworks like Lit and Stencil, but that's not what I mean when I say they are "uncompiled." I mean that applications built using web components can be composed and configured in an uncompiled HTML file and so are *composable at runtime*.

## Composability at Runtime

This metaphor may be a bit stretched, but bear with me: imagine buying a Lego pirate ship. It's meticulously designed to come together as a cohesive whole. Each small piece, like cannons, is custom-fabricated to contribute to the final product. This is how I view compiled frameworks. While you might be able to reuse those cannons from a medieval battle set, they will always be part of a "compiled" product (or application) when sold.

Web component frameworks *can* be like selling a collection of pieces, allowing users to assemble them however they choose, even if they aren’t master Lego builders. Just as Lego pieces have universally sized studs to connect seamlessly, web components use the familiar mechanisms of a standard HTML element. This allows developers to encapsulate complex applications within a web component, enabling other pieces to connect through a straightforward interface.

- Writing web-components can be seen as extending HTML itself instead

Applications made from web components can be easily composed in a simple HTML file with minimal guidance, making it accessible to anyone without domain expertise. The combination of encapsulated application-like components with runtime composability empowers users to create very powerful applications with zero JavaScript knowledge.