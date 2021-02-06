// Base
import React from 'react'
// Components
import ListItem from '../ListItem'

const TableItem = ({
	handleChangeOfKey,
	handleDataRemove,
	item: { name, date, cost, id },
}) => {
	return (
		<li className='table__item'>
			<ListItem
				listKey='date'
				handleChangeOfKey={handleChangeOfKey}
				inputType='date'
				value={date}
				itemId={id}
			/>
			<ListItem
				listKey='name'
				handleChangeOfKey={handleChangeOfKey}
				inputType='text'
				value={name}
				itemId={id}
			/>
			<ListItem
				listKey='cost'
				handleChangeOfKey={handleChangeOfKey}
				inputType='number'
				value={cost}
				itemId={id}
			/>
			<button className='table__del' onClick={() => handleDataRemove(id)}>
				&times;
			</button>
		</li>
	)
}

export default TableItem
