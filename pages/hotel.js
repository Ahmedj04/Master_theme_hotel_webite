import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Header from '../components/NewTheme/Header';
import Home from '../components/NewTheme/Home';
import About from '../components/NewTheme/About'
import Rooms from '@/components/NewTheme/Rooms';
import Footer from '@/components/NewTheme/Footer';
import CarousalComponent from '@/components/NewTheme/CarousalComponent';
import Services from '@/components/NewTheme/Services';
import MenuSM from '@/components/NewTheme/MenuSM';


function Hotel() {
    const [allHotelDetails, setHotelDetails] = useState([]);
    const [hotelDetailLoader, setHotelDetailLoader] = useState(0);
    const [roomDetailLoader, setRoomDetailLoader] = useState(0);
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

            <Rooms
                allHotelDetails={allHotelDetails}
                rooms={rooms}
                roomDetailLoader={roomDetailLoader}
                hotelDetailLoader={hotelDetailLoader}
            />

            <CarousalComponent
                id="reviews"
                type='review'
                data={allHotelDetails?.Reviews}
                title='TESTIMONIALS'
            // hotelDetailLoader={hotelDetailLoader}
            />

            <Footer
                allHotelDetails={allHotelDetails}
                hotelDetailLoader={hotelDetailLoader}
            />



            {/*-------------------- menu bar for small and medium screen----------- */}

            {menu === true ? <MenuSM /> : <></> }


        </main>
    )
}

export default Hotel;