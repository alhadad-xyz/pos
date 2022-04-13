import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { getInvoiceByOrderId } from '../../app/api/order';
import { config } from '../../config';
import { useParams } from 'react-router'
import styled from 'styled-components'

const Wrapper = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	background: rgb(166,82,15);
	background: linear-gradient(90deg, rgba(166,82,15,1) 0%, rgba(240,118,19,1) 35%, rgba(255,158,1,1) 100%); 
`
const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 1em;
	padding: 2em;
	background-color: #eee;
`
const Title = styled.h1`
`
const Button = styled.button`
	margin: 1em auto;
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
const Cards = styled.div`
	width: 100%;
	border-radius: 1em;
	background-color: #fff;
	padding: 1em;
`
const Card = styled.div`
	display: flex;
	grid-gap: 0 2em;
	align-items: center;
	width: 100%;
	padding: .2em .2em;
	border-radius: 1em;
	box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
`

const Name = styled.p`
	width: 96px;
	font-size: 1rem;
	word-wrap: wrap;
`

const Detail = styled.p`
	font-size: 1rem;
	word-wrap: wrap;
`

const Invoices = () => {
  const { id } = useParams();
  const [invoice, setInvoice] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const auth = useSelector(state => state.auth);
  const navigate = useNavigate()

  useEffect(() => {
    getInvoiceByOrderId(id)
    .then(({data}) => setInvoice(data))
    .finally(_ => setIsFetching(true));
  }, [id]);

	return (
		<Wrapper>
			<Container>			
				<Title>Invoices</Title>
				{
					isFetching 
					?	<Cards>
							<Card>
								<Name>Status</Name>
								<Detail>{invoice.status}</Detail>
							</Card>
							<Card>
								<Name>Total Amount</Name>
								<Detail>${(Math.round(invoice.total * 100) / 100).toFixed(2)}</Detail>
							</Card>
							<Card>
								<Name>Billed to</Name>
								<Detail>{auth.user.fullname}</Detail>
							</Card>
							<Card>
								<Name></Name>
								<Detail>{auth.user.email}</Detail>
							</Card>
							<Card>
								<Name></Name>
								<Detail>{invoice.shipping_address.provinsi}, {invoice.shipping_address.kabupaten}, {invoice.shipping_address.kecamatan}, {invoice.shipping_address.kelurahan}</Detail>
							</Card>
							<Card>
								<Name></Name>
								<Detail>{invoice.shipping_address.detail}</Detail>
							</Card>
							<Card>
								<Name>Payment to</Name>
								<Detail>{config.owner}</Detail>
							</Card>
							<Card>
								<Name></Name>
								<Detail>{config.contact}</Detail>
							</Card>
							<Card>
								<Name></Name>
								<Detail>{config.billing.bank_name}</Detail>
							</Card>
							<Card>
								<Name></Name>
								<Detail>{config.billing.account_no}</Detail>
							</Card>
							<Card>
								<Button onClick={() => navigate('/transaction')}>Save</Button>
							</Card>
						</Cards>
					: "Loading ..."
				}
			</Container>

		</Wrapper>
	)
}

export default Invoices