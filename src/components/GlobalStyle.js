import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
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
  --step--2: clamp(0.7813rem, 0.7747rem + 0.0326vw, 0.8rem);
  --step--1: clamp(0.9375rem, 0.9158rem + 0.1087vw, 1rem);
  --step-0: clamp(1.125rem, 1.0815rem + 0.2174vw, 1.25rem);
  --step-1: clamp(1.35rem, 1.2761rem + 0.3696vw, 1.5625rem);
  --step-2: clamp(1.62rem, 1.5041rem + 0.5793vw, 1.9531rem);
  --step-3: clamp(1.944rem, 1.771rem + 0.8651vw, 2.4414rem);
  --step-4: clamp(2.3328rem, 2.0827rem + 1.2504vw, 3.0518rem);
  --step-5: clamp(2.7994rem, 2.4462rem + 1.7658vw, 3.8147rem);

  /* Grid */
  --grid-max-width: 77.50rem;
  --grid-gutter: var(--space-s-l, clamp(1.125rem, 0.6467rem + 2.3913vw, 2.5rem));
  --grid-columns: 12;
}

.u-container {
  max-width: var(--grid-max-width);
  padding-inline: var(--grid-gutter);
  margin-inline: auto;
}

.u-grid {
  display: grid;
  gap: var(--grid-gutter);
}

/* Reset */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`