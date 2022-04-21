import styled from 'styled-components'

export const Wrapper = styled.section`
	display: flex;
	justify-content: end;
	align-items: center;
	grid-gap: 1em;
	padding: 0 1em;
	max-width: 100%;
`

export const Next = styled.button`
	background-color: #f4f5f6;
	border-radius: .5em;
	display: flex;
	border: none;
	align-items: center;
	grid-gap: .8em;
	cursor: pointer;
`

export const Prev = styled.button`
	background-color: #f4f5f6;
	border-radius: .5em;
	display: flex;
	border: none;
	align-items: center;
	grid-gap: .8em;
	cursor: pointer;
`
export const Count = styled.h4`
	color: #888;
`