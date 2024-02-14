import React from 'react'

const Button = (props) => {
    return (
        <div>
            <button className={`${props.backgroundColor} text-black rounded-full px-8 py-2 font-medium hover:bg-[#5c8cfa] hover:text-white shadow hover:shadow-lg  transition-all`}>
                {props.title}
            </button>
        </div>
    )
}

export default Button