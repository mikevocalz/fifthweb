import 'raf/polyfill'

const fixReanimatedIssue = () => {
  // FIXME remove this once this reanimated fix gets released
  // https://github.com/software-mansion/react-native-reanimated/issues/3355
  if (process.browser) {
    // @ts-ignore
    window._frameTimestamp = null
  }
}

fixReanimatedIssue()

import '../global.css'

import { Provider } from 'app/provider'
import Head from 'next/head'
import React from 'react'
import type { SolitoAppProps } from 'solito'
import NextNprogress from 'nextjs-progressbar';
import { WebLayout } from 'app/layout/web'

function MyApp({ Component, pageProps }: SolitoAppProps) {
  return (
    <>
      <Head>
        <title>Solito Example App</title>
        <meta
          name="description"
          content="Expo + Next.js with Solito. By Fernando Rojo."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Provider>
        <WebLayout>
          <NextNprogress
            color={'#662D91'}
            startPosition={0.3}
            stopDelayMs={200}
            height={4}
          />
          <Component {...pageProps} />
        </WebLayout>
      </Provider>
    </>
  )
}

export default MyApp
