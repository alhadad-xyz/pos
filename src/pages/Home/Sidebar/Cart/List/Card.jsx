import { config } from '../../../../../config'
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../../../../../app/features/Cart/actions';
import styled from 'styled-components'
import { Trash } from '@styled-icons/boxicons-regular'

const Wrapper = styled.section`
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
const Container = styled.div`
	flex: 2;
	display: flex;
	align-items: center;
	grid-gap: 0 1em;
	margin-right: .8em;
`
const Image = styled.div`
	width: 64px;
	height: 48px;
	border-radius: 1em;
	overflow: hidden;
`
const Title = styled.h1`
	font-size: .8rem;
	height: 100%;
	font-weight: 400;
	width: 96px;
`
const Counter = styled.div`
	flex: 2;
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const TrashButton = styled.button`
	width: 100%;
	font-size: 1.2rem;
	padding: .3em .8em;
	background-color: #fbecee;
	border: none;
	color: #ed5575;
	border-radius: .3em;
	cursor: pointer;
` 
const Num = styled.h1`
	text-align: center;
	width: 100%;
	font-weight: 500;
	font-size: 1em;
`

const Button = styled.button`
	width: 100%;
	font-size: 1.2rem;
	padding: .3em .8em;
	background-color: #f4f5f6;
	border: none;
	border-radius: .3em;
	cursor: pointer;
` 
const Price = styled.h3`
	text-align: right;
	font-size: 1rem;
	font-weight: 400;
	flex: 1;
`

const Card = ({item}) => {
  const dispatch = useDispatch();

  const handlePlus = item => {
    dispatch(addItem(item));
  }

  const handleMin = item => {
    dispatch(removeItem(item));
  }

	return (
		<Wrapper>
			<Container>				
				<Image>
					<img src={`${config.api_host}/images/products/${item.image_url}`} alt="okay" width="100%" />
				</Image>
				<Title>{ item.name }</Title>
			</Container>
			<Counter>
				{
					item.qty === 1
					?	<TrashButton onClick={() => handleMin(item)}><Trash size='24' /></TrashButton>
					: <Button onClick={() => handleMin(item)}>-</Button>
				}
				<Num>{ item.qty }</Num>
				<Button onClick={() => handlePlus(item)}>+</Button>
			</Counter>
			<Price>${ (Math.round((item.price * item.qty) * 100) / 100).toFixed(2) }</Price>
		</Wrapper>
	)
}

export default Card