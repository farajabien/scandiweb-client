import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header({ handleAdd, handleDelete, handleCancel, title }) {
	const navigate = useNavigate()

	const handleRoute = () => {
		navigate('/add')
	}

	return (
		<>
			<header>
				<nav className='list-nav'>
					<h1 className='product-add'>
						{title === 'Product List' ? 'Product List' : 'Product Add'}
					</h1>
					<div>
						<button
							type='submit'
							className='save-btn'
							onClick={title === 'Product List' ? handleRoute : handleAdd}>
							{title === 'Product List' ? 'ADD' : 'Save'}
						</button>
						<button
							type='submit'
							className='cancel-btn'
							onClick={title === 'Product List' ? handleDelete : handleCancel}>
							{title === 'Product List' ? '	MASS DELETE ' : 'Cancel'}
						</button>
					</div>
				</nav>
			</header>
			<hr />
		</>
	)
}

export default Header
