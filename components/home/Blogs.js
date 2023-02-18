

function Blogs() {
    return (
        <div id="blog" className="mt-[127px] relative h-[554px] bg-[#0C0C0C] pt-[28px] h-[398px]">
            <div className=" container-custom ">
                <div className="flex flex-row justify-start items-center ">
                    <h2 className="text-[32px] font-black text-white">وبلاگ نیاسا</h2>
                    <h2 className="mr-[13px] text-[#656565] mb-[2px]">Blog</h2>
                </div>
                <div className="flex flex-row justify-start items-center ">
                    <p className="text-white mt-[15px] font-medium">جدیدترین اخبار٬ مقالات آموزشی و مطالب مربتط
                        به
                        دنیای
                        کسب و کار
                        آنلاین در وبلاگ نیاسا.</p>
                </div>
                <div className="flex flex-row justify-between mt-[41px] items-center text-white">
                    <div className="basis-6/8">
                        <ul className="flex flex-row justify-center">
                            <li className="mr-[16px] blog-btn active-blog-btn">همه</li>
                            <li className="mr-[16px] blog-btn"><span>#</span>تبلیغات</li>
                            <li className="mr-[16px] blog-btn"><span>#</span>سئو و دیجیتال مارکتینگ</li>
                            <li className="mr-[16px] blog-btn"><span>#</span>طراحی رابط کاربری</li>
                            <li className="mr-[16px] blog-btn"><span>#</span>پیاده سازی و کدنویسی</li>
                            <li className="mr-[16px] blog-btn"><span>#</span>تولید محتوا</li>
                        </ul>
                    </div>
                    <div className="basis-2/8">asd</div>
                </div>
                <div className="mt-[22px]">
                    <div className="owl-carousel-blog owl-carousel owl-theme relative   ">
                        <div className="owl-custom-item">
                            <div className="owl-picture">
                                <img src="assets/img/blog1.png" alt=""/>

                            </div>
                            <div className="font-medium mt-[8px]">
                                <h3 className="text-[24px]">
                                    8 قانون طلایی در طراحی رابط کاربری
                                </h3>
                                <p className="mt-[8px] text-[#757575] text-[16px] w-[320px]">بهترین وبسایت های
                                    آموزشی
                                    برای دیزاینرها
                                    و دولوپرها وب سایت های...</p>
                                <a href="" className="text-[#0F3FFF] mt-[8px] block text-[18px]">مطالعه</a>
                            </div>
                        </div>
                        <div className="owl-custom-item">
                            <div className="owl-picture">
                                <img src="assets/img/blog2.png" alt=""/>
                            </div>
                            <div className="font-medium mt-[8px]">
                                <h3 className="text-[24px]">
                                    8 قانون طلایی در طراحی رابط کاربری
                                </h3>
                                <p className="mt-[8px] text-[#757575] text-[16px] w-[320px]">بهترین وبسایت های
                                    آموزشی
                                    برای دیزاینرها
                                    و دولوپرها وب سایت های...</p>
                                <a href="" className="text-[#0F3FFF] mt-[8px] block text-[18px]">مطالعه</a>
                            </div>
                        </div>
                        <div className="owl-custom-item">
                            <div className="owl-picture">
                                <img src="assets/img/blog3.png" alt=""/>
                            </div>
                            <div className="font-medium mt-[8px]">
                                <h3 className="text-[24px]">
                                    8 قانون طلایی در طراحی رابط کاربری
                                </h3>
                                <p className="mt-[8px] text-[#757575] text-[16px] w-[320px]">بهترین وبسایت های
                                    آموزشی
                                    برای دیزاینرها
                                    و دولوپرها وب سایت های...</p>
                                <a href="" className="text-[#0F3FFF] mt-[8px] block text-[18px]">مطالعه</a>
                            </div>
                        </div>


                    </div>

                </div>

            </div>
        </div>

    )
}


export default Blogs;
