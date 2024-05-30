import { Link } from "react-router-dom";
import { TbStarFilled } from "react-icons/tb";
import "./style.css"
import { cart } from "../../utils/carttype";
import React from "react";
import "./style.css"

const Cart1:React.FC<cart> =({rank,title,imganime}) => {
    return (
        <div className="pad">
            <div className="cart flex flex-row-reverse items-center">
                <div className="border border-[color:var(--color-text2)] text-[color:var(--color-text2)] ml-2.5 pt-[5px] pb-[3px] px-2 rounded-[3px] border-solid font-Fira">{rank}</div>
                <div className="Info-Image flex flex-row-reverse items-center gap-2.5">
                    <div className="Img h-[100px]">
                        <img className=" h-full rounded max-w-none" src={imganime} alt="" />
                    </div>
                    <div className="Info text-[color:var(--color-text)] text-end flex flex-col gap-2.5">
                        <Link to="" className="title text-[15px]">{title}</Link>
                        <div className="genres flex gap-[5px] text-[15px] items-center">
                            <p className="text-[#888]">النوع:</p>
                            <div className="genre flex">
                                <Link to="" className="tag w-[-moz-fit-content]">فانتازيا</Link>
                                <Link to="" className="tag w-[-moz-fit-content] ">دراما</Link>
                                <Link to="" className="tag w-[-moz-fit-content]">حركة ومغامرة</Link>
                            </div>
                        </div>
                        <div className="rating  flex flex-row-reverse items-center text-[color:var(--color-text2)] gap-[5px]">
                            <TbStarFilled />
                            <p className="text-[color:var(--color-text2)] font-Fira">3.9</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cart1;