import React, { useEffect } from 'react';
import Animation from '../Animation';

function Home({ allHotelDetails }) {

    useEffect(() => {
        if (allHotelDetails.length != 0) {
            Animation("#welcome-to", "y")
            Animation("#hotel-name", "y")
        }
    }, [allHotelDetails])


    return (
        <section>
            <div className="bgImg bg-[url('https://max-themes.net/demos/hotelmaster/hotelmaster-dark/upload/slider-1.jpg')] bg-no-repeat bg-cover h-56 md:h-96 w-100 flex">
                <div className='text-center text-white m-auto'>
                    <h2 id='welcome-to' className='text-base md:text-3xl lg:text-4xl lg:tracking-widest font-light tracking-widest' style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}>{allHotelDetails.length != 0 ? `WELCOME TO` : ``}</h2>
                    <div className='pb-1 md:py-5'>
                        <div className='dash px-3 md:px-7 h-0.5 bg-white inline-block rounded-md' ></div>
                    </div>
                    <h2 id='hotel-name' className=' text-2xl md:text-5xl lg:text-7xl lg:tracking-widest font-bold' style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}>{(allHotelDetails?.property_name)?.toUpperCase()}</h2>

                </div>
            </div>

            <style jsx>
                {`
            
                @media (min-width: 1024px) {
                    .bgImg {
                        height:70vh;
                    }
                }
                @media (min-width: 768px) {
                    .dash {
                        height:3px;
                    }
                }
                 
                `}
            </style>
        </section>
    )
}

export default Home;