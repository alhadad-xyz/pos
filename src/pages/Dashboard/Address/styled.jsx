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
	background-color: #eee;
	overflow-y: auto;
`
export const Title = styled.h1`
	font-size: 2rem
`
export const Container = styled.div`
	display: flex;
	justify-content: space-between;
`
export const List = styled.div`
	width: 60%;
	height: 80vh;
`
export const Forms = styled.form`
	width: 36%;
	padding: 2em;
	border-radius: 1em;
	background-color: #fff;
`
export const Card = styled.div`
	margin-bottom: 1em;
	width: 100%;
	display: flex;
	padding: 2em;
	border-radius: 1em;
	background-color: #fff;
	flex-wrap: wrap;
	grid-gap: 1em;
`
export const Label = styled.div`
	flex: 30%;
`
export const Text = styled.input`
	flex: 50%;
	padding: .4em 1em;
	border-radius: 1em;
	border: 1px solid #eee;
`
export const Feedback = styled.p`
	font-size: .8rem;
	margin: 0 auto 0 2em;
	color: red;
`
export const Input = styled.input`
	width: 100%;
	flex: 50%;
	padding: .4em 1em;
	border-radius: 1em;
	border: 1px solid #888;
`
export const TextArea = styled.textarea`
	width: 100%;
	flex: 50%;
	padding: .4em 1em;
	border-radius: 1em;
	border: 1px solid #888;

`
export const Submit = styled.button`
	padding: .4em 2em;
	border: none;
	cursor: pointer;
	outline: none;
	border-radius: 1em;
	border: 1px solid #888;	
	background-color: #f07613;
	color: #fff;
	margin: 1em 0;
`
export const FormTitle = styled.h1`
	text-align: center;
	margin-bottom: 1em;
`
export const Header = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`