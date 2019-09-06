import React from 'react'
import './styles.css'
import '../../global.css'

import { FaBell } from "react-icons/fa"
import { MdKeyboardArrowDown } from "react-icons/md"

import Menu from '../Menu'

export default function Header() {
    return (
        <div className="wrapper">
            <div className="container">
                <div className="desktop">
                    <div className="header-row">
                        <div className="text-wrapper">
                            <h3>Dash <span>Elements</span></h3>
                        </div>
                        <div className="profile-wrapper">
                            <div className="content">
                                <FaBell
                                    className="bell-icon"
                                    color="#fff"
                                    size={24} />
                                <h3>Luis</h3>
                                <div className="icon-wrapper">
                                    <MdKeyboardArrowDown
                                        color="#fff"
                                        size={22} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Menu />
                </div>

                <div className="header-row mobile">
                    <div className="text-wrapper">
                        <Menu />
                    </div>
                    <div className="profile-wrapper">
                        <div className="content">
                            <h3>Luis</h3>
                            <div className="icon-wrapper">
                                <MdKeyboardArrowDown
                                    color="#fff"
                                    size={22} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
