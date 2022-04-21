import { useSelector } from 'react-redux';
import { config } from '../../../config'
import { Wrapper, Image, Title, PriceTag } from './styled'

const Card = ({item, onAddToCart}) => {
  const auth = useSelector(state => state.auth);

	return (
		<Wrapper onClick={() => auth.user ? onAddToCart() : null }>
			<Image>
				<img src={`${config.api_host}/images/products/${item.image_url}`} alt="okay" width="100%" />
			</Image>
			<Title>{item.name}</Title>
			<PriceTag>${(Math.round(item.price * 100) / 100).toFixed(2)}</PriceTag>
		</Wrapper>
	)
}

export default Card