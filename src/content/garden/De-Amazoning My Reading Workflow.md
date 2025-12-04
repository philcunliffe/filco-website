---
id: De-Amazoning My Reading Workflow
aliases: []
tags: []
modified: 2025-05-05T11:24:18-07:00
---

## Why

Currently my eBook workflow is entirely dependent on Amazon and the Kindle app. As I move to own and control more of the content I consume I'm attempting to move away from these cloud services which in reality are more like rental services. There are also some sharp edges, I use highlights extensively and when attempting to import highlights to Readwise from Kindle it does not include non-Kindle books.

## Workflow Requirements
- Easy syncing between my devices
	- Android e-reader
	- iPhone
	- Jailbroken Kindle paperwhite
- Highlight
	- Aggregates all of my highlights in one place
		- Books
		- Articles, blogs
		- Videos
	- Easily importable to both PKM and CMS
- Good reading experience
	- Application is easy to use
	- Highlights are easy to create

## Current components

### Calibre and Calibre Web
**Organization and metadata**
  
These are the standard for self-hosting an eBook collection. Critically Calibre Web allows me to "email" books to my kindle account which populates the book on each of my devices. This is a convenience I will need to replicate if any new system has a chance of surviving with me. These are a cornerstone of the system and I am not willing to change them.
### Readwise.io
**Annotations and article saving**

This is an article saving and highlight aggregator which integrates well with my current notetaking app (Obsidian). I am open to other options here.
### Obsidian
**Personal knowledge management and CMS**

In this context the Readwise plugin for Obsidian allows me to easily import my highlights so I can reference them when writing notes. I am open to other options here as well but I think change is unlikely.
## Options

### Current solution: Kindle, Calibre, Readwise, Obsidian
- Quick explanation of flow
	- eBooks are added to Calibre which populates them in Calibre web
	- In calibre web I can use the "mail to kindle" feature to add documents to my kindle account
	- I can download the document on any of my devices and read + make highlights
	- Highlights are synced to Readwise
		- BAD: Kindle highlights on "non-kindle" documents do not sync with Readwise
	- Readwise highlights are populated in Obsidian as notes
	- Notes from Obsidian populate this garden
- Thoughts on flow
	- Syncing is effortless
	- I can offer my friends logins to my Calibre web server so they can read my books
	- Kindle app is pretty good
	- Highlights from non-Kindle documents not syncing is a death knell
	- Readwise to Obsidian to website is pretty seamless
### Use Readwise Reader books

##### Easy syncing
- Exact same functionality as amazon with "email" to account
	- Does not work with kindle

**Grade: A**

##### Highlights
- Obviously integrates with Readwise
- Best highlight-over-two-pages experience I've seen
- Annoying bug on Android after highlighting over multiple pages where scroll mode changes and I need to quit out and return

**Grade: B** 
Great except for the one persistent bug on Android

##### Reading
- Overall solid with good options for customization
- I really enjoy the vertical scroll pagination 

### Bookfusion
https://www.bookfusion.com/

Bookfusion is an affordable service with an iOS and android application for reading. Let's look at how it stacks up with my requirements:
##### Easy syncing
Bookfusion offers an excellent syncing experience primarily because it integrates directly with my Calibre server. The integration allows both my android eReader and iPhone can download books directly from my collection without any additional set up. I doubt I will find an easier syncing solution than Bookfusion.

The one caveat is that there is currently no way to integrate Bookfusion into my jailbroken Kindle paperwhite, but that's a sacrifice I may be willing to endure because of other features.

**Grade: A+**
Amazing experience which unfortunately does not include the Kindle
##### Highlights
Bookfusion does offer a Readwise integration, but it's manually triggered which is a bummer. They mention in documentation that an automated sync may come later depending on demand and usage, but for now, no auto syncing. Bookfusion does offer a direct Obsidian export which would bypass the need for Readwise for books only. That option requires additional configuration and maintaining two separate syncing highlight sources since Bookfusion does not support article saving like Readwise.

**Grade: C**
Does the job with some rough edges
### Reading and highlighting experience
I've used both apps and the reading experience is quite good. Customization is excellent with many different font and color options as well as fine grained control over font-size and line spacing.

Highlighting I find a bit rougher then I would like it to be. When you create a selection of text a context menu appears with several tools and I need to get my thumb all the way to the other side of the screen to click the highlight tool. This may seem minor, I do the action enough that this small grievance becomes very annoying over time. I personally will almost never use any of the other tools and would much prefer an experience where selecting creates highlights by default much like how the Kindle app behaves.

**Grade: B**
Great reading, mediocre highlighting
  

## References

  

 - https://www.youtube.com/watch?v=Qtk7ERwlIAk

 - https://github.com/MobiusSync/MobiusSync
