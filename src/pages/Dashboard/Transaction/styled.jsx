import styled from 'styled-components'

export const Wrapper = styled.section`
	display: flex;
	width: 100%;
	height: 100vh;
`
export const Content = styled.div`
	width: 80%;
	height: 100%;
	padding: 2em;
	overflow-y: auto;
	background-color: #eee;
`
export const Title = styled.h1`
	font-size: 2rem;
`
export const Button = styled.button`
	padding: .8em 1.6em;
	border: none;
	outline: none;
	border-radius: 1em;
	font-weight: 600;
	box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
	background: rgba(240,118,19,1);
	color: #fff;
	cursor: pointer;
`
export const Cards = styled.div`
	width: 100%;
	border-radius: 1em;
	background-color: #fff;
	padding: 1em 2em;
	margin-top: 2em;
`
export const Card = styled.div`
	display: flex;
	justify-content: space-between;
	text-align: center;
	grid-gap: 0 2em;
	align-items: center;
	width: 100%;
	padding: .2em .2em;
	border-radius: 1em;
	box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
`
export const SubCard = styled.div`
	display: flex;
	justify-content: space-between;
	text-align: center;
	grid-gap: 0 2em;
	border-top: 2px solid #999;
	align-items: center;
	width: 100%;
	padding: .4em .4em;
	box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
`
export const Name = styled.p`
	width: 100%;
	font-weight: 600;
	font-size: 1rem;
	word-wrap: wrap;
`
export const Detail = styled.p`
	width: 100%;
	font-size: 1rem;
	word-wrap: wrap;
`