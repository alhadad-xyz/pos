import Sidebar from './Sidebar'
import { Wrapper, Content } from './styled'

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