import React from 'react'
import { toast } from 'react-toastify'

function Annual() {
    const free=()=>{
        toast.success("you are enabled for a free plan for one year")
      }
      const personal=()=>{
          toast.success("you are enabled for a personal plan for one year")
        }
        const proffessional=()=>{
          toast.success("you are enabled for a proffessional plan for one year")
        }
        const teams=()=>{
          toast.success("you are enabled for a teams plan for one year")
        }
  return (
    <div>
      <div>
        <div class="row pt-5">
            <div class="col-6  col-md-4 col-lg-3">
                <div class="card row mx-auto">
                    <div class="card-body">
                        <div className='pb-5 row mx-auto'>
                        <h4 class="card-title">FREE</h4>
                        <h3 class="card-title line">₹0.00 / month</h3>
                        </div>
                        <div>
                            <p className='mx-auto'>Capture ideas and find them quickly</p>
                            <button className='btnfree p-2 rounded row mx-auto' onClick={()=>free()}> Start for free</button> 
                            <h5 className='mt-2'>Core features:</h5> 
                           <p> <i className="bi bi-check-lg text-success "><span className='text-dark '>Take great notes</span></i></p>
                             <p><i className="bi bi-check-lg text-success "><span className='text-dark '>Stay on top of it all with in-note tasks</span></i></p>
                             <p><i className="bi bi-check-lg text-success "><span className='text-dark '>Find things fast with advanced search and tags</span></i></p>
                             <p><i className="bi bi-check-lg text-success "><span className='text-dark '>Clip web pages</span></i></p>
                             <p><i className="bi bi-check-lg text-success "><span className='text-dark '>Attach PDFs, receipts, files, photos, images, and documents</span></i></p>
                             <p><i className="bi bi-check-lg text-success "><span className='text-dark '>Get offline access on mobile and desktop</span></i></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-6  col-md-4 col-lg-3">
                <div class="card">
                    <div class="card-body">
                    <div className='pb-5 row mx-auto'>
                        <h4 class="card-title">PERSONAL</h4>
                        <h3 class="card-title line">₹100.00/ month</h3>
                        <h6>Pay ₹1000.00 / year</h6>
                        </div>
                        <div>
                            <p className='mx-auto'>Stay organized and nurture your home and family life.</p>
                            <button className='btnfree p-2 rounded row mx-auto' onClick={()=>personal()}> Choose Personal</button> 
                            <h5 className='mt-2'>Everything in Free plus:</h5> 
                           <p> <i className="bi bi-check-lg text-success "><span className='text-dark '>Connect primary Google Calendar account</span></i></p>
                             <p><i className="bi bi-check-lg text-success "><span className='text-dark '>Manage tasks in one place</span></i></p>
                             <p><i className="bi bi-check-lg text-success "><span className='text-dark '>Customize Home dashboard and access extra widgets</span></i></p>
                             <p><i className="bi bi-check-lg text-success "><span className='text-dark '>200 MB max. note size</span></i></p>
                             <p><i className="bi bi-check-lg text-success "><span className='text-dark '>Sync unlimited devices</span></i></p>
                             <p><i className="bi bi-check-lg text-success "><span className='text-dark '>10 GB monthly uploads</span></i></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-6  col-md-4 col-lg-3">
                <div class="card">
                    <div class="card-body">
                    <div className='pb-5 row mx-auto'>
                        <h4 class="card-title">PROFESSIONAL</h4>
                        <h3 class="card-title line">₹200.00/ month</h3>
                        <h6>Pay ₹2000.00 / year</h6>
                        </div>
                        <div>
                            <p className='mx-auto'>Tackle any project, at work or at home</p>
                            <button className='btnfree p-2 rounded row mx-auto' onClick={()=>proffessional()}> Choose proffessional</button> 
                            <h5 className='mt-2'>Everything in Personal plus:</h5> 
                           <p> <i className="bi bi-check-lg text-success "><span className='text-dark '>Connect both personal and workplace Google Calendar accounts</span></i></p>
                             <p><i className="bi bi-check-lg text-success "><span className='text-dark '>Create, manage, and assign tasks to others, and easily track their progress</span></i></p>
                             <p><i className="bi bi-check-lg text-success "><span className='text-dark '>Find things fast with advanced search and tags</span></i></p>
                             <p><i className="bi bi-check-lg text-success "><span className='text-dark '>Access to all widgets and customization for Home</span></i></p>
                             <p><i className="bi bi-check-lg text-success "><span className='text-dark '>Integrate with Slack</span></i></p>
                             <p><i className="bi bi-check-lg text-success "><span className='text-dark '>Save 2x more content with 20 GB monthly uploads</span></i></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-6  col-md-4 col-lg-3">
                <div class="card">
                    <div class="card-body">
                    <div className='pb-5 row mx-auto'>
                        <h4 class="card-title">TEAMS</h4>
                        <h3 class="card-title line">₹300.00/ month</h3>
                        <h6>Pay ₹3000.00 / year</h6>
                        </div>
                        <div>
                            <p className='mx-auto'>Collaborate and share among your team</p>
                            <button className='btnfree p-2 rounded row mx-auto ' onClick={()=>teams()}> Choose teams</button> 
                            <h5 className='mt-2'>Everything in Professional plus:</h5> 
                           <p> <i className="bi bi-check-lg text-success "><span className='text-dark '>Create up to 500,000 notes & 10,000 notebooks</span></i></p>
                             <p><i className="bi bi-check-lg text-success "><span className='text-dark '>Onboard new team members quickly with a robust training program</span></i></p>
                             <p><i className="bi bi-check-lg text-success "><span className='text-dark '>Maintain company ownership of business data</span></i></p>
                             <p><i className="bi bi-check-lg text-success "><span className='text-dark '>Centralize account administration and user management</span></i></p>
                             <p><i className="bi bi-check-lg text-success "><span className='text-dark '>Work together in shared spaces</span></i></p>
                             <p><i className="bi bi-check-lg text-success "><span className='text-dark '>Save 2x more content with 20 GB monthly uploads</span></i></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Annual
