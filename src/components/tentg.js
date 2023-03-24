import '../css/Tentang.css'
import vm from '../assets/logo.png'
const Ttg = () => {
    return ( 
        <>
        <div className='flex flex-col justify-center items-center gap-10 my-9'> 
            <h1 className='text-[30px] animate__animate animate__fadeInUp'>SELAMAT DATANG DI BINARI</h1>
            <p className='text-[40px] font-bold mx-32 text-center '> Binari inkubator merupakan program Inkubasi startup melalui serangkaian seleksi mulai dari bootcamp, mentoring beasiswa hingga akses funding.</p>
        </div>
        <div className='profil mt-10 pt-[80px]'>
        <div className="profiltentang_1">
        <img src={vm}  className='mr-36' alt="" height={200} width={200}/>
            <div className="kataa2">
            <h2 className='ml-20 text-4xl'>VISI</h2>
                <p className="kataa2 mr-2">

                Visi kami adalah menjadi Inkubator terbaik untuk Startups bidang teknologi informasi dan komunikasi di Indonesia.
                </p>
            </div>
        </div>
    </div>
    <div className='profil mb-50'>
    <div className="profiltentang_2">
    <img src={vm}  className='' alt="" height={200} width={200}/>
        <div className="kataa1">
        <h2 className='ml-4 text-4xl'>MISI</h2>
            <ul className="kataa2 ml-8 list-disc">
              <li>Mengelola program Inkubator yang berfokus pada solusi dan inovasi berkelanjutan.</li>
              <li>Menyediakan fasilitas yang mendorong Startup untuk menjadi kreatif dan produktif.</li>
              <li>Menjadi penghubung untuk Startup dengan sinergi program dan kolaborasi dengan investor, pemerintah, perusahaan, akademisi, media dan komunitas.</li>
              <li>Mengelola pendanaan yang menguntungkan dan modal pertumbuhan untuk Investor dan Startup.</li>

            </ul>
        </div>
    </div>
</div>
</>
     );
}
 
export default Ttg;