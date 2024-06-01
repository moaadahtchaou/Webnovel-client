
import Cart5 from '../Cart/Cart5';
import endless from "../../assets/Endless.jpeg";
import reverend from "../../assets/reverend-insanity.jpg";
import solo from "../../assets/solo.jpg";
import stronest from "../../assets/Strongest Necromancer.jpeg";
import { Link } from 'react-router-dom';

const New = () => {
    return (
        <div className="new green-bg containerbg">
            <div className="bar bg-[#1c8b78]">
                <p className="barp text-slate-100">أضيف حديثًا</p>
                <div className="All">
                    <Link to="">إظهار الكل</Link>
                </div>
            </div>
        
        <div className="carts2 grid gap-[25px] grid-cols-[repeat(auto-fit,minmax(110px,max-content))] mx-[25px] my-0 max767:grid-cols-[repeat(auto-fit,minmax(100px,max-content))]">
            <Cart5 title='مسار لا نهاية له' imganime={endless}/>
            <Cart5 title="القس المجنون" imganime={reverend}/>
            <Cart5 title="مستحضر الأرواح" imganime={stronest}/>
            <Cart5 title="رفع المستوى" imganime={solo}/>
            <Cart5 title='مسار لا نهاية له' imganime={endless}/>
            <Cart5 title="القس المجنون" imganime={reverend}/>
            <Cart5 title="مستحضر الأرواح" imganime={stronest}/>
            <Cart5 title="رفع المستوى" imganime={solo}/>
            <Cart5 title='مسار لا نهاية له' imganime={endless}/>
            <Cart5 title="القس المجنون" imganime={reverend}/>
        </div>
    </div>

    );
}

export default New;
