import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Header from '../components/ModernTheme/Header';
import Home from '../components/ModernTheme/Home';
import About from '../components/ModernTheme/About'
import Rooms from '@/components/ModernTheme/Rooms';
import Footer from '@/components/ModernTheme/Footer';
import CarousalComponent from '@/components/ModernTheme/CarousalComponent';
import MenuSM from '@/components/ModernTheme/MenuSM';
import color from '../components/ModernTheme/Data/Colors.json';


function Hotel() {
    const [allHotelDetails, setHotelDetails] = useState([]);
    const [hotelDetailLoader, setHotelDetailLoader] = useState(0);
    const [roomDetailLoader, setRoomDetailLoader] = useState(0);
    const [rooms, setRooms] = useState([]);
    const [menu, setMenu] = useState(false);
    const [themeColor, setThemeColor] = useState(color.black);

    useEffect(() => {
        getThemeColor();
        getHotelDetails();
        getRoomDetails();
    }, []);

    function getThemeColor(){
        let bgColor = localStorage.getItem("color");
        if(bgColor === null){
            setThemeColor(color.black)
        }
        else if(bgColor === 'black'){
            setThemeColor(color.black)
        }
        else if(bgColor === 'red'){
            setThemeColor(color.red)
        }
         else if(bgColor === 'green'){
            setThemeColor(color.green)
        }
        else {
            setThemeColor(color.white)
        }

    }

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
                themeColor={themeColor}
                setThemeColor={setThemeColor}

            />

            <Home
                allHotelDetails={allHotelDetails}

            />

            <About
                allHotelDetails={allHotelDetails}
                themeColor={themeColor}
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
                themeColor={themeColor}
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