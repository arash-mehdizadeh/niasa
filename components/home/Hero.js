

function Hero() {
    return (
        <div className="container-custom ">
            <div id="hero" className="flex  mt-[80px]">
                <div className="basis-2/4  mt-[15px]">
                    <h1 className="text-[24px] font-light">تیم طراحی و توسعه کسب و کار نیاسا</h1>
                    <p className="text-[47px] font-regular mt-[16px]">دنیای دیـــــجیتال کســــــــب و کار</p>
                    <p className="text-[47px] font-extrabold">شما را <span
                        className="text-[#0F3FFF]">عمیــــق</span> و <span
                        className="text-[#0F3FFF]">دقیق</span> می سازیم</p>
                    <p className="text-[18px] font-semibold text-justify w-[540px] leading-[28px] mt-[16px]">
                        تیم توسعه نیاسا با تکیه بر دانش بومی و ارتباطات بین المللی در صنعت IT و تکنولوژی، محصول،
                        خدمت،
                        ایده و یا
                        فکر شما را تبدیل به یک بستر کامال دیجیتال و آنالیز کرده و در بهترین زمان به بهره وری
                        میرساند.
                    </p>
                    <div className="flex flex-row mt-[50px] ">
                        <a href="" className="btn-hero btn-style-1">شروع همکاری</a>
                        <a href="" className="btn-hero btn-style-2 mr-[16px]">نمونه کارها</a>
                        <a href="" className="btn-hero mr-[16px] leading-[76px]">درباره ما</a>
                    </div>
                </div>
                <div className="basis-2/4">
                    <div style={{width: '100%', height: '100%', position: 'relative'}}>
                        <img src="assets/img/hero.png" className="w-full h-full" alt=""/>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default Hero;
