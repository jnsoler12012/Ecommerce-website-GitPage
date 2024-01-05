import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material/';
import { MobileStepper } from '@mui/material/';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Hero11 from "Assets/Hero1.svg"
import Hero3 from '../assets/img/Hero3.svg'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function () {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = 3;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ width: '100%', height: '100vh', flexGrow: 1, display: 'flex', overflowX: 'hidden', flexDirection: 'column', justifyContent: 'center' }} className={'prevent-select'}>
            <AutoPlaySwipeableViews
                className='w-full prevent-select'
                interval={40000000000}
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                <div className=" pt-[4rem] flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                    <div>
                        <img src={Hero11} alt="" className='md:w-[28rem] w-[12rem]' />
                    </div>
                    {/* hero text */}
                    <div className="md:w-1/2">
                        <h1 className="sm:text-6xl text-4xl font-semibold mb-4 text-neutralDGrey md:w-[38rem] w-[27rem] leading-snug">Lessons and insights <span className="text-brandPrimary leading-snug">from 8 years</span></h1>
                        <p className="text-neutralGrey text-base mb-8">Where to grow your business as a photographer: site or social media?</p>
                        <button className="btn-primary">Register</button>
                    </div>
                </div>

                <div className='pt-[4rem] px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
                    <div className='md:w-11/12 mx-auto flex flex-col-reverse md:flex-row justify-between items-center gap-12'>
                        <div>
                            <img src={Hero3} alt="" className='md:w-[31rem] w-[22rem]' />
                        </div>
                        <div className='md:w-[42%] w-[100%]'>
                            <h2 className='md:text-4xl text-3xl text-neutralDGrey font-semibold mb-4 md:w-[19rem] w-[29rem]'>The unseen of spending three years at Pixelgrade</h2>
                            <p className='md:w-[19rem] w-[26rem] text-md text-neutralGrey mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. </p> <button className='btn-primary' >Learn More</button>
                        </div>
                    </div>
                </div>


                <div className='pt-[4rem] lg:px-14 max-w-screen-2xl'>
                    <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                        <div>
                            <img src={''} alt="" className='md:w-[38rem] w-[20rem]' />

                        </div>
                        <div className='md:w-[42%] w-[100%]'>
                            <h2 className='md:text-4xl text-3xl text-neutralDGrey font-semibold mb-4 md:w-[19rem] w-[29rem]'>The unseen of spending three years at Pixelgrade</h2>
                            <p className='md:w-[19rem] w-[26rem] text-md text-neutralGrey mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta.</p> <button className='btn-primary' >Learn More</button>
                        </div>
                    </div>
                </div>





            </AutoPlaySwipeableViews>
            <MobileStepper
                variant="dots"
                sx={{
                    position: 'absolute',
                    background: 'rgb(255, 255, 255)',
                    background: 'linear-gradient(90deg, rgba(255,255,255,0) 35%, rgba(222,222,222,1) 50%, rgba(255,255,255,0) 65%)',
                }}
                steps={maxSteps}
                activeStep={activeStep}
                nextButton={
                    <div>
                    </div>
                }
                backButton={
                    <div>
                    </div>
                }
            />
        </Box>
    );
}