---
planted: 2024-10-27
stage: budding
publish: false
title: Web Components are Unique
note-type: essay
---
# Web Components are Unique

Web components are back on the hot seat. Popular development blogger Ryan Carniato wrote [Web Components are Not the Future](https://dev.to/ryansolid/maybe-web-components-are-not-the-future-hfh), and the subsequent discussion has been spicy. I'm not going to counter or analyze the points he makes in that article, Nolan Lawson does that better than I could in his response, [Web Components Are Okay](https://nolanlawson.com/2024/09/28/web-components-are-okay/). Instead, I want to talk about a feature of web components that I have never seen mentioned and is what I believe sets them apart from compiled frameworks, and that's their *uncompiled* nature.

Before you comment, yes, I'm aware that the best and easiest way to write web components is by using compiled frameworks like Lit and Stencil, but that's not what I mean when I say they are "uncompiled." I mean that applications built using web components as building blocks are not compiled and, therefore, are *composable at runtime*.
## Composability at Runtime
TODO: This needs to be more clear about how web-components collection of pieces is different then a react component library because it's done after compilation

This metaphor may be a bit stretched, but bear with me: imagine buying a Lego pirate ship. It's meticulously designed to come together as a cohesive whole, with each small piece, including cannons, custom-fabricated to contribute to the final product. This is how I view compiled frameworks. While you might be able to reuse those cannons from a medieval battle set, they will always be part of a "compiled" product (or application) when sold.

Web component frameworks *can* be like selling a collection of pieces, allowing users to assemble them however they choose, even if they aren’t master Lego builders. Just as Lego pieces have studs and holders to connect seamlessly, web components adhere to a standard method of connecting and communicating. This is similar enough to standard HTML elements that most frameworks can easily understand it. You can encapsulate complex applications within a web component, enabling other pieces to connect through a straightforward interface. 

Applications made from web components can be easily composed in a simple HTML file with minimal guidance, making it accessible to anyone without domain expertise. The combination of encapsulated application-like components with runtime composability empowers users to create very powerful applications.
## Prove it

Let's check out an example, [here](https://codepen.io/sagemaker_crowd_html_elements/pen/XWpJGad) is a Codepen of a full image annotation application built with a framework I helped build called [Crowd HTML Elements](https://blog.mturk.com/mturk-introduces-crowd-html-elements-a-library-of-easy-to-use-task-interfaces-for-bounding-box-35bb9c860069). You can see there is no JavaScript or CSS in the Codepen, just an HTML file which looks like this:
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
      <p>Use the bounding box tool to draw boxes around the requested target of interest:</p>
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

Given the complexity of the application, this template is very easy to configure for anyone. Since the web components function like native HTML elements, even a basic understanding of JavaScript allows users to modify these components directly within the HTML file. For example, [this link](https://github.com/aws-samples/amazon-sagemaker-ground-truth-task-uis/blob/master/images/bounding-box-custom-labels.liquid.html) demonstrates how to enhance the bounding-box application to let end-users dynamically add labels. Achieving something similar with a compiled framework would be exceptionally challenging; it would require cloning, editing, and redeploying your version.

Crowd HTML Elements helped tens of thousands of users create hundreds of thousands of complex applications without needing extensive coding knowledge, which would not have been possible with compiled frameworks.
## What Could the Future Look Like?

The "bounding box" example above is incredibly limited in comparison to what is possible. Using web components with well-thought-out APIs, we can create self-assembling applications of infinite complexity that are extendable by anyone with just an additional script tag. Let's take a moment to dream about a web component-based online image editor using some dream code.

```html
<script src="open-app-layout"></script>
<script src="editor-core"></script>
<script src="toolset-painting"></script>
<script src="toolset-hue-saturation"></script>

<open-app-layout left-drawer-open>
	<editor-core id="editor" slot="main" />
	<painting-tools slot="left-drawer" editor="editor" colors="[whatever you want]" />
	<hue-sat-tools slot="left-drawer" editor="editor"/>
</open-app-layout>
```

This minimal code could render an entire image editing suite with chosen tools in a custom configuration without any need to know JavaScript. Additionally, each of those script tags could come from **different repositories** and be using completely **different frameworks** under the hood and still work seamlessly together.
## Conclusion
TODO: This needs to be renamed and add more to the benefits section

The majority of developers think about web applications through the lens of compiled frameworks. Packages and components are imported, woven together, and then vended as a complete application. In this paradigm, there's very little reason to bother with simple web components as opposed to component libraries native to whichever compiled framework you're using. But, an "uncompiled" application built from web components has tremendous advantages. 

In an "uncompiled" world components can be written by multiple teams using multiple frameworks (even ones like React and Svelte), and as long as the component's API is agreed upon they'll work together seamlessly (micro-frontends eat your heart out). Applications can be changed or even constructed by non-technical team members as easily as they might create or edit a wiki page. 



