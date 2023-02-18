import Image from 'next/image'
import i from '../../../public/assets/icon/latin_num/i.svg'
import ii from '../../../public/assets/icon/latin_num/ii.svg'
import iii from '../../../public/assets/icon/latin_num/iii.svg'
import iv from '../../../public/assets/icon/latin_num/iv.svg'
import v from '../../../public/assets/icon/latin_num/v.svg'
import vi from '../../../public/assets/icon/latin_num/vi.svg'
import vii from '../../../public/assets/icon/latin_num/vii.svg'
import viii from '../../../public/assets/icon/latin_num/viii.svg'

const ProgressRoad = () => {

    const roadMapData = [
        {
            id: 1,
            svgPath: i,
            imagePath: "/../public/assets/img/processRoad/checklist.png",
            title: "ثبت درخواست و جلسه مشاوره",
            description: "تهیه داکیومنت اولیه پروژه شامل نیاز ها و ویژگی ها"
        },
        {
            id: 2,
            svgPath: ii,
            imagePath: "/../public/assets/img/processRoad/offer.png",
            title: "برسی نیاز شما و ارسال طرح همکاری",
            description: "تهیه داکیومنت اولیه پروژه شامل نیاز ها و ویژگی ها"
        },
        {
            id: 4,
            svgPath: iii,
            imagePath: "/../public/assets/img/processRoad/edit.png",
            title: "پیاده سازی و اجرای اولیه",
            description: "طراحی اولیه فرم کلی صفحات بر اساس ویژگی های مورد نیاز"
        },
        {
            id: 3,
            svgPath: iv,
            imagePath: "/../public/assets/img/processRoad/confirm_order.png",
            isWide:true,
            title: "ثبت سفارش و عقد قرارداد",
            description: "تهیه داکیومنت اولیه پروژه شامل نیاز ها و ویژگی ها"
        },
        {
            id: 5,
            svgPath: v,
            imagePath: "/../public/assets/img/processRoad/design.png",
            isWide:true,
            title: "طراحی و پیاده سازی",
            description: "طراحی و پیاده سازی نسخه نهایی"
        },
        {
            id: 6,
            svgPath: vi,
            imagePath: "/../public/assets/img/processRoad/dev.png",
            title: "تست و تکمیل",
            description: "متن عوض شود .تست و تکمیل کار بر اساس بازخورد شما"
        },
        {
            id: 7,
            svgPath: vii,
            imagePath: "/../public/assets/img/processRoad/final.png",
            title: "آماده سازی برای گام های بعدی",
            description: "تست های فنی وبسایت و ویرایش نهایی وبسایت و تحویل پروژه"
        },
        {
            id: 8,
            imagePath: "/../public/assets/img/processRoad/rating.png",
            svgPath: viii,
            title: "شروع پشتیبانی و همراهی با شما",
            description: "تکمیل همکاری و برسی و آماده سازی گام های بعدی محصول شما"
        },
    ]

    return (
        <div className='flex flex-col text-white mt-[12.5rem] wsm:!mt-10 '>
            <div className='flex flex-col items-center text-center'>
                <h1 className='text-[3rem] font-extrabold wsm:!text-[1.5rem]'><span className='text-[#0F3FFF]'>مراحل انجام </span> پروژه طراحی سایت </h1>
                <p className='font-bold pt-3 wsm:text-[14px]'>تیم طراحی و و توسعه نیاسا با بیش از ۵ سال فعالیت تخصصی در زمینه طراحی سایت آماده <br className='wsm:!hidden' />دریافت پروژه های مشتریان گرامی می باشد.</p>
            </div>
            <div className="mb-24">
                <div className=" flex flex-wrap bg-center bg-no-repeat bg-contain mx-[13.125rem] justify-between bg-[url('/assets/icon/dot-path.svg')] 
                wsm:flex-col wsm:!m-0 wsm:!bg-[url('/assets/icon/dot-path-responsive.svg')] wsm:!bg--dot-path-wsm xl:!lg--bg-position ">
                    <div className='flex flex-wrap justify-between mx-14 mt-11 wsm:!m-0'>

                    {
                        roadMapData.map(el => (
                            <div key={el.id} className='flex flex-col items-center w-[420px] pb-44 mx-[4.5rem] wsm:!w-full wsm:!flex-row'>
                                <div className='flex flex-col '>
                                    <div className='bg-[#292929] rounded-full w-[50px] h-[50px] relative  flex items-center justify-center top-[30px] right-[-25px] 
                                    wsm:!w-6 wsm:!h-6 wsm:!top-[15px] wsm:!right-[-7px] '>
                                        <Image src={el.svgPath} width="25" height="15" alt="" />
                                    </div>
                                    <div className={`bg-[#141414] py-[2rem]  ${el.isWide ? "px-[48px]" : "px-16" } rounded-[1.25rem] wsm:!w-[120px] wsm:!h-[120px] wsm:!py-3 wsm:!px-7 `}>
                                        <Image src={el.imagePath} alt={el.title} width={el.isWide ? "154" :"120"} height="182"/>
                                    </div>
                                </div>
                                <div className='flex flex-col text-center items-center mt-6 wsm:!m-0 wsm:!pr-3 '>
                                    <h3 className='font-extrabold text-[1.3rem] wsm:!text-[14px] wsm:!text-start wsm:!w-full'>{el.title}</h3>
                                    <p className='pt-3 text-[12px] wsm:!text-start'>{el.description}</p>
                                </div>
                            </div>
                        ))
                    }
                    </div>

                </div>
                <div className="">
                    {/* <svg width="1017" height="1182" className='background-layer--progress-path' viewBox="0 0 1017 1182" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M752 2.00008L113 2C51.6964 1.99999 2 51.6964 2 113L2 279C2 340.304 51.6964 390 113 390H139.287L904 390C965.304 390 1015 439.696 1015 501V681C1015 742.304 965.304 792 904 792H877.713L113 792C51.6964 792 2 841.696 2 903L2 1069C2 1130.3 51.6964 1180 113 1180H752" stroke="#616161" strokeWidth="3" strokeDasharray="8 8" />
                    </svg> */}
                </div>
            </div>
        </div>
    )
}

export default ProgressRoad