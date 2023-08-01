import React, { useState } from 'react'
import Loader from '../Loaders/Loader';
import Modal from '../Modals/Modal';

function Footer({ allHotelDetails, hotelDetailLoader }) {

    let date = new Date();

    const [showModalTC, setShowModalTC] = useState(0);
    const [showModalPrivacy, setShowModalPrivacy] = useState(0);
    const [showModalContactUs, setShowModalContactUs] = useState(0);


    return (
        <footer id="footer" className="bg-black ">
            <div className='container px-5 py-10'>
                <div className="md:flex md:justify-evenly lg:justify-evenly">
                    <div className="pb-10">
                        <ul className='text-gray-400'>
                            {/* <a href='#rooms'><li className='py-2 hover:text-white'>{lang?.theRoomsSuites}</li></a> */}
                            {/* <a href='#about'><li className='py-2 hover:text-white'>{lang?.aboutUs}</li></a> */}

                            <a href='#rooms'><li className='py-2 hover:text-white'>Rooms</li></a>
                            <a href='#photos'><li className='py-2 hover:text-white'>Photos</li></a>
                            <a href='#about'><li className='py-2 hover:text-white'>About Us</li></a>

                        </ul>
                    </div>

                    <div className="pb-10">
                        <ul className='text-gray-400'>
                            <li className='py-2 hover:text-white cursor-pointer' onClick={() => setShowModalTC(1)}>Terms & Conditions</li>
                            <li className='py-2 hover:text-white cursor-pointer' onClick={() => setShowModalPrivacy(1)}>Privacy Policy</li>
                        </ul>
                    </div>



                    <div className="pb-10">
                        <div>
                            <div className="text-gray-400 pb-5">
                                <h1 className='text-white'><em>Address</em></h1>
                                {hotelDetailLoader === 0 ?
                                    <><Loader size={`w-5/12 h-8 md:w-36`} /> <br /> <Loader size={`w-5/12 h-8 md:w-36`} /></> :
                                    <><span className="">{allHotelDetails?.address?.[0]?.address_street_address},</span><br /></>

                                }
                                <span className=''>{allHotelDetails?.address?.[0]?.address_city},{allHotelDetails?.address?.[0]?.address_zipcode}</span><br />
                            </div>
                        </div>
                    </div>

                    <div className='pb-10'>
                        {allHotelDetails?.contacts?.map((contact, index) => {
                            return (
                                <div key={index} className='text-gray-400 pb-5'>
                                    <h1 className='text-white'><em>{contact?.contact_type} </em></h1>
                                    <p>{contact?.contact_data}</p>
                                </div>);
                        })}
                    </div>
                </div>

                <div className='text-center text-gray-400 md:text-center lg:text-center'>
                    <p>Copyright &copy; {date.getFullYear()} All Rights Reserved</p>
                    <p></p>
                </div>

            </div>


            {/* ------------------- modal view for footer-------------------------- */}

            <div className={showModalTC === 1 ? "block" : "hidden"}>
                <Modal
                    title={`Terms & Conditions`}
                    description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
                    setShowModal={(e) => setShowModalTC(e)}
                />
            </div>

            <div className={showModalPrivacy === 1 ? "block" : "hidden"}>
                <Modal
                    title={`Privacy Policy`}
                    description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
                    setShowModal={(e) => setShowModalPrivacy(e)}
                />
            </div>
        </footer>
    )
}

export default Footer