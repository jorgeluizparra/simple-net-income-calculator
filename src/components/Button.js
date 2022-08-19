import React from "react";

const Button = ({ label, onClick }) => {
    return (
        <button onClick={onClick} className="mt-5 inline-block text-center bg-black border border-transparent rounded-md py-2 px-3 font-medium text-white hover:bg-indigo-500">
            {label}
        </button>
    )
}

export default Button;