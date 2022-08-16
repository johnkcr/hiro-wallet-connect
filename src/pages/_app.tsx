import '../styles/global.css';

import * as MicroStacks from '@micro-stacks/react';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <MicroStacks.ClientProvider appName="My sick app" appIconUrl="APP_ICON.png">
      <Component {...pageProps} />
    </MicroStacks.ClientProvider>
  );
};

export default MyApp;
