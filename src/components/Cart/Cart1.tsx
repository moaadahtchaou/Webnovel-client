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
                <div className="rank">{rank}</div>
                <div className="Info-Image">
                    <div className="Img">
                        <img src={imganime} alt="" />
                    </div>
                    <div className="Info">
                        <Link to="" className="title ">{title}</Link>
                        <div className="genres">
                            <p>النوع:</p>
                            <div className="genre">
                                <Link to="" className="tag w-[-moz-fit-content]">فانتازيا</Link>
                                <Link to="" className="tag w-[-moz-fit-content] ">دراما</Link>
                                <Link to="" className="tag w-[-moz-fit-content]">حركة ومغامرة</Link>
                            </div>
                        </div>
                        <div className="rating">
                            <TbStarFilled />
                            <p>3.9</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cart1;