import React, { useContext } from 'react';
import ProductList from '@containers/ProductList';

import AppContext from '@context/AppContext';

const Home = () => {
	const State = useContext( AppContext );
	//console.log(State);
	return (
		<>
			<ProductList productApi={ State.productApi } />
		</>
	);
}

export default Home;