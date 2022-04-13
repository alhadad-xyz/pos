import { useDispatch } from 'react-redux';
import { clearItem } from '../../../../app/features/Cart/actions';
import styled from 'styled-components'

const Wrapper = styled.section`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: .5em 1.6em;

`
const Title = styled.h1`
	font-size: 2rem;
`
const Clear = styled.button`
	padding: 0 1em;
	height: 2.6em;
	border: none;
	border-radius: .5em;
	background-color: #fbecee;
	color: #ed5575;
	cursor: pointer;
`

const Header = (item) => {
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearItem());
  }

	return (
		<Wrapper>
			<Title>Cart</Title>	
			<Clear onClick={() => handleClear()}>Clear All</Clear>		
		</Wrapper>
	)
}

export default Header