import React from 'react'

export default function Input({
        data,
        setData,
        addEducation,
        addWork,
        clearAll,
    })
{
    return (
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
                    <div key={x.id}>
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
                    <div key={x.id}>
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
            <button onClick={clearAll}>Clear All</button>
        </div>
    )
}