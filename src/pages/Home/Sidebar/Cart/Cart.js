import styled from 'styled-components'
import Header from './Header'
import Cards from './List/Cards'

const Wrapper = styled.section`
	width: 100%;
	height: 75%;
`
const EmptyCart = styled.section`
	max-width: 100%;
	text-align: center;
	height: 80%;
	margin: 1em;
	padding: 1em;
	color: #999;
	background-color: #f9f9f9;
	border-radius: 1em;
`

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