import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Navbar from '../../../components/Navbar/Navbar'
import Category from './Category/Category'
import Search from './SearchBar/Search'
import Cards from './Cards/Cards'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../../app/api/product';
import { fetchProducts, setPage, setCategory } from '../../../app/features/Product/actions';

import Pagination from './Pagination/Pagination'

const Wrapper = styled.section`
    width: 65%;
`

const Content = () => { 
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());
    getCategories(products.category)
    .then(({data}) => setCategories(data));
  }, [dispatch, products.currentPage, products.category, products.tags, products.keyword]);

    return (
        <Wrapper>
            <Navbar />
            <Category items={categories} onClick={category => dispatch(setCategory(category))}/>
            <Search/>
            <Cards products={products}/>
            <Pagination 
                total={Math.ceil(products.totalItems / products.perPage)}
                active={products.currentPage}
                onSetPage={page => dispatch(setPage(page))}
            />
        </Wrapper>
    )
}

export default Content