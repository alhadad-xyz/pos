import styled from 'styled-components'
import Card from './Card'

const Wrapper = styled.section`
	max-width: 100%;
	height: 80%;
	margin: 1em;
	overflow: auto;
`

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