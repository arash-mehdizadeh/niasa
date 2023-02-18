function Faq() {
    return (
        <div className="flex px-[4rem] w-full  wsm:!px-6">
            <div id="faq" className="mt-[8.4rem] flex wsm:flex-col w-full  wsm:!justify-center">

                <div className="flex flex-row w-full">
                    <div className="flex flex-start flex-col">
                        <div className=" flex wsm:!w-full  wsm:!justify-center">
                            <div className="w-[179px] h-[179px] ">
                                <img src="assets/img/faq.png" alt="" />
                            </div>
                        </div>
                        <div className="flex items-baseline	 mt-[19px]  wsm:!flex-col  wsm:!items-center">
                            <h2 className="text-[32px] font-black text-[#3e65ff]">پاسخ به سوالات متداول</h2>
                            <h2 className="mr-[8px] text-[20px] text-[#656565]">FAQ</h2>
                        </div>
                        <p className="text-[18px] mt-[19px] font-medium w-auto  wsm:!text-center">
                            پاسخ به سوالات متداول کاربران در قالب پرسش و پاسخ. در صورت لزوم میتوانید با
                            کارشناسان ما
                            در
                            تماس
                            باشید.
                        </p>
                        <a href="" className="mt-[32px]  btn-style-1  block btn-hero wsm:self-center">تماس با ما</a>
                    </div>

                </div>
                <div className="flex flex-row w-full pr-14  wsm:!p-0  wsm:!py-8">
                    <div className="accordion accordion-flush w-full " id="accordionFlushExample2">
                        <div className=" bg-[#F7F7F7] rounded-[20px] my-2   ">
                            <h2 className="accordion-header mb-0 w-full" id="flush-headingOne">
                                <button
                                    className="font-medium text-[1.25rem] py-7 px-6 w-full flex items-center justify-between"
                                    type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-1"
                                >
                                    نیاسا چه خدماتی را ارائه می‌کند؟
                                    <div className="plus-btn" id="flush-collapse-1" aria-labelledby="flush-headingOne"
                                        data-bs-parent="#accordionFlushExample2" style={{ display: "block" }}>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </button>
                            </h2>
                            <div id="flush-collapse-1" className="accordion-collapse border-0 collapse "
                                aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample2">
                                <div className="accordion-body  accordion-body-faq px-6 pb-8  ">
                                    <p className=" font-medium text-justify text-black w-full">
                                        در بدو همراهی شما عزیزان، محور اصلی فعالیت‌های تیم نیاسا؛ طراحی وب‌سایت
                                        و
                                        سئو‌
                                        کردن
                                        وب‌سایت شما بود، اما به مرور زمان و با گردهم‌آیی افراد خبره و متخصص،
                                        امروز
                                        افتخار ارائه
                                        خدمات 360 درجه را خواهیم داشت. سرویس 360 درجه عبارتند از؛
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className=" bg-[#F7F7F7] rounded-[20px] my-2">
                            <h2 className="accordion-header mb-0 w-full" id="flush-headingOne">
                                <button
                                    className="font-medium text-[1.25rem] py-7 px-6 w-full flex items-center justify-between"
                                    type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-2"
                                >
                                    نیاسا چه خدماتی را ارائه می‌کند؟
                                    <div className="plus-btn" id="flush-collapse-2" aria-labelledby="flush-headingOne"
                                        data-bs-parent="#accordionFlushExample2" style={{ display: "block" }}>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </button>
                            </h2>
                            <div id="flush-collapse-2" className="accordion-collapse border-0 collapse "
                                aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample2">
                                <div className="accordion-body  accordion-body-faq px-6 pb-8  ">
                                    <p className=" font-medium text-justify text-black w-full">
                                        در بدو همراهی شما عزیزان، محور اصلی فعالیت‌های تیم نیاسا؛ طراحی وب‌سایت
                                        و
                                        سئو‌
                                        کردن
                                        وب‌سایت شما بود، اما به مرور زمان و با گردهم‌آیی افراد خبره و متخصص،
                                        امروز
                                        افتخار ارائه
                                        خدمات 360 درجه را خواهیم داشت. سرویس 360 درجه عبارتند از؛
                                    </p>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    )
}


export default Faq;
