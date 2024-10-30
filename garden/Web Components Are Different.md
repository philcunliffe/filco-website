---
planted: 2024-10-27
stage: budding
publish: true
title: Web Components are Unique
note-type: essay
modified: 2024-10-29T21:20:11-07:00
---
# Web Components Are Different

#### *Not better or worse, just different*

---

Web components are back on the hot seat. Popular development blogger Ryan Carniato wrote [Web Components are Not the Future](https://dev.to/ryansolid/maybe-web-components-are-not-the-future-hfh), and the subsequent discussion has been spicy. I'm not going to counter or analyze the points he makes in that article, Nolan Lawson does that better than I could in his response, [Web Components Are Okay](https://nolanlawson.com/2024/09/28/web-components-are-okay/). Instead, I want to talk about a feature of web components that I have never seen mentioned and is what I believe sets them apart from compiled frameworks, and that's their *uncompiled* nature.

Before you comment, yes, I'm aware that the best and easiest way to write web components is by using compiled frameworks like Lit and Stencil, but that's not what I mean when I say they are "uncompiled." I mean that applications built using web components can be composed and configured in an uncompiled HTML file and so are *composable at runtime*.
## Composability at Runtime

This metaphor may be a bit stretched, but bear with me: imagine buying a Lego pirate ship. It's meticulously designed to come together as a cohesive whole. Each small piece, like cannons, is custom-fabricated to contribute to the final product. This is how I view compiled frameworks. While you might be able to reuse those cannons from a medieval battle set, they will always be part of a "compiled" product (or application) when sold.

Web component frameworks *can* be like selling a collection of pieces, allowing users to assemble them however they choose, even if they aren’t master Lego builders. Just as Lego pieces have universally sized studs to connect seamlessly, web components use the familiar mechanisms of a standard HTML element. This allows developers to encapsulate complex applications within a web component, enabling other pieces to connect through a straightforward interface.

Applications made from web components can be easily composed in a simple HTML file with minimal guidance, making it accessible to anyone without domain expertise. The combination of encapsulated application-like components with runtime composability empowers users to create very powerful applications with zero JavaScript knowledge.
## Prove it

Let's check out an example, [here](https://codepen.io/sagemaker_crowd_html_elements/pen/XWpJGad) is a Codepen of a full image annotation application built with a framework I helped create called [Crowd HTML Elements](https://blog.mturk.com/mturk-introduces-crowd-html-elements-a-library-of-easy-to-use-task-interfaces-for-bounding-box-35bb9c860069). There is no JavaScript or CSS in the Codepen, just an HTML file which looks like this:

```html
<script src="https://assets.crowd.aws/crowd-html-elements.js"></script>

<crowd-form>
  <crowd-bounding-box
	name="annotatedResult"
    src="{{ImageUrl}}"
    header="Draw bounding boxes around all the cats and dogs in this image"
    labels="['Fish', 'Coral', 'Turtle']"
  >
    <full-instructions header="Bounding Box Instructions" >
      <p>Use the bounding box tool to draw boxes</p>
      <ol>
        <li>More instructions go here</li>
      </ol>
    </full-instructions>

    <short-instructions>
      Draw boxes around the requested target of interest.
    </short-instructions>
  </crowd-bounding-box>
</crowd-form>  
```

The complex logic for manipulating the `<canvas>` and tracking the annotations is encapsulated and surfaced via a simple API. This allowed users with no front-end coding knowledge to configure custom variations of the application in a plain HTML file, which requires no tools to write or compile. If a user does have basic JavaScript knowledge, they can hook into the API to modify the behavior of the components further. For example, [this link](https://github.com/aws-samples/amazon-sagemaker-ground-truth-task-uis/blob/master/images/bounding-box-custom-labels.liquid.html) demonstrates how to enhance the bounding-box application to let end-users dynamically add labels. Modifying a React component similarly is challenging in comparison; it requires cloning, editing, and redeploying your version.

Crowd HTML Elements has helped tens of thousands of users create hundreds of thousands of complex applications without needing extensive coding knowledge, which would not have been possible with compiled frameworks.
## What Could the Future Look Like?

The "bounding box" example above is incredibly limited in comparison to what is possible. Using web components with well-thought-out APIs, we can create self-assembling applications of infinite complexity that are extendable by anyone with just an additional script tag. Let's take a moment to fantasize about a web component-based online image editor using some dream code.

```html
<script src="open-app-layout.js"></script>
<script src="open-editor-core.js"></script>
<script src="open-toolset-painting.js"></script>
<script src="open-toolset-hue-saturation.js"></script>
<script src="my-custom-gradient-tool.js"></script>

<open-app-layout left-drawer-open right-drawer-open>
	<editor-core id="editor" slot="main" />
	<painting-tools slot="left-drawer" colors="[whatever you want]" />
	<hue-sat-tools slot="left-drawer" />
	<my-custom-gradient-tool slot="right-drawer" />
</open-app-layout>
```

This minimal code could render an entire image editing suite with chosen tools in a custom configuration without any need to know JavaScript. With coding knowledge, you could add your components to the mix. All of these components could come from **different repositories** and be using completely **different frameworks** under the hood and still work seamlessly together.
## Conclusion

Most developers think about web applications through the lens of compiled frameworks. Packages and components are imported, woven together, and then distributed as a complete application. In this paradigm, there's very little reason to bother with simple web components as opposed to native component libraries. This view is one-dimensional and ignores web components most interesting features. The ability to encapsulate complexity and self-assemble at runtime could unlock a developer and user experience vastly **different** from the current norm.

We should stop trying to fit web components into the mold of compiled components and start exploring their differences.





