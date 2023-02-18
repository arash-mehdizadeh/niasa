import Image from 'next/image'

const Samples = () => {

    const websiteData = [
        {
            id: 1,
            image: "/../public/assets/img/sample/lazzaro.png",
            website: "Lazzaro.ir",
            title: "فروشگاه اینترنتی لازارو"
        },
        {
            id: 2,
            image: "/../public/assets/img/sample/naroon.png",
            website: "Narvanhr.com",
            title: "وبسایت نارون"
        },
        {
            id: 3,
            image: "/../public/assets/img/sample/kifpool.png",
            website: "Kifpool.me",
            title: "صرافی ارز دیجیتال کیف پول"
        },
        {
            id: 4,
            image: "/../public/assets/img/sample/asachange.png",
            website: "Asachange.com",
            title: "وبسایت آسا چنج"
        },
    ]

    return (
        <div className='my-10 text-white'>
            <div className='flex flex-col items-center  wsm:!text-center'>
                <h1 className=" text-[2rem] font-extrabold  wsm:!text-[1.5rem] ">
                    برخی
                    <span className="text-[#0F3FFF]"> نمونه کار </span>
                    های طراحی سایت
                </h1>
                <p className="font-bold pt-3  wsm:!text-[14px]  wsm:!pt-[8px]">محصول باکیفیت اتفاقی نیست! نگاهی به پروژه های ما</p>
            </div>
            <div className=' my-12 flex justify-between wsm:flex-col'>
                {
                    websiteData.map(el => (
                        <div key={el.id} className='flex flex-col  wsm:!my-[18px]'>
                            <div className=' transition-all hover:brightness-[0.3]  wsm:!w-full'>
                                <Image src={el.image} width="320" height={"351"} alt=""  className='rounded-lg hover:hover-images ' />
                            </div>
                            <div>
                                <p className="text-[#757575] font-semibold text-[18px] font-['gilroy] ">{el.website}</p>
                                <h3 className=' text-[1.5rem] font-bold'>{el.title}</h3>
                            </div>
                        </div>

                    ))
                }
            </div>
            <div className='flex justify-center'>
                <button className='btn-style-3 wsm:w-full'>
                    همه نمونه کارها
                </button>
            </div>
        </div>
    )
}

export default Samples