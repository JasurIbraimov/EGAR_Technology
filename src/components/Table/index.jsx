// Base
import React from 'react'
// Components
import TableItem from './TableItem'
// Styles
import './style.css'
const Table = ({ tabelData, handleChangeOfKey, handleDataRemove }) => {
	return (
		<ul className='table'>
			<ul className='table__head'>
				<li> Дата </li>
				<li> Название </li>
				<li> Цена </li>
			</ul>
			{tabelData.map((item, index) => (
				<TableItem
					handleDataRemove={handleDataRemove}
					handleChangeOfKey={handleChangeOfKey}
					item={item}
					key={index}
				/>
			))}
		</ul>
	)
}

export default Table
