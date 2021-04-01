import React, { useState, useEffect } from 'react'

import Input from './Components/Input'
import Output from './Components/Output'
import './App.css';

export default function App() {
	const [data, setData] = useState({
		name: '',
		email: '',
		phone: '',
		education: [],
		work: [],
	})
	
	useEffect(() => {
		const temp = localStorage.getItem('data')
		const lsData = JSON.parse(temp)
		if(lsData) setData(lsData)
	}, [])

	useEffect(() => {
		const temp = JSON.stringify(data)
		localStorage.setItem('data', temp)
	}, [data])
	
	const addEducation = () => {
		const newEdObject = {
			id: Date.now(),
			school: '',
			degree: '',
			dates: '',
		}
		setData({ ...data, education: [...data.education, newEdObject] })
	}
	
	const addWork = () => {
		const newWorkObject = {
			id: Date.now(),
			employer: '',
			position: '',
			dates: '',
			details: '',
		}
		setData({ ...data, work: [...data.work, newWorkObject] })
	}
	
	const clearAll = () => {
		setData({name: '', email: '', phone: '', education: [], work: [],})
		localStorage.removeItem('data')
	}

	return (
		<div className='main'>
			<Input
				data={data}
				setData={setData}
				addEducation={addEducation}
				addWork={addWork}
				clearAll={clearAll}
			/>
			<Output data={data}/>
		</div>
	)
}