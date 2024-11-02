import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/* @import url('/prism.css'); */
/* @import "@thecae/remark-obsidian/obsidian.module.css"; */
/* @link https://utopia.fyi/space/calculator?c=320,18,1.2,1240,20,1.25,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12 */

:root {
  --space-3xs: clamp(0.3125rem, 0.3125rem + 0vw, 0.3125rem);
  --space-2xs: clamp(0.5625rem, 0.5408rem + 0.1087vw, 0.625rem);
  --space-xs: clamp(0.875rem, 0.8533rem + 0.1087vw, 0.9375rem);
  --space-s: clamp(1.125rem, 1.0815rem + 0.2174vw, 1.25rem);
  --space-m: clamp(1.6875rem, 1.6223rem + 0.3261vw, 1.875rem);
  --space-l: clamp(2.25rem, 2.163rem + 0.4348vw, 2.5rem);
  --space-xl: clamp(3.375rem, 3.2446rem + 0.6522vw, 3.75rem);
  --space-2xl: clamp(4.5rem, 4.3261rem + 0.8696vw, 5rem);
  --space-3xl: clamp(6.75rem, 6.4891rem + 1.3043vw, 7.5rem);

  /* One-up pairs */
  --space-3xs-2xs: clamp(0.3125rem, 0.2038rem + 0.5435vw, 0.625rem);
  --space-2xs-xs: clamp(0.5625rem, 0.4321rem + 0.6522vw, 0.9375rem);
  --space-xs-s: clamp(0.875rem, 0.7446rem + 0.6522vw, 1.25rem);
  --space-s-m: clamp(1.125rem, 0.8641rem + 1.3043vw, 1.875rem);
  --space-m-l: clamp(1.6875rem, 1.4049rem + 1.413vw, 2.5rem);
  --space-l-xl: clamp(2.25rem, 1.7283rem + 2.6087vw, 3.75rem);
  --space-xl-2xl: clamp(3.375rem, 2.8098rem + 2.8261vw, 5rem);
  --space-2xl-3xl: clamp(4.5rem, 3.4565rem + 5.2174vw, 7.5rem);

  /* Custom pairs */
  --space-s-l: clamp(1.125rem, 0.6467rem + 2.3913vw, 2.5rem);

  /* Typography */
  --step--2: clamp(0.7813rem, 0.7469rem + 0.1717vw, 0.88rem);
  --step--1: clamp(0.9375rem, 0.881rem + 0.2826vw, 1.1rem);
  --step-0: clamp(1.125rem, 1.038rem + 0.4348vw, 1.375rem);
  --step-1: clamp(1.35rem, 1.2217rem + 0.6413vw, 1.7188rem);
  --step-2: clamp(1.62rem, 1.4362rem + 0.919vw, 2.1484rem);
  --step-3: clamp(1.944rem, 1.6861rem + 1.2896vw, 2.6855rem);
  --step-4: clamp(2.3328rem, 1.9766rem + 1.7811vw, 3.3569rem);
  --step-5: clamp(2.7994rem, 2.3135rem + 2.4292vw, 4.1962rem);
  --step-6: clamp(3.3592rem, 2.7032rem + 3.28vw, 5.2452rem);
  --step-7: clamp(4.0311rem, 3.36rem + 3.3555vw, 5.9605rem);
  --step-8: clamp(4.8373rem, 3.9283rem + 4.5448vw, 7.4506rem);

  /* Grid */
  --grid-max-width: 77.50rem;
  --grid-gutter: var(--space-s-l, clamp(1.125rem, 0.6467rem + 2.3913vw, 2.5rem));
  --grid-columns: 12;
  --grid-width: calc(min(100vw, var(--grid-max-width)) - 2 * var(--space-xl));
  --grid-column-width: calc((var(--grid-width) - (11 * var(--grid-gutter))) / 12 );

  /* Colors */
  /* Accents */
	--jade-100: #00AD5F;
	--jade-200: #00AA63;
	--jade-300: #00A767;
	--jade-400: #00A669;
	--jade-500: #00A36C;
	--jade-600: #00A070;
	--jade-700: #079E71;
	--jade-800: #369B75;
	--jade-900: #479877;

	--desire-100: #F12844;
	--desire-200: #E93A4B;
	--desire-300: #E24751;
	--desire-400: #DD4D54;
	--desire-500: #D5575A;
	--desire-600: #CD5F60;
	--desire-700: #C86363;
	--desire-800: #BF6969;
	--desire-900: #B96E6D;

	--arrow-rock-100: #BF7500;
	--arrow-rock-200: #BA7800;
	--arrow-rock-300: #B67A00;
	--arrow-rock-400: #B37B00;
	--arrow-rock-500: #AE7D00;
	--arrow-rock-600: #A97F00;
	--arrow-rock-700: #A78000;
	--arrow-rock-800: #A2822A;
	--arrow-rock-900: #9E833D;

	/* Neutrals */
	--void-100: #8AC1F0;
	--void-200: #72A7D5;
	--void-300: #5F92BC;
	--void-400: #4A79A1;
	--void-500: #346287;
	--void-600: #1F4B6E;
	--void-700: #093655;
	--void-800: #002441;
	--void-900: #00102A;

	--mud-brown-100: #D3B877;
	--mud-brown-200: #B89F60;
	--mud-brown-300: #A2894E;
	--mud-brown-400: #887239;
	--mud-brown-500: #705B22;
	--mud-brown-600: #59450B;
	--mud-brown-700: #423000;
	--mud-brown-800: #301E00;
	--mud-brown-900: #1B0B00;

	/* Grays */
	--parador-stone-400: #8E8C86;  
  --cream-stone: #f4f1ea;
  --black: #333;

  --font-serif: "Koh Santepheap", serif;
  --font-sans: "Quicksand", sans-serif;
  --font-body: "Koh Santepheap", serif;
  
  --footer-height: 100px;
}

