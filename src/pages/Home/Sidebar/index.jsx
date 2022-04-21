import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { listen } from '../../.././app/listener';
import Cart from './Cart'
import Counter from '../../../components/Counter'
import Guest from '../../../components/Guest'
import { Wrapper } from './styled'

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