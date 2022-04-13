import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Wrapper = styled.section`
	display: flex;
	max-width: 100%;
	padding: 1.2em;
`
const Button = styled.button`
	padding: .80em 1.6em;
	margin: 0 .64em;
	font-size: .8rem;
	background-color: ${props => props.bg ? '#f07613' : '#fff' };
	border: none;
	border-radius: 2em;
	color: ${props => props.bg ? '#fff' : '#000' };
	cursor: pointer;
	transition: .5s all ease-in-out;
	text-transform: capitalize;
	&:hover {
		background-color: ${props => props.bg ? '#e86e0b' : '#f4f5f6' };
	}
`
const Active = styled.button`
	padding: .80em 1.6em;
	margin: 0 .64em;
	font-size: .8rem;
	background-color: ${props => props.menuBg ? '#f07613' : '#fff' };
	border: none;
	border-radius: 2em;
	color: ${props => props.menuBg ? '#fff' : '#000' };
	cursor: pointer
`

const Category = ({items, onClick}) => {
	const products = useSelector(state => state.products)

	return (
		<Wrapper>
			<Active
      	onClick={() => onClick('')}
      	menuBg={products.category === ''}
			>All Menu</Active>
			{
        items.map((item, i) => (
          <Button 
            key={i}
            bg={products.category.includes(item.name)} 
            onClick={() => onClick(item.name)}
          > {item.name}</Button>
        ))
      }
		</Wrapper>
	)
}

export default Category