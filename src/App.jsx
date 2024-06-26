
import About from './About/About'
import './App.css'
import Banner from './Banner/Banner'
import Deposit from './Deposite/Deposit'
import Footer from './Footer/Footer'

import Navbar from './Navbar/Navbar'
import Section from './Section/Section'


function App() {
 

  return (
    <div className='bg-white lg:px-4 md:px-2 px-3'>
     <Navbar/>
     <Banner/>
     <Section/>
    <Deposit/>
    <About/>
    <Footer/>



    </div>
  )
}

export default App
