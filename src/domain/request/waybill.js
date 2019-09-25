import React from 'react';
import Barcode from 'react-barcode';
import './waybill.css'
import Logo from '../../assets/icons/site-logo.png'

const WayBill = ({data}) => (
    <page id='page'>
        <div className="waybill-header">
            <div className="header-ar">
                <span>شركة شاحنة</span>
                <span>س.ت: 920033216</span>
                <span>جوال: 0533462946 - 0508752514</span>
                <span>الرقم الضريبي: 310160050100003</span>
                <span>2019/06/22</span>
            </div>
            <div className="header-center">
                <img className="header-logo" src={Logo}/>
                <h3>بوليصة شحن</h3>
            </div>
            <div className="header-en en">
                <span>Shahina Company</span>
                <span>C.R.: 920033216</span>
                <span>Mob.: 0533462946 - 0508752514</span>
                <span>VAT: 310160050100003</span>
                <span>2019/06/22</span>
            </div>
        </div>

        <div className='barcode'>
            <Barcode value={data.awbNumber} height={25} fontSize={20}/>
        </div>

        <div className="waybill-body">
            <div className="to-text">
                <span>السادة /</span>
                <span className='client-name'>{data.corporate.arabicName} </span>
                <span className="en">Messrs / </span>
            </div>

            <div className="truck-details">
                <h3 className='section-title'>السلام عليكم ورحمة الله وبركاته</h3>
                <div><span className="label">تصلكم السيارة</span><span className="var">{data.driver.truckType}</span><span className="label en">Truck Type</span></div>
                <div><span className="label">لوحة رقم</span><span className="var">{data.driver.plateNo}</span><span className="label en">Plate No.</span></div>
                <div><span className="label">اسم السائق</span><span className="var">{`${data.driver.firstName} ${data.driver.lastName}`}</span><span className="label en">Driver Name</span></div>
                <div><span className="label">رقم رخصة القيادة</span><span className="var">{data.driver.licenseNumber}</span><span className="label en">License No.</span></div>
                <div><span className="label">رقم الاقامة</span><span className="var">{data.driver.iqamaNumber}</span><span className="label en">Iqama No.</span></div>
                <div><span className="label">رقم رخصة التشغيل</span><span className="var"></span><span className="label en">Operation License No.</span></div>
                <div><span className="label">اسم المالك للسيارة</span><span className="var">{data.driver.truckOwnerName}</span><span className="label en">Truck Owner Name</span></div>
            </div>

            <div>
                <h3 className='section-title'>مواصفات البضاعة</h3>
                <table>
                    <tbody>
                    <tr>
                        <td rowSpan="2" className="multiline">
                            <span>نوع الحمولة</span>
                            <span>Load Type</span>
                        </td>
                        <td rowSpan="2" className="multiline">
                            <span>وزن الحمولة</span>
                            <span>Weight</span>
                        </td> 
                        <td colSpan="2">
                            <span>الاتجاه Direction</span>
                        </td>
                        <td colSpan="3">
                            <span>الأجرة Rent</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="multiline">
                            <span>من</span>
                            <span>From</span>
                        </td>
                        <td className="multiline">
                            <span>إلى</span>
                            <span>To</span>
                        </td>
                        <td className="multiline">
                            <span>المبلغ</span>
                            <span>Amount</span>
                        </td>
                        <td className="multiline">
                            <span>من المكتب</span>
                            <span>From Office</span>
                        </td>
                        <td className="multiline">
                            <span>من العميل</span>
                            <span>From Customer</span>
                        </td>
                    </tr>
                    <tr>
                        <td>{data.loadType}</td>
                        <td>{data.weight}</td> 
                        <td>{data.origin}</td>
                        <td>{data.destination}</td>
                        <td>{data.amount}</td>
                        <td></td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="package-date">
                <div><span className="label">تاريخ المغادرة من المستودع </span><span>{""+(new Date()).toLocaleDateString("enSA", {  year: 'numeric', month: 'numeric', day: 'numeric'})}</span></div>
                <div><span className="label">تاريخ الوصول والتنزيل </span><span></span></div>
            </div>

            <div>
                <h3 className='section-title'>الشروط</h3>
                <ol className="terms">
                    <li>السائق ملزم بتشريع السيارة عند انتهاء التحميل.</li>
                    <li>نقص البضاعة أو تلفها مسؤولية السائق.</li>
                    <li>يخضع النقل بموجب هذه الشروط للأحكام والشروط الواردة فيها والأنظمة السارية المعمول بها في المملكة العربية السعودية.</li>
                    <li>الشركة غير مسؤولة عن محتويات أي شحنة يستلمها مخالفة أو لم يتم معايتنها بواسطة مندوينا قبل الشحن.</li>
                    <li>الشركة لاتكون مسؤولة عن الضرر الناتج عن انقلاب أو حريق الشاحنة.</li>
                    <li>يكون السائق مسؤول مسؤولية تامة عن البضائع من لحظة توقيعه على استلامها وحتى تسليمها.</li>
                    <li>تعتبر موافقة سائق الشاحنة موافقة ماكلها الأصلي على التحميل ويكون مسؤولاً عن أي ضرر يحث من قبل سائقه عليها.</li>
                </ol>
            </div>
        </div>
        <div className="driver-details">
            <div>
                <div className="name">
                    <span className='label'>اسم السائق</span>
                    <span>{`${data.driver.firstName} ${data.driver.lastName}`}</span>
                </div>

                <div className='singature'>
                    <span className='label'>التوقيع</span>
                    <span></span>
                </div>
            </div>
            <div>
                <div className="name">
                    <span className='label'>اسم المندوب</span>
                    <span>{`${data.loggedInUserName.firstName} ${data.loggedInUserName.lastName}`}</span>
                </div>

                <div className='singature'>
                    <span className='label'>التوقيع</span>
                    <span></span>
                </div>
            </div>
        </div>
        <div className='mark'>
            <span className='label'>الختم</span>
        </div>

        <div className='waybill-footer'>
            <span>+966920033216 - info@shahina.co - http://www.shahina.co - TIN: 1010893981</span>
            <br/>
            <span>Kingdom of Saudi Arabia - Postal Box - 14262 Additional Number 6329 - Phone / 966920033216 - Saudi Investment Bank</span>
            <br/>
            <span>Account Number - IBAN Number: SA16 6500 0000 1274 9952 0001</span>
        </div>
    </page>
)

export default WayBill;