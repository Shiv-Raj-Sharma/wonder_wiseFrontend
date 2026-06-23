import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaSquareYoutube, FaXTwitter } from 'react-icons/fa6'



const Footer = () => {
  return (
    <footer className='px-20 py-15 bg-blue-400 text-white' >
        <h2 className='text-4xl font-bold'>WanderWise</h2>
        {/* top div*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* first part is about company/system*/} 
            <div>
                
                <div className='mt-3 mb-3'>
                    <p className='text-2xl font-semibold'>Contact</p>
                    <p>+977-9810411576</p>
                    <p>+977-9841101576</p>
                </div>
                  <p className='text-2xl font-semibold'>Address</p>
                  <p>Humandas Road, Biratnagar</p>
            </div>
            {/* second part is about links so nav is used */}
            <div className='flex gap-30 pt-7 '>
                <nav className='flex flex-col [&>a]:text-[20px]'>
                    <a href="/trips">Trips</a>
                    <a href="/baggage">Baggages</a>
                    <a href="/itineraries">Itineraries</a>
                    <a href="/login">Login</a>
                </nav>

                <nav className='flex flex-col [&>a]:text-[20px]'>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                    <a href="/help">Help</a>
                </nav>
            </div>
        </div>

        
        <h5 className="flex flex-items-center justify-center gap-5"><FaFacebook /> <FaInstagram /> <FaLinkedin /> <FaXTwitter /> <FaSquareYoutube /></h5>
        
    </footer>
  )
}

export default Footer