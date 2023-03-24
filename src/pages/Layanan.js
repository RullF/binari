import Nav from '../components/Navigation';
import Footer from '../components/Footer';
import img from '../assets/test.jpg'
import Lay from '../components/Lay';
import '../css/starup.css'

const Layanan = () => {
    return ( 
        <>
        <Nav/>
        <div className='layanan flex flex-col justify-center items-center text-6xl font-bold text-white'>
        <p className='animate__animated animate__fadeIn animate__delay-0.8s'>Program Kami</p>
        </div> 
        <Lay />

        <Footer/>
        </>
     );
}
 
export default Layanan;