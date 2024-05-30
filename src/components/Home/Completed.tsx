import { Link } from 'react-router-dom';
import Cart4 from '../Cart/Cart4';
import endless from "../../assets/Endless.jpeg";
import reverend from "../../assets/reverend-insanity.jpg";
import solo from "../../assets/solo.jpg";
import stronest from "../../assets/Strongest Necromancer.jpeg";
import "./style.css"
const Completed = () => {
    return (
        <div className="completed containerbg">
        <div className="bar-simple ">
            <div className="bar">
                <p className='barp'>الروايات المكتملة</p>
                <div className="All">
                    <Link className=' !bg-[#1c8b78]' to="">إظهار الكل</Link>
                </div>
            </div>
            <hr />
        </div>
        <div className="carts2 grid gap-[25px] grid-cols-[repeat(auto-fit,minmax(110px,max-content))] mx-[25px] my-0 max767:grid-cols-[repeat(auto-fit,minmax(100px,max-content))]">
            <Cart4 title='مسار لا نهاية له' imganime={endless}/>
            <Cart4 title="القس المجنون" imganime={reverend}/>
            <Cart4 title="مستحضر الأرواح" imganime={stronest}/>
            <Cart4 title="رفع المستوى" imganime={solo}/>
            <Cart4 title='مسار لا نهاية له' imganime={endless}/>
            <Cart4 title="القس المجنون" imganime={reverend}/>
            <Cart4 title="مستحضر الأرواح" imganime={stronest}/>
            <Cart4 title="رفع المستوى" imganime={solo}/>




        </div>

    </div>
    );
}

export default Completed;
