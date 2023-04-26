import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import data from './data.json';
import Files from './Files';
import About from './About';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const App = () => {
    const segments = data.navbar
    const title = data.title
    const files = data.files
    const about = data.about

    return (  
        <>

            {/* <Navbar data={segments}/> */}

            <div className='d-flex flex-column justify-content-center bg-dark-subtle'>
                <div className='w-100 m-0 p-4 text-center d-flex align-items-end' style={{"backgroundImage" : "url(/images/banner.jpg)", "backgroundSize" : "cover", "height" : "50vh"}}>
                    <h1 className='m-o px-5 text-light fw-bold'>{title}</h1>
                </div>

                <Files data={files}/>

                <About data={about}/>
            </div>

            <Footer/>
        </>
    );
}
 
export default App;