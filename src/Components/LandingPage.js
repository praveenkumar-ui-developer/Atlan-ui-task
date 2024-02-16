import React from 'react'
import './Landing.css'
import { Link } from 'react-router-dom'
import Footer from './Footer'
function LandingPage() {

  return (
    <div className='container-fluid landing  text-center '>
        <div className='bg mx-auto  '>
      <h1 className='  pt-5 h1weight'>
      Take control of your work, <br/>Simplify your life
      </h1>
      <p className=' pt-3 pweight'>Keep everything in mind and conquer any project using your notes,<br/> tasks, and schedule, all centralized.</p>
      
      <button className='btnfree p-0' > <Link to='/pricing'className='btnfree text-decoration-none' >Start for free</Link></button>
      <p className='text-light mt-3 '>Already have an account? <Link to='/login'>Login Now</Link></p>
    </div>

    {/* 2nd section */}
    <div className='row bg2 mt-2'>
        <div className=' mx-auto col-md-6 col-lg-6 col-12 col-xl-6'>
         <img className='w-75 mt-3 bg2img' src='https://i.pinimg.com/originals/1b/aa/80/1baa80e112b19c89af150299d84846fe.png'/>
        </div>
        <div className=' text-start  justify-content-center mx-auto   col-sm-text-center mt-3 px-2 pt-4 col-md-6 col-lg-6 col-12 '>
            <h1 className='mx-5'>Craft your vision</h1>
            <div className='mt-4'>
            <p className='mx-5'>Whether you jot down quick notes or meticulously organize your ideas
               AcmeNote has the flexibility to match your style. 
              Type, write, or draw with the fluidity of pen and paper. 
               Explore and capture inspiration from the web effortlessly</p>
              </div>
              <button className='btnfree px-3 mx-5 d-md-none d-lg-block'> <Link to='/pricing'className='btnfree text-decoration-none px-2' >Login to explore</Link></button>
            </div>

    </div>
    {/* 3nd section */}
    <div className='row bg2 mt-3'>
        <div className=' mx-auto col-md-6 col-lg-6 col-12 col-xl-6  order-2'>
         <img className='w-50 mt-3 bg2img' src='https://kismetelektromarket.com/wp-content/uploads/2021/04/24-hours.png'/>
        </div>
        <div className=' text-start  justify-content-center mx-auto   col-sm-text-center mt-3 px-2 pt-4 col-md-6 col-lg-6 col-12 '>
            <h1 className='mx-5'>24/7 access</h1>
            <div className='mt-4'>
            <p className='mx-5'>Access Anywhere, Anytime
Evernote seamlessly syncs your data across all devices, ensuring your essential information is always at your fingertips, whether you're online or offline. Stay productive even without an internet connection with Evernote's offline mode.</p>
              </div>
              <button className='btnfree px-3 mx-5 d-md-none d-lg-block'> <Link to='/pricing'className='btnfree text-decoration-none px-2' >Lets divein</Link></button>
          
            </div>

    </div>

    
    <div className='bgofc mx-auto  '>
      <h1 className=' text-light pt-5 h1weight text-start mx-5'>
      Better with AcmeNotes
      </h1>
      <p className=' text-light text-start pt-3 pweight mx-5'>As a valuable addition to the Office suite, AcmeNote integrates smoothly with your familiar Office tools. <br/>
      Effortlessly combine your notes with Outlook emails or embed Excel tables.<br/> Maximize your efficiency as all your favorite Office applications work together seamlessly.
</p>
      
<button className='btnfree px-3 mx-5 d-md-none d-lg-block'> <Link to='/pricing'className='btnfree text-decoration-none px-2' >Lets start free</Link></button>
          
       </div>

{/* cards */}
 
<div className='row bg2 mt-3'>
        <div className=' mx-auto col-md-6 col-lg-6 col-12 col-xl-6  '>
         <img className='w-50 mt-3 bg2img' src='https://tse2.mm.bing.net/th?id=OIP.cHXRStezV717A_zJqLZg4wHaHa&pid=Api&P=0&h=180'/>
        </div>
        <div className=' text-start  justify-content-center mx-auto   col-sm-text-center mt-3 px-2 pt-4 col-md-6 col-lg-6 col-12 '>
            <h1 className='mx-5'>Find handwriting</h1>
            <div className='mt-4'>
            <p className='mx-5'>Discover text within your handwritten notes, snapshots of whiteboards, and Post-It® notes stored in AcmeNotes with ease.</p>
              </div>
              <button className='btnfree px-3 mx-5 d-md-none d-lg-block'> <Link to='/pricing'className='btnfree text-decoration-none px-2' >Compare plans</Link></button>
          
            </div>

    </div>
    

    <div className='row bg2 mt-3'>
        <div className=' mx-auto col-md-6 col-lg-6 col-12 col-xl-6 order-2  '>
         <img className='w-75 mt-3 bg2img rounded' src='https://tse1.mm.bing.net/th?id=OIP.KcmH76Xk4QU1RZpHNfEY0QHaE7&pid=Api&P=0&h=180'/>
        </div>
        <div className=' text-start  justify-content-center mx-auto   col-sm-text-center mt-3 px-2 pt-4 col-md-6 col-lg-6 col-12 '>
            <h1 className='mx-5'>Efficient teamwork</h1>
            <div className='mt-4'>
            <p className='mx-5'>
AcmeNote simplifies collaboration on projects. Real-Time Editing ensures instant synchronization of changes, keeping all team members informed. Task management facilitates outlining next steps and assigning responsibilities. With unlimited sharing permissions, everyone stays connected and aligned.</p>
              </div>
              {/* <button className='btnfree mx-5 d-md-none d-lg-block'>Compare plans</button> */}
       
            </div>
            </div>
            <Footer className='footer'/>
    </div>
  )
}

export default LandingPage
