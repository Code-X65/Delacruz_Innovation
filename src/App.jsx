import React, { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

// Loading component
const LoadingSpinner = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '60vh',
    width: '100%'
  }}>
    <div style={{
      width: '50px',
      height: '50px',
      border: '4px solid #f3f3f3',
      borderTop: '4px solid #3498db',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }} />
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
)

// Lazy load all page components for better performance
const Homepage = lazy(() => import('./Pages/Homepage'))
const AboutPage = lazy(() => import('./Pages/AboutPage'))
const ServicesPage = lazy(() => import('./Pages/ServicesPage'))
const ServiceDetailsPage = lazy(() => import('./Pages/SericeDetailsPage'))
const CaseStudies = lazy(() => import('./Pages/CaseStudies'))
const OfficesSection = lazy(() => import('./Pages/OfficesSection'))
const InsightsListPage = lazy(() => import('./Pages/InsightsListPage'))
const InsightDetailPage = lazy(() => import('./Pages/InsightDetailPage'))
const JobListingsApp = lazy(() => import('./Pages/JobListingsApp'))
const JobDetailsPage = lazy(() => import('./Pages/JobDetailsPage'))
const NotFound = lazy(() => import('./Pages/NotFound'))

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:serviceId" element={<ServiceDetailsPage />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/Offices" element={<OfficesSection />} />
          <Route path="/insights" element={<InsightsListPage />} />
          <Route path="/insights/:insightId" element={<InsightDetailPage />} />
          <Route path="/jobs" element={<JobListingsApp />} />
          <Route path="/jobs/:jobId" element={<JobDetailsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  )
}

const App = () => {
  return (
    <div>
      <Router basename='/Delacruz_Innovation'>
        <Navbar />
        <AppRoutes />
        <Footer />
      </Router>
    </div>
  )
}

export default App