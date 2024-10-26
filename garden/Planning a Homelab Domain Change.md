---
stage: budding
publish: false
title: Planning a Homelab Domain Change
planted: 2024-10-25 11:49
note-type: note
---
# Planning a Homelab Domain Change

## Description
I'm not a fan of the domain I use for most of my services, so I bought a new one at www.filco.dev. I started the process of transferring my services to the new domain and realized that it was going to require some planning.

## Areas of concern
#### Authelia configuration
Authelia can only handle one domain at a time, so I'll need to transfer everything over. This includes items like my TOTP configuration, and I'm unsure how that will work.

#### Reverse proxy
I'll need to swap over a ton of domains and create new certificates and I don't think I can do it piecemeal as my authentication can only handle a single domain.

#### Configuration of My Applications
Many applications require configuration either pointing to other services or need their full FQDN set to operate properly. I'll need to identify all of these cases and add them to my step list.

In addition, I have been looking to transition all of my docker containers to custom docker network(s), and taking the entire home lab down for a while presents a good opportunity to finally tackle that move. Unlike other things on this list, this can be done piecemeal as long as I keep the port forwarding in place.

### n8n Webhooks
I have webhooks configured in several applications which go to my n8n instance on my old domain, these will need to be updated to my current domain.
## Steps
1. [x] Acquire new domain
2. [x] Set up DDNS for new domain
3. [ ] Swap over 2FA configuration
4. [ ] Change configuration options for applications
	1. [ ] Placeholder for service configurations
5. [ ] Change reverse proxy configuration and request new certificates

