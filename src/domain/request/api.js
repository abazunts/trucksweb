import axios from 'axios';

const REQUESTS_URL = "/api/v1/requests"

export function getRequestDetails(id) {
    return axios({
        method: 'get',
        url: `${REQUESTS_URL}/${id}`
    })
}

// TODO: add SSP
export function getRequests() {
    return axios({
        method: 'get',
        url: REQUESTS_URL,
      })
}

export function approve(id, price) {
    return axios({
        method: 'put',
        url: `${REQUESTS_URL}/approve/${id}`,
        data: {
            price: price
        }
    })
}

export function reject(id, reason) {
    return axios({
        method: 'put',
        url: `${REQUESTS_URL}/reject/${id}`,
        data: {
            reason: reason
        }
    })
}

export function assign(requestId, driversIds) {
    return axios({
        method: 'post',
        url: `${REQUESTS_URL}/assign`,
        data: {
            "requestId": requestId,
            "drivers": driversIds
        }
    })
}

export function addRequest(request) {
    return axios({
        method: 'post',
        url: `${REQUESTS_URL}`,
        data: request
    })
}

export function getWaybillDetails(requestId) {
    return axios({
        method: 'get',
        url: `${REQUESTS_URL}/waybill/${requestId}`,
      })
}

export function getAssignedDrivers(requestId) {
    return axios({
        method: 'get',
        url: `${REQUESTS_URL}/drivers/${requestId}`
    })
}

export function pickup(driverRequestId) {
    return axios({
        method: 'put',
        url: `${REQUESTS_URL}/driver/${driverRequestId}/pickup`
    })
}

export function outForDelivery(driverRequestId) {
    return axios({
        method: 'put',
        url: `${REQUESTS_URL}/driver/${driverRequestId}/out`
    })
}

export function arriveAtDestination(driverRequestId) {
    return axios({
        method: 'put',
        url: `${REQUESTS_URL}/driver/${driverRequestId}/arrival`
    })
}

export function complete(driverRequestId) {
    return axios({
        method: 'put',
        url: `${REQUESTS_URL}/driver/${driverRequestId}/complete`
    })
}

export function cancel(id) {
    return axios({
        method: 'put',
        url: `${REQUESTS_URL}/cancel/${id}`
    })
}