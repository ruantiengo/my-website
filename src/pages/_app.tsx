import { DefaultSeo } from 'next-seo';

import type { AppProps } from 'next/app'
import '../style/global.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
  <DefaultSeo {...{
    title: 'Ruan Tiengo',
    description: 'Sobre Ruan Tiengo',
    canonical: 'https://ruantiengo.com',
    openGraph:{
        type: 'website',
        locale: 'pt_BR',
        url: 'https://ruantiengo.com'
    }
}}/>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
