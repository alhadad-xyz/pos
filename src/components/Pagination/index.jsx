import { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { SkipNextCircle, SkipPreviousCircle } from '@styled-icons/boxicons-regular'

const Wrapper = styled.section`
	display: flex;
	justify-content: end;
	align-items: center;
	grid-gap: 1em;
	padding: 0 1em;
	max-width: 100%;
`

const Next = styled.button`
	background-color: #f4f5f6;
	border-radius: .5em;
	display: flex;
	border: none;
	align-items: center;
	grid-gap: .8em;
	cursor: pointer;
`

const Prev = styled.button`
	background-color: #f4f5f6;
	border-radius: .5em;
	display: flex;
	border: none;
	align-items: center;
	grid-gap: .8em;
	cursor: pointer;
`
const Count = styled.h4`
	color: #888;
`

const Pagination = ({total, data, active, onSetPage}) => {
  const [activePage, setActivePage] = useState(active);
  const handleClick = page => {
    onSetPage(page);
    setActivePage(page);
  }

	return (
		<Wrapper>
			<Prev disabled={activePage === 1} onClick={() => handleClick(activePage - 1)} >
				<SkipPreviousCircle size='32'/>
			</Prev>
			<Count>
				{ activePage } of { total }
			</Count>	
			<Next disabled={activePage === total || data.length < 10} onClick={() => handleClick(activePage + 1)} >
				<SkipNextCircle size='32'/>
			</Next>	
		</Wrapper>
	)
}

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  active: PropTypes.number
}

Pagination.defaultProps = {
  active: 1
}

export default Pagination