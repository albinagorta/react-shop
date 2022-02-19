import React from 'react';

//components
import ProductItem from '@components/ProductItem';

//hooks
import useGetProducts from '@hooks/useGetProducts';

//css
import '@styles/ProductList.scss';

const API = 'https://api.escuelajs.co/api/v1/products';


const ProductList = () => {

	const products = useGetProducts(API);
	return (
		<section className="main-container">
			<div className="ProductList">
				{
					products.map(product => (
						<ProductItem product={product} key={product.id} />
					))
				}
			</div>
		</section>
	);
}

export default ProductList;