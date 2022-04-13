import styled from 'styled-components'
import Sidebar from './Sidebar/Sidebar'
import Address from './Address/Address'

const Wrapper = styled.section`
	display: flex;
	width: 100%;
	height: 100vh;
`

const Dashboard = () => {
	return (
		<Wrapper>
			<Sidebar />
			<Address />
		</Wrapper>
	)
}

export default Dashboard