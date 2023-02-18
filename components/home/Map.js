function Map() {
    return (
        <div className="px-[4rem]  wsm:!px-6">
            <div className="map mt-[130px]  wsm:!m-0">
                <div className="flex lg:flex-row wsm:flex-col">
                    <div className="basis-3/5  wsm:pb-6">
                        <div className="flex flex-col  mt-[25px]  flex-start">
                            <span className="text-[#393939] mr-[8px]">Contact us</span>

                            <h2 className="font-black text-[32px]">
                                ارتباط با ما
                            </h2>

                            <p className="text-[18px] mt-[8px] font-bold text-[#393939]  wsm:!text-[16px]">
                                24 ساعته و در 7 روز هفته پاسخگوی شما هستیم
                            </p>
                        </div>
                        <div className="mt-[56px] flex flex-row  wsm:!flex-col  wsm:!m-0  wsm:!mt-2">
                            <div className="">
                                <span className="font-semibold text-[14px]">شماره تماس:</span>
                                <h4 className="font-bold text-[24px]">0912 0510 273</h4>
                            </div>
                            <div className="mr-[111px]  wsm:!m-0">
                                <span className="font-semibold text-[14px]">آدرس :</span>
                                <h4 className="font-bold text-[18px]">تهران٬ انتهای خیابان مطهری٬ خیابان شهدای
                                    ناجا٬
                                    باغ
                                    موزه
                                    قصر</h4>
                            </div>
                        </div>

                    </div>
                    <div className="basis-2/5 ">

                        <div className="">
                            <img src="assets/img/map.png" alt=""/>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}


export default Map;
