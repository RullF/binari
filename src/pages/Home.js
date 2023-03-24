import Nav from '../components/Navigation';
import Car from '../components/Carousel';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Brd from '../components/beranda';
import '../css/starup.css'

function Home() {
  return (
    <>
    <Nav/>  
    <Car/>
    <Brd/>
    <div className='bawah flex flex-col justify-center items-center text-2xl font-bold text-pink-600'>
            <h1>TUMBUH KEMBANG DENGAN BERKOLABORASI, BELAJAR, DAN MENDAPATKAN AKSES KE JARINGAN </h1>
            <h1>STRATEGIS BINARI!</h1>
        </div>
    <Footer/>
    </>
  );
}

export default Home;
