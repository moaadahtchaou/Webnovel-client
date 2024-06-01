import { cart } from '../../utils/carttype';
import { Link } from 'react-router-dom';
import "./style.css"

const Cart5 = (prop:cart) => {
    return (
        <div className="cart cart4">
        <div className="image">
            <img className='w-full max-w-[130px] rounded-[5px] aspect-[1_/_1.4]' src={prop.imganime} alt="" />
        </div>
        <div className="flex flex-col gap-1.5 w-full text-white mt-[5px] mt-3">
            <Link to="" className="title text-sm font-medium text-[var(--color-text)]">
                {prop.title}
            </Link>
                <Link to="" className="chapter text-[#888]">فانتازيا</Link>
        </div>
    </div>
    );
}

export default Cart5;
