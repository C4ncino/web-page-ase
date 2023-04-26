import React from 'react';
import pp from '../../public/images/pp.jpg'

const About = ({data}) => {
    return (  
        <>
            <div className='d-flex flex-column align-items-center p-4' id='about'>
                <h2>Conocenos</h2>

                <div className="row row-cols-1 row-cols-md-4 g-0 p-3 m-0">
                    {data.map((member)=>
                        <div className="col d-flex align-items-center justify-content-center">
                            <div className="card p-2 m-3 border-0 bg-transparent w-100" style={{"height" : "26rem"}}>
                                <img src={member.pp} className="card-img-top object-fit-cover rounded-circle" alt="..." style={{"height" : "14rem", "width": "14rem"}}/>
                                <div className="card-body">
                                    <h5 className="card-title">{member.name}</h5>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item bg-transparent">{member.carrer}</li>
                                </ul>
                                <div className="card-footer bg-transparent">
                                    <small className="text-body-secondary ">{member.semester}</small>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
 
export default About;