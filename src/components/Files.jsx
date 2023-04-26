import React from 'react';

const Files = ({data}) => {
    return (  
        <>
            <div className='w-100 m-0 p-4 text-center bg-dark text-light' id='files'>
                <h2 className='m-0 p-0'>Archivos</h2>
                <h3 className='m-0 p-0'></h3>
                <div className='w-100 px-3 d-flex flex-row justify-content-evenly align-items-baseline py-1'>
                    {data.map((file)=>
                        <div className='d-flex flex-column justify-content-center align-items-center w-50'>
                            <h4 className='m-0 py-2'>{file.title}</h4>
                        </div>
                    )}
                </div>
                <div className='w-100 px-3 d-flex flex-row justify-content-evenly align-items-baseline'>
                    {data.map((file, i)=>
                        <div className='d-flex flex-column justify-content-center align-items-center w-50'>
                            {i === 1 ? (
                                <a className='btn btn-outline-primary my-2 w-50' href={file.file} download>Haz click</a>
                            ):(
                                <a className='btn btn-outline-primary my-2 w-50' href={file.file} target="_blank">Haz click</a>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
 
export default Files;