import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from './App.tsx'
import 'virtual:uno.css'
import '@unocss/reset/tailwind-compat.css'
import './index.css'

const queryClient = new QueryClient()

const domain: string = import.meta.env.VITE_AUTH0_DOMAIN
const clientId: string = import.meta.env.VITE_AUTH0_CLIENT_ID



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
      >
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
