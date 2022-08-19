import React from "react";

const Header = () => {
  return (
    <header className="lg:flex lg:items-center lg:justify-between">
      <div className="flex-1 min-w-0">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:tracking-tight sm:truncate">
          Financial Calculator
        </h2>
        <div className="mt-2 flex items-center text-sm text-gray-500">
          Calculate your gross or net incomes.
        </div>
      </div>
    </header>
  )
}

export default Header;
