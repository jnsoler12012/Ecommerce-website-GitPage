import React from 'react'
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineCodeSandbox } from "react-icons/ai";

import LogoFooter from '../assets/img/LogoFooter.svg'

export default function () {
    const footerInfo = [
        {
            title: "company",
            content: [
                "About us", "Blog", "Contact us", "Pricing", "Testimonials"
            ]
        },
        {
            title: "Support",
            content: [
                "Help center", "Terns of services", "Legal", "Privacy policy", "Status"
            ]
        }
    ]

    return (
        <div className="w-full p-[2rem] pb-1 bg-[#263238]">
            <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                <div className='space-y-4 mb-8 text-white'>

                    <a href="" className='text-2xl font-semibold flex items-center space-x-3'>
                        <img src={LogoFooter} alt="" className='w-[4rem] inline-block items-center' />
                        <span className='text-[#c9dee8] text-[2rem]'>CENT-O</span>
                    </a>
                    <div>
                        <p className='mb-1'>Copyright © 2023</p>
                        <p>All rights reserved</p>
                    </div>

                </div>
                <div className='flex md:flex-row flex-col justify-end gap-[4.5rem] sm:mt-4 w-[75%]'>
                    {
                        footerInfo.map(footerSection => {
                            return <div key={footerSection.title}>
                                <h2 className='mb-6 text-md font-bold uppercase text-white'>{footerSection.title}</h2>
                                <ul className='flex flex-wrap text-sm text-white flex-col space-y-4'>
                                    {
                                        footerSection.content.map((footerSectionOption) => <li key={footerSectionOption} className='last:mr-0 md:mr-6'>
                                            <a href="" className='hover:underline'>{footerSectionOption}</a>
                                        </li>)
                                    }
                                </ul>
                            </div>
                        })
                    }
                </div>
            </div>
            <hr className='w-full mt-[2rem] mb-[1rem] border-gray-200 sm:mx-auto dark:border-gray-700' />
            <div className="w-full mb-[5px] sm:flex sm:items-center sm:justify-between h-[3rem]">
                <div className="text-[1rem] text-white sm:text-center">
                    © 2022<a href="#" className="ml-1 hover:underline">Nicolas Soler</a>
                </div>
                <div className='mt-4 flex space-x-6 sm:mt-0 sm:justify-center'>

                    <div className='rounded-full bg-iconBackground w-[2.5rem] h-[2.4rem] flex content-center items-center justify-center'>
                        <a href="https://github.com/jnsoler12012" target="_blank" className='text-white hover:text-[#EFEFEF]'>
                            <FaGithub size={30} />
                        </a>
                    </div>
                    <div className='rounded-full bg-iconBackground w-[2.5rem] h-[2.4rem] flex content-center items-center justify-center'>
                        <a href="https://www.linkedin.com/in/jose-n-soler/" target="_blank" className='text-white hover:text-[#EFEFEF]'>
                            <CiLinkedin size={30} />
                        </a>
                    </div>
                    <div className='rounded-full bg-iconBackground w-[2.5rem] h-[2.4rem] flex content-center items-center justify-center'>
                        <a href="" target="_blank" className='text-white hover:text-[#EFEFEF]'>
                            <AiOutlineCodeSandbox size={35} />
                        </a>
                    </div>
                    <div className='rounded-full bg-iconBackground w-[2.5rem] h-[2.4rem] flex content-center items-center justify-center'>
                        <a href="" target="_blank" className='text-white hover:text-[#EFEFEF]'>
                            <RiFacebookCircleLine size={35} />
                        </a>
                    </div>

                </div>
            </div>
        </div>

    )
}