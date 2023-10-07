import { globalStyles } from '@/styles/global';
import { AppProps } from 'next/app';

function App({Component, pageProps}: AppProps) {
  globalStyles();

  return <Component {...pageProps} />;
}

export default App;