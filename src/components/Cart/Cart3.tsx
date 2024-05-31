import React from 'react';
import { Link } from "react-router-dom";
import { cart } from '../../utils/carttype';
import "./style.css"

const Cart3 = ({title,imganime}:cart) => {
    return (
        <div className="cart flex gap-[15px] bg-[#879bb024] px-2.5 py-[5px] rounded-[5px]">
            <div className="image w-[60%] s:w-[45%] sm:w-[60%]">
                <img className='w-full rounded-[5px] aspect-[1/1.5] object-cover' src={imganime} alt="" />
            </div>
            <div className="Info   text-[color:var(--color-text)] text-sm flex flex-col justify-center text-white gap-2.5 w-full">
                <Link to="" className="title  text-[var(--color-text)]">
                    {title}
                </Link>
                <div className="chapters flex flex-col gap-2.5">
                    <div className="chapter-info text-[13px] flex justify-between">
                        <Link to="" className="chapter tag">الفصل 61</Link>
                        <div className="time text-[#888]">منذ ساعتين</div>
                    </div>
                    <div className="chapter-info text-[13px] flex justify-between">
                        <Link to="" className="chapter tag">الفصل 60</Link>
                        <div className="time text-[#888]">منذ يوم</div>
                    </div>
                    <div className="chapter-info text-[13px] flex justify-between">
                        <Link to="" className="chapter tag">الفصل 59</Link>
                        <div className="time text-[#888]">منذ يومين</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart3;
