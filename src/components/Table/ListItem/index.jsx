// Base
import React, { useState } from 'react'
// Styles
import './style.css'
const ListItem = ({ value, inputType, handleChangeOfKey, listKey, itemId }) => {
	const [changeMode, setChangeMode] = useState(false)
	const [newValue, setNewValue] = useState(value)
	const handleOnClick = (key, newValue, itemId) => {
		if (newValue) {
			setChangeMode(false)
			handleChangeOfKey(key, newValue, itemId)
		}
	}
	const makeNewValue = (value) => {
		if (window.innerWidth <= 890) {
			return `${value.slice(0, 10)}...`
		} else {
			return value
		}
	}
	return (
		<>
			<div className='list-item'>
				{changeMode ? (
					<div className='list-item__edit'>
						<input
							type={inputType}
							autoFocus
							onBlur={() =>
								handleOnClick(listKey, newValue, itemId)
							}
							value={newValue}
							onChange={(e) => setNewValue(e.target.value)}
						/>
						<button
							onClick={() =>
								handleOnClick(listKey, newValue, itemId)
							}
						>
							+
						</button>
					</div>
				) : (
					<div className='list-item__inner'>
						<div
							className='list-item__actions'
							onClick={() => setChangeMode(true)}
						>
							&#9998;
						</div>
						<p>{value.length > 10 ? makeNewValue(value) : value}</p>
					</div>
				)}
			</div>
		</>
	)
}

export default ListItem
