import Nav from '../components/Navigation';
import Footer from '../components/Footer';
import '../css/starup.css'
import Cardstarup from '../components/Cardstarup';


const Starup = () => {
    return ( 
        <>
        <Nav/>
        <div className='starup flex flex-col justify-center items-center text-6xl font-bold text-white'>
            <h1 className='animate__animated animate__fadeIn animate__delay-0.8s'>Startup Kami</h1>
        </div>
        <Cardstarup />
        <Footer/>
        </>
     );
}
 
export default Starup;