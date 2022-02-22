
import React , { useContext }from 'react';

import AppContext from '@context/AppContext';

const CategoriaItem = ({ cat }) => {
    const State = useContext( AppContext );

	const handleClick = item => {
		State.setCategories(item.id);
	}

    return (
        <li>
            <a href="#" onClick={ () => handleClick(cat) }>{cat.name}</a>
        </li>
    );
}

export default CategoriaItem;