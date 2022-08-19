import React from "react";

const Input = ({ value, onUpdateValue }) => {
    return (
        <div>
            <label htmlFor="income" className="block text-sm font-medium text-gray-700">
                Anual Income
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                    type="text"
                    name="income"
                    id="income"
                    value={value}
                    onChange={event => onUpdateValue(event.target.value)}
                    className="focus:ring-black focus:border-black block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-sm"
                    placeholder="0.00"
                />
            </div>
        </div>
    )
}

export default Input;

