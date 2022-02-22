import React,{useState,useContext} from 'react';
import '@styles/Header.scss';

import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import CategoriaList from '@containers/CategoriaList';

import icon_menu from '@icons/icon_menu.svg';
import icon_shopping_cart from '@icons/icon_shopping_cart.svg';
import logo_yard_sale from '@logos/logo_yard_sale.svg';

import AppContext from '@context/AppContext';

const Header = () => {
	const [ toggle, setToggle ] = useState(false);
	const { state } = useContext(AppContext);
	const [ toggleOrders, setToggleOrders ] = useState(false);

	const handleToggle = () => {
		setToggle(!toggle);
	}

	const handleToggleOrders = () => {
		setToggleOrders(!toggleOrders);
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
				<CategoriaList/>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={handleToggle}>
					avideait@example.com
					</li>
					
					<li className="navbar-shopping-cart"  onClick={handleToggleOrders}>
						<img src={icon_shopping_cart} alt="shopping cart" />
						{ verifyCart(state.cart.length) }
					</li>
				</ul>
			</div>
			{ toggle ? <Menu/> : ""}
			{ toggleOrders ? <MyOrder/> : ""}
		</nav>
	);
}

export default Header;