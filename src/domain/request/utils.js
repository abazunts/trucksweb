import { NEW, CLIENT_APPROVED, APPROVED, ASSIGNED, REJECTED, CLIENT_CANCELD
, ARRIVAL_TO_PICKUP, OUT_FOR_DELIVERY, ARRIVE_AT_DESTINATION, DELIVERED } from './request-status'

export function getRequestStatus(status) {
    switch (status) {
        case NEW:
            return "request.request-status-new"
        case APPROVED:
            return "request.request-status-approved"
        case CLIENT_APPROVED:
            return "request.request-status-client-approved"
        case ASSIGNED:
            return "request.request-status-assigned"
        case REJECTED:
            return "request.request-status-rejected"
        case CLIENT_CANCELD:
            return "request.request-status-client-canceled"
        case ARRIVAL_TO_PICKUP:
            return "request.request-status-pickup"
        case OUT_FOR_DELIVERY:
            return "request.request-status-out4dlv"
        case ARRIVE_AT_DESTINATION:
            return "request.request-status-arrive-at-dest"
        case DELIVERED:
            return "request.request-status-client-deliverd"
        default:
            return ""
    }
}