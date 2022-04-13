import { sumPrice } from '../../../../utils';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

const Wrapper = styled.section`
	width: 100%;
	padding: 0 1em;
`
const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: .5em 0;
`
const Total = styled.h1`
	font-size: 1.2rem;
`
const Button = styled.button`
	margin-top: 2.6em;
	width: 100%;
	padding: .8em 0;
	text-transform: uppercase;
	font-weight: 700;
	border: none;
	border-radius: .8em;
	color: #fff;
	background-color: #f07613;
	cursor: pointer;
	transition: .5s all;
	&:hover {
		background-color: #f98527;
	}
`

const Counter = ({cart}) => {	
  const navigate = useNavigate();	

	return (
		<Wrapper>
			<Container>
				<Total>Subtotal</Total>
				<Total>{(Math.round(sumPrice(cart) * 100) / 100).toFixed(2)}</Total>
			</Container>
      { cart.length > 0 
      	? <Button onClick={_ => navigate('/checkout')}>Checkout</Button>
      	: <Button disabled>Grab some food!</Button>
			}
		</Wrapper>
	)
}

export default Counter