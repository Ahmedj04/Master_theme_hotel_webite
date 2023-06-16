import React from 'react';
import StarRatings from 'react-star-ratings';
import MenuIcon from '@mui/icons-material/Menu';

function Header({ allHotelDetails, menu, setMenu }) {
    return (
        <header className='h-auto bg-black text-white'>
            <div className='mx-8'>
                <div className='py-8 pr-1 flex justify-between md:pt-4 md:pb-8 lg:py-16'>
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
                        <i onClick={() => setMenu(!menu)} className={`text-white md:hidden  lg:hidden `}><MenuIcon className=' cursor-pointer' sx={{ fontSize: 30 }} /></i>
                    </div>
                </div>
                <nav className='text-center pb-8 hidden md:block lg:block'>
                    <ul className='flex justify-center gap-10 font-bold'>
                        {[{ "label": "About", "id": "#about" },
                        { "label": "Rooms", "id": "#rooms" },
                        { "label": "Photos", "id": "#photos" },
                        { "label": "Services", "id": "#services" },
                        { "label": "Reviews", "id": "#reviews" },
                        { "label": "Contact Us", "id": "#footer" }
                        ].map((item, index) => {
                            return (
                                <a href={`${item?.id}`} key={index}><li className='text-gray-400 hover:text-white hover:underline'>{item?.label}</li></a>
                            )
                        })}
                    </ul>

                </nav>
            </div>
        </header>
    )
}

export default Header