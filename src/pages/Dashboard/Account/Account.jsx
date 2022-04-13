import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Wrapper = styled.section`
	width: 80%;
	height: 100%;
	padding: 2em;
	background-color: #eee;
`

const Title = styled.h1`
	font-size: 2rem
`
const Card = styled.div`
	width: 100%;
	padding: 4em;
	background-color: #fff;
	border-radius: 1em;
`
const Container = styled.div`
	display: flex;
`
const Key = styled.h5`
	flex: 50%;
	font-size: 1.2rem;
	margin: 1em;
`

const Account = () => {
  const auth = useSelector(state => state.auth)

	return (
		<Wrapper>
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
		</Wrapper>
	)
}

export default Account