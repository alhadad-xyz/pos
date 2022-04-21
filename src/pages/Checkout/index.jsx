import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createOrder } from '../../app/api/order';
import { getAddress } from '../../app/api/address';
import { clearItem } from '../../app/features/Cart/actions';
import { sumPrice } from '../../utils';
import { config } from '../../config';
import { Wrapper, Container, Title, Button, Cards, Card, Counter, Radio, Name, Detail, Text, TextLink } from './styled'

export const statusList = {
  idle: 'idle',
  process: 'process',
  success: 'success',
  error: 'error'
}

const Checkout = () => {
  const cart = useSelector(state => state.cart);
	const [address, setAddress] = useState([]);
  const [status, setStatus] = useState(statusList.idle);
  const [selectedAddress, setSelectedAddress] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = e => {
		setSelectedAddress(e.target.value)
  }

  useEffect(() => {
    getAddress()
    .then(({data: {data}}) => setAddress(data));
  }, []);

  const handleCreateOrder = async () => {
    setStatus(statusList.process);
    let payload = {
      shipping_address: selectedAddress,
      shipping_fee: config.global_ongkir
    }

    const { data } = await createOrder(payload);
    if(data.error) setStatus(statusList.error)
		setStatus(statusList.success);
    dispatch(clearItem());
    navigate(`/invoices/${data.data._id}`);
  }

	return (
		<Wrapper>
			<Container>			
				<Title>Shipping Address</Title>
				<Cards>
					{	
						address.length > 0
						?	address.map((item, i) => (
							<Card key={i}>
								<Radio type="radio" value={ item._id } name='address' onChange={ handleChange }/>
								<Name>{ item.name }</Name>
								<Detail>{ `${item.provinsi}, ${item.kabupaten}, ${item.kecamatan}, ${item.kelurahan}, ${item.detail}` }</Detail>
							</Card>
						))
						: <Counter>
							<Name>Please add your address first</Name>
							<Detail><Button onClick={() => navigate('/address')}>Here</Button></Detail>
						</Counter>
					}
				</Cards>
				<Cards>
					<Counter>	
						<Name>Subtotal</Name>
						<Detail>${ (Math.round(sumPrice(cart) * 100) / 100).toFixed(2) }</Detail>
					</Counter>
					<Counter>	
						<Name>Shipping Fee</Name>
						<Detail>${config.global_ongkir}</Detail>
					</Counter>
					<Counter>	
						<Name><strong>Total</strong></Name>
						<Detail><strong>${ parseFloat((Math.round(sumPrice(cart) * 100) / 100).toFixed(2)) + parseFloat(config.global_ongkir)}</strong></Detail>
					</Counter>
				</Cards>
				<Button onClick={handleCreateOrder} disabled={status === statusList.process}>
					{ status === statusList.process ? 'Loading...' : 'Submit'}
				</Button>

				<Text>Are you missing something ? <TextLink to="/">Back!</TextLink></Text>
			</Container>
		</Wrapper>
	)
}

export default Checkout