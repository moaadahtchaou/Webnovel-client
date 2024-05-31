import reverend from "../assets/reverend-insanity.jpg";
import "./style.css"
const novelData = {
    id: 1,
    title: "القس المجنون",
    author: "Gu Zhen Ren",
    nativeLanguage: "صينية",
    released: "2012",
    type: "فانتازيا",
    description: "قصة الشرير فانغ يوان الذي وُلد من جديد قبل 500 عام ",
    chapters: [
        { number: 1, title: "الفصل الأول", releaseDate: "سبتمبر 1, 2023" },
        { number: 32, title: "قرية الصياد (1)", releaseDate: "سبتمبر 8, 2023" },
        // أضف المزيد من الفصول هنا
    ],
};
const Novel = () => {
    const novel = novelData

    return (
        <div className="novel-details mx-32">
            <div dir="rtl" className="flex gap-8 ">
                <img src={reverend} alt={novel.title} className=" h-96 rounded-[5px]" />
                <div className="novel-info">
                    <p className="">مستمرة</p>
                    <h1>{novel.title}</h1>
                    <span>
                        <p>المؤلف:</p>
                        <p>
                            {novel.author}
                        </p>
                    </span>
                    <span>
                        <p>اللغة الأصلية:</p>
                        <p>
                            {novel.nativeLanguage}
                        </p>
                    </span>
                    <span>
                        <p>الصنف:</p>
                        <p>
                            {novel.type}
                        </p>
                    </span>
                    <span>
                        <p>تاريخ الإصدار:</p>
                        <p>
                            {novel.released}
                        </p>
                    </span>
                    <span>
                        <p>الوصف:</p>
                        <p>
                            {novel.description}
                        </p>
                    </span>
                </div>
            </div>
            <div className="novel-chapters">
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
            </div>
        </div>
    );
};

export default Novel;
