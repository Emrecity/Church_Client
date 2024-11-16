import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import ToastProvider from './helpers/ToastProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <QueryClientProvider client={new QueryClient()}>
    <ToastProvider>
      <BrowserRouter>  
            <App />
      </BrowserRouter>,
    </ToastProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
   </StrictMode>
)
