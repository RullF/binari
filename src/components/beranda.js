import '../css/Tentang.css'
import meet from '../assets/meet.jpg'
import meet2 from '../assets/meet2.jpg'
import meet3 from '../assets/meet3.jpg'
import meet4 from '../assets/meet4.jpg'

const Brd = () => {
    return ( 
        <>
        <div className='flex flex-col justify-center items-center  my-20'> 
            <h1 className='text-[30px]'>Binari Jalani Bisnis Anda</h1>
            <p className='text-[20px] font-thin mx-32 text-center text-gray-500'> "Menyediakan Jalan Yang luas Bagi Bisnis Anda"</p>

<p className='text-[20px] font-thin mx-32 text-center text-gray-500'>Bergabunglah Bersama Kami Untuk Evolusi, Buat Perubahan untuk Indonesia, Kembangkan Generasi Pengusaha,</p>
<p className='text-[20px] font-thin mx-32 text-center text-gray-500 '>dan Buat Dunia yang Lebih Baik</p>
        </div>
        <div className="flex flex-row justify-center gap-1">
            <div className="w-[450px] h-[250px] mb-36 p-4">
                    <img src={meet} alt="" className='w-[45 0px] h-[250px] rounded-lg object-cover'/>
                <div className="text-center mt-4">
                    <p className='text-gray-600'>Program Inkubator Bisnis</p>
                    <p className='text-lg'>PRODUCT ACCELERATOR</p>
                </div>
            </div>
            <div className="w-[450px] h-[250px] mb-36 p-4">
                    <img src={meet2} alt="" className='w-[450px] h-[250px] rounded-lg object-cover'/>
                <div className="text-center mt-4">
                    <p className='text-gray-600'>Program Edukasi Intensif</p>
                    <p className='text-lg'>FOUNDER BOOTCAMP</p>
                </div>
            </div>
            <div className="w-[450px] h-[250px] mb-36 p-4">
                    <img src={meet3} alt="" className='w-[450px] h-[250px] rounded-lg object-cover'/>
                <div className="text-center mt-4">
                    <p className='text-gray-600'>Jaringan Investor</p>
                    <p className='text-lg'>DIGITAL MARKETING</p>
                </div>
            </div>
            
        </div>
            <div className="flex flex-col justify-center items-center">
            <div className="w-[450px] h-[250px] mb-36 p-4">
                    <img src={meet4} alt="" className='w-[450px] h-[250px] rounded-lg object-cover'/>
                <div className="text-center mt-4">
                    <p className='text-gray-600'>Manajemen Keuangan</p>
                    <p className='text-lg'>FINANCE & TAX</p>
                </div>
            </div>
            </div>
        </>
     );
}
 
export default Brd;