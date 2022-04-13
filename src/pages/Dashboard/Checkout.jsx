import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { createOrder } from '../../app/api/order';
import { getAddress } from '../../app/api/address';
import { clearItem } from '../../app/features/Cart/actions';
import { sumPrice } from '../../utils';
import { config } from '../../config';
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
// const Feedback = styled.p`
// 	font-size: .8rem;
// 	margin: 0 auto 0 2em;
// 	color: red;
// `

const Button = styled.button`
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
	padding: 1em 1em;
	border-radius: 1em;
	box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
`

const Counter = styled.div`
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

const Radio = styled.input``
const Name = styled.p`
	width: 160px;
	font-size: 1rem;
	word-wrap: wrap;
`

const Detail = styled.p`
	font-size: 1rem;
	word-wrap: wrap;
`
const Text = styled.p`
	font-size: .8rem;
	color: #666;
`

const TextLink = styled(Link)`
	text-decoration: none;
	font-weight: 600;
	color: rgba(240,118,19,1);
`
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
    if(!data.error) {
			setStatus(statusList.success);
      dispatch(clearItem());
      navigate(`/invoices/${data._id}`);
    }
    
    setStatus(statusList.error)
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