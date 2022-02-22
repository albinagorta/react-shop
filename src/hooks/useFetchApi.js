import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API = 'https://api.escuelajs.co/api/v1/';

const useFetchApi = () => {

   const [ productApi, setProductApi ] = useState([]);
   const [ categories, setCategories ] = useState('all');

   useEffect( async () => {

    if( categories === 'all' )
    {
      const response = await axios(`${API}products?limit=6&offset=1`);
      setTimeout( () => setProductApi(response.data ) , 500 );
    }else{
      const response = await axios(`${API}categories/${categories}/products?limit=5&offset=1`);
      setTimeout( () => setProductApi(response.data ) , 500 );
    }

  }, [ categories ] );

    return { productApi, setCategories };
}

export default useFetchApi;


