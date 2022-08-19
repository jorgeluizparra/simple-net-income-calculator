import { axiosInstance, handleRequest } from "./index";

export const calculateIncomeRequest = async (income, type, taxRate, countryName) => {
    // return await handleRequest(() => axiosInstance.post('v1/income', { income, type }))
    if (type === "gross") {
        let net = income * (1 - taxRate);
        let tax = income - net;
        return {
            gross: income,
            net,
            tax,
            country: countryName
        }
    }
    let gross = income / (1 - taxRate);
    let tax = gross - income;
    return {
        tax,
        gross,
        net: income,
        country: countryName
    }
}
