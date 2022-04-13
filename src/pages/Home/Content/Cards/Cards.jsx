import { useDispatch } from 'react-redux'
import { addItem } from '../../../../app/features/Cart/actions';
import styled from 'styled-components'
import CardPlaceholder from './CardPlaceholder'
import Card from './Card'

const Wrapper = styled.section`
	max-width: 100%;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	grid-gap: 1em 0;
	margin: 1em 2em;
`

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