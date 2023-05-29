import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import App from './App.tsx'
import 'virtual:uno.css'
import '@unocss/reset/tailwind-compat.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-a0nqbtp3nfvu0u0b.us.auth0.com'
      clientId='2AjFDw2uJ7pY2yu4YiETdaInm4QJo6MO'

    >
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>,
)
