import Nav from '../components/Navigation';
import Footer from '../components/Footer';
import '../css/starup.css'
import lay6 from '../assets/lay6.png'
import { BsArrowLeftShort } from "react-icons/bs";

const Artikel_lab = () => {
    return ( 
        <>
        <Nav/>
        <div className='layanan flex flex-col justify-center items-center text-6xl font-bold text-white'>
        <p className='animate__animated animate__fadeIn animate__delay-0.8s'>Lab Penelitian</p>
        </div> 
        
           <center>
            <img src={lay6} className='center'/>
           </center>
        
        <div className='centers text-4xl'> 
            <h3 className='font-bold'>Lab Penelitian</h3>
            
            <div className='text-lg pt-20'> 
            Binari Research Lab fokus dalam penelitian pada UMKM dan Startup. Salah satu yang Binari Research Labs lakukan adalah Assessment untuk pinjaman lunak PKBL Pertamina MOR 3, sebanyak lebih dari 450 UMKM telah di assessment kelayakan usahanya bekerjasama dengan PT. Rekacipta Inocasi ITB.

           
            <a href='/layanan' className=' text-xl pt-20 flex flex-row items-center space-x-[]'>
            < BsArrowLeftShort/> 
            <p>Kembali</p >
            </a>
            
            </div>
        </div>
    

        <Footer/>
        </>
     );
}
 
export default Artikel_lab;