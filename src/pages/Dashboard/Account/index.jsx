import { useSelector } from 'react-redux'
import Sidebar from '../Sidebar'
import { Wrapper, Content, Title, Card, Container, Key } from './styled'

const Account = () => {
  const auth = useSelector(state => state.auth)

	return (
		<Wrapper>
			<Sidebar />
			<Content>
				<Title>Account Information</Title>
				<Card>
					<Container>
						<Key>Name</Key>	
						<Key>{ auth.user.fullname }</Key>
					</Container>
					<Container>
						<Key>Email</Key>
						<Key>{ auth.user.email }</Key>	
					</Container>
				</Card>
			</Content>
		</Wrapper>
	)
}

export default Account