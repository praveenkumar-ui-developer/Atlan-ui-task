
import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

function Login() {
   
    const handleSubmit = (e) => {
        toast.success('login successfully')
        e.preventDefault();
        window.location.href = '/'
        
    }
    
  return (
    
    <div className='mt-4 pt-4 logpage'>
      <form   onSubmit={handleSubmit}
                    className='logform container col-6 col-md-4 col-lg-3 mt-5 mx-auto mb-5 pt-5  bg-body-light '>
                    <h4 className='pweight text-center  ' >AcmeNote</h4>
                    <h6 className='text-center text-light'>Login here</h6>
                 <button className='bg-light border-0 p-1 col-12 d-none d-md-block'><img className='google ' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA4CAMAAABuU5ChAAAA+VBMVEX////pQjU0qFNChfT6uwU0f/O4zvs6gfSJr/j6twDoOisjePPoNSXpPjDrWU/oLRr+9vZ7pff/vAAUoUAkpEn0ran619b82pT7wgD+68j947H/+e7//PafvPm/0vuBw5Df7+P63tz3xcPxl5HnJQ7qUEXxj4n4z83zoJzqSz/vgXrucWrsY1r1tbHrSBPoOjbvcSr0kx74rRH80XntZC3xhSPmGRr86+r4sk/936EJcfPS3/yowvnbwVKjsTjx9f5urEjkuBu9tC+ErkJyvoRRpj2az6hWs23j6/0emX2z2btAiuI8k8AyqkE5nZU1pGxCiOxVmtHJ5M+PSt3WAAACGElEQVRIieWSa3fSQBCGk20CJRcW2AWKxgJtqCmieNdatV5SUtFq5f//GJeE7CXJJOT4TZ+PO+c58+7MaNr/SWd60mecTDs1pMFp28dODPZnZw/369TXseXqHNfCblDdte84krTDwUFFwnMnJyXm+bSsmZ/vlcb1+6A2x5C1xYeyPgIyJlhtYDjzjOYyZA3oFighLYxni8UMY6dCG/jy9KzTQfI8DXSnTNN0kcl1lNE9dlxYC8TnnEVmAJ02qHlPllyb58vgmQ2Np0tYgzGMo2ex6IKRihi1mPhcZyYuO8McL4yYl0vrrI6mJZpx9Or1mzqa10rFt8p7o5ArXh+lXutC8d6ZBdiXvH6PeyPFsw8KMBu8fsG9+3t473l9yD1vD+/BX3v1cgqv3lzE/8A9NCUK5sn33vugeN1DQTcVTbG/9M56H+lEAzg2d54t7iW5657xCdEx5PF+B9Lj9oO9z4hBgIZX6YyaXfmZaV9QQkU781h+Hra+7jQaFv6Or8RW3r1rhErES641D9XKigox8jJaQxyAfZOpIQm6kiuT6BvfujqVuEpkkY43u+d1RBBF35v55aVJidKSEBRFiJAk/+0PM3NjgjFFMLc/WVYzlzImLBPprzvzrlBjHUmZSH8DmqatS0QSZtcjTxUBWSlZw1bckhaYlISTcm1rIqKolJJxtRWnXUVscTFsjWFFwoy7WTM2+zX69/gDaLcy7SET9nsAAAAASUVORK5CYII='/>continue with google</button>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label text-light">User Name</label>
                        <input type="text"
                        required
                           
                            placeholder="Enter username..."
                            // value={username}
                            // onChange={handleInputChange}
                            className="form-control" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text text-light d-sm-none d-md-block">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label text-light">Password</label>
                        <input type="password"
                        required
                            // id="password" name="password"
                            placeholder="Enter password..."
                            // value={password}
                            // onChange={handleInputChange}
                            className="form-control " />
                    </div>
                    
                    <button type="submit" className=" btnlogin">login</button>
                    <p className='text-light mt-3 p-2 px-3 '>don't have an account? <Link>Create Now</Link></p>
   </form>
                
    </div>
  )
}

export default Login
