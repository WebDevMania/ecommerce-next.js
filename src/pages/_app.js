import '@/styles/globals.css'
import { AuthProvider } from '../../ctx/authContext'
import { CartProvider } from '../../ctx/cartContext'

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </CartProvider>
  )
}
