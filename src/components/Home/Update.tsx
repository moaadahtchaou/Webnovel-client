import { Link } from "react-router-dom";
import Cart3 from "../Cart/Cart3";
import endless from "../../assets/Endless.jpeg";
import reverend from "../../assets/reverend-insanity.jpg";
import solo from "../../assets/solo.jpg";
import stronest from "../../assets/Strongest Necromancer.jpeg";
import "./style.css";
const Update = () => {
    return (
        <div className="update containerbg">
            <div className="bar bg-[#1c8b78] ">
                <p className="barp text-white">أخر التحديثات</p>
                <div className="All">
                    <Link to="">إظهار الكل</Link>
                </div>
            </div>

            <div className="carts grid gap-[15px] grid-cols-[repeat(auto-fit,minmax(240px,max-content))] mx-[30px] my-0 max767:grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
                <Cart3 title="مستحضر الأرواح" imganime={stronest}/>
                <Cart3 title="مسار لا نهاية له" imganime={endless}/>
                <Cart3 title="القس المجنون" imganime={reverend}/>
                <Cart3 title="رفع المستوى" imganime={solo}/>
                <Cart3 title="مستحضر الأرواح" imganime={stronest}/>
                <Cart3 title="مسار لا نهاية له" imganime={endless}/>
                <Cart3 title="القس المجنون" imganime={reverend}/>

            </div>



        </div>
    );
}

export default Update;
