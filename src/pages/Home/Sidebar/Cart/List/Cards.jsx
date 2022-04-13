import styled from 'styled-components'
import Card from './Card'

const Wrapper = styled.section`
	max-width: 100%;
	height: 80%;
	margin: 1em;
	background-color: #f9f9f9;
	overflow: auto;
	border-radius: 1em;
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