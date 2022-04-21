import { sumPrice } from '../../utils';
import { useNavigate } from 'react-router-dom';
import { Wrapper, Container, Total, Button } from './styled'

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