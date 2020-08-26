import '../styles.scss';

import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

config.autoAddCss = false;
library.add(fas, fab, far);


// This default export is required in a new `pages/_app.js` file.

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}