import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../../app/api/product';
import { fetchProducts, setPage, setCategory } from '../../../app/features/Product/actions';
import Navbar from '../../../components/Navbar'
import Category from '../../../components/Category'
import Search from '../../../components/Search'
import Cards from '../../../components/Cards'
import Pagination from '../../../components/Pagination'
import { Wrapper } from './styled'

const Content = () => { 
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());        
  },[dispatch, products.currentPage, products.category, products.tags, products.keyword]);

  useEffect(() => {
    getCategories()
    .then(({data}) => setCategories(data.data));
  }, []);

  return (
    <Wrapper>
      <Navbar />
      <Category items={categories} onClick={category => dispatch(setCategory(category))}/>
      <Search/>
      <Cards products={products}/>
      <Pagination 
        total={Math.ceil(products.totalItems / products.perPage)}
        data={products.data}
        active={products.currentPage}
        onSetPage={page => dispatch(setPage(page))}
      />
    </Wrapper>
  )
}

export default Content