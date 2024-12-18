import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {

  &, &.light-mode{
  /* Grey */
  --color-grey-0: #ffffff;
  --color-grey-50: #f8f9fa;
  --color-grey-100: #f2f4f6;
  --color-grey-200: #e4e7ec;
  --color-grey-300: #ccd1d9;
  --color-grey-400: #aab2bb;
  --color-grey-500: #6c757d;
  --color-grey-600: #495057;
  --color-grey-700: #343a40;
  --color-grey-800: #212529;
  --color-grey-900: #0c0d0e;

  --color-blue-100: #e0f2fe;
  --color-blue-700: #0369a1;
  --color-green-100: #dcfce7;
  --color-green-700: #15803d;
  --color-yellow-100: #fdefc5;
  --color-yellow-700: #b48b1b;
  --color-silver-100: #e5e7eb;
  --color-silver-700: #374151;
  --color-indigo-100: #e0e7ff;
  --color-indigo-700: #4338ca;

  --color-red-100: #fee2e2;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;


  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --image-grayscale: 0;
  --image-opacity: 100%;
  }



  /* Brand colors */
  --color-brand-50: #f7faff;
  --color-brand-100: #e0f2ff;
  --color-brand-200: #b3e0ff;
  --color-brand-500: #80ccff; 
  --color-brand-600: #007bbd;
  --color-brand-700: #0369a1;
  --color-brand-800: #025080;
  --color-brand-900: #01375f;

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;


  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;
  color: var(--color-grey-700);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;
}


`;

export default GlobalStyles;
