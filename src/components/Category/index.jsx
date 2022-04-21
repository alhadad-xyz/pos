import { useSelector } from 'react-redux'
import { Wrapper, Button, ButtonPlaceholder, Active } from './styled'

const Category = ({items, onClick}) => {
	const products = useSelector(state => state.products)

	return (
		<Wrapper>
			<Active
      	onClick={() => onClick('')}
      	menuBg={products.category === ''}
			>All Menu</Active>
			{ items.length > 0
				?	items.map((item, i) => (
          <Button 
            key={i}
            bg={products.category.includes(item.name)} 
            onClick={() => onClick(item.name)}
          > {item.name}</Button>
        ))
        : Array.from({length: 5}).map((_, idx) => (
					<ButtonPlaceholder key={idx} disabled/>
				))
      }
		</Wrapper>
	)
}

export default Category