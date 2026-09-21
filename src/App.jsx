import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/layout/ScrollToTop'
import ChatWidget from './components/chat/ChatWidget'
import Home from './pages/Home'
import Services from './pages/Services'
import CategoryPage from './pages/CategoryPage'
import ServicePage from './pages/ServicePage'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import './App.css'

/** Standard chrome: top bar, header, footer. */
function SiteLayout() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
      <Footer />

      {/* Mounted once, here — every page inside this layout gets the assistant
          without a single page importing it, and the conversation survives
          navigation because the component never unmounts. */}
      <ChatWidget />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/category/:categorySlug" element={<CategoryPage />} />
          <Route path="/services/:serviceId" element={<ServicePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Full-bleed, no site chrome. */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
