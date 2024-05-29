import { TbArrowBadgeUpFilled } from "react-icons/tb";
import endless from "../../assets/Endless.jpeg";
import reverend from "../../assets/reverend-insanity.jpg";
import solo from "../../assets/solo.jpg";
import stronest from "../../assets/Strongest Necromancer.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import Cart2 from "../Cart/Cart2";
import "./style.css"

const Popular =() => {
    return (
        <div className="popular containerbg">
            <div className="bar-simple ">
                <p className="barp">شائع الان</p>
                <hr />
            </div>
            <div className="swipers flex items-center">
                <div className="swipbut prevs bg-[#429486] text-[#D9D9D9] cursor-pointer mx-[7px] my-0 pt-2.5 pb-[7px] px-px rounded-[20px]">
                    <TbArrowBadgeUpFilled className="prev rotate-90" />
                </div>
                <Swiper

                    slidesPerView={2.3}
                    navigation={{
                        nextEl: ".nexts",
                        prevEl: ".prevs",
                        disabledClass: "swiper-button-disabled",
                    }}

                    className="mySwiper"
                    loop={true}
                    // autoplay={{
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    // }}

                    modules={[Autoplay, Pagination, Navigation]}

                    breakpoints={{
                        0: {
                            slidesPerView: 1.4,
                            spaceBetween: 10

                        },
                        460: {
                            slidesPerView: 1.8,
                            spaceBetween: 13
                        },
                        500: {
                            slidesPerView: 2.2,
                            spaceBetween: 13
                        },
                        600: {
                            slidesPerView: 2.5,
                            spaceBetween: 15
                        },
                        620: {
                            slidesPerView: 2.8,
                            spaceBetween: 15
                        },
                        750: {
                            slidesPerView: 3.2,
                            spaceBetween: 17
                        },
                        1024: {
                            slidesPerView: 3.5,
                            spaceBetween: 17
                        },
                        1092: {
                            slidesPerView: 2.2,
                            spaceBetween: 17
                        },
                        1280: {
                            slidesPerView: 3.2 ,
                            spaceBetween: 17
                        },
                        1536: {
                            slidesPerView: 4.2,
                            spaceBetween: 17
                        },

                    }}>
                    <SwiperSlide>
                        <Cart2 title="رفع المستوى" imganime={solo}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cart2 title="مسار لا نهاية له" imganime={endless}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cart2 title="القس المجنون" imganime={reverend}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cart2 title="مستحضر الأرواح" imganime={stronest}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cart2 title="رفع المستوى" imganime={solo}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cart2 title="مسار لا نهاية له" imganime={endless}/>
                    </SwiperSlide>

                </Swiper>
                <div className="swipbut nexts  bg-[#429486] text-[#D9D9D9] cursor-pointer mx-[7px] my-0 pt-2.5 pb-[7px] px-px rounded-[20px]">
                    <TbArrowBadgeUpFilled className="next -rotate-90" />
                </div>
            </div>
        </div>
    )
}
export default Popular;