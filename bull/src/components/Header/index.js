import React, { Component } from 'react';
import './style.css';
import logo from './logo.png';
import logoMobile from './logo-mobile.png'

export default class Header extends Component {

	state = {
		dropdownClass: false,
		menuClass: false,
		notificationClass: false
	}

	toggleDropdown = () => {
		const { dropdownClass } = this.state;
		this.setState({ dropdownClass: !dropdownClass});
		this.removeMenu();
		this.removeNotifications();
	}

	toggleMenu = () => {
		const { menuClass } = this.state;
		this.setState({ menuClass: !menuClass});
		this.removeDropdown();
		this.removeNotifications();
	}

	toggleNotifications = () => {
		const { notificationClass } = this.state;
		this.setState({ notificationClass: !notificationClass});
		this.removeMenu();
		this.removeDropdown();
	}

	removeDropdown() {
		this.setState({ dropdownClass: false});
	}

	removeMenu() {
		this.setState({ menuClass: false});
	}

	removeNotifications() {
		this.setState({ notificationClass: false});
	}

	render() {

		const { dropdownClass, menuClass, notificationClass } = this.state;

		return(
			<header>
				<div className="container">

					<div className="menu-mobile" onClick={this.toggleMenu}></div>

					<div className="logo">
						<a href="/">
							<img src={logo} alt="Dash" className="logo-desktop" />
							<img src={logoMobile} alt="Dash" className="mobile-logo"/>
						</a>
					</div>

					<div className="interactions">

						<div className={notificationClass ? 'notifications active' : 'notifications'} onClick={this.toggleNotifications}>
							<div className="not-counter contain">3</div>
							<div className="notifications-list">
								<a href="/">
									Notificação do usuário
								</a>
								<a href="/">
									Notificação do usuário
								</a>
								<a href="/">
									Notificação do usuário
								</a>
							</div>
						</div>

						<ul className="user-info">
							<li className={dropdownClass ? 'menu-dropdown active' : 'menu-dropdown'} onClick={this.toggleDropdown}>
								<div className="activator">
									<span>Alex Doe</span>
									<div className="dropdown-icon"></div>
								</div>
								<ul className="dropdown-item">
									<li>
										<a href="/">Minha conta</a>
									</li>
									<li>
										<a href="/">Alterar senha</a>
									</li>
									<li>
										<a href="/">Sair</a>
									</li>
								</ul>
							</li>
						</ul>

					</div>
				</div>
				<div className={menuClass ? 'navigation active' : 'navigation'}>
					<div className="container">
						<nav>
							<ul>
								<li>
									<a href="/" className="active">Home</a>
								</li>
								<li>
									<a href="/projects">My Projects</a>
								</li>
								<li>
									<a href="/payments">Payments</a>
								</li>
								<li>
									<a href="/activity">activity</a>
								</li>
								<li>
									<a href="/settings">Settings</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
		);
	};
};