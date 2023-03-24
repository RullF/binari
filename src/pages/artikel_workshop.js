import Nav from '../components/Navigation';
import Footer from '../components/Footer';
import '../css/starup.css'
import lay2 from '../assets/lay2.png'
import { BsArrowLeftShort } from "react-icons/bs";

const Artikel_workshop = () => {
    return ( 
        <>
        <Nav/>
        <div className='layanan flex flex-col justify-center items-center text-6xl font-bold text-white'>
        <p className='animate__animated animate__fadeIn animate__delay-0.8s'>Kegiatan Workshop</p>
        </div> 

           <center>
            <img src={lay2} className='center'/>
           </center>
        
        <div className='centers text-4xl'> 
            <h3 className='font-bold'>Workshop Activities</h3>
            
            <div className=' text-2xl pt-20 '> 
            <h3 className='font-bold'> Startup Class dan Startup Talk</h3>
            
            <div className='text-lg pt-3'> 
            Startup Class dan Startup Talk adalah kelas pembelajaran yang khusus diadakan oleh Binari. Pengisi materi Startup Class dan startup Talk adalah para ahli di bidangnya yang juga berkecimpung langsung di dunia startup. Khusus Startup Class peserta adalah terbatas untuk para tenant binaan Binari. Para sesi startup class ini para tenant bisa bertanya dan berdiskusi langsung dengan para pemateri tentang masalah yang dihadapi mereka dalam menjalankan bisnis yang sedang dijalani.

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
 
export default Artikel_workshop;