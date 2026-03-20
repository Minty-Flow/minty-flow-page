import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@/contexts/theme'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Home } from '@/pages/Home'
import { FAQ } from '@/pages/FAQ'
import { PrivacyPolicy } from '@/pages/PrivacyPolicy'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <div className="flex min-h-svh flex-col">
          <Navbar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
