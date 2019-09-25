import React from 'react';
import { translate } from "react-i18next";
import { toPrettyDate } from '../../app/utils/date'
import { getRequestStatus } from './utils';


const DetailsRow = (props) => {
    return (
        <div className="details-row">
            {props.children}
        </div>
    )
}

const DetailsField = ({ label, value }) => (
    <div className="static-field">
        <div className="field-label">{label}:&nbsp;</div>
        <div className="field-value">{value}</div>
    </div>
)

const details = (props) => {
    const r = props.request
    const t = props.t
    const groups = [
        {
            label: 'request.shipmentInfo',
            values: [
                { label: "request.awbNumber", id: "awbNumber" },
                { label: "request.description", id: "description" },
                { label: "request.weight", id: "weight" },
                { label: "request.numberOfTrucks", id: "numberOfTrucks" },
                { label: "request.origin", id: "origin" },
                { label: "request.destination", id: "destination" },
                { label: "request.status", id: "requestStatus", isEnum: true },
                { label: "request.price-field-label", id: "price" },
                { label: "request.arabicTruckName", id: "arabicTruckName" },
                { label: "request.englishTruckName", id: "englishTruckName" },
                { label: "request.createdAt", id: "createAt", isDate: true }
            ]
        }
    ]
    return (
        <div>
            {
                groups.map((g, i) => (
                    <div key={i}>
                        <h2 className='details-header'>{t(g.label)}</h2>
                        <div className="details-container">
                            {
                                g.values.map((f, j) => (
                                    <DetailsRow key={j + "-:)"}>
                                        {
                                            f.isDate ?
                                                <DetailsField label={t(f.label)} value={toPrettyDate(r[f.id])} />
                                                :
                                                f.isEnum ?
                                                    <DetailsField label={t(f.label)} value={t(getRequestStatus(r[f.id]))} />
                                                    :
                                                    <DetailsField label={t(f.label)} value={r[f.id]} />
                                        }
                                    </DetailsRow>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
            <div>
                <h2 className='details-header'>{t('request.customerInfo')}</h2>
                <div className="details-container">
                    <DetailsRow>
                        <DetailsField label={t('request.customerFullName')} value={`${r.user.firstName} ${r.user.lastName}`} />
                    </DetailsRow>
                    <DetailsRow>
                        <DetailsField label={t('request.customerMobile')} value={r.user.mobile} />
                    </DetailsRow>
                    <DetailsRow>
                        <DetailsField label={t('request.corporate-en-name')} value={t(r.corporate.englishName)} />
                    </DetailsRow>
                    <DetailsRow>
                        <DetailsField label={t('request.corporate-ar-name')} value={t(r.corporate.arabicName)} />
                    </DetailsRow>
                </div>
            </div>
        </div>
    )
}

export default translate("common")(details)
