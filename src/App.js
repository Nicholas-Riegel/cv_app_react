import React, { useState, useEffect } from 'react'

import './App.css';
import Output from './Components/Output'

export default function App() {
	const [data, setData] = useState({name: '', email: '', phone: '', education: [], work: [],})
	
	useEffect(() => {
		const temp = localStorage.getItem('data')
		const lsData = JSON.parse(temp)
		if(lsData) setData(lsData)
	}, [])

	useEffect(() => {
		const temp = JSON.stringify(data)
		localStorage.setItem('data', temp)
	}, [data])

	const ClearAll = () => {
		setData({name: '', email: '', phone: '', education: [], work: [],})
		localStorage.removeItem('data')
	}

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
		const newEdObject = {
			id: Date.now(),
			employer: '',
			position: '',
			dates: '',
			details: '',
		}
		setData({ ...data, work: [...data.work, newEdObject] })
	}

	return (
		<div className='main'>
			<div className='input'>
				<div className='contactInput'>
					<p>Personal Information</p>
					<input
						type="text"
						placeholder='Name...'
						onChange={(e)=>setData({ ...data, name: e.target.value })}
						value={data.name}
					/>
					<input
						type="text"
						placeholder='Email...'
						onChange={(e)=>setData({ ...data, email: e.target.value })}
						value={data.email}
					/>
					<input
						type="text"
						placeholder='Phone...'
						onChange={(e)=>setData({ ...data, phone: e.target.value })}
						value={data.phone}
					/>
				</div>
				<div className='educationInput'>
					<p>Education</p>
					{data.education.map(x => (
						<div>
							<input
								type="text"
								placeholder='School/University...'
								onChange={(e) => setData({
									...data, education: data.education.map(
										y => y.id === x.id ? { ...y, school: e.target.value } : y
									)
								})}
								value={data.education.find(y=>y.id === x.id).school}
							/>
							<input
								type="text"
								placeholder='Degree...'
								onChange={(e) => setData({
									...data, education: data.education.map(
										y => y.id === x.id ? { ...y, degree: e.target.value } : y
									)
								})}
								value={data.education.find(y=>y.id === x.id).degree}
							/>
							<input
								type="text"
								placeholder='Dates...'
								onChange={(e) => setData({
									...data, education: data.education.map(
										y => y.id === x.id ? { ...y, dates: e.target.value } : y
									)
								})}
								value={data.education.find(y=>y.id === x.id).dates}
							/>
							<button onClick={() => setData({
								...data, education: data.education.filter(
									y => y.id !== x.id
								)
							})}>Delete</button>
						</div>
					))}
					<button onClick={addEducation}>Add</button>
				</div>
				<div className='experienceInput'>
					<p>Experience</p>
					{data.work.map(x => (
						<div>
							<input
								type="text"
								placeholder='Employer...'
								onChange={(e) => setData({
									...data, work: data.work.map(
										y => y.id === x.id ? { ...y, employer: e.target.value } : y
									)
								})}
								value={data.work.find(y=>y.id === x.id).employer}
							/>
							<input
								type="text"
								placeholder='Position...'
								onChange={(e) => setData({
									...data, work: data.work.map(
										y => y.id === x.id ? { ...y, position: e.target.value } : y
									)
								})}
								value={data.work.find(y=>y.id === x.id).position}
							/>
							<input
								type="text"
								placeholder='Dates...'
								onChange={(e) => setData({
									...data, work: data.work.map(
										y => y.id === x.id ? { ...y, dates: e.target.value } : y
									)
								})}
								value={data.work.find(y=>y.id === x.id).dates}
							/>
							<input
								type="text"
								placeholder='Details...'
								onChange={(e) => setData({
									...data, work: data.work.map(
										y => y.id === x.id ? { ...y, details: e.target.value } : y
									)
								})}
								value={data.work.find(y=>y.id === x.id).details}
							/>
							<button onClick={() => setData({
								...data, work: data.work.filter(
									y => y.id !== x.id
								)
							})}>Delete</button>
						</div>
					))}
					<button onClick={addWork}>Add</button>
				</div>
				<button onClick={ClearAll}>Clear All</button>
			</div>
			<Output propData={data}/>
		</div>
	)
}