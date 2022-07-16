import type { AppProps } from 'next/app';
import NavBar from '../src/components/NavBar/NavBar';
import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
