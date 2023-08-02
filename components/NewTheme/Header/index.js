import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import Router from 'next/router';
import ContactUsModal from '../Modals/ContactUsModal';

function Header({ allHotelDetails, menu, setMenu }) {

    const [showModalContactUs, setShowModalContactUs] = useState(0);

    function clickHandler(id, action) {
        action === 'modal' ? id() : Router.push(`${window?.location?.origin}/${id}`)
    }


    return (
        <header className='h-auto bg-black text-white'>
            <div className='mx-8'>
                <div className='py-8 pr-1 flex justify-between md:py-10 lg:py-16'>
                    <div className='mx-4 text-center md:mx-auto'>
                        <StarRatings
                            rating={allHotelDetails?.star_rating}
                            starRatedColor="#FDCC0D"
                            starDimension='16px'
                            numberOfStars={5}
                            starSpacing='1px'
                            name='rating'
                        />
                        <h1 className='text-xl pt-2 md:text-4xl md:font-light tracking-widest'>{(allHotelDetails?.property_name)?.toUpperCase()}</h1>
                    </div>
                    <div className='my-auto'>
                        <i className='text-white cursor-pointer md:hidden lg:hidden' onClick={() => setMenu(!menu)}>{menu === true ? <CloseIcon sx={{ fontSize: 30 }} /> : <MenuIcon sx={{ fontSize: 30 }} /> }</i>
                    </div>

                </div>
                <nav className='text-center pb-8 hidden md:block lg:block'>
                    <ul className='flex justify-center gap-10 font-bold'>
                        {[{ "label": "About", "id": "#about", "action": "href" },
                        { "label": "Rooms", "id": "#rooms", "action": "href" },
                        { "label": "Photos", "id": "#photos", "action": "href" },
                        { "label": "Services", "id": "#services", "action": "href" },
                        { "label": "Reviews", "id": "#reviews", "action": "href" },
                        { "label": "Contact Us", "id": () => { setShowModalContactUs(1) }, "action": "modal" }
                        ].map((item, index) => {
                            return (
                                <li key={index} onClick={() => clickHandler(item?.id, item?.action)} className='text-gray-400 hover:text-white hover:underline'>{item?.label}</li>
                            )
                        })}
                    </ul>

                </nav>
            </div>

            {/* modal for contact us*/}
            <div className={showModalContactUs === 1 ? "block" : "hidden"}>
                <ContactUsModal
                    setShowModalContactUs={setShowModalContactUs}
                />
            </div>
        </header>
    )
}

export default Header