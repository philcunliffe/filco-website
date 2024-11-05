---
id: Neovim
planted: 2024-10-25 11:49
aliases: 
tags: 
stage: budding
publish: true
title: Neovim
note-type: note
modified: 2024-11-04T16:16:02-08:00
---
# Neovim

NeoVim is a text editor which runs entirely within the terminal. It is a fork of Vim which itself is descended from VI. As a terminal based editor it is built to be used entirely with the keyboard which allows for extremely efficient coding once it's mastered.

The primary difference between Neovim and Vim seems to boil down to api organization and Lua support which has allowed the plugin ecosystem for Neovim to thrive.
## Installation
1. Make sure [Homebrew](https://brew.sh/) is installed
2. Choose a modern terminal emulator like [wezTerm](https://wezfurlong.org/wezterm/index.html) or [Kitty](https://sw.kovidgoyal.net/kitty/)to install. At least wezTerm can be installed with: `brew install wezTerm`
3. `brew install neovim`
## Configuration
I found the thought of installing and configuring 20 plugins extremely intimidating and so chose to use a starter config called [NVChad](https://nvchad.com/) which includes essential plugin and basic configuration. Check the NVChad website for up to date steps but at the time of writing it was as simple cloning the config into your `~/.config/nvim` folder.
```
git clone https://github.com/NvChad/starter ~/.config/nvim && nvim
```

```ad-tip
If you think you'll do any custom configuration (you will), you may want to fork the NVChad starter config and use your fork. That way you'll be able to pull any changes you make easily to any system you're using.

Add lazy-lock.json to a .gitignore
```
### Setting up code servers with LSP
If you're going to use Neovim to code you'll likely want to set up LSP (Language Server Protocol) servers and auto completions for your language of choice. NVChad already includes nvim-lspconfig, nvim-cmp, and all of the other intermediary packages required for completions to work. Simply check out [this documentation](https://github.com/neovim/nvim-lspconfig/blob/master/doc/server_configurations.md) and follow the instructions for what you need. When you restart Neovim everything should be installed and functional.


### Setting up prettier
TK, using https://github.com/MunifTanjim/prettier.nvim

## Using Neovim
### What are modes?
Vi, Vim, or Neovim all require the user to swap between different modes to interact with the document in different ways. To someone used to normal code or document editors this will feel extremely unintuitive as you cannot simply move the cursor somewhere and start typing. In Neovim you start in "normal" mode where you are allowed to move the cursor but not type. In order to type you need to enter "insert" mode which by default is done with the "i" button.

```ad-note
Throughout the rest of this note I will be writing hot keys as they are written in Neovim config files. Control(^) is C, Alt(⌥) or option is A, and Shift(⇧) is S. A combined keypress like Control + v would be written as \<C-v\>
```
#### Common modes
1. Normal (esc when in other modes) - Used for basic navigation and entering other modes
2. Insert (i, I, o , a, A) - Used for typing
3. Visual (v, V, \<C-v\>) - Used for highlighting blocks
4. Command (:) - Used for running commands
The keys shown above are almost certainly not exhaustive and I'll update them as I learn more.
### Non obvious controls
#### Terminal modes
When focused in the terminal you can enter "nterminal" or normal terminal mode with \<C-x\> which allows

### My customizations