.u-container {
  max-width: var(--grid-max-width);
  padding-inline: var(--grid-gutter);
  margin-inline: auto;
}

.u-grid {
  display: grid;
  gap: var(--grid-gutter);
  grid-template-columns: repeat(var(--grid-columns), 1fr);
}

/* CSS Reset */
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  /* scroll-behavior: smooth; */
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;	
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  }
  html, body, #root {
    height: 100%;
}

iframe {
  max-width:100%;
}

body {
  background: var(--cream-stone);
  color: var(--mud-brown-700);
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

h1, h2 {
  font-family: var(--font-serif);
}

h3, h4, h5, h6 {
  font-family: var(--font-sans);
}

p, ul, ol {
  font-family: var(--font-body);
  font-size: var(--step-0);
  font-weight: 300;
}

a {
  text-decoration: none;
  color: var(--jade-900);
  font-weight: bold;
}

h1 { font-size: var(--step-5); }
h2 { font-size: var(--step-4); }
h3 { font-size: var(--step-3); }
h4 { font-size: var(--step-2); }
h5 { font-size: var(--step-1); }

.visually-hidden {
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	height: 1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
	width: 1px;
}

.small-caps {
	font-size: var(--step--2) !important;
	font-family: var(--font-sans);
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 0.06rem;
}

code {
  font-size: var(--step--2);
}

p > code {
  font-size: var(--step--1);
}


/*
 Margin and rounding are personal preferences,
 overflow-x-auto is recommended.
*/
pre {
    border-radius: 0.25rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    overflow-x: auto;
}
 
/*
 Add some vertical padding and expand the width
 to fill its container. The horizontal padding
 comes at the line level so that background
 colors extend edge to edge.
*/
pre.torchlight code {
    display: block;
    min-width: -webkit-max-content;
    min-width: -moz-max-content;
    min-width: max-content;
    padding-top: 1rem;
    padding-bottom: 1rem;
}
 
/*
 Horizontal line padding to match the vertical
 padding from the code block above.
*/
pre.torchlight code .line {
    padding-left: 1rem;
    padding-right: 1rem;
}
 
/*
 Push the code away from the line numbers and
 summary caret indicators.
*/
pre.torchlight code .line-number,
pre.torchlight code .summary-caret {
    margin-right: 1rem;
}

`;
