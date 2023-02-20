import Navbar from '../Nav/Nav'
import Footer from '../Footer/Footer'


export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      
      <main>{children}</main>
      <Footer />
    </>
  )
}