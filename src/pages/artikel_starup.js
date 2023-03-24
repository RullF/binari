import Nav from '../components/Navigation';
import Footer from '../components/Footer';
import '../css/starup.css'
import lay1 from '../assets/lay1.png'
import { BsArrowLeftShort } from "react-icons/bs";

const Artikel_starup = () => {
    return ( 
        <>
        <Nav/>
         <div className='layanan flex flex-col justify-center items-center text-6xl font-bold text-white'>
            <p className='animate__animated animate__fadeIn animate__delay-0.8s'>Program Inkubasi Startup</p>
        </div> 

           <center>
            <img src={lay1} className='center'/>
           </center>
        
        <div className='centers text-4xl'> 
            <h3 className='font-bold'>Startup Incubation Program</h3>
            
            <div className='text-lg pt-14'> 
           Binari berpengalaman lebih dari 5 tahun dalam menjalankan Inkubator dan sudah menjadi anggota AIBI (Asosiasi Inkubator Bisnis Indonesia) serta calon anggota ABI-Net (ASEAN Business Incubator Network). Program yang kami tawarkan adalah :

            <div className=' text-2xl pt-20 '> 
            <h3 className='font-bold'>- Incubator Consultation</h3>
            
            <div className='text-lg pt-3'> 
            Binari menawarkan kepada anda kerjasama untuk pembuatan inkubator di perusahaan anda, peran Inkubator penting bagi anda yang sedang melakukan pengembangan produk digital (R&D).

            <div className=' text-2xl pt-20'> 
            <h3 className='font-bold'>- Incubation Program Consulting and Organizer</h3>
            
            <div className='text-lg pt-3'> 
            Binari menawarkan kepada anda kerjasama dalam menjalankan program pembinaan baik pada Startup dan UMKM. Kami berpengalaman bekerjasama dengna Pemkot Cimahi serta Inkubator Enhaiipreneur dalam program pembinaan Startup.

            <a href='/layanan' className=' text-xl pt-20 flex flex-row items-center space-x-[]'>
            < BsArrowLeftShort/> 
            <p>Kembali</p >
            </a>

            </div>
            </div>
            </div>
            </div>
            </div>
        </div>

        <Footer/>
        </>
     );
}
 
export default Artikel_starup;