import '../css/Footer.css'
import imgfot from '../assets/logo.png'
const Footer = () => {
    return ( 
        <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="footer, address, phone, icons" />
        <title>Some footer </title>
        <link rel="stylesheet" href="css/footer-distributed-with-address-and-phones.css" />
        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" />
        <link href="http://fonts.googleapis.com/css?family=Cookie" rel="stylesheet" type="text/css" />
        <footer className="footer-distributed">
          <div className="footer-left">
            <img src={imgfot} alt="" width={150} height={100} />
            <p className="footer-links">
              <a href="#">Beranda</a> ·
              <a href="#">Tentang</a> ·
              <a href="#">Layanan</a> ·
              <a href="#">Star Up</a> ·
              <a href="#">Acara</a> ·
              <a href="#">Kontak</a>
            </p>
            <p className="footer-company-name">© 2022 Binari. All rights reserved</p>
          </div>
          <div className="footer-center">
            <div>
              <i className="fa fa-map-marker" />
              <p><span>Jl. Pelajar Pejuang 45 No, 65 </span> Bandung</p>
            </div>
            <div>
              <i className="fa fa-phone" />
              <p>+62 854-7344-8902</p>
            </div>
            <div>
              <i className="fa fa-envelope" />
              <p><a href="#">admin@Binari.id</a></p>
            </div>
          </div>
          <div className="footer-right">
            <p className="footer-company-about">
              <span>Tentang Binari</span> Binari adalah Inkubator startup yang berlokasi di Bandung yang mengasuh berbagai startup berbasis teknologi menggunakan konsep "People-Process-Technology"

            </p>
            <div className="footer-icons">
              <a href="#"><i className="fa fa-facebook" /></a>
              <a href="#"><i className="fa fa-twitter" /></a>
              <a href="#"><i className="fa fa-linkedin" /></a>

            </div>
          </div>
        </footer>
      </div>
     );
}
 
export default Footer;