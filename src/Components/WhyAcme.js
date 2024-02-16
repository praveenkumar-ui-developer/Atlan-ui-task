import React from 'react'
import { Link } from 'react-router-dom'

function WhyAcme() {
  return (
    <div className='container-fluid mt-5  text-center '>
    <div className=' mx-auto  '>
  <h1 className='text-dark  pt-5 h1weight'>
  Why choose AcmeNote? 
  </h1>
  <p className='text-dark pt-3 pweight'>Keep everything in mind and conquer any project using your notes,<br/> tasks, and schedule, all centralized.</p>
  
  <button className='btnfree p-0' > <Link to='/pricing'className='btnfree text-decoration-none' >Start for free</Link></button>

  <p className='text-dark mt-3 '>Already have an account? <Link to='/login'>Login Now</Link></p>
</div>

<div className='container'>
<div className='row'>
   
    <div class="col-6 mt-2 col-md-4 col-lg-3 ">
          <div class="card">
            <div class="card-body">
              <h6 class="card-title text-bg-danger text-center p-1 rounded ">Available Everywhere</h6>
            
              <img class="card-img-top w-75 mt-2" src="https://tse1.mm.bing.net/th?id=OIP.TEi96G3ulEFEjVD8oxcBWQHaE8&pid=Api&P=0&h=180" alt="Title" />
            <div className='text-start mt-1'>
            <p class="card-text">Have an iphone and awindows computer?Android and mac? unlike most note-takin app,AcmeNote works on them all.</p>
         </div>    
            </div>
          </div>
        </div>
   
        <div class="col-6 mt-2 col-md-4 col-lg-3 ">
          <div class="card">
            <div class="card-body">
              <h6 class="card-title text-bg-danger text-center p-1 rounded ">Web Clipper</h6>
            
              <img class="card-img-top w-50 mt-2" src="https://tse4.mm.bing.net/th?id=OIP.cCYzRXV85kfAjdxwJJC6IAHaG-&pid=Api&P=0&h=180" alt="Title" />
            <div className='text-start mt-1'>
            <p class="card-text">AcmeNote allows users to save and organize web content quickly and efficiently, enhancing productivity and research workflows.</p>
         </div>    
            </div>
          </div>
        </div>
   
        <div class="col-6 mt-2 col-md-4 col-lg-3 ">
          <div class="card">
            <div class="card-body">
              <h6 class="card-title text-bg-danger text-center p-1 rounded ">Character Recognition</h6>
            
              <img class="card-img-top w-50 mt-2" src="https://tse2.mm.bing.net/th?id=OIP.eHYzRHEWfMpe-kO5TZXjbwHaHa&pid=Api&P=0&h=180" alt="Title" />
            <div className='text-start mt-1'>
            <p class="card-text">converts scanned documents and images into editable and searchable text, enabling efficient digital document management.</p>
         </div>    
            </div>
          </div>
        </div>
   
        <div class="col-6 mt-2 col-md-4 col-lg-3 ">
          <div class="card">
            <div class="card-body">
              <h6 class="card-title text-bg-danger text-center p-1 rounded ">Available Everywhere</h6>
            
              <img class="card-img-top w-50 mt-2" src="https://tse4.mm.bing.net/th?id=OIP.nvHPgqBedKkLsZCBFXpPKAHaHa&pid=Api&P=0&h=180" alt="Title" />
            <div className='text-start mt-1'>
            <p class="card-text">Many note-taking apps lack a fully functional web application. AcmeNote web offers a complete linneup of features from any major browser.</p>
         </div>    
            </div>
          </div>
        </div>
   

    
    </div>  
</div>
    </div>
  )
}

export default WhyAcme
