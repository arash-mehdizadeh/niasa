function Testimonials() {
    return (
        <div className="container-custom ">
            <div id="testimonial" className="mt-[130px]">

                <div className="flex flex-row justify-center items-center">
                    <h2 className="text-[32px] font-black">نظرات <span
                        className="text-[#0F3FFF]">مشتریان ما</span>
                    </h2>
                    <h2 className="mr-[13px] text-[#656565] mb-[2px]">Customer review</h2>
                </div>
                <div className="flex flex-row   mt-[73px]">
                    <div className="basis-1/4">
                        <div
                            className="w-[310px]  h-[359px] border-[1px] border-[#DDDDDD] relative pb-[24px] rounded-[20px]"
                        >
                            <div className="w-[200px] h-[56px] absolute right-[51px] top-[-33px]">
                                <img src="assets/img/customer5.png" className=" " alt=""/>
                            </div>
                            <p className="w-[256px]  mt-[64px] mx-auto font-medium text-[18px]">
                                سختی های کار و پیاده سازی این پروژه بزرگ و قدیمی را با صبر و هماهنگی انجام دادند
                                و
                                همه
                                چیز طبق
                                پیش بینی ما انجام شد. حتما در آینده همکاری های بیشتری با این تیم خواهیم داشت.
                            </p>
                            <div className="mt-[80px] justify-around px-[13px] flex text-[14px]">
                                <span className="font-black">مهدی تنه کار</span>
                                <span className="mr-[10px]"> موسس ایران میز</span>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/4">
                        <div
                            className="w-[310px]  h-[408px] border-[1px] border-[#DDDDDD] relative pb-[13px] rounded-[20px] active-testimonials">
                            <div className="w-[200px] h-[56px] absolute right-[51px] top-[-33px]">
                                <img src="assets/img/customer2.png" className=" " alt=""/>
                            </div>
                            <p className="w-[256px]  mt-[64px] leading-[180%] mx-auto font-medium text-[18px]">
                                تجربه کار با نیاسا بسیار لذت بخش بود و همکاری با این تیم در راستای طراحی و پیاده
                                سازی
                                نسخه
                                اینترنتی پاما و پیاده سازی یک فروشگاه که متناسب با نیاز ما باشد یک فرصت عالی
                                بود.
                            </p>
                            <div className="mt-[98px] justify-around px-[13px] flex text-[14px]">
                                <span className="font-black">محمد مهدی سعید نژاد</span>
                                <span className="mr-[10px]">موسس فروشگاه پاما</span>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/4">
                        <div
                            className="w-[310px]  h-[359px] border-[1px] border-[#DDDDDD] active-sec-testimonials relative pb-[24px] rounded-[20px]"
                        >
                            <div className="w-[200px] h-[56px] absolute right-[51px] top-[-33px]">
                                <img src="assets/img/customer3.png" className=" " alt=""/>
                            </div>
                            <p className="w-[256px]  mt-[64px] mx-auto font-medium text-[18px]">
                                سختی های کار و پیاده سازی این پروژه بزرگ و قدیمی را با صبر و هماهنگی انجام دادند
                                و
                                همه
                                چیز طبق
                                پیش بینی ما انجام شد. حتما در آینده همکاری های بیشتری با این تیم خواهیم داشت.
                            </p>
                            <div className="mt-[46px]  justify-around px-[13px] flex text-[14px]">
                                <span className="font-black">مهدی تنه کار</span>
                                <span className="mr-[10px]"> موسس ایران میز</span>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/4">
                        <div
                            className="w-[310px]  h-[408px] border-[1px] border-[#DDDDDD] active-prim-testimonials relative pb-[24px] rounded-[20px]">
                            <div className="w-[200px] h-[56px] absolute right-[51px] top-[-33px]">
                                <img src="assets/img/customer4.png" className=" " alt=""/>
                            </div>
                            <p className="w-[256px]  pt-[64px] mx-auto font-medium text-[18px]">همکاری با شرکت
                                نوین
                                یکی
                                از بهترین
                                تجربه‌های کاری تیم همیار زبان بود. دقت، ظرافت در طراحی و پاسخگویی سریع از
                                ویژگی‌های
                                تیم
                                نوین بود
                                و خیلی خوشحالم که طراحی سایت خودمون رو به دست این تیم سپردیم.
                            </p>
                            <div className="mt-[65px] justify-around px-[13px] flex text-[14px]">
                                <span className="font-black">مهدی تنه کار</span>
                                <span className="mr-[10px]"> موسس ایران میز</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-[45px] items-center text-center">
                    <a href="" className="  btn-style-1  btn-hero">شروع همکاری</a>
                    <a href="" className="lg:mr-[19px]  btn-style-2  btn-hero">نمونه کارها</a>
                </div>
            </div>
        </div>
    )
}


export default Testimonials;
