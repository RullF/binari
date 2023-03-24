import Nav from '../components/Navigation';
import Footer from '../components/Footer';
import '../css/starup.css'
import lay5 from '../assets/lay5.png'
import { BsArrowLeftShort } from "react-icons/bs";

const Artikel_event = () => {
    return ( 
        <>
        <Nav/>
        <div className='layanan flex flex-col justify-center items-center text-6xl font-bold text-white'>
        <p className='animate__animated animate__fadeIn animate__delay-0.8s'>Konsultasi Event</p>
        </div> 

           <center>
            <img src={lay5} className='center'/>
           </center>
        
        <div className='centers text-4xl'> 
            <h3 className='font-bold'>Event Consultation</h3>
            
            <div className='text-lg pt-20'> 
            Binari menawarkan jasa Event Consultant dan Organizer. Binari sudah berpengalaman dalam menyelenggarakan event bertema startup, dan juga berpengalaman dalam menjalin kerjasama dengan organisasi pemerintah maupun swasta dalam mengadakan event. Beberapa event yang pernah Binari adakan diantaranya adalah : 

            <div className=' text-lg font-bold pt-20 '> 
            <p> - Ideology Boothcamp 2018             </p>
            <p> - Seminar Bisnis dan Investasi "Start Small, Grow Bigger"             </p>
            <p> - Business Matching "Get Ready to Boost Your Startup"             </p>
            <p> - Bandung Investment Night 2018             </p>
            <p> - Startup Class 2019 "How to be profitable and sustainable Startup"             </p>
            <p> - Startup Talk 2019 "Road to industry 4.0"             </p>


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
 
export default Artikel_event;