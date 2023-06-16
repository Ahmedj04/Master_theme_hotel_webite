import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Header from '../components/NewTheme/Header';
import Home from '../components/NewTheme/Home';
import About from '../components/NewTheme/About'
// import BookingForm from '@/components/NewTheme/Booking';


function Hotel() {
    const [allHotelDetails, setHotelDetails] = useState([]);
    const [rooms, setRooms] = useState([]);
    const [menu, setMenu] = useState(false);


    useEffect(() => {
        getHotelDetails();
        getRoomDetails();
    }, []);

    function getHotelDetails() {
        let url = "/api/jammu-and-kashmir/srinagar/hotels/t2k0032";
        axios.get(url)
            .then((response) => {
                setHotelDetails(response.data)
                console.log("hotel details loaded succesfully")
                setHotelDetailLoader(1)

            })
            .catch((err) => {
                console.log(JSON.stringify(err))
            })
    }

    function getRoomDetails() {
        let url = "api/all_rooms_details/t2k0032";
        axios.get(url)
            .then((response) => {
                setRooms(response.data.rooms);
                console.log("room details loaded successfull")
                setRoomDetailLoader(1);
            })
            .catch((err) => {
                console.log(JSON.stringify(err))
            })
    }


    return (
        <main>
            <Header
                allHotelDetails={allHotelDetails}
                menu={menu}
                setMenu={setMenu}
            />

            <Home
                allHotelDetails={allHotelDetails}

            />

            <About 
                allHotelDetails={allHotelDetails}
            />



            {/*-------------------- menu bar for small and medium screen----------- */}

            {menu === true ?
                <React.Fragment>
                    <div className='absolute inset-0 w-9/12 mx-auto h-60 mt-28 md:h-80 bg-gray-800 opacity-100 rounded-b-3xl'>
                        {/* <i onClick={() => setMenu(false)} className='flex justify-end pt-5 pr-5 cursor-pointer hover:text-slate-500'><CloseIcon /></i> */}
                        <div className='text-center text-white pt-10 md:pt-12'>
                            <ul className='inline-block font-semibold'>
                                {[{ "label": "About", "id": "#about" },
                                { "label": "Rooms", "id": "#rooms" },
                                { "label": "Photos", "id": "#photos" },
                                { "label": "Services", "id": "#services" },
                                { "label": "Reviews", "id": "#reviews" },
                                { "label": "Contact Us", "id": "#footer" }
                                ].map((item, index) => {
                                    return (
                                        <a href={`${item?.id}`} key={index} onClick={() => setMenu(false)}><li className='pb-1 md:pb-2 hover:text-slate-500'>{item?.label}</li></a>
                                    )
                                })}

                            </ul>
                        </div>
                    </div>
                </React.Fragment>
                : <></>
            }


        </main>
    )
}

export default Hotel;