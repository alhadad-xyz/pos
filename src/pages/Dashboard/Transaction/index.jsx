import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { getOrders } from '../../../app/api/order';
import { sumPrice } from '../../../utils';
import Sidebar from '../Sidebar'
import { Wrapper, Content, Title, Button, Cards, Card, SubCard, Name, Detail } from './styled'

const Transaction = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    getOrders()
    .then(({data: {data}}) => {
    		setOrders(data)
    })
  }, [])

	return (
		<Wrapper>
			<Sidebar />
				<Content>
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
				</Content>
		</Wrapper>
	)
}

export default Transaction