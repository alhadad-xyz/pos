import { useDispatch } from 'react-redux'
import { addItem } from '../../app/features/Cart/actions';
import CardPlaceholder from './CardPlaceholder'
import Card from './Card'
import { Wrapper } from './styled'

const Cards = ({products}) => {
	const dispatch = useDispatch();

	return (
		<Wrapper>
			{
				products.status === "process" 
				?	Array.from({length: 10}).map((_, idx) => (
						<CardPlaceholder key={idx}/>
					)
				)
			 	: products.data.map((product, i) => (
						<Card key={i} item={product} onAddToCart={() => dispatch(addItem(product))}/>
					)
				)
			}
	</Wrapper>
	)
}

export default Cards