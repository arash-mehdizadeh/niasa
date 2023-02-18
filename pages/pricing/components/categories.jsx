import Image from "next/image"


import arrow from '../../../public/assets/icon/arrow.svg'
import user from '../../../public/assets/icon/categories/user.svg'
import checkout from '../../../public/assets/icon/categories/check-out.svg'
import briefcase from '../../../public/assets/icon/categories/briefcase.svg'
import wordpress from '../../../public/assets/icon/categories/wordpress.svg'
import professional from '../../../public/assets/icon/categories/professional.svg'
import CategoryCard from "../../../components/category-card"

const Categories = () => {

    const categoriesData = [
        {
            id: 1,
            path: user,
            enTitle: 'Personal',
            faTitle: 'طراحی سایت شخصی'
        },
        {
            id: 2,
            path: checkout,
            enTitle: 'E-commerce',
            faTitle: 'طراحی سایت فروشگاهی',
        },
        {
            id: 3,
            path: briefcase,
            enTitle: 'Corporate',
            faTitle: 'طراحی سایت شرکتی'
        },
        {
            id: 4,
            path: wordpress,
            enTitle: 'Wordpress',
            faTitle: 'طراحی سایت وردپرسی'
        },
        {
            id: 5,
            path: professional,
            enTitle: 'Professional',
            faTitle: 'طراحی سایت تخصصی'
        },
    ]


    return (
        <div className='flex flex-col items-center mt-20 mb-[5rem]  mx-[6.5rem] wsm:!m-0 wsm:!my-16 wsm:px-6'>
            <div className='flex flex-col items-center wsm:'>
                <h1 className='text-[2rem] font-extrabold wsm:text-[1.4rem]'>انجام طراحــــــی سایت</h1>
                <h1 className='text-[2rem] font-extrabold wsm:!text-[1.87rem]'> برای <span className='text-[#0F3FFF]'>کسب‌وکــــــارهای مختلف</span></h1>
                <p className='font-bold pt-3 wsm:text-center'>وبسایت٬ نماینده شما در دنیای کسب و کار های مجازی است. طراحی و توسعه وبسایت بر اساس نوع محصول٬ ایده یا محصول شما انجام میگیرد.</p>
            </div>
            <div className='w-full wsm:relative wsm:top-[7.5rem]'>
                <div className='bg-categories -z-1 wsm:hidden top-[120px] '></div>
                <div className='relative top-[-95px] flex flex-wrap justify-center wsm:flex-nowrap wsm:flex-col wsm:wsm--bg-categories'>
                    {
                        categoriesData.map(el => (
                            <CategoryCard key={el.id} path={el.path} faTitle={el.faTitle} enTitle={el.enTitle}  />
                        ))
                    }
                </div>
            </div>
            <div className="wsm:!hidden relative top-[-35px]">
                <div className="btn-style-1 px-6 flex items-center">
                    <p className="ml-4">همه دسته بندی ها</p>
                    <Image src={arrow} alt={"همه دسته بندی"} className="-rotate-90" width="24px" height="24px" />
                </div>
            </div>
        </div>
    )
}

export default Categories