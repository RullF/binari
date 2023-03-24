import Nav from '../components/Navigation';
import Footer from '../components/Footer';
import '../css/starup.css'
import lay4 from '../assets/lay4.jpg'
import { BsArrowLeftShort } from "react-icons/bs";

const Artikel_workspace = () => {
    return ( 
        <>
        <Nav/>
        <div className='layanan flex flex-col justify-center items-center text-6xl font-bold text-white'>
        <p className='animate__animated animate__fadeIn animate__delay-0.8s'>Workspace</p>
        </div>

           <center>
            <img src={lay4} className='center'/>
           </center>
        
        <div className='centers text-4xl'> 
            <h3 className='font-bold'>Creative Workspace</h3>
            
            <div className=' text-2xl pt-20 '> 
            <h3 className='font-bold'>   </h3>
            
            <div className='text-lg '> 
            Binari memiliki coworking space yang beralamat di Jalan Naripan No.53 Bandung. Workspace53 memiliki fasilitas yang cukup lengkap seperti ruang meeting, virtual office, meja kerja untuk tim ataupun untuk individual, ruang kantor, serta dapat digunakan untuk menyelenggarakan public event. Untuk info lebih lengkap bisa mengunjungi Workspace53.com. 

            <a href='/layanan' className=' text-xl pt-20 flex flex-row items-center space-x-[]'>
            < BsArrowLeftShort/> 
            <p>Kembali</p >
            </a>
            </div>
            </div>
        </div>
    

        <Footer/>
        </>
     );
}
 
export default Artikel_workspace;