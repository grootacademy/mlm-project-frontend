/* eslint-disable perfectionist/sort-imports */
import 'src/global.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Toaster } from 'react-hot-toast';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import Router from 'src/routes/sections';
import ThemeProvider from 'src/theme';

// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();

  return (
    <ThemeProvider>
      <Router />
      <Toaster />
    </ThemeProvider>
  );
}
