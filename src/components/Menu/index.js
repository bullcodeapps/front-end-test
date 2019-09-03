import React from 'react'
import './styles.css'
import '../../global.css'

import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div className="container">
        <nav className="header-menu">
            <ul>
                <li className="active">
                    <Link to="">Home</Link>
                </li>
                <li>
                    <Link to="">My Projects</Link>
                </li>
                <li>
                    <Link to="">Payments</Link>
                </li>
                <li>
                    <Link to="">Activity</Link>
                </li>
                <li>
                    <Link to="">Setting</Link>
                </li>
            </ul>
        </nav>
    </div>
  );
}
