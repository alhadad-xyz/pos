import styled from 'styled-components'

export const Wrapper = styled.section`
	max-width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 1em;
	padding: .4em .4em;
	background-color: #fff;
	box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
	border-radius: 1em;
`
export const Container = styled.div`
	flex: 2;
	display: flex;
	align-items: center;
	grid-gap: 0 1em;
	margin-right: .8em;
`
export const Image = styled.div`
	width: 64px;
	height: 48px;
	border-radius: 1em;
	overflow: hidden;
`
export const Title = styled.h1`
	font-size: .8rem;
	height: 100%;
	font-weight: 400;
	width: 96px;
`
export const Counter = styled.div`
	flex: 2;
	display: flex;
	justify-content: space-between;
	align-items: center;
`
export const TrashButton = styled.button`
	width: 100%;
	font-size: 1.2rem;
	padding: .3em .8em;
	background-color: #fbecee;
	border: none;
	color: #ed5575;
	border-radius: .3em;
	cursor: pointer;
` 
export const Num = styled.h1`
	text-align: center;
	width: 100%;
	font-weight: 500;
	font-size: 1em;
`

export const Button = styled.button`
	width: 100%;
	font-size: 1.2rem;
	padding: .3em .8em;
	background-color: #f4f5f6;
	border: none;
	border-radius: .3em;
	cursor: pointer;
` 
export const Price = styled.h3`
	text-align: right;
	font-size: 1rem;
	font-weight: 400;
	flex: 1;
`