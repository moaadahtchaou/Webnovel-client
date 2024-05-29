import { useRef, useState } from 'react';
import { Link } from 'react-router-dom'
import { BsMoonStarsFill } from "react-icons/bs";
import { FaRegSun } from "react-icons/fa";
import { TbSearch } from "react-icons/tb";
import "./style.css"
const NavBar = () => {
    // const [isChecked, setIsChecked] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [isOpen, setIsOpen] = useState(false);


    const handleClick = () => {
        // const buttonRef = event.target;

        setIsOpen(!isOpen);

        buttonRef.current?.classList.toggle('opened');
        buttonRef.current?.setAttribute(
            'aria-expanded',
            buttonRef.current.classList.contains('opened') ? 'true' : 'false'
        );
    };




    const handleCheckboxChange = () => {
        // setIsChecked(prevState => !prevState);
        // if(!isChecked){
        //   document.documentElement.style.setProperty('--color-text', '#ffffff');
        // }
        // else{
        //   document.documentElement.style.setProperty('--color-text', '#ffffff');

        // }
        document.querySelector("html")?.classList.toggle("active")


    };
    return (
        <div className="navbar bg-[#1c8b78] mb-12 fixed z-[9999] top-0 w-[100%]">
            <div className="cocontainer flex items-center justify-between h-12 max767:my-0 max767:mx-3">
                <div className="flex items-center gap-[15px]"> 
                    <div className="Dark-Light">
                        <input className=' w-0 h-0 invisible hidden ' type="checkbox" id="darkmode-toggle"
                            // checked={isChecked} 
                            onChange={handleCheckboxChange} />
                        <label htmlFor="darkmode-toggle" className='w-[37px] h-[17px] relative block cursor-pointer rounded-full bg-[#c3f0e8] transition duration-[0.3s] after:duration-[0.3s] active:after:w-[20px] '>
                            <FaRegSun className="sun absolute w-3 z-[100] top-px left-[2px] fill-[#faf6f6] transition duration-[0.3s] " />
                            <BsMoonStarsFill className="moon absolute w-3 z-[100] top-px left-[23px] fill-[#c4c4c4] transition duration-[0.3s] " />
                        </label>
                    </div>
                    <div className="flex items-center bg-[rgb(22,111,96)] py-0 px-1 rounded-[5px]">
                        <TbSearch className="text-[rgba(255,255,255,0.4)]" />
                        <input dir='rtl' className="SearchBar h-7 bg-inherit text-[#aaa8a8] focus:outline-none border-none placeholder-[#edf0f1] focus:placeholder-opacity-50 max767:w-44 " placeholder='بحث...' type="text" />
                    </div>
                </div>
                <div dir='rtl' className="RightNav flex gap-[15px] max767:hidden">
                    <Link className='btn' to="#">الرئيسية</Link>
                    <Link className='btn' to="#">الرويات</Link>
                    <Link className='btn' to="#">حسابي</Link>
                    <Link className='btn' to="#">تسجيل الدخول</Link>
                    <Link className='btn' to="#">انشاء حساب</Link>
                </div>
                <div dir='rtl' className="RightNav mobile hidden max767:block">
                    <div className={isOpen ? "hamburger-menu active" : "hamburger-menu"}>
                        <button className="menu bg-transparent cursor-pointer flex w-10 p-0 border-[none] " ref={buttonRef} onClick={handleClick} aria-label="Main Menu">
                            <svg viewBox="0 0 100 100">
                                <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                                <path className="line line2" d="M 20,50 H 80" />
                                <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                            </svg>
                        </button>
                    </div>
                    <div className={`${isOpen ? "content active bg-[rgb(28,28,28,.95)] h-full fixed right-0 top-0 w-[225px] z-[99999] mt-12 flex flex-col " : "content  max767:hidden"}`}>
                        <Link className='btn' to="#">الرئيسية</Link>
                        <Link className='btn' to="#">الرويات</Link>
                        <Link className='btn' to="#">حسابي</Link>
                        <Link className='btn' to="#">تسجيل الدخول</Link>
                        <Link className='btn' to="#">انشاء حساب</Link>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default NavBar;
