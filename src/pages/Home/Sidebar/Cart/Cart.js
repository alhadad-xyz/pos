import styled from 'styled-components'
import Header from './Header'
import Cards from './List/Cards'

const Wrapper = styled.section`
	width: 100%;
	height: 75%;
`

const Cart = ({cart}) => {
	return (
		<Wrapper>
			<Header />
			<Cards cart={cart}/>
		</Wrapper>
	)
}

export default Cart