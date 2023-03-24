import logo from '../assets/logo.png'
const Nav = () => {
    return ( 
<div className='z-50 fixed top-0 left-0 right-0'>
        <div className="w-full h-20 flex bg-white">
          <div className="container flex items-center m-auto justify-between">
            <div className="flex items-center">
              <img src={logo} height={60} width={60} className='ml-32 '/>
              <span className="text-lg font-medium"></span>
            </div>
            <div className="md:flex hidden space-x-6 text-gray-600 mr-44">
              <a className="cursor-pointer hover:text-pink-600 text-xxl" href="/">Beranda</a>
              <a className="cursor-pointer hover:text-pink-600 text-xxl" href="/tentang">Tentang</a>
              <a className="cursor-pointer hover:text-pink-600 text-xxl" href="/layanan">Layanan</a>
              <a className="cursor-pointer hover:text-pink-600 text-xxl" href="/starup">Startup</a>
              <a className="cursor-pointer hover:text-pink-600 text-xxl" href="/acara">Acara</a>
              <a className="cursor-pointer hover:text-pink-600 text-xxl" href="/kontak">Kontak</a>
            </div>
            <div>
              <span></span>
            </div>
          </div>
        </div>
      </div> );
}
 
export default Nav ;

