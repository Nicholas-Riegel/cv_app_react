import React from 'react'

export default function Output({data}) {
    return (
        <div className='output'>
            <div className='output_page'>
            <div className='output_content'>
                <div className='contactOutput'>
                    <h2>{data.name}</h2>
                    <p>{data.email}</p>
                    <p>{data.phone}</p>
                </div>
                <div className='educationOutput'>
                    <h3>Education</h3>
                    <hr/>
                    {data.education.map(x => (
                        <div key={x.id}>
                            <p>{x.degree}, {x.school}, {x.dates}</p>
                        </div>
                    ))}
                </div>
                <div className='workOutput'>
                    <h3>Experience</h3>
                    <hr/>
                    {data.work.map(x => (
                        <div key={x.id}>
                            <p>{x.position}, {x.employer}, {x.dates}</p>
                            <ul>
                                <li>{x.details}</li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </div>    
    )
}
