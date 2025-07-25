import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer, Header, PageHeader } from './components'
import { Home, AboutShreeMataji, AboutSy, Center, AboutSyYtl, Contact, Donation, Login, Events, PracharPrasar, CenterInformation } from './pages'
import Layout from './Layout'

function App() {

  return (
    <>
      <div className="h-screen bg-gray-50">
        <Header />
        <PageHeader />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about-shree-mataji" element={<AboutShreeMataji />} />
            <Route path="/about-sahajyoga" element={<AboutSy />} />
            <Route path="/about-yavatmal-sahajyoga" element={<AboutSyYtl />} />
            <Route path="/centers" element={<Center />} >
              <Route path=':taluka' element={<CenterInformation />} />
            </Route>
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/login" element={<Login />} />
            <Route path="/events" element={<Events />} />
            <Route path="/prachar-prasar" element={<PracharPrasar />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
