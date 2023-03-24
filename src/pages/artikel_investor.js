import Nav from '../components/Navigation';
import Footer from '../components/Footer';
import '../css/starup.css'
import lay3 from '../assets/lay3.png'
import { BsArrowLeftShort } from "react-icons/bs";

const Artikel_investor = () => {
    return ( 
        <>
        <Nav/>
        <div className='layanan flex flex-col justify-center items-center text-6xl font-bold text-white'>
        <p className='animate__animated animate__fadeIn animate__delay-0.8s'>Jaringan Investor</p>
        </div> 

           <center>
            <img src={lay3} className='center'/>
           </center>
        
        <div className='centers text-4xl'> 
            <h3 className='font-bold'>Investor Network</h3>
            
        
            <div className=' text-2xl pt-20 '> 
            <h3 className='font-bold'>- Program PPBT</h3>
            
            <div className='text-lg pt-3'> 
            Setiap tahun Binari rutin mengikuti program PPTB yang diselenggarakan oleh Kementerian Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesian. Pada program ini para startup berkesempatan mendapatkan pendanaan hingga 350 juta rupiah.


            <div className=' text-2xl pt-20'> 
            <h3 className='font-bold'>- Business Matching</h3>
            
            <div className='text-lg pt-3'> 

Selain itu Binari setiap tahun juga mengadakan Business Matching yang mempertemukan para startup dengan para investor. Pada acara Business Matching ini para startup berkesempatan langsung melakukan presentasi kepada investor tentang bisnis atau ide bisnis yang mereka punya.

<a href='/layanan' className=' text-xl pt-20 flex flex-row items-center space-x-[]'>
            < BsArrowLeftShort/> 
            <p>Kembali</p >
            </a>
            
            </div>
            </div>
            </div>
            </div>
        </div>
    

        <Footer/>
        </>
     );
}
 
export default Artikel_investor;