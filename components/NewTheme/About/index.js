import React from 'react'

function index({ allHotelDetails }) {
  return (
    <section>
      {/* <div className='py-36 bg-[url("https://a6e8z9v6.stackpathcdn.com/hotelmaster/dark/wp-content/uploads/2015/03/about-bg.jpg")]' > */}
      <div className='pt-36 pb-28 bg-gradient-to-b from-black to-gray-800 '>
        <div className='mx-8 text-white text-center md:flex'>
          <div className='mx-4'>
            <div><h3 className='heading text-4xl font-bold tracking-widest'>A LITTLE ABOUT US</h3></div>
            <div className='my-10 md:hidden lg:hidden'><div className=' px-6 bg-white inline-block' style={{ height: '2px' }}></div></div>
          </div>
          <div>
            <div className='text-sm mx-6'>{allHotelDetails?.description_body}</div>
          </div>

        </div>
      </div>

      <style jsx>
        {`
            
                @media (min-width: 1024px) {
                    .heading {
                        height:70vh;
                    }
                }
                 
                `}
      </style>
    </section>
  )
}

export default index