import Header from './Header'
import Cards from './List/Cards'
import { Wrapper, EmptyCart } from './styled'

const Cart = ({cart}) => {
	return (
		<Wrapper>
			<Header />
			{
				cart.length > 0
				?	<Cards cart={cart}/>
				: <EmptyCart>There is no food here!</EmptyCart>
			}
		</Wrapper>
	)
}

export default Cart