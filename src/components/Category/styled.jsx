import styled from 'styled-components'

export const Wrapper = styled.section`
	display: flex;
	max-width: 100%;
	padding: 1.2em;
`
export const Button = styled.button`
	padding: .80em 1.6em;
	width: 15%;
	min-height: 48px;
	margin: 0 .64em;
	font-size: .8rem;
	background-color: ${props => props.bg ? '#f07613' : '#fff' };
	border: none;
	border-radius: 2em;
	color: ${props => props.bg ? '#fff' : '#000' };
	cursor: pointer;
	transition: .5s all ease-in-out;
	text-transform: capitalize;
	&:hover {
		background-color: ${props => props.bg ? '#e86e0b' : '#f4f5f6' };
	}
`
export const ButtonPlaceholder = styled.button`
	padding: .80em 1.6em;
	margin: 0 .64em;
	font-size: .8rem;
	width: 15%;
	min-height: 48px;
	background-color: #eee;
	border: none;
	border-radius: 2em;
`
export const Active = styled.button`
	padding: .80em 1.6em;
	margin: 0 .64em;
	font-size: .8rem;
	background-color: ${props => props.menuBg ? '#f07613' : '#fff' };
	border: none;
	border-radius: 2em;
	color: ${props => props.menuBg ? '#fff' : '#000' };
	cursor: pointer
`