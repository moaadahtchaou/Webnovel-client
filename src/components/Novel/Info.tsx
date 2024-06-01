import reverend from "../../assets/reverend-insanity.jpg";
import { TbStarFilled } from "react-icons/tb";
import "./style.css"
import { Rating } from 'react-simple-star-rating'
const novelData = {
    id: 1,
    title: "القس المجنون",
    titles: "Reverend Insanity",
    author: "Gu Zhen Ren",
    nativeLanguage: "صينية",
    released: "2012",
    type: "فانتازيا",
    description: "قصة الشرير فانغ يوان الذي وُلد من جديد قبل 500 عام في الماضي مع زيز ربيع الخريف الذي قام بعناء بصقله. مع حكمته العميقة وتجارب الحياة والموت، يسعى للتغلب على أعدائه بالمهارة والذكاء! قاسٍ وبدون مبادئ، ولا يتهاون حتى يصل إلى أهدافه. في هذا العالم القاسي حيث يتدرب الأشخاص باستخدام الغو (الوحوش السحرية في هذا العالم). فانغ يوان يجب أن يرتفع فوق الجميع باستخدام قوته الخاصة .",
    chapters: [
        { number: 1, title: "الفصل الأول", releaseDate: "سبتمبر 1, 2023" },
        { number: 32, title: "قرية الصياد (1)", releaseDate: "سبتمبر 8, 2023" },
        // أضف المزيد من الفصول هنا
    ],
};
const Info = () => {
    const novel = novelData
    return (
        <div className=" bg-[var(--color-novel)]">
            <div className="cocontainer 2xl:w-[880px] ">
                <div className="novel-details py-10 ">
                    <div dir="rtl" className="flex gap-8 ">
                        <img src={reverend} alt={novel.title} className=" h-96 rounded-[5px]" />
                        <div className="novel-info flex flex-col gap-1">
                            <p className=" px-2 py-1 bg-[var(--color-text)] text-[var(--color-bg)] rounded-[5px] w-fit text-[13px]">مستمرة</p>
                            <p className=" text-[25px] text-[var(--color-text)] tracking-wider">{novel.title}</p>
                            <p className="text-[var(--color-1)] mt-1 text-[15px] ">{novel.titles}</p>
                            <div className="moreinfo my-2 grid grid-cols-[auto,auto] gap-2 pr-1">
                                <span>
                                    <p>المؤلف</p>
                                    <p>
                                        {novel.author}
                                    </p>
                                </span>
                                <span>
                                    <p>اللغة الأصلية</p>
                                    <p>
                                        {novel.nativeLanguage}
                                    </p>
                                </span>
                                <span>
                                    <p>التصنيفات</p>
                                    <p>
                                        {novel.type}
                                    </p>
                                </span>
                                <span>
                                    <p>تاريخ الإصدار</p>
                                    <p>
                                        {novel.released}
                                    </p>
                                </span>
                            </div>
                            <Rating className="mt-1"
                                fillIcon={<TbStarFilled size={25} />}
                                emptyIcon={<TbStarFilled size={25} />}
                                allowFraction
                                tooltipArray={["سيئ جدا", "سيئ جدا+  ", "سيئ", "سيئ+", "متوسط", "متوسط+", "رائع", "رائع+", "ممتاز", "ممتاز+"]}
                                showTooltip
                                rtl
                                tooltipStyle={{ fontSize: 12 }}
                            />
                            <div className="desc mt-3">
                                <p className="text-[var(--color-text)] tracking-wide leading-normal font-NotoKufi font-light">
                                    {novel.description}
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="novel-chapters">
                        <h2>الفصول</h2>
                        <ul>
                            {novel.chapters.map((chapter) => (
                                <li key={chapter.number}>
                                    <a href={`/novel/${novel.id}/chapter/${chapter.number}`}>
                                        {chapter.title} - <em>{chapter.releaseDate}</em>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Info;
