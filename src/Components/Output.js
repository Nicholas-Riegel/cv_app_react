import React from 'react'

export default function Output({propData}) {
    return (
        <div className='output'>
            <div className='contactOutput'>
                <p>{propData.name}</p>
                <p>{propData.email}</p>
                <p>{propData.phone}</p>
            </div>
            <div className='educationOutput'>
                <h3>Education</h3>
                {propData.education.map(x => (
                    <>
                        <p>{x.school}</p>
                        <p>{x.degree}</p>
                        <p>{x.dates}</p>
                    </>
                ))}
            </div>
            <div className='workOutput'>
                <h3>Experience</h3>
                {propData.work.map(x => (
                    <>
                        <p>{x.employer}</p>
                        <p>{x.position}</p>
                        <p>{x.dates}</p>
                        <p>{x.details}</p>
                    </>
                ))}
            </div>
        </div>
    )
}
