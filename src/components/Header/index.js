import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import './Header.less';
import logo from './logo.png';

function Header() {
	return (
		<header className="Header">
			<div className="Container">
				<div className="Header__wrap">
					<div className="Header__left">
						<Link to="/">
							<img src={logo} alt="BMDB" className="Header__logo" />
						</Link>
					</div>
					<div className="Header__right">
						<Link className="Header__item" to="/">
							<span className="u-text">POPULAR</span>
						</Link>
						<Link className="Header__item" to="/favorite">
							<span className="u-text">FAVORITE</span>
						</Link>
						<Link className="Header__item" to="/search">
							<FontAwesome name='search' />
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;