import Head from 'next/head'
import Faq from '../../components/home/Faq'
import News from '../../components/home/News'
import Map from '../../components/home/Map'
import AllCategories from './components/allCategories'
import Categories from './components/categories'
import Hero from './components/Hero'
import OrderBox from './components/orderBox'
import ProgressRoad from './components/progressRoad'
import Samples from './components/samples'
import Services from './components/services'

const Pricing = () => {

    return (
        <div>
            <Head>
                <title>وبسایت طراحی و توسعه کسب و کار</title>
            </Head>
            <div className='flex flex-col'>
                <Hero />
                <Services />
                <Categories />
                <section className='bg-[#030304] pt-16  mt-8 px-16 wsm:!px-6'>
                    <AllCategories />
                    <ProgressRoad />
                    <Samples />
                </section>
                <div className='flex flex-col'>
                    {/* px-16 wsm:px-[6.25rem] */}
                    <OrderBox />
                    <Faq />
                    <Map />
                    <News />
                </div>
            </div>
        </div>
    )
}

export default Pricing