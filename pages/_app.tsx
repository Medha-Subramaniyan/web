import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className="container mx-auto px-4 md:px-8">
      <Component {...pageProps} />
    </main>
  )
}
