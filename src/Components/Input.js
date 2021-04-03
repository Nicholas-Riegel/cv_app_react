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
                <div>
                    <h3>Personal Information</h3>
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
            </div>
            <div className='educationInput'>
                <div>
                    <h3>Education</h3>
                    {data.education.map(x => (
                        <div key={x.id} className='education_box'>
                            
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
                    <button className='btn_add' onClick={addEducation}>Add</button>
                </div>
            </div>
            <div className='experienceInput'>
                <div>
                    <h3>Experience</h3>
                    {data.work.map(x => (
                        <div key={x.id} className='work_box'>
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
                    <button className='btn_add' onClick={addWork}>Add</button>
                </div>
            </div>
            <button className='btn_clear_all' onClick={clearAll}>Clear All</button>
        </div>
    )
}