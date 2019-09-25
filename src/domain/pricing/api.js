import axios from 'axios';

const PRICING_URL = "/api/v1/pricing"

export function getPricing() {
    return axios({
        method: 'get',
        url: PRICING_URL,
    })
}

export function addPricing(pricing) {
    return axios.post(PRICING_URL, {
            discount: pricing.discount,
            distance: pricing.distance,
            freightId: pricing.freightId,
            numberOfTrucks: pricing.numberOfTrucks,
            totalPrice: pricing.totalPrice,
            truckId: pricing.truckId,
        }
    )
}

export function deletePricing(pricingId) {
    return axios({
        method: 'delete',
        url: `${PRICING_URL}/${pricingId}`
    })
}

export function updatePricing(pricingId) {
    return axios({
        method: 'put',
        url: `${PRICING_URL}/${pricingId}`
    })
}