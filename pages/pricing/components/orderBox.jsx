import Image from "next/image";
import leftArrow from "../../../public/assets/icon/arrow-left.svg";

const OrderBox = () => {
    return (
        <div className='  py-20 pb-0 split-bg px-[6.25rem]  wsm:!px-0 wsm:!bg-transparent  wsm:!pt-[2.125rem]'>
            <div className=' rounded-sec order-bg relative drop-shadow--wsm pb-0 bg-white py-10 px-16 
             wsm:!rounded-none  wsm:!px-[18px]  wsm:!pt-9 wsm:!pb-[2.25rem] '>
                <div className=" absolute top-0 left-0  wsm:!hidden"> 
                    <Image src={"/../public/assets/img/orderShape.png"} className="rounded-[28px]" alt="" width="723" height="443" />
                </div>
                <div className='flex wsm:flex-col'>
                    <div className='flex flex-col w-2/5 wsm:!w-full'>
                        <div>
                            <p className='text-[#0F3FFF]  text-semibold pb-3 wsm:!text-[14px]'>توسعه کسب و کار آنلاین خود را تعویق نیندازید</p>
                            <h3 className='font-extrabold text-[2rem]  wsm:!text-[1.75rem] '>همین حالا کار را آغاز کنید</h3>
                        </div>
                        <div className='flex flex-col'>
                            <input type="text" className='my-4 form-control input-field text-base rounded-[1.25rem] py-6 px-8 w-full ' placeholder='نام و نام خانوادگی' />
                            <input type="number" className='my-4 form-control input-field text-base rounded-[1.25rem] py-6 px-8 w-full ' placeholder='شماره تماس' />
                        </div>
                        <button type="submit" className=' w-full my-4 btn-style-1' >ثبت درخواست مشاوره</button>
                    </div>
                    <div className='flex items-end'>
                        <div className='flex items-center text-[#0F3FFF] font-semibold wsm:!py-4  py-9 mr-6 '>
                            خدمات دیگر
                            <Image src={leftArrow} width={"24px"} height="24px" className="" alt="more" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderBox;