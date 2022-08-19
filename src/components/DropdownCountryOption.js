import React from "react";

import { Listbox } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/solid'
import classNames from "classnames";

const DropdownCountryOption = ({ country }) => {
    return (
        <Listbox.Option
            className={({ active }) =>
                classNames(
                active ? 'text-white bg-indigo-600' : 'text-gray-900',
                'cursor-default select-none relative py-2 pl-3 pr-9'
                )
            }
            value={country}
        >
            {({ selected, active }) => (
                <>
                    <div className="flex items-center">
                    <span
                        className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                    >
                        {country.name}
                    </span>
                    </div>

                    {selected ? (
                    <span
                        className={classNames(
                        active ? 'text-white' : 'text-indigo-600',
                        'absolute inset-y-0 right-0 flex items-center pr-4'
                        )}
                    >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    ) : null}
                </>
            )}
        </Listbox.Option>
    )
}

export default DropdownCountryOption;
