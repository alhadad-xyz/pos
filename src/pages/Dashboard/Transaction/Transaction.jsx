import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { getOrders } from '../../../app/api/order';
import { sumPrice } from '../../../utils';
import styled from 'styled-components'


const Wrapper = styled.section`
	width: 80%;
	height: 100%;
	padding: 2em;
	overflow-y: auto;
	background-color: #eee;
`

const Title = styled.h1`
	font-size: 2rem;
`
const Button = styled.button`
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

const Cards = styled.div`
	width: 100%;
	border-radius: 1em;
	background-color: #fff;
	padding: 1em 2em;
	margin-top: 2em;
`
const Card = styled.div`
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
const SubCard = styled.div`
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
const Name = styled.p`
	width: 100%;
	font-weight: 600;
	font-size: 1rem;
	word-wrap: wrap;
`

const Detail = styled.p`
	width: 100%;
	font-size: 1rem;
	word-wrap: wrap;
`


const Transaction = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    getOrders().then(({data: {data}}) => setOrders(data))
  }, [])

	return (
		<Wrapper>
			<Title>Transaction History</Title>
			{
				orders.map((item, i) => {
					return (
						<Cards key={i}>
							<Card>
								<Name>Order ID</Name>
								<Name>Total</Name>
								<Name>Status</Name>
								<Name>Invoice</Name>
							</Card>
							<Card>
								<Detail>{ item.order_number }</Detail>
								<Detail>${ (Math.round((sumPrice(item.order_items) + item.shipping_fee) * 100) / 100 ).toFixed(2) }</Detail>
								<Detail>{ item.status }</Detail>
								<Detail>
									<Button onClick={() => navigate(`/invoices/${item._id}`)}>Detail</Button>
								</Detail>
							</Card>
							<SubCard>
								<Name>Name</Name>
								<Name>Quantity</Name>
								<Name>Price Total</Name>
							</SubCard>
							{
								item.order_items.map((item, i) => {
									return (
										<Card key={i}>
											<Detail>{ item.name }</Detail>
											<Detail>{ item.qty }</Detail>
											<Detail>${ item.price * item.qty }</Detail>
										</Card>
									)
								})
							}
						</Cards>
					)
				})
			}
		</Wrapper>
	)
}

export default Transaction