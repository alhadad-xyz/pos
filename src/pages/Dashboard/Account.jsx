import styled from 'styled-components'
import Sidebar from './Sidebar/Sidebar'
import Account from './Account/Account'

const Wrapper = styled.section`
	display: flex;
	width: 100%;
	height: 100vh;
`

const Dashboard = () => {
	return (
		<Wrapper>
			<Sidebar />
			<Account />
		</Wrapper>
	)
}

export default Dashboard