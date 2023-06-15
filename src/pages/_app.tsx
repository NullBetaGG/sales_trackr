import { Header } from '@/components/Layouts/Header'
import { Sidebar } from '@/components/Layouts/Sidebar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { ProtectedRoute } from '@/routes/protectRoute'
import DataProvider from '../context/Data/DataProvider'
import VolumeProvider from '../context/Volume/VolumeProvider'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const isLoginPage = router.pathname === '/login'

  if (isLoginPage) {
    return <Component {...pageProps} />
  }

  return (
    <ProtectedRoute>
      <div>
        <DataProvider>
          <VolumeProvider>
            <Header />
            <Sidebar />
            <Component {...pageProps} />
          </VolumeProvider>
        </DataProvider>
      </div>
    </ProtectedRoute>
  )
}
