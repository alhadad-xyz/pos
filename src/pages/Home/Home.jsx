import Content from './Content/Content'
import Sidebar from './Sidebar/Sidebar'
import styled from 'styled-components'

const Wrapper = styled.section`
	display: flex;
	width: 100%;
	height: 100vh;
	background-color: #f6f7fa;
`

const Home = () => {
	return (
		<Wrapper>
			<Content />
			<Sidebar />
		</Wrapper>
	)
}

export default Home
