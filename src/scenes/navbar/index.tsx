import React, { useState } from 'react'
import Logo from '@/assets/Logo.png'
import{Bars3Icon ,XMarkIcon} from '@heroicons/react/24/solid'
import Link from './Link'
import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage : boolean ;
}

const Navbar = ({isTopOfPage,selectedPage, setSelectedPage}: Props) => {
const isAboveScreen = useMediaQuery("(min-width: 1060px)")
const [menuToglled,setMenuToglled] = useState<boolean>(false)
const navbarBg = isTopOfPage ? "" : "bg-primary-100 "
    return (
        <div className={`${navbarBg} flex items-center justify-between fixed top-0 z-30 w-full py-6 bg-gray-20`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <div className="flex items-center justify-between w-full gap-16">
                    <img src={Logo} alt="" />
                    
                  {  isAboveScreen ?
                 ( <div className="flex items-center justify-between w-full">
                        <div className="flex items-center justify-between gap-8 text-sm">
                            <Link page="home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page="Our class" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        </div>
                        <div className="flex items-center justify-between gap-8">
                            <p>Sign In</p>
                            <ActionButton  setSelectedPage={setSelectedPage}>Become a member</ActionButton>
                        </div>
                    </div>) : (
                    <button 
                        className="rounded-full bg-secondary-500 p-2"
                        onClick={()=>setMenuToglled(!menuToglled)}
                    >
                        <Bars3Icon className='h-6 w-6 text-white'/>
                    </button>
                    )
                    }
                    {
                       !isAboveScreen && menuToglled && (
                        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl ">
                            <div className="flex justify-end p-12">
                                <button onClick={()=>setMenuToglled(!menuToglled)}>
                                    <XMarkIcon className='h-6 w-6 text-gray-400'/>
                                </button>
                            </div>

                            <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                                <Link page="home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                                <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                                <Link page="Our class" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                                <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            </div>
                            
                        </div>
                       )
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar


