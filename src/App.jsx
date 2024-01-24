
import About from './About/About'
import './App.css'
// import Banner from './Banner/Banner'
import Deposit from './Deposite/Deposit'

import Navbar from './Navbar/Navbar'
import Section from './Section/Section'


function App() {
 

  return (
    <div className='bg-white'>
     <Navbar/>
     {/* <Banner/> */}
     <Section/>
    <Deposit/>
    <About/>



    </div>
  )
}

export default App
