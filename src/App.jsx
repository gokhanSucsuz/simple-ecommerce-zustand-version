import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/navbar/Navbar"
import PageContainer from "./containers/PageContainer"
import Detail from "./pages/Detail"
import Cart from "./pages/Cart"
import ErrorPage from "./pages/ErrorPage"
import Footer from "./components/footer/Footer"
import Wishlist from "./pages/Wishlist"


function App() {


  return (
    <>
      <PageContainer>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
        <Footer />
      </PageContainer>

    </>
  )
}

export default App
