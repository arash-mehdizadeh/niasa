import Image from 'next/image'
import Link from 'next/link'

import leftArrow from "../../../public/assets/icon/arrow-left.svg";


const Services = () => {

    // console.log(seoImage);
    const servicesData = [
        {
            id: 1,
            path: "/../public/assets/img/services/target-keyword.png",
            alt:"سئو و بهینه سازی سایت نیاسا",
            title: "سئو و بهینه‌سازی سایت",
            description: "«وب‌سایت» زمینه یک تغییر جذاب در کسب‌و‌کار شما محسوب می‌شود. به عنوان اولین قدم کافی‌ست به متخصص‌های به‌روز و کاربلد اعتماد کنید.",
            url: "/"
        },
        {
            id: 2,
            path:"/../public/assets/img/services/responsive-design.png",
            alt: "طراحی اختصاصی ui وبسایت نیاسا",
            title: "طراحی گرافیکی اختصاصی",
            description: "«وب‌سایت» زمینه یک تغییر جذاب در کسب‌و‌کار شما محسوب می‌شود. به عنوان اولین قدم کافی‌ست به متخصص‌های به‌روز و کاربلد اعتماد کنید.",
            url: "/"
        },
        {
            id: 3,
            path: "/../public/assets/img/services/maintenance.png",
            alt:"پشتیبانی و خدمات نیاسا",
            title: "پشتیبانی حرفه‌ای",
            description: "«وب‌سایت» زمینه یک تغییر جذاب در کسب‌و‌کار شما محسوب می‌شود. به عنوان اولین قدم کافی‌ست به متخصص‌های به‌روز و کاربلد اعتماد کنید.",
            url: "/"
        },
        {
            id: 4,
            path: "/../public/assets/img/services/pay-per-click.png",
            alt:"طراحی وبسایت با قیمت مناسب",
            title: "طراحی متناسب با بودجه",
            description: "«وب‌سایت» زمینه یک تغییر جذاب در کسب‌و‌کار شما محسوب می‌شود. به عنوان اولین قدم کافی‌ست به متخصص‌های به‌روز و کاربلد اعتماد کنید.",
            url: "/"
        },
    ]



    return (
        <div className='flex flex-col my-14  mx-[6.5rem] wsm:!m-0 wsm:px-6'>
            <div className="flex flex-col items-center py-3 wsm:!text-center wsm:!px-14">
                <h1 className=" text-[2rem] font-extrabold ">
                    خدمات
                    <span className="text-[#0F3FFF]"> طراحـــــی ســـــایت </span>
                    نیاسا
                </h1>
                <p className='font-bold pt-3'>در مسیر گسترش کسب و کار آنلاین شما با بروز ترین تکنولوژی ها در کنار شما خواهیم بود.</p>
            </div>
            <div className="wsm:relative wsm:w-[72%] wsm:h-[530px]">
                {/* <div className='wsm:absolute'> */}

            <div className='flex justify-between wsm:snap-x wsm:relative wsm:w-[140%] wsm:overflow-x-scroll wsm:pb-[120px] wsm:py-9 wsm:px-16'>
                {
                    servicesData.map(el => (
                        <div key={el.id} className='flex flex-col items-center p-6 w-1/4 hover:bg-white delay-100 transition 
                        drop-shadow--custom rounded-[1.25rem] wsm:snap-center wsm:shrink-0  wsm:!w-[125%] 
                        wsm:!items-center wsm:text-center  wsm:drop-shadow--wsm
                        wsm:mx-7 filter grayscale hover:filter-none'>
                            <Image src={el.path} alt={el.alt} height="115" width="115" className='' />
                            <h3 className='font-bold text-[1.5rem]'>{el.title}</h3>
                            <p className=' mt-3 text-center' >{el.description}</p>
                            <Link href={el.url} passHref  >
                                <a className="flex text-[#0F3FFF] items-center mt-6 font-bold sss ">
                                    <p className='ml-3'>اطلاعات بیشتر</p>
                                    <Image src={leftArrow} width={"24px"} height="24px" className='' alt="اطلاعات بیشتر" />
                                </a>
                            </Link>
                        </div>
                    ))
                }
            </div>
                {/* </div> */}
            </div>
            <div className='flex justify-center mt-8 wsm:!m-0 wsm:z-10'>
                <div className='btn-style-1 px-6'>شروع همکاری</div>
            </div>
        </div>
    )
}

export default Services