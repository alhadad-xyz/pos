import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f07613;
`
const Title = styled.h1`
	font-size: 3rem;
	font-weight: 800;
	color: #fff;
`
const Caption = styled.h5`
	color: #eee;
`
const Button = styled(Link)`
	margin-top: 2em;
	font-weight: 700;
	padding: 1em 6em;
	border-radius: 1em;
	background-color: #fff;
	color: #555;
	text-decoration: none;
`

const Guest = () => {
	return (
		<Wrapper>
			<Title>Foodie's</Title>
			<Caption>You've to sign in first before make any order</Caption>
			<Button to='/auth/signin'>LOGIN</Button>	
		</Wrapper>
	)
}

export default Guest