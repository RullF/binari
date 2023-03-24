import Nav from '../components/Navigation';
import Footer from '../components/Footer';
import '../css/starup.css'
import acara1 from '../assets/acara1.jpeg'
import acara2 from '../assets/acara2.jpeg'
import acara3 from '../assets/acara3.png'
import acara4 from '../assets/acara4.jpg'
import acara5 from '../assets/acara5.jpg'
import acara6 from '../assets/acara6.jpg'




const Acara = () => {
    return ( 
        <>
        <Nav/>
        <div className='acara flex flex-col justify-center items-center text-6xl font-bold text-white'>
            <h1 className='animate__animated animate__fadeIn animate__delay-0.8s'>Acara Binari </h1>
        </div>
     
        <div className="my-32 mx-20">
            <div className='flex flex-row justify-center'>
                <img src= {acara1} className='w-96'/>
                <div className="p-10">
                    <h2 className='text-3xl'>Binari STARTUP INCUBATOR WEB 3.0 SERIES</h2>
                    <p>Binari STARTUP INCUBATOR WEB 3.0 SERIES "NFT Sebagai Potensi Ekonomi Kreatif Baru" Ingin buat NFT tapi bingung bagaimana caranya?Bingung bagaimana membangun hype...</p>
                </div>
            </div>
            <div className='flex flex-row-reverse justify-center text-right'>
                <img src= {acara2} className='w-96'/>
                <div className="p-10">
                    <h2 className='text-3xl'>Microsoft Dev//Verse</h2>
                    <p>Halo sobat Entrepereneur Binari Inkubator Bisnis membuka program pendampingan untuk startup, UMKM dan koperasi. Program pendampingan ini bertjuan untuk meningkatkan...</p>
                </div>
            </div>
            <div className='flex flex-row justify-center'>
                <img src= {acara3} className='w-96'/>
                <div className="p-10">
                    <h2 className='text-3xl'>Open Batch Program Pendampingan Startup, UMKM, dan Koperasi</h2>
                    <p>Halo sobat Entrepereneur Binari Inkubator Bisnis membuka program pendampingan untuk startup, UMKM dan koperasi. Program pendampingan ini bertjuan untuk meningkatkan...</p>
                </div>
            </div>
            <div className='flex flex-row-reverse justify-center text-right'>
                <img src= {acara4} className='w-96'/>
                <div className="p-10">
                    <h2 className='text-3xl'>Startup Talk "How to start a Startup in 2020"</h2>
                    <p>CALLING ALL STARTUP GOOD NEWS FOR YOU! Binari akan menyelenggarakan startup talk & mentoring bersama Achmad Zaky*"How to Start a...</p>
                </div>
            </div>
            <div className='flex flex-row justify-center'>
                <img src= {acara5} className='w-96'/>
                <div className="p-10">
                    <h2 className='text-3xl'>NTT STARTUP CHALLENGE 2019</h2>
                    <p>Coming back for its third year, NTT Startup Challenge will be supporting startup ecosystem in Indonesia! By just submitting your...</p>
                </div>
            </div>
            <div className='flex flex-row-reverse justify-center text-right'>
                <img src= {acara6} className='w-96'/>
                <div className="p-10">
                    <h2 className='text-3xl'>BANDUNG STARTUP MARKET DAY</h2>
                    <p>Hi Startups!Binari adalah startup incubator yang konsisten berkontribusi dalam pengembangan ekosistem startup dan telah mendampingi puluhan startup di Indonesia. Acara...</p>
                </div>
            </div>
        </div>

        <Footer/>
        </>
     );
}
 
export default Acara; 