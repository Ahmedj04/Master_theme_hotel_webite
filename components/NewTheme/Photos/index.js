import React, { useEffect, useState } from 'react'
import PhotoAlbum from "react-photo-album";
import ImagesSlider from '@/components/Utils/ImagesSlider';

function Photos({ allHotelDetails }) {

    const [photos, setPhotos] = useState([]);
    const [imageSlideShow, setImageSlideShow] = useState(0);
    const [visibleImage, setVisibleImage] = useState();
    const [allImagesLink, setAllImagesLink] = useState([]);

    useEffect(() => {
        images();
    }, [allHotelDetails])

    let temp = [];


    function images() {
        // Function to generate a random integer between min (inclusive) and max (inclusive)
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        allHotelDetails?.images?.map((img, index) => {
            // Generate random width and height values
            const randomWidth = getRandomInt(500, 1000); // Random width between 500 and 1000
            const randomHeight = getRandomInt(400, 800); // Random height between 400 and 800

            return (
                temp.push(
                    {
                        src: img?.image_link,
                        width: randomWidth,
                        height: randomHeight,
                        index: index,
                    }
                )
            );
        });

        setPhotos(temp)
        // console.log(temp)
    }


    function activateImagesSlider(image_index, allImages) {
        setVisibleImage(image_index)
        setAllImagesLink(allImages.map(i => i.src))
        setImageSlideShow(1)
    }

    return (
        <>
            <div className={imageSlideShow === 1 ? "block" : "hidden"}>
                <ImagesSlider
                    visibleImage={visibleImage}
                    images={allImagesLink}
                    setShowModal={(e) => setImageSlideShow(e)} />

            </div>
            <PhotoAlbum layout="rows" spacing={5} photos={photos} onClick={({ index }) => activateImagesSlider(index, photos)} />
        </>
    )
}

export default Photos;
