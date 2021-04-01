import React from 'react'

export default function Output({data}) {
    return (
        <div className='output'>
            <div className='contactOutput'>
                <p>{data.name}</p>
                <p>{data.email}</p>
                <p>{data.phone}</p>
            </div>
            <div className='educationOutput'>
                <h3>Education</h3>
                {data.education.map(x => (
                    <div key={x.id}>
                        <p>{x.school}</p>
                        <p>{x.degree}</p>
                        <p>{x.dates}</p>
                    </div>
                ))}
            </div>
            <div className='workOutput'>
                <h3>Experience</h3>
                {data.work.map(x => (
                    <div key={x.id}>
                        <p>{x.employer}</p>
                        <p>{x.position}</p>
                        <p>{x.dates}</p>
                        <p>{x.details}</p>
                    </div>
                ))}
            </div>
        </div>    
    )
}
