import { cart } from '../../utils/carttype';
import { Link } from 'react-router-dom';
import { TbStarFilled } from 'react-icons/tb';
import "./style.css"

const Cart4 = (prop:cart) => {
    return (
        <div className="cart cart4">
        <div className="image">
            <img className='w-full max-w-[130px] rounded-[5px] aspect-[1_/_1.4]' src={prop.imganime} alt="" />
        </div>
        <div className="flex flex-col gap-1.5 w-full text-white mt-[5px] mt-3">
            <Link to="" className="title text-[var(--color-text)]">
                {prop.title}
            </Link>
                <Link to="" className="text-[var(--color-text2)]">الفصل 61</Link>

            <div className="flex gap-[5px] text-[color:var(--color-text2)] font-Fira">
                    <TbStarFilled className='text-[var(--color-text2)]'/>
                    <p className='text-[var(--color-text2)]'>3.9</p>
            </div>
                

        </div>
    </div>
    );
}

export default Cart4;
