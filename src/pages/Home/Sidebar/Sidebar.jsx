import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { listen } from '../../.././app/listener';
import styled from 'styled-components'
import Guest from './Guest/Guest'
import Cart from './Cart/Cart'
import Counter from './Counter/Counter'

const Wrapper = styled.section`
  width: 35%;
  height: 100vh;
  background-color: #fff;
  position: relative;
`

const Sidebar = () => {  
  const cart = useSelector(state => state.cart);
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    listen();
  }, [])

  return (
    <Wrapper>
      { auth.user ? null : <Guest /> }
      <Cart cart={cart}/>
      <Counter cart={cart}/>
    </Wrapper>
  )
}

export default Sidebar