import React, { useState } from "react";

// APIs
import { calculateIncomeRequest } from "./apis/income";

// Components
import Header from "./components/Header";
import Form from "./components/Form";
import Banner from "./components/Banner";
import Table from "./components/Table";

const App = () =>{
    const [bannerMessage, updateBannerMessage] = useState("");
    const [tableData, updateTableData] = useState([]);

    const calculateIncome = async ({income, type, country}) => {
        const result = await calculateIncomeRequest(income, type, country.tax, country.name)
        if (result) {
            const newTableData = Object.keys(result).map(key => {
                return {
                    title: key,
                    value: result[key]
                }
            })
            updateTableData(newTableData);
        } else {
            updateBannerMessage("Error: Occurred an error during the request.");
        }
    }

    return (
        <>
            <Header />
            <Form onSubmit={(data) => calculateIncome(data)} onError={(message) => updateBannerMessage(message)}/>
            {
                bannerMessage && 
                <Banner color="red" message={bannerMessage} onClose={() => updateBannerMessage("")} />
            }
            {
                tableData.length > 0 && 
                <Table items={tableData} onClose={() => updateTableData([])}/>
            }
        </>
    )
}

export default App