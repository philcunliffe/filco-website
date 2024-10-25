---
planted: 2024-10-01
stage: budding
draft: false
modified: 2024-10-14T17:22:11-07:00
title: Getting Bus Times on my Smartwatch
---
# Getting Bus Times on my Smartwatch

## Why?

If ~~you've~~ looked at [[The Smartwatch is Not What You Think]] or [[Digital Minimalism]] you know that I'm constantly looking for ways to reduce my dependence on my smartphone. One small reason I still pull it out of my locked server rack is to look at bus times on the OneBusAway app. Inevitably this interaction can lead to more undesirable interactions and so I'm looking to eliminate it. Unfortunately, there is no OneBusAway app for WearOS but I'm sure I can solve this problem with a little code and my [[Homelab]].

## Architecture

![Getting-Bus-Times-on-my-Smartwatch-if-IFTTT-and-n8n-2024-09-24-15.49.29.excalidraw](test.png)

![[test.png]]

I run a service called n8n on my [[Homelab]] which allows a user to easily build automations with a flowchart-like UI. n8n does not have any WearOS integration but IFTTT (which is a similar service found at IFTTT.com) does. IFTTT allows me to have a button which when pressed calls a webhook to activate the n8n flow.

Once n8n is invoked it sends a get call to the OneBusAway API in order to get the arrivals at my designated stop and uses a service called Pushover to send a notification to my phone which is forwarded to my smartwatch.

## IFTTT setup

![[Getting Bus Times on my Smartwatch if IFTTT and n8n 2024-09-24 15.49.29.excalidraw.png]]

The IFTTT set up is very simple, a button press and a webhook. The webhook request will go to the n8n URL (shown in the flow) and the generated the credentials needed are injected into the headers.

## n8n setup

![[Pasted image 20240924155505.png]]
The webhook step will allow you to configure the credentials. Everything else is very straight forward with the exception of the parse response javascript.

#### Parse response code

```js
const arrivals = $input.all()[0].json.data.entry.arrivalsAndDepartures;
const minutes = arrivals
  .filter(({ predicted, routeShortName }) => predicted && routeShortName === '40')
  .map(({ predictedDepartureTime }) => {
    const now = new Date().getTime();
    const diff = predictedDepartureTime - now;
    return Math.floor(diff / 60000);
  }
);

return { minutes };
```

This code extracts the arrival times, filters them by route number, and returns their arrival times in minutes from now rounded down.

## Results

*Include screenshot of watchface*
