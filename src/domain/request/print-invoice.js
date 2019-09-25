import React from 'react';
import './print.css'

import Logo from '../../assets/icons/site-logo2.png';

const Invoice = () => (
    <page id='page'>
        <div className="header-text">
            <span className="invoice-no"><strong>Invoice:</strong> 123456</span>
            <span className="invoice-date"><strong>Date:</strong> 2019/23/12</span>
        </div>
        <div className="print-body">
            <div className="to-text">
                <span><strong>MR:</strong></span>
                <span className="client-name">Mohammed</span>
                <span>greatings</span>
            </div>

            <table >
                <tr>
                    <th>Date</th>
                    <th>Truck Plate</th> 
                    <th>From</th>
                    <th>To</th>
                    <th>Price</th>
                </tr>
                <tr>
                    <td>Jill</td>
                    <td>Smith</td> 
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>Eve</td>
                    <td>Jackson</td> 
                    <td>50</td>
                    <td>50</td>
                    <td>50</td>
                </tr>
            </table>
            <div className="summary">
                <table className="summary-table">
                    <tr>
                        <td>Sub-Total</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>VAT</td>
                        <td>14</td> 
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>14</td> 
                    </tr>
                </table>
            </div>
        </div>
        <div className='print-footer'>
            <span>+966920033216 - info@shahina.co - http://www.shahina.co - TIN: 1010893981</span>
            <br/>
            <span>Kingdom of Saudi Arabia - Postal Box - 14262 Additional Number 6329 - Phone / 966920033216 - Saudi Investment Bank</span>
            <br/>
            <span>Account Number - IBAN Number: SA16 6500 0000 1274 9952 0001</span>
        </div>
    </page>
)

export default Invoice;