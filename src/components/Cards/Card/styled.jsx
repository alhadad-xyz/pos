import styled from 'styled-components'

export const Wrapper = styled.div`
	width: 148px;
	height: 180px;
	display: flex;
	flex-direction: column;
	padding: 0 0 1em 0;
	background-color: #fff;
	border-radius: 1em;
	box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
	cursor: pointer;
	transition: .8s all ease-in-out;
	&:hover {
		background-color: #f4f5f6;
	}
`

export const Image = styled.div`
	width: 100%;
	height: 70%;
	margin: 0 auto;
	img {
		transition: .8s all ease-in-out;
		&:hover {
			transform: scale(1.2);
		}
	}
`

export const Title = styled.h1`
	max-width: 100%;
	text-align: center;
	margin: 0 auto;
	font-size: .84rem;
`

export const PriceTag = styled.h5`
	margin: 0 auto;
	color: #f07613;
`