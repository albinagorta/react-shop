import React,{useContext} from 'react';

//components
import ProductItem from '@components/ProductItem';

//css
import '@styles/ProductList.scss';

const ProductList = ({productApi}) => {

	return (
		<section className="main-container">
			<div className="ProductList">
				{
					productApi.map(product => (
						<ProductItem product={product} key={product.id} />
					))
				}
			</div>
		</section>
	);
}

export default ProductList;