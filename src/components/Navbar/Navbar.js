import React from 'react';
import { Link } from 'react-router-dom';
import { ADMIN } from '../../Roles'
import './Navbar.css'
import requestIcon from "../../assets/icons/request.svg"
import truckIcon from "../../assets/icons/truck.svg"
import driversIcon from '../../assets/icons/driver.svg'

const items = [
    { label: 'navbar.requests', icon: requestIcon, link: '/requests'},
    { label: 'navbar.trucks', icon: truckIcon, link: '/trucks', admin: true },
    { label: 'navbar.drivers', icon: driversIcon, link: '/drivers', admin: true},
    { label: 'navbar.pricing', icon: driversIcon, link: '/pricing', admin: true},
    { label: 'navbar.contracts', icon: driversIcon, link: '/contracts', admin: true}
]

export default (props) => {
    const { userType } = props.authUser;
    return (
        <div className="navbar">
            <ul className="navbar-items">
                {items.map(item => {
                    if ((item.admin && userType === ADMIN) || !item.admin) {
                        return (
                            <li key={item.label}>
                                <Link to={item.link} className="navbar-item">
                                    <img className="navbar-icon" src={item.icon} />
                                    {props.t(item.label)}
                                </Link>
                            </li>
                        )
                    }
                })}
            </ul>
        </div>
    );
}