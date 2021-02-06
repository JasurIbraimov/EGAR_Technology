// Base
import React, { useState } from 'react'
// Styles
import './style.css'
const Popup = ({ popup, setPopup, setTabelData }) => {
	const [date, setDate] = useState('')
	const [name, setName] = useState('')
	const [cost, setCost] = useState('')
	const handleSubmit = (e) => {
		e.preventDefault()
		if (date && name && cost) {
			const newItem = {
				name: name,
				cost,
				date: new Date(date).toLocaleDateString(),
				id: +new Date(),
			}
			setTabelData((prevData) => [...prevData, newItem])
			setDate('')
			setName('')
			setCost('')
			setPopup(false)
		}
	}
	if (popup) {
		document.body.style.overflow = 'hidden'
	} else {
		document.body.style.overflow = 'scroll'
	}
	return (
		<div className={popup ? 'popup popup_visible' : 'popup'}>
			<div className='popup__content'>
				<div className='popup__close' onClick={() => setPopup(false)}>
					&times;
				</div>
				<h2>Новый документ</h2>
				<form onSubmit={(e) => handleSubmit(e)} className='popup__form'>
					<label htmlFor='date'>Дата</label>
					<input
						required
						value={date}
						name='date'
						type='date'
						onChange={(e) => setDate(e.target.value)}
					/>
					<label htmlFor='name'>Название</label>
					<input
						required
						value={name}
						name='name'
						type='text'
						onChange={(e) => setName(e.target.value)}
						placeholder='Введите название'
					/>
					<label htmlFor='cost'>Стоимость</label>
					<input
						required
						value={cost}
						name='cost'
						min='0'
						type='number'
						onChange={(e) => setCost(e.target.value)}
					/>
					<button type='submit'>Добавить</button>
				</form>
			</div>
		</div>
	)
}

export default Popup
