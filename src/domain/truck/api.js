import axios from 'axios';

const TRUCKS_URL = "/api/v1/trucks"

export function getTrucks() {
    return axios({
        method: 'get',
        url: TRUCKS_URL,
      })
}

export function add(truck) {
    return axios.post(TRUCKS_URL, {
            arabicName: truck.arabicName,
            englishName: truck.englishName
        }
    )
}

export function deleteTruck(id) {
    return axios({
        method: 'delete',
        url: `${TRUCKS_URL}/${id}`
    })
}