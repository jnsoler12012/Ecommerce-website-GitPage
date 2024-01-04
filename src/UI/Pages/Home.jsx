import React from 'react'
import { About, Blog, Footer, Hero, Navbar, Newsletter, Services } from '../Components'

export default function () {
    return (
        <div className='flex flex-col justify-center items-center'>
            <Navbar />
            <Hero />
            <Services />
            <About />
            <Blog />
            <Newsletter />
            <Footer />
        </div>
    )
}