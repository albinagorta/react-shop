import React,{useState,useContext} from 'react';
import '@styles/Header.scss';

import Menu from '@components/Menu';

import icon_menu from '@icons/icon_menu.svg';
import icon_shopping_cart from '@icons/icon_shopping_cart.svg';
import logo_yard_sale from '@logos/logo_yard_sale.svg';

import AppContext from '@context/AppContext';

const Header = () => {
	const [ toggle, setToggle ] = useState(false);
	const { state } = useContext(AppContext);

	const handleToggle = () => {
		setToggle(!toggle);
	}

	const verifyCart = (cartNumber) => {
		if (cartNumber && (cartNumber < 10)) {
		  return (<div>{cartNumber}</div>);
		} else if (cartNumber > 9) {
		  return (<div>+9</div>);
		} else {
		  return null;
		}
	  }

	return (
		<nav>
			<img src={icon_menu} alt="menu" className="menu" />
			<div className="navbar-left">
				<img src={logo_yard_sale} alt="logo" className="nav-logo" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={handleToggle}>
					avideait@example.com
					</li>
					<li className="navbar-shopping-cart">
						<img src={icon_shopping_cart} alt="shopping cart" />
						{ verifyCart(state.cart.length) }
					</li>
				</ul>
			</div>
			{ toggle ? <Menu/> : ""}
		</nav>
	);
}

export default Header;