import React from 'react'
import { ClientLogo1, ClientLogo2, ClientLogo3, ClientLogo4, ClientLogo5, ClientLogo6 } from '../assets/img/clients'
import { ServiceIconBuilding, ServiceIconGroup, ServiceiconHands } from '../assets/img/services'

export default function () {
    const services = [
        { id: 1, title: "Membership Organisations", description: "Our membership management software provides full automation of membership renewals and payments", image: ServiceIconBuilding },
        { id: 2, title: "National Associations", description: "Our membership management software provides full automation of membership renewals and payments", image: ServiceIconGroup },
        { id: 3, title: "Clubs And Groups", description: "Our membership management software provides full automation of membership renewals and payments", image: ServiceiconHands },
    ]


    return (
        <div className='max-w-screen-2xl w-[100%]'>
            <div className='md:px-14 px-4 pt-[4rem] text-center my-8'>
                <h2 className='text-5xl text-neutralDGrey font-semibold mb-2'>Our Clients</h2>
                <p className='text-neutralGrey' >We have been working with some Fortune 500+ clients</p>

                <div className='my-12 flex flex-wrap justify-around items-center gap-8'>
                    <img src={ClientLogo1} alt="" className='h-[5.2rem]' />
                    <img src={ClientLogo2} alt="" className='h-[5.2rem]' />
                    <img src={ClientLogo3} alt="" className='h-[5.2rem]' />
                    <img src={ClientLogo4} alt="" className='h-[5.2rem]' />
                    <img src={ClientLogo5} alt="" className='h-[5.2rem]' />
                    <img src={ClientLogo6} alt="" className='h-[5.2rem]' />
                </div>
            </div>

            <div className='text-center my-8 w-[100vw] bg-neutralSilver py-[1rem]'>
                <div className='mt-10 md:w-1/2 mx-auto text-center'>
                    <h2 className='text-4xl single system text-neutralDGrey font-semibold mb-3'>Manage your entire community in a single system</h2>
                    <p className='text-neutralGrey'>Who is Nextcent suitable for?</p>
                </div>


                <div className='pt-14 pb-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-[100vw] px-[2rem] gap-12 bg-neutralSilver'>
                    {
                        services.map(service => <div key={service.id} className='bg-white px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full'>
                            <div>
                                <div className='bg-[#E8F5E9] mb-4 h-[4.5rem] w-[4.5rem] mx-auto rounded-tl-3xl rounded-br-3xl'>
                                    <img src={service.image} alt="" className='-ml-5 relative w-[5rem]' />
                                </div>
                                <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>{service.title}</h4>
                                <p className='text-sm text-neutralGrey'>{service.description}</p>

                            </div>
                        </div>)
                    }
                </div>
            </div>




        </div>
    )
}