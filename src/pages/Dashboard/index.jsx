import styled from 'styled-components'
import Sidebar from './Sidebar'

const Wrapper = styled.section`
	display: flex;
	width: 100%;
	height: 100vh;
`

const Content = styled.div`
	width: 80%;
	height: 100%;
`


const Dashboard = () => {
	return (
		<Wrapper>
			<Sidebar />
			<Content>
				Dashboard
			</Content>
		</Wrapper>
	)
}

export default Dashboard