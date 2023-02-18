function News() {
    return (
        <div className="mx-[6.25rem] wsm:!m-0">
            <div className="news ">
                <div className="mt-[64px]">
                    {/* <img src="assets/img/news.png" alt="" /> */}
                    <div className="flex bg-[url('/assets/img/news.png')]  p-5 bg-cover items-center w-full 
                    justify-between wsm:!flex-col wsm:!rounded-none">
                        <h3 className="font-black text-white text-[2rem] min-w-fit">عضویت در خبرنامه</h3>
                        <p className="mr-[15px] text-white font-bold min-w-fit wsm:!text-[14px] wsm:!py-3">
                            با عضویت در خبرنامه نیاسا از جدیدترین اخبار و مقالات با خبر باشید
                        </p>

                        <div className="flex bg-white rounded-[1.5rem] w-1/3 px-4 py-3 wsm:!w-full wsm:!bg-black">
                            <input
                                type="email"
                                className=" form-control block w-full text-base wsm:!bg-black font-semibold text-gray-700 rounded-[20px] 
                            transition ease-in-out ml-[14px] focus:text-gray-700 focus:bg-white wsm:focus:!bg-black border-none focus:border-none focus:!outline-none
                             !ring-0 "
                                id="exampleFormControlInput1"
                                placeholder="ایمیل خود را وارد کنید"
                            />
                            <div className="">
                                <button className="py-6 px-8 news-btn">عضویت</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default News;
