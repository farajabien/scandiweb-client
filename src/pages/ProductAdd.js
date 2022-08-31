import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { url } from '../App'
import Header from '../components/Header'

function ProductDetails() {
	const [productType, setProductType] = useState('')

	const [sku, setSku] = useState('')
	const [name, setName] = useState('')
	const [price, setPrice] = useState(0)
	const [size, setSize] = useState(0)
	const [weight, setWeight] = useState(0)
	const [height, setHeight] = useState(0)
	const [width, setWidth] = useState(0)
	const [length, setLength] = useState(0)

	const navigate = useNavigate()

	const handleAdd = (e) => {
		e.preventDefault()

		if (sku && name && price && productType) {
			const product = {
				sku,
				name,
				price,
				productType,
				size,
				weight,
				height,
				width,
				length,
			}
			axios
				.post(url + '/products', product)
				.then((res) => {
					navigate('/')
					console.log(res)
				})
				.catch((err) => {
					console.log(err)
				})
		}
	}

	return (
		<div>
			<Header handleAdd={handleAdd} />
			<form id='product-form'>
				<div className='product-form-inputs'>
					<label htmlFor='sku'>SKU </label>
					<input
						type='text'
						id='sku'
						onChange={(e) => setSku(e.target.value)}
					/>
					<br />
					<br />
					<label htmlFor='name'>Name </label>
					<input
						type='text'
						id='name'
						onChange={(e) => setName(e.target.value)}
					/>
					<br />
					<br />
					<label htmlFor='price'>Price ($) </label>
					<input
						type='number'
						id='price'
						onChange={(e) => setPrice(e.target.value)}
					/>
					<br />
					<br />
					<label htmlFor='productType'>Type Switcher: </label>
					<select
						id='productType'
						required
						onChange={(e) => setProductType(e.target.value)}>
						<option value='Type Switcher'>Type Switcher</option>
						<option value='DVD' id='dvd'>
							DVD
						</option>
						<option value='Book' id='book'>
							Book
						</option>
						<option value='Furniture' id='furniture'>
							Furniture
						</option>
					</select>
					<br />
					<br />

					{productType === 'DVD' && (
						<>
							<label htmlFor='size'>Size (MB) </label>
							<input
								type='number'
								id='size'
								onChange={(e) => setSize(e.target.value)}
							/>
							<br />
							<br />
							<strong>Please, provide weight</strong>
						</>
					)}
					{productType === 'Book' && (
						<>
							<label htmlFor='weight'>Weight (KG) </label>
							<input
								type='number'
								id='weight'
								onChange={(e) => setWeight(e.target.value)}
							/>
							<br />
							<br />
							<strong>Please, provide weight</strong>
						</>
					)}
					{productType === 'Furniture' && (
						<>
							<label htmlFor='height'>Height (CM) </label>
							<input
								type='number'
								id='height'
								onChange={(e) => setHeight(e.target.value)}
							/>
							<br />
							<br />
							<label htmlFor='width'>Width (CM) </label>
							<input
								type='number'
								id='width'
								onChange={(e) => setWidth(e.target.value)}
							/>
							<br />
							<br />
							<label htmlFor='length'>Length (CM) </label>
							<input
								type='number'
								id='length'
								onChange={(e) => setLength(e.target.value)}
							/>
							<br />
							<br />
							<strong>Please, provide dimensions</strong>
						</>
					)}
				</div>
			</form>
		</div>
	)
}

export default ProductDetails
