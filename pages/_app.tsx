import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import type { AppProps } from "next/app"
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: `Bearer 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`,
  },
  cache: new InMemoryCache(),
});



export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
    <SessionProvider session={pageProps.session} >
      <Component {...pageProps} />
    </SessionProvider>
    </ApolloProvider>
  )
}