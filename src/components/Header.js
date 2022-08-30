import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header({ handleAdd, handleDelete }) {
	const navigate = useNavigate()

	const handleRoute = () => {
		navigate('/add')
	}
	return (
		<>
			<header>
				<nav className='list-nav'>
					<h1 className='product-add'>Product Add</h1>
					<div>
						<button
							type='submit'
							className='save-btn'
							onClick={handleAdd ? handleAdd : handleRoute}>
							ADD
						</button>
						<button type='submit' className='cancel-btn' onClick={handleDelete}>
							MASS DELETE
						</button>
					</div>
				</nav>
			</header>
			<hr />
		</>
	)
}

export default Header
