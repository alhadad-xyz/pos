import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const Wrapper = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	background: rgb(166,82,15);
	background: linear-gradient(90deg, rgba(166,82,15,1) 0%, rgba(240,118,19,1) 35%, rgba(255,158,1,1) 100%); 
`
export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 1em;
	padding: 2em;
	background-color: #eee;
`
export const Title = styled.h1`
`
// export const Feedback = styled.p`
// 	font-size: .8rem;
// 	margin: 0 auto 0 2em;
// 	color: red;
// `

export const Button = styled.button`
	margin: 1em 0;
	padding: 1em 2em;
	border: none;
	outline: none;
	border-radius: 1em;
	font-weight: 800;
	box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
	background: rgba(240,118,19,1);
	color: #fff;
	cursor: pointer;
`
export const Cards = styled.div`
	width: 100%;
	border-radius: 1em;
	background-color: #fff;
	padding: 1em;
`
export const Card = styled.div`
	display: flex;
	grid-gap: 0 2em;
	align-items: center;
	width: 100%;
	padding: 1em 1em;
	border-radius: 1em;
	box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
`

export const Counter = styled.div`
	min-width: 600px;
	display: flex;
	grid-gap: 0 2em;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: .5em 1em;
	border-radius: 1em;
	box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
`

export const Radio = styled.input``
export const Name = styled.p`
	width: 160px;
	font-size: 1rem;
	word-wrap: wrap;
`

export const Detail = styled.p`
	font-size: 1rem;
	word-wrap: wrap;
`
export const Text = styled.p`
	font-size: .8rem;
	color: #666;
`

export const TextLink = styled(Link)`
	text-decoration: none;
	font-weight: 600;
	color: rgba(240,118,19,1);
`