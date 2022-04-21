import { useDispatch } from 'react-redux';
import { clearItem } from '../../../../../app/features/Cart/actions';
import { Wrapper, Title, Clear } from './styled'

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