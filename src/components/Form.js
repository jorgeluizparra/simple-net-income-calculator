import React, { useState } from "react";

// Components
import Input from "./Input"
import Button from "./Button";
import Card from "./Card";
import DollarSign from "./icons/DollarSign";
import DollarBills from "./icons/DollarBills";
import DropdownInput from "./DropdownInput";
import DropdownCountryOption from "./DropdownCountryOption";

const countries = [
    {
      id: 1,
      name: 'Brazil',
      tax: 0.3
    },
    {
      id: 2,
      name: 'Australia',
      tax: 0.12
    },{
      id: 3,
      name: 'Canada',
      tax: 0.7
    },
]

const Form = ({ onSubmit, onError }) => {
    const [income, updateIncome] = useState(0)
    const [country, updateCountry] = useState(countries[0])
    const [type, updateType] = useState("")

    const clearForm = () => {
        updateIncome(0)
        updateType("")
        updateCountry(countries[0])
    }

    const submit = () => {
        if (income && type && country) {
            onSubmit({
                income,
                type,
                country
            });
            clearForm()
        } else {
            onError("Insert the income and select the income type.")
        }
    }

    return (
        <div className="mt-5">
            <Input value={income} onUpdateValue={(value) => updateIncome(value)} />
            <DropdownInput selected={country} onSelect={(data) => updateCountry(data)}>
            {countries.map((country) => (
               <DropdownCountryOption key={country.id} country={country}/> 
            ))}
            </DropdownInput>
            <div className="mt-5">
                <Card text="Gross income" selected={type === "gross"} onClick={() => updateType("gross")}>
                    <DollarBills />
                </Card>
                <Card text="Net income" selected={type === "net"} onClick={() => updateType("net")}>
                    <DollarSign />
                </Card>
            </div>
            <Button label="Calculate" onClick={() => submit()}/>
        </div>
    )
}

export default Form;

