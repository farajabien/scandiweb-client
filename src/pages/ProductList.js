import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import { url } from '../App'

function ProductList() {
	const [products, setProducts] = useState([])
	const [deletedItemsIds, setDeletedItemsIds] = useState([])
	const [lastDeleted, setLastDeleted] = useState('')

	const handleDelete = () => {
		axios
			.delete(url + '/products', { data: { deletedItemsIds } })
			.then((res) => {
				console.log('Deleted successfully!', res)
				setLastDeleted(res.data)
				setDeletedItemsIds([])
			})
			.catch((err) => {
				console.error(err)
			})
	}

	useEffect(() => {
		axios
			.get(url + '/products')
			.then((res) => {
				setProducts(res.data)
			})
			.catch((err) => console.error(err))
	}, [lastDeleted])

	return (
		<div>
			<Header handleDelete={handleDelete} title='Product List' />

			<div className='product-list-container'>
				{products &&
					products.map((product) => (
						<div className='product-list-item' key={product.id}>
							<input
								type='checkbox'
								className='delete-checkbox'
								onChange={(e) => {
									if (e.target.checked) {
										setDeletedItemsIds((prev) => [...prev, product.id])
									}
								}}
							/>

							<div className='product-list-item-info'>
								<p>{product.sku}</p>
								<p>{product.name}</p>
								<p>{product.price} $</p>
								{product.size > 0 && <p>Size: {product.size} MB</p>}
								{product.weight > 0 && <p>Weight: {product.weight} KG</p>}
								{product.height > 0 && product.width > 0 && product.length > 0 && (
									<p>
										Dimension: {product.height}X{product.width}X{product.length}
									</p>
								)}
							</div>
						</div>
					))}
				{!products && <p>No products</p>}
			</div>
		</div>
	)
}

export default ProductList
