import styled from 'styled-components'
import Sidebar from './Sidebar/Sidebar'
import Content from './Content/Content'

const Wrapper = styled.section`
	display: flex;
	width: 100%;
	height: 100vh;
`

const Dashboard = () => {
	return (
		<Wrapper>
			<Sidebar />
			<Content />
		</Wrapper>
	)
}

export default Dashboard