import React from 'react'
import CategoryCard from '../../../components/category-card'

const AllCategories = () => {

    const categoriesData = [
        {
            id: 1,
            enTitle: "Professional",
            faTitle: "طراحی سایت املاک"
        },
        {
            id: 2,
            enTitle: "Professional",
            faTitle: "طراحی سایت وکالت"
        },
        {
            id: 3,
            enTitle: "Professional",
            faTitle: "طراحی سایت فروش کتاب"
        },
        {
            id: 4,
            enTitle: "Professional",
            faTitle: "طراحی سایت طلا و جواهرات"
        },
        {
            id: 5,
            enTitle: "Professional",
            faTitle: "طراحی سایت خبری"
        },
        {
            id: 6,
            enTitle: "Professional",
            faTitle: "طراحی سایت لوازم خانگی"
        },
        {
            id: 7,
            enTitle: "Professional",
            faTitle: "طراحی سایت لوازم خانگی"
        },
        {
            id: 8,
            enTitle: "Professional",
            faTitle: "طراحی سایت آژانس مسافرتی"
        },
        {
            id: 9,
            enTitle: "Professional",
            faTitle: "طراحی سایت ورزشی"
        },

    ]

    return (
        <div className='flex flex-wrap mb-16 '>
            {
                categoriesData.map(el => (
                    <CategoryCard key={el.id} faTitle={el.faTitle} enTitle={el.enTitle} isDark />
                ))
            }
            <div className='w-full text-white bg-[#232323] py-6 px-8 text-[1.25rem] font-extrabold justify-center rounded-[1.25rem]  hidden wsm:!flex'>
                <p>همه دسته بندی ها</p>
            </div>
        </div>
    )
}

export default AllCategories