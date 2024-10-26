---
planted: 2024-10-25 11:49
stage: budding
publish: true
title: Self-Hosting a Digital Garden
note-type: note
---
# Self-Hosting a Digital Garden

While Obisidan Publish does an OK job pushing a garden to the web with minimal friction, I have an insatiable need for levels of customization it cannot provide. Specifically, I would like to implement some features inspired by [Maggie Appleton's beautiful digital garden](https://maggieappleton.com/garden).

Maggie's site is a bit more involved than I'd like to get (at least at this point) so I'd like to find an easy-to-implement, self-hostable solution for the following requirements:

1. Use Obsidian as the primary markdown editor
2. Trigger build and publish automatically
	1. I realized this won't work with the git obsidian plugin unless I can open the whole Quartz repo as a vault which it kinda seems like I can do
3. Use my [[Homelab]] as the backend for the website

## Initial Design Thoughts
I'm thinking I'll use Quartz in conjunction with the Obsidian git plugin and trigger workflows based on git commits. Quartz seems to have the customizability I want while abstracting a lot of the base level work which I don't want to do at the moment.

Ideally, I can use my self hosted n8n to pull and build my Quartz repo and push it to a self-hosted web server.

## Steps
1. Create new GitHub repo and configure git plugin
2. Create Unraid share for the website and add path to n8n docker container
3. Test a simple index.html in the folder to dial in Nginx Proxy Manager setup
4. Set up n8n credentials for GitHub
5. Create flow in n8n to clone on pull and build to folder
6. ???
7. Profit

