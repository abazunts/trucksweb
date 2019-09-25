import axios from 'axios';

const DRIVERS_URL = "/api/v1/drivers"

export function getDriverDetails(id) {
    return axios({
        method: 'get',
        url: `${DRIVERS_URL}/${id}`
    })
}

// TODO: add SSP
export function getDrivers() {
    return axios({
        method: 'get',
        url: DRIVERS_URL,
      })
}

export function getDriversByTruck(truckId) {
    return axios({
        method: 'get',
        url: `${DRIVERS_URL}/truck/${truckId}`,
      })
}
