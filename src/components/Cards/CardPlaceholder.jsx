import styled from 'styled-components'

const Wrapper = styled.div`
	width: 148px;
	height: 180px;
	display: flex;
	flex-direction: column;
	padding: 0 0 1em 0;
	background-color: #fff;
	overflow: hidden;
	border-radius: 1em;
	box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
`

const Image = styled.div`
	width: 100%;
	height: 70%;
	background-color: #eee;
	margin: 0 auto;
	}
`

const Title = styled.h1`
	width: 80%;
	height: 15%;
	background-color: #eee;
	text-align: center;
	margin: 1em auto;
	font-size: .84rem;
`

const PriceTag = styled.h5`
	width: 40%;
	height: 15%;
	margin: 0 auto;
	background-color: #eee;
	color: #f07613;
`


const CardPlaceholder = () => {
	return (
		<Wrapper>
			<Image />
			<Title></Title>
			<PriceTag></PriceTag>
		</Wrapper>
	)
}

export default CardPlaceholder