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
                        { data.education.length > 0 ? (<><h3>Education</h3>
                        <hr/></>) : null}
                        {data.education.map(x => (
                            <div key={x.id}>
                                <p>
                                    {x.degree}
                                    {x.school ? (', ') : null}
                                    {x.school}
                                    {x.dates ? (', ') : null}
                                    {x.dates}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className='workOutput'>
                        {data.work.length > 0 ? (
                            <>
                                <h3>Experience</h3>
                                <hr />
                            
                                {data.work.map(x => (
                                    <div key={x.id}>
                                        <p>
                                            {x.position}
                                            {x.employer ? (', ') : null}
                                            {x.employer}{x.dates ? (', ') : null}
                                            {x.dates}
                                        </p>
                                        <ul style={ x.details==='' ? {listStyleType: 'none'}: null}>
                                            <li>{x.details}</li>
                                        </ul>
                                    </div>
                                ))}

                            </>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>    
    )
}