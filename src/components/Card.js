import React from "react";
import classNames from 'classnames';

const Card = ({ children, text, selected=false, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={classNames([
                selected ? "border-black" : "border-gray-300",
                "border border-solid rounded-md inline-block px-5 py-5 mx-1 hover:border-indigo-500"
            ])}>
            <div className="flex justify-center">
                {children}
            </div>
            <div className="mt-5">
                {text}
            </div>
        </div>
    )
}

export default Card;
