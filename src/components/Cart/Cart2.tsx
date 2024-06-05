import { Link } from "react-router-dom";
import { cart } from "../../utils/carttype";
import "./style.css"

const Cart2=(prop:cart) => {
    return (
        <div className="cart flex gap-2.5 bg-[#166F60] items-center p-1.5 rounded-[15px]">
            <div className="image w-[90%]">
                <img className="w-full aspect-[1_/_1.4] object-cover max-h-[180px] rounded-[5px] max1092:max-h-[170px]" src={prop.imganime} alt="" />
            </div>
            <div className="Info flex flex-col gap-[15px] w-full text-white max1092:gap-[5px]">
                <div className="td flex flex-col gap-2.5 max1092:gap-[5px]">
                    <Link to="/solo" className="title text-sm font-medium hover:text-[#9ea0a0] max1092:text-xs">
                    {prop.title?(()=>{
                    if (prop.title.length > 14) {
                        const lastSpaceIndex = prop.title.substring(0, 14).lastIndexOf(' ')
                        return prop.title.substring(0, lastSpaceIndex) + '...';
                    }
                    else {
                        return prop.title
                    }
                })():"N/A"}
                    </Link>
                    <div className="date text-[10px]">
                        <p>15 يناير, 2024</p>
                    </div>
                </div>
                <div className="chapters flex flex-col gap-2.5 max1092:gap-[5px]">
                    <a className="tag " href="">104</a>
                    <a className="tag" href="">103</a>
                    <a className="tag" href="">102</a>
                </div>
            </div>
        </div>
    )
}
export default  Cart2;