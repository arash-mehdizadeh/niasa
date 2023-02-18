import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'


export default function Footer() {
    return (
        <footer className="mt-[50px] mx-[6.25rem] wsm:!m-0 wsm:!mt-[75px] wsm:!mx-6 ">
            <div className="flex wsm:flex-wrap wsm:flex-col-reverse">
                <div className='flex w-full wsm:flex-wrap'>
                    <div className="basis-1/5 wsm:!flex wsm:!flex-col wsm:!w-full wsm:!basis-1/2 wsm:mt-3">
                        <h3 className="font-extrabold text-[24px] ">نیاسا</h3>
                        <ul>
                            <li className="font-semibold text-[18px] mt-[16px]"> مشتریان</li>
                            <li className="font-semibold text-[18px] mt-[16px]"> سوالات متدوال</li>
                            <li className="font-semibold text-[18px] mt-[16px]">درباره ما</li>
                            <li className="font-semibold text-[18px] mt-[16px]">نمونه کار ها</li>
                            <li className="font-semibold text-[18px] mt-[16px]">استخدام</li>
                        </ul>
                    </div>
                    <div className="basis-1/5 wsm:!flex wsm:!flex-col wsm:!w-full wsm:!basis-1/2 wsm:mt-3 ">
                        <h3 className="font-extrabold text-[24px] ">نیاسا</h3>
                        <ul>
                            <li className="font-semibold text-[18px] mt-[16px]"> مشتریان</li>
                            <li className="font-semibold text-[18px] mt-[16px]"> سوالات متدوال</li>
                            <li className="font-semibold text-[18px] mt-[16px]">درباره ما</li>
                            <li className="font-semibold text-[18px] mt-[16px]">نمونه کار ها</li>
                            <li className="font-semibold text-[18px] mt-[16px]">استخدام</li>
                        </ul>
                    </div>
                    <div className="basis-1/5 wsm:!flex wsm:!flex-col wsm:!w-full wsm:!basis-1/2 wsm:mt-3 ">
                        <h3 className="font-extrabold text-[24px] ">نیاسا</h3>
                        <ul>
                            <li className="font-semibold text-[18px] mt-[16px]"> مشتریان</li>
                            <li className="font-semibold text-[18px] mt-[16px]"> سوالات متدوال</li>
                            <li className="font-semibold text-[18px] mt-[16px]">درباره ما</li>
                            <li className="font-semibold text-[18px] mt-[16px]">نمونه کار ها</li>
                            <li className="font-semibold text-[18px] mt-[16px]">استخدام</li>
                        </ul>
                    </div>
                </div>
                <div className="basis-2/5">
                    <div className="flex-col">
                        <div className="w-[212px] h-[72px]">
                            <img src="assets/img/logo2.png" alt="" />
                        </div>
                        <p className="text-[14px] mt-[25px] font-semibold">
                            ما یک آزانس طراحی و توسعه به صورت ریموت هستیم که هدف خود را تولید محصولات دیجیتالی
                            زیبا،
                            کاربردی، دسترس پذیر با کارکرد آسان قرار داده ایم.</p>
                        <div className="flex flex-row mt-[25px] wsm:!justify-evenly wsm:!pb-7">
                            <img src="assets/icon/facebook-circle-fill.svg" alt="" />
                            <img className="mr-[16px]" src="assets/icon/linkedin-fill.svg" alt="" />
                            <img className="mr-[16px]" src="assets/icon/telegram-fill.svg" alt="" />
                        </div>
                    </div>

                </div>
            </div>
            <div className="flex mt-[50px] justify-between font-semibold text-[#757575]  wsm:flex-col-reverse">
                <div className="wsm:text-[13px] wsm:mb-8">
                    <p>1401 © تمامی حقوق برای تیم توسعه نیاسا محفوظ می باشد.</p>
                </div>
                <div className="flex mb-[25px] text-[#2F2F2F]">
                    <a href="">نفشه سایت</a>
                    <span className="mr-[5px] ml-[5px]">-</span>
                    <a href="">خوراک سایت</a>
                </div>
            </div>

        </footer>
    )
}
