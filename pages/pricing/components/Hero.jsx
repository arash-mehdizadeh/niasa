import Image from 'next/image'



const Hero = () => {
    return (
        <div className="flex my-14  mx-[6.5rem] wsm:flex-col-reverse wsm:!mx-0 wsm:!px-6 ">
            <div className="w-full ml-[6.25rem] wsm:!m-0">
                <h1 className=" text-[3.75rem] font-extrabold  wsm:!text-[2.1rem] mt-7">
                    سفارش <span className="text-[#0F3FFF]">طراحـــــی ســـــایت</span>
                </h1>
                <div className=' wsm:flex wsm:mb-3'>
                    <p className="font-semibold text-[3.25rem]  whitespace-pre wsm:!text-[1.5rem] wsm:!break-all ">طراحی دقیق <span className='wsm:hidden'>      </span>و<span className='wsm:hidden'>      </span> عمیق <br className='wsm:!hidden' /><p>فروشـــــگاه مجــــــــازی  شـــمــا</p></p>
                    
                    {/* <p className="font-semibold text-[3.25rem] whitespace-pre wsm:!text-[2rem] ">فروشـــــگاه مجــــــــازی  شـــمــا</p> */}
                </div>
                <p className='pt-2 font-semibold text-[20px] leading-9 break-words' >تیم طراحی و توسعه نیاسا٬ در راستای ارتقای کسب و کار آنلاین شما٬ آماده پذیرش خدمات طراحی وبسایت شرکتی٬ فروشگاهی٬ رزرو آنلاین و ... می باشد. </p>
                <div className='flex mt-5 wsm:flex-col'>
                    <input type="number" name="phone-number" className='form-control input-field text-base rounded-[1.25rem] wsm:w-full wsm:!py-6 wsm:!px-7 '
                        placeholder='شماره تماس'
                    />
                    <input type="button" className='btn-style-2 bg-[#F1F1F1] mr-4 px-8 wsm:!m-0 wsm:!mt-3' value="با شما تماس میگیریم" />
                </div>
            </div>
            <div className="w-full py-4 px-6 hero--drop-shadow h-fit  rounded-3xl bg-white">
                <Image src={'/../public/assets/img/hero-header.png'} width="583" height={"435"} alt="سفارش طراحی و سایت نیاسا" />
            </div>

        </div>
    )
}

export default Hero