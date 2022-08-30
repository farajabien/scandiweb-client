import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import ProductAdd from './pages/ProductAdd'
import ProductList from './pages/ProductList'

export const url = 'https://scandiweb-task-api.herokuapp.com'

function App() {
	return (
		<Router>
			<div className='App'>
				<Routes>
					<Route path='/' element={<ProductList />} />
					<Route path='/add' element={<ProductAdd />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
