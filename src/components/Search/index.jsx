import { useDispatch } from 'react-redux'
import { setKeyword } from '../../app/features/Product/actions'

import styled from 'styled-components'

const Wrapper = styled.div`
	max-width: 100%;
	height: 2.4em;
	margin: 0 2em;
`
const SearchBox = styled.input`
	width: 100%;
	height: 3em;
	border: none;
	font-size: .8rem;
	border-radius: .8em;
	padding: .4em 1.4em;
	outline: none;
`

const Search = () => {
  const dispatch = useDispatch();

	return (
		<Wrapper>
			<SearchBox placeholder='Search for something...' onChange={e => dispatch(setKeyword(e.target.value))} />
		</Wrapper>
	)
}

export default Search