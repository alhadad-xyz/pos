import styled from 'styled-components'
import Sidebar from './Sidebar/Sidebar'
import Transaction from './Transaction/Transaction'

const Wrapper = styled.section`
	display: flex;
	width: 100%;
	height: 100vh;
`


const Dashboard = () => {
	return (
		<Wrapper>
			<Sidebar />
			<Transaction />
		</Wrapper>
	)
}

export default Dashboard