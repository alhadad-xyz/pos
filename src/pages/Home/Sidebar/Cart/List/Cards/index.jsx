import Card from '../Card'
import { Wrapper } from './styled'

const Cards = ({cart}) => {

	return (
		<Wrapper>
		{
			cart.map((item, i) => (
				<Card key={i} item={item} />
			))
		}
		</Wrapper>
	)
}

export default Cards