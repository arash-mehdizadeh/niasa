function Team() {
    return (
        <div className="container-custom ">
            <div id="team" className="mt-[130px]">

                <div className="flex flex-row justify-center items-center">
                    <h2 className="text-[32px] font-black">اعضای تیم</h2>
                    <h2 className="mr-[13px] text-[#656565] mb-[2px]">Our team</h2>
                </div>
                <div className="mt-[4px] text-center">
                    <p className="font-bold text-[18px] w-[626px] m-auto">تیم ما متشکل از متخصصین و کارشناسان با
                        تجربه
                        همراه با
                        نمونه کارهای معتبر در جهت خدمت رسانی به تمامی کسب و کار های آنلاین شکل گرفته است</p>
                </div>
                <div className="mt-[32px]">
                    <ul className="flex flex-row justify-center">
                        <li className="w-[166px] h-[406px]"><img src="assets/img/team1.png" alt=""/></li>
                        <li className="w-[166px] h-[406px] mr-[21px]"><img src="assets/img/team1.png" alt=""/>
                        </li>
                        <li className="w-[166px] h-[406px] mr-[21px]"><img src="assets/img/team2.png" alt=""/>
                        </li>
                        <li className="w-[166px] h-[406px] mr-[21px]"><img src="assets/img/team3.png" alt=""/>
                        </li>
                        <li className="w-[166px] h-[406px] mr-[21px]"><img src="assets/img/team4.png" alt=""/>
                        </li>
                        <li className="w-[166px] h-[406px] mr-[21px]"><img src="assets/img/team5.png" alt=""/>
                        </li>
                        <li className="w-[166px] h-[406px] mr-[21px]"><img src="assets/img/team6.png" alt=""/>
                        </li>

                    </ul>
                </div>
                <div className="flex justify-end items-center text-center mt-[32px] justify-center">
                    <a href="" className="lg:mr-[13px]  btn-style-2  btn-hero">نمونه کارها</a>
                    <a href="" className="lg:mr-[13px]  btn-style-1  btn-hero">شروع همکاری</a>
                </div>

            </div>
        </div>
    )
}


export default Team;
