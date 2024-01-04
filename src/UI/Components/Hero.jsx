import React from 'react'
import Carousel from './Carousel';
const images = [
    "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652345767/demo_image2.jpg",
    "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652366604/demo_image5.jpg",
    "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652345874/demo_image1.jpg",
];

export default function () {
    return (
        <div className='w-[100%] h-auto bg-neutralSilver' id='home'>
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
                <Carousel />
            </div>

        </div>
    )
}
//<Carousel />