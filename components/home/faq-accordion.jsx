import React from 'react'

const FaqAccordion = ({ title, description }) => {
    return (
        <div className="accordion-item mt-[8px] bg-[#F7F7F7] rounded-[20px]">
            <h2 className="accordion-header mb-0 accordion-title-faq">
                <button className=" font-medium text-[20px] mr-[24px] mt-[28px]" type="button"
                    data-bs-toggle="collapse" data-bs-target="#flush-collapse-2"
                >
                    {title}
                </button>
            </h2>
            <div id="flush-collapse-2" className="accordion-collapse border-0 collapse "
                aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample2">
                <div className="accordion-body pb-[36px] accordion-body-faq mr-[24px] ">
                    <p className=" font-medium text-justify text-black w-[667px]">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FaqAccordion