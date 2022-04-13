import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Dashboard } from '@styled-icons/boxicons-solid'
import { UserCircle, PackageIcon, Home } from '@styled-icons/boxicons-solid'

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 20%;
	height: 100%;
	padding: 1em 0;
	background-color: #f07613;
`
const Title = styled(Link)`
	margin: 1em .5em;
	font-size: 2rem;
	font-weight: 700;
	color: #fff;
	text-decoration: none;
`
const Container = styled.div`
	display: flex;
	flex-direction: column;
`
const Navigation = styled(Link)`
	padding: 1em 1.2em;
	text-decoration: none;
	color: #eee;
	transition: .4s all;
	&:hover {
		color: #000;
		background-color: #c16f06;
	}
`
const Button = styled(Link)`
	margin: 0 1em;
	padding: .5em 0;
	text-align: center;
	text-decoration: none;
	height: 2.6em;
	border: none;
	font-weight: 600;
	border-radius: .5em;
	background-color: transparent;
	border: 1px solid #fbecee;
	color: #fbecee;
	cursor: pointer;
	&:hover {
		background-color: #fbecee;
		color: #ed5575;
	}
`
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
			</Container>
			<Button to='/auth/logout'>
				Logout
			</Button>
		</Wrapper>
	)
}

export default Sidebar