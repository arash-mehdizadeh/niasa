function Contact() {
    return (
        <div className="container-custom ">
            <div id="contact" className="mt-[130px] flex">
                <div className="basis-2/5 ">

                    <div className="w-[808px] h-[674px] absolute right-[0]">

                        <img src="assets/img/contact.png" alt=""/>

                    </div>
                </div>
                <div className="basis-3/5">
                    <div className="flex items-center">
                        <h2 className="font-black text-[32px]">
                            درخواســــــت مشاوره رایگان
                        </h2>

                        <span className="text-[#393939] mr-[8px]">Free consultation</span>
                    </div>
                    <div className="w-[651px]">
                        <p className="text-[18px] mt-[8px]">
                            گستره همکاری های تیم نیاسا با تیم های بزرگ در زمینه طراحی سایت و سئو: رضایت مشتریان
                            اولویت
                            تیم ماست.
                        </p>
                    </div>
                    <div className="flex flex-col ">
                        <div className="form-floating mb-3 mt-[43px]  w-full rounded-20">
                            <input type="email" className="form-control
      block
      text-base
      font-semibold
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded-[20px]
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none " placeholder="نام و نام خانوادگی"/>
                            <label
                                className="text-gray-700   ease-in-out block w-full text-right font-semibold text-[14px] text-[#8F8F8F]">نام
                                و نام خانوادگی</label>
                        </div>
                        <div className="form-floating  mb-3 mt-[32px] w-full rounded-20">
                            <input type="number" className="form-control
      block
      text-base
      font-semibold
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded-[20px]
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none " placeholder="شماره تماس"/>
                            <label
                                className="text-gray-700   ease-in-out block w-full text-right font-semibold text-[14px] text-[#8F8F8F]">شماره
                                تماس</label>
                        </div>
                        <div className="mt-[32px] text-[16px] font-semibold">
                            انتخاب موضوع مشاوره
                        </div>
                        <div className="flex mt-[32px]  justify-start">
                            <button className="custom-contact-btn">طراحی سایت</button>
                            <button className="custom-contact-btn mr-[16px]">دیجیتال مارکتینگ</button>
                        </div>
                        <div className="flex mt-[16px]  justify-start">
                            <button className="custom-contact-btn">طراحی سایت</button>
                            <button className="custom-contact-btn mr-[16px]">دیجیتال مارکتینگ</button>
                        </div>
                        <div className="flex mt-[16px]  justify-start">
                            <button className="custom-contact-btn">طراحی سایت</button>
                            <button className="custom-contact-btn mr-[16px]">دیجیتال مارکتینگ</button>
                        </div>
                        <div className=" mt-[16px]">
                            <button className="custom-contact-active-btn">شروع همکاری</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default Contact;
