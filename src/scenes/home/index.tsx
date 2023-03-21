import React from 'react'
import { SelectedPage } from '@/shared/types'
import ActionButton from '@/shared/ActionButton'
import HomePageText from '@/assets/HomePageText.png'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import SponsorForbes from '@/assets/SponsorForbes.png'
import SponsorFortune from '@/assets/SponsorFortune.png'
import SponsorRedBull from '@/assets/SponsorRedBull.png'
import useMediaQuery from '@/hooks/useMediaQuery'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { delay, motion } from "framer-motion"


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveScreen = useMediaQuery("(min-width: 1060px)")
    return (
    <section id='home' className='bg-gray-20 py-10 md:pb-0 gap-16 md:h-full'>
        <motion.div 
            onViewportEnter={()=>setSelectedPage(SelectedPage.Home)}
            className="mx-auto w-5/6 justify-center items-center md:flex md:h-5/6">
            <div className="md:basis-3/5 z-10 mt-32">
                <motion.div
                    whileInView="visible"
                    initial="hidden"
                    transition={{delay:0.2 ,duration:0.5}}
                    variants={{
                        hidden : {opacity : 0 ,x :-50},
                        visible : {opacity : 1 , x : 0}
                }}
                    className="md:mt-20">
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 md:before:content-evolvetext before:-z-10">
                            <img src={HomePageText} alt="home-page-text"/>
                        </div>
                    </div>
                    <p className='mt-8 text-sm'>
                    Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
                    Studios to get the Body Shapes That you Dream of.. Get Your Dream
                    Body Now.
                    </p>
                </motion.div>
                <div className="mt-8 flex items-center gap-8">
                    <ActionButton setSelectedPage={setSelectedPage}>
                    Join Now
                    </ActionButton>
                    <AnchorLink
                    className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                    href={`#${SelectedPage.ContactUs}`}
                    >
                    <p>Learn More</p>
                    </AnchorLink>
                </div>
            </div>

            <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
                <img src={HomePageGraphic} alt="" />
            </div>
        </motion.div>

        {isAboveScreen && (
            <div className="w-full h-[150px] bg-primary-300 py-10">
                <div className="w-5/6 mx-auto">
                    <div className="w-3/5 flex justify-between items-center gap-8">
                        <img src={SponsorForbes} alt="" />
                        <img src={SponsorFortune} alt="" />
                        <img src={SponsorRedBull} alt="" />
                    </div>
                </div>
            </div>
        )}
    </section>
  )
}

export default Home