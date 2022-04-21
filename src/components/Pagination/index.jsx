import { useState } from 'react'
import PropTypes from 'prop-types'
import { SkipNextCircle, SkipPreviousCircle } from '@styled-icons/boxicons-regular'
import { Wrapper, Next, Prev, Count } from './styled'

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