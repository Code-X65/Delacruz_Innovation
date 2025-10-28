import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import AboutPage from './Pages/AboutPage'
import ServicesPage from './Pages/ServicesPage'
import ServicesShowcase from './Pages/ServicesShowcase'
import ServiceDetailsPage from './Pages/SericeDetailsPage'
import CaseStudies from './Pages/CaseStudies'
import OfficesSection from './Pages/OfficesSection'
import InsightsListPage from './Pages/InsightsListPage'
import NotFound from './Pages/NotFound'
import InsightDetailPage from './Pages/InsightDetailPage'
import JobListingsApp from './Pages/JobListingsApp'

const App = () => {
  return (
    <div>
      <Router basename='/Delacruz_Innovation'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:serviceId" element={<ServiceDetailsPage />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/Offices" element={<OfficesSection />} />
          <Route path="/insights" element={<InsightsListPage />} />
          <Route path="/insights/:insightId" element={<InsightDetailPage />} />
          <Route path="/careers" element={<JobListingsApp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App