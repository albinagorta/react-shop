import React,{useContext} from 'react';

//components
import CategoriaItem from '@components/CategoriaItem';

//hooks
import useGetCategoria from '@hooks/useGetCategoria';

//css
import '@styles/ProductList.scss';

import AppContext from '@context/AppContext';

const API = 'https://api.escuelajs.co/api/v1/categories';


const CategoriaList = () => {

    const categorias = useGetCategoria(API);

    const State = useContext( AppContext );
    
    const handleClick = item => {
            State.setCategories(item);
    }

   
    return (
        <ul>
            <li>
                <a href="#" onClick={ () => handleClick('all') }>Todos</a>
            </li>
            {
                categorias.map(cat => (
                    <CategoriaItem cat={cat} key={cat.id} />
                ))
            }
        </ul>
    );
}

export default CategoriaList;