import { Header } from '@/components/Layouts/Header'
import { Sidebar } from '@/components/Layouts/Sidebar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { ProtectedRoute } from '@/routes/protectRoute'
import DataProvider from '../context/Data/DataProvider'
import VolumeProvider from '../context/Volume/VolumeProvider'
import PriceProvider from '../context/Price/PriceProvider'

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
            <PriceProvider>
              <Header />
              <Sidebar />
              <Component {...pageProps} />
            </PriceProvider>
          </VolumeProvider>
        </DataProvider>
      </div>
    </ProtectedRoute>
  )
}
