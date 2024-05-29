import { Outlet, Link } from "react-router-dom";
import { useState } from 'react';
import endless from "../assets/Endless.jpeg";
import reverend from "../assets/reverend-insanity.jpg";
import solo from "../assets/solo.jpg";
import stronest from "../assets/Strongest Necromancer.jpeg";
import Cart1 from "./Cart/Cart1"
import "./style.css"
const Rightbarlayout =() => {
    const buttonData = [
        { id: 1, label: 'أسبوعي' },
        { id: 2, label: 'شهريا' },
        { id: 3, label: 'عام' },
        // Add more button data as needed
    ];
    const [activeButton, setActiveButton] = useState(buttonData[0].id);

    const handleClick = (buttonId:number) => {
        setActiveButton(buttonId);
    };
    return (
        <div className="doublbar flex gap-6 items-start flex-row max1092:flex-col max1092:items-stretch ">
            <Outlet />
            <div className="rightbar bg-[color:var(--color-bg)] flex flex-col gap-[15px] pb-[30px] rounded-[5px]">
                <div className="bar-simple">
                    <p className="barp text-end">رائج</p>
                    <hr />
                </div>
                <div className="date pad selects flex justify-around bg-[color:var(--color-bg2)] px-0 py-2.5 rounded-[5px]">
                    {buttonData.map((button) => (
                        <Link to=""
                            key={button.id}
                            className={`${activeButton === button.id ? 'active bg-[#1c8b78] text-white rounded-[5px]' : ''} no-underline text-[color:var(--color-text)] px-5 py-[5px]`}
                            onClick={() => handleClick(button.id)}
                        >
                            <p>{button.label}</p>
                        </Link>
                    ))}
                </div>
                <div className="carts flex flex-col gap-4">
                    <Cart1 title="مسار لا نهاية له" imganime={endless} rank={1}/>
                    <hr />
                    <Cart1 title="رفع المستوى" imganime={solo} rank={2}/>
                    <hr />
                    <Cart1 title="القس المجنون" imganime={reverend} rank={3}/>
                    <hr />
                    <Cart1 title="مستحضر الأرواح" imganime={stronest} rank={4}/>
            

                </div>
            </div>
        </div>
    )
}
export default  Rightbarlayout;