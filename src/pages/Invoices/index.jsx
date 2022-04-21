import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { getInvoiceByOrderId } from '../../app/api/order';
import { config } from '../../config';
import { useParams } from 'react-router'
import { Wrapper, Container, Title, Button, Cards, Card, Name, Detail } from './styled'

const Invoices = () => {
  const { id } = useParams();
  const [invoice, setInvoice] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const auth = useSelector(state => state.auth);
  const navigate = useNavigate()

  useEffect(() => {
    getInvoiceByOrderId(id)
    .then(({data}) => setInvoice(data.data))
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