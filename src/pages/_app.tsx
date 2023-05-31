import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { ProtectedRoute } from '@/routes/protectRoute'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const isLoginPage = router.pathname === '/login'

  if (isLoginPage) {
    return <Component {...pageProps} />
  }

  return (
    <ProtectedRoute>
      <div>
        <Header />
        <Sidebar />
        <Component {...pageProps} />
      </div>
    </ProtectedRoute>
  )
}
