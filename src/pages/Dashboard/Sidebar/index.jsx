import { Dashboard } from '@styled-icons/boxicons-solid'
import { UserCircle, PackageIcon, Home } from '@styled-icons/boxicons-solid'
import { Wrapper, Title, Container, Navigation, Button } from './styled'

const Sidebar = () => {
	return (
		<Wrapper>
			<Container>
				<Title to='/'>Foodie's</Title>
				<Navigation to='/dashboard'>
					<Dashboard size='24' /> Dashboard
				</Navigation>
				<Navigation to='/transaction'>
					<PackageIcon size='24' /> Transaction
				</Navigation>
				<Navigation to='/address'>
					<Home size='24' /> Address
				</Navigation>
				<Navigation to='/account'>
					<UserCircle size='24' /> Account
				</Navigation>
				<Navigation to='/'>
					<UserCircle size='24' /> Back
				</Navigation>
			</Container>
			<Button to='/auth/logout'>
				Logout
			</Button>
		</Wrapper>
	)
}

export default Sidebar