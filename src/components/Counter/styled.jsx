import styled from 'styled-components'

export const Wrapper = styled.section`
	width: 100%;
	padding: 0 1em;
`
export const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: .5em 0;
`
export const Total = styled.h1`
	font-size: 1.2rem;
`
export const Button = styled.button`
	margin-top: 2.6em;
	width: 100%;
	padding: .8em 0;
	text-transform: uppercase;
	font-weight: 700;
	border: none;
	border-radius: .8em;
	color: #fff;
	background-color: #f07613;
	cursor: pointer;
	transition: .5s all;
	&:hover {
		background-color: #f98527;
	}
`
