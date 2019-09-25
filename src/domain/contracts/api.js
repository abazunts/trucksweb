import axios from 'axios';

const CONTRACT_URL = "/api/v1/contracts"

export function getContractsAll() {
    return axios({
        method: 'get',
        url: `${CONTRACT_URL}/all`,
    })
}

export function addContract(values, pricingIdList) {
    return axios.post(CONTRACT_URL, {
            approved: values.approved,
            complete: values.complete,
            customerId: values.customerId,
            pricingIdList: pricingIdList,
            startContract: values.startContract,
            finishContract: values.finishContract,
            totalPrice: values.totalPrice
        }
    )
}