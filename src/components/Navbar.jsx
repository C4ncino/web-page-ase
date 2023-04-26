import React from 'react';

const Navbar = ({data}) => {
        
    return (  
        <>
            <nav className="navbar navbar-expand-lg pe-5 border-0 border-bottom border-2 border-dark-subtle sticky-top bg-dark justify-content-end">
                <div className="container-fluid">
                    <button 
                        className="navbar-toggler py-2 border-light" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#Nada" 
                        aria-controls="Nada" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <i className="bi bi-three-dots-vertical text-light"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="Nada">
                        <div className="navbar-nav">
                            {data.map((segment)=>
                                <a 
                                    className="nav-link active fs-5 text-light ps-4" 
                                    aria-current="page" 
                                    href={segment.ref}
                                >
                                    {segment.name}
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
 
export default Navbar;