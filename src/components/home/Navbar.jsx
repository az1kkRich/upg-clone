import React from 'react'

import HeaderLogo from '../../assets/Header.png'
import Search from 'antd/es/transfer/search'
import { Button } from 'antd'
import { BsCashCoin, BsHeart } from 'react-icons/bs'
import { MdSettingsInputComponent } from 'react-icons/md'
import { FiShoppingCart, FiSun, FiUser } from 'react-icons/fi'
import { CiChat2 } from 'react-icons/ci'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="container mx-auto px-4">
            <div className='flex flex-row gap-3 h-10 justify-between items-center w-full mt-3  '>
                
                <div className='w-1/7 flex items-center'>
                <Link to={'/'} className='h-auto w-70'>
                    <img src={HeaderLogo} className='h-auto w-70' alt="" />
                
                </Link>
                </div>
                <div className="w-1/7"></div>
                <div className="w-2/7 flex justify-center items-center!">
                    <Search placeholder="input search text" size='large' />
                </div>
                <div className="w-3/7 flex gap-5 px-3 justify-end items-center">
                    <div className="flex flex-fol justify-center">
                        <Button shape='circle' icon={<BsCashCoin size={22} />} className='flex flex-col border-none! gap-0! ' ><span className='text-[10px]'>UZS/USD</span></Button>
                    </div>
                    <div className="flex flex-fol justify-center">
                        <Button shape='circle' icon={<MdSettingsInputComponent size={22} />} className='flex flex-col border-none! gap-0! ' ><span className='text-[10px]'>Taqqoslash</span></Button>
                    </div>
                    <div className="flex flex-fol justify-center">
                        <Button shape='circle' icon={<BsHeart size={22} />} className='flex flex-col border-none! gap-0! ' ><span className='text-[10px]'>Yoqtirganlar</span></Button>
                    </div>
                    <div className="flex flex-fol justify-center">
                        <Button shape='circle' icon={<FiShoppingCart size={22} />} className='flex flex-col border-none! gap-0! ' ><span className='text-[10px]'>Svatcha</span></Button>
                    </div>
                    <div className="flex flex-fol justify-center">
                        <Button shape='circle' icon={<CiChat2 size={22} />} className='flex flex-col border-none! gap-0! ' ><span className='text-[10px]'>Contactlar</span></Button>
                    </div>
                    <div className="flex flex-fol justify-center">
                        <Button shape='circle' icon={<FiSun size={22} />} className='flex flex-col border-none! gap-0! ' ><span className='text-[10px]'>Mavzu</span></Button>
                    </div>
                    <Link to={'/login'} className="flex flex-fol border p-2 justify-center">
                        <Button shape='circle' icon={<FiUser size={24} />} className='flex flex-col border-none! gap-0! ' ><span className='text-[10px]'>Login</span></Button>
                    </Link>

                </div>

            </div>
        </div>
    )
}

export default Navbar
