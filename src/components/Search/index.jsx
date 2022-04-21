import { useDispatch } from 'react-redux'
import { setKeyword } from '../../app/features/Product/actions'
import { Wrapper, SearchBox } from './styled'

const Search = () => {
  const dispatch = useDispatch();

	return (
		<Wrapper>
			<SearchBox placeholder='Search for something...' onChange={e => dispatch(setKeyword(e.target.value))} />
		</Wrapper>
	)
}

export default Search