import { useEffect } from 'react';
import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const navItems = [
    {path:'', content:'Home'},
    {path:'destination', content:'Destination'},
    {path:'crew', content:'Crew'},
    {path:'technology', content:'Technology'}
]

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    let location = useLocation();
    const toggleNavbar = e => {
        e.preventDefault();
        setIsOpen(prevState => !prevState)
    }

    useEffect(() => {
        setIsOpen(false)
    }, [location])

    return (
        <header className="flex justify-between p-6  fixed w-full z-50 lg:pe-0 xl:p-10  xl:pe-0" >
            <NavLink to={'/'} className={"lg:self-center"} >
                <img src="./logo.svg" alt="" />
            </NavLink>

            <span className='hidden lg:block bg-midnight-blue-100 h-[1px] ms-14 -me-14 self-center w-20 grow'></span>

            <button type='button' aria-label={`${isOpen ? 'Close menu' : 'Open menu'}`} className='text-center md:hidden' onClick={toggleNavbar}>
              <img src={isOpen ? "./assets/shared/icon-close.svg": './assets/shared/icon-hamburger.svg' } />
            </button>

            <nav className={`navbar ${isOpen ? 'open' : ''}`}>
                <ul className='flex flex-col justify-center gap-4 md:flex-row md:items-center lg:ps-20 lg:pe-40 md:gap-8 lg:justify-between  '>
                    {navItems && navItems.map((item, index) => (
                        <li key={index} >
                            <NavLink to={item.path} className={({isActive})=> `navbar-item ${isActive ? "active" : ''}`}>
                                <span className='mr-4 font-bold text-white md:hidden xl:block'>0{index}</span>
                                { item.content}
                            </NavLink>
                        </li>
                    ))}
                    
                </ul>
            </nav>
            
        </header>
    )
}