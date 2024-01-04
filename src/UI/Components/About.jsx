import React from 'react'
import { AboutBrandImage, AboutClick, AboutGroup, AboutHands, AboutPayment, ServiceIconBuilding, ServiceIconGroup, ServiceiconHands } from '../assets/img/about'
import { ClientLogo1, ClientLogo2, ClientLogo3, ClientLogo4, ClientLogo5, ClientLogo6 } from '../assets/img/clients'

export default function () {
    return (
        <div>

            <div className='lg:px-14 max-2-screen-2xl mx-auto py-16 w-[100vw] px-[2rem]'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                    <div className='md:w-1/3 flex justify-center'>
                        <img src={AboutBrandImage} alt="" className='md:w-[21rem] w-[25rem]' />
                    </div>
                    {/* stats */}
                    <div className='md:w-2/3 mx-auto'>
                        <div>
                            <p className='md:w-4/5 text-sm text-neutralGrey mb-8 leading-7'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                            <h5 className='text-brandPrimary text-xl font-semibold mb-2'>John Doe</h5>
                            <p className='text-base text-neutralGray mb-8'>British Dragon Boat Racing Association</p>
                            <div>
                                <div className='flex items-center gap-8 flex-wrap'>
                                    <img src={ClientLogo1} alt="" className='cursor-pointer' />
                                    <img src={ClientLogo2} alt="" className='cursor-pointer' />
                                    <img src={ClientLogo3} alt="" className='cursor-pointer' />
                                    <img src={ClientLogo4} alt="" className='cursor-pointer' />
                                    <img src={ClientLogo5} alt="" className='cursor-pointer' />
                                    <img src={ClientLogo6} alt="" className='cursor-pointer' />
                                    <div className='flex items-center gap-8'>
                                        <a
                                            href="/"
                                            className="font-bold text-brandPrimary hover:text-neutral-700 hover-filter">
                                            Meet all customers{" "}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="17"
                                                height="11"
                                                viewBox="0 0 17 11"
                                                fill="none"
                                                className="inline-block ml-2 filter-black">
                                                <path d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905" stroke="#4CAF4F" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-9 lg:px-14 max-2-screen-2xl mx-auto bg-neutralSilver py-16 w-[100vw]'>
                <div className='flex md:flex-row flex-col'>
                    <div className='md:w-1/2  md:text-left md:mb-[0rem] text-center mb-[5rem]'>
                        <h2 className='text-5xl text-neutralDGrey font-semibold mb-4 md:w-[100%] '>Helping a local <br />
                            <span className='text-brandPrimary'>business reinvent itself</span></h2>
                        <p>We reached here with our hard work and dedication</p>
                    </div>


                    <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
                        <div className='space-y-8'>
                            <div className='flex items-center gap-4'>
                                <img src={AboutGroup} alt="" className='h-[3rem]' />
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold' >2,245,341</h4>
                                    <p>Members</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <img src={AboutHands} alt="" className='h-[3.4rem]' />
                                <div>
                                    <h4 className="text-2xl text-neutralDGrey font-semibold">46,328</h4>
                                    <p>Clubs</p>
                                </div>
                            </div>
                        </div>
                        <div className='space-y-8'>
                            <div className='flex items-center gap-4'>
                                <img src={AboutClick} alt="" className='h-[3.4rem]' />
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>828,867</h4>
                                    <p>Event bookings</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src={AboutPayment} alt="" className='h-[3rem]' />
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>1,926,436</h4>
                                    <p>Payments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}