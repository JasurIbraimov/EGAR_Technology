// Base imports
import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2'
// Components
import Table from './components/Table'
import Popup from './components/Popup'
// Styles
import './style.css'
const App = () => {
	const [tabelData, setTabelData] = useState([
		{
			date: '01.01.2019',
			name: 'Газпром',
			cost: '2000',
			id: 0,
		},
		{
			date: '01.01.2019',
			name: 'Автоваз',
			cost: '2500',
			id: 1,
		},
		{
			date: '05.01.2019',
			name: 'Сбербанк',
			cost: '10000',
			id: 2,
		},
		{
			date: '10.01.2019',
			name: 'Газпром',
			cost: '2500',
			id: 3,
		},
		{
			date: '07.10.2019',
			name: 'Автоваз',
			cost: '2100',
			id: 4,
		},
	])
	const [popup, setPopup] = useState(false)
	const handleChangeOfKey = (key, newValue, itemId) => {
		setTabelData((prev) => {
			const itemIndex = prev.findIndex((item) => item.id === itemId)
			if (key === 'date') {
				prev[itemIndex][key] = new Date(newValue).toLocaleDateString()
			} else {
				prev[itemIndex][key] = newValue
			}
			return [...prev]
		})
	}
	const handleDataRemove = (itemId) => {
		setTabelData((prev) => prev.filter((item) => item.id !== itemId))
	}
	return (
		<div className='app'>
			<header className='app__header'>
				<h1>EGAR-technology</h1>
			</header>
			<main className='app__content'>
				{tabelData.length === 0 ? (
					<h2 className='app__empty'>Пусто...</h2>
				) : (
					<>
						<Table
							handleDataRemove={handleDataRemove}
							handleChangeOfKey={handleChangeOfKey}
							tabelData={tabelData}
						/>
						<div className='app__chart'>
							<Bar
								data={{
									labels: [
										...tabelData.map((item) => item.date),
									],
									datasets: [
										{
											label: 'Cost',
											backgroundColor: '#5158B6',
											data: [
												...tabelData.map(
													(item) => item.cost
												),
											],
										},
									],
								}}
							/>
						</div>
					</>
				)}
				<div className='app__actions'>
					<button onClick={() => setPopup(true)}>Добавить</button>
				</div>
			</main>
			<Popup
				setPopup={setPopup}
				setTabelData={setTabelData}
				popup={popup}
			/>
		</div>
	)
}

export default App
