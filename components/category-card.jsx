import Image from "next/image";

const CategoryCard = (props) => {
    return (
        <div key={props.id} className={` flex flex-${props.isDark ? 'col' : 'row'} p-6 cursor-pointer 
        drop-shadow--categories ${props.isDark ? "bg-[#232323] wsm:!bg-transparent items-center text-center hover:bg-[#0927ab] transition-all " : "bg-white" }  
        rounded-[1.25rem] w-[31%] mx-3 my-2 wsm:!w-[95%]`}>
            { !props.isDark ? <div className=' ml-4 flex p-4 bg-[#E9E9E9] rounded-2xl'>
                <Image src={props.path} alt={props.faTitle} width="24px" height="24px" />
            </div> : <></>}
            <div className='flex flex-col'>
                <p className={ `${props.isDark ? "text-[#818181]" : "text-[#656565]" }  font-[gilroy'] `}>{props.enTitle}</p>
                <h3 className={` ${props.isDark ? "text-white" :""} text-[1.5rem] font-extrabold wsm:!text-[1.25rem]`}>{props.faTitle}</h3>
            </div>
        </div>
    )
}

export default CategoryCard;