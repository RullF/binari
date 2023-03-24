import Nav from '../components/Navigation';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Ttg from '../components/tentg';
import '../css/starup.css'

const Tentang = () => {
    return ( 
        <>
        <Nav/>
        <div className='tentang flex flex-col justify-center items-center text-3xl font-bold text-white '>
            <h1 className='animate__animated animate__fadeIn animate__delay-0.8s'>TUMBUH KEMBANG DENGAN BERKOLABORASI, BELAJAR, DAN MENDAPATKAN AKSES </h1>
            <h1 className='animate__animated animate__fadeIn animate__delay-0.8s'> KE JARINGAN STRATEGIS BINARI!</h1>
        </div>
        <Ttg/>  
        <Card/>
        <Footer/>
        </>
     );
}
 
export default Tentang;