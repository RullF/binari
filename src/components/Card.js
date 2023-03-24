import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import '../css/Card.css'
import card1 from '../assets/Yoanes Bandung.jpg'
import card2 from '../assets/Armein Z R Langi.jpg'
import card3 from '../assets/Dwi Hendratmo Widyantoro.jpg'
import card4 from '../assets/Mervin T. Hutabarat.jpg'
import card5 from '../assets/M. Fahmi Nurfadillah.png'
import card6 from '../assets/Mohammad Maulana.png'  

const Card = () => {
    return (  
        <>
        
        
        <div>
        <heading>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        </heading>
        <div className="container">
          <center>
            <h1 className="title tim text-3xl font-bold text-center mb-20">Tim Kami</h1>
          </center>
          <div className="row flex gap-20 w-full justify-center ">
            <div className="column mb-8">
              <div className="card">
                <div className="content">
                  <div className="front">
                    <img className="profile" width="100%" src={card1} alt="Neymar" />
                    <h2>Yoanes Bandung</h2>
                  </div>
                  <div className="back from-bottom flex flex-col justify-center items-center">
                    <h2>Yoanes Bandung</h2>
                    <h3>Incubator Manager</h3>
                    <ul className="flex flex-row justify-center items-center gap-4">
                      <li><BsInstagram className="h-50 w-50" height={100} width={100}/></li>
                      <li><BsFacebook/></li>
                      <li><BsTwitter/></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>


            <div className="column">
              <div className="card">
                <div className="content">
                  <div className="front">
                    <img className="profile" width="100%" src={card2} />
                    <h2>Armein Z R Langi</h2>
                  </div>
                  <div className="back from-bottom flex flex-col justify-center items-center">
                  <h2>Armein Z R Langi</h2>
                    <h3>Chief Of Partnership</h3>
                    <ul className="flex flex-row justify-center items-center gap-4">
                      <li><BsInstagram className="h-50 w-50" height={100} width={100}/></li>
                      <li><BsFacebook/></li>
                      <li><BsTwitter/></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="content">
                  <div className="front">
                    <img className="profile" width="100%" src={card1} />
                    <h2>Dwi Hendratmo </h2>
                  </div>
                  <div className="back from-bottom flex flex-col justify-center items-center">
                  <h2>Dwi Hendratmo Widyantoro</h2>
                    <h3>General Manager Binari</h3>
                    <ul className="flex flex-row justify-center items-center gap-4">
                      <li><BsInstagram className="h-50 w-50" height={100} width={100}/></li>
                      <li><BsFacebook/></li>
                      <li><BsTwitter/></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row flex gap-20 w-full justify-center">
            <div className="column">
              <div className="card">
                <div className="content">
                  <div className="front">
                    <img className="profile" width="100%" src={card1} alt="Neymar" />
                    <h2>Mervin T. Hutabarat</h2>
                  </div>
                  <div className="back from-bottom flex flex-col justify-center items-center">
                  <h2>Mervin T. Hutabarat</h2>
                    <h3>Chief Of Marketing</h3>
                    <ul className="flex flex-row justify-center items-center gap-4">
                      <li><BsInstagram className="h-50 w-50" height={100} width={100}/></li>
                      <li><BsFacebook/></li>
                      <li><BsTwitter/></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>


            <div className="column">
              <div className="card">
                <div className="content">
                  <div className="front">
                    <img className="profile" width="100%" src={card2} />
                    <h2>M. Fahmi Nurfadillah</h2>
                  </div>
                  <div className="back from-bottom flex flex-col justify-center items-center">
                  <h2>M. Fahmi Nurfadillah</h2>
                    <h3>IT staff</h3>
                    <ul className="flex flex-row justify-center items-center gap-4">
                      <li><BsInstagram className="h-50 w-50" height={100} width={100}/></li>
                      <li><BsFacebook/></li>
                      <li><BsTwitter/></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="content">
                  <div className="front">
                    <img className="profile" width="100%" src={card1} />
                    <h2>Mohammad Maulana</h2>
                  </div>
                  <div className="back from-bottom flex flex-col justify-center items-center">
                  <h2>Mohammad Maulana</h2>
                    <h3>Busdev. Manager Binari</h3>
                    <ul className="flex flex-row justify-center items-center gap-4">
                      <li><BsInstagram className="h-50 w-50" height={100} width={100}/></li>
                      <li><BsFacebook/></li>
                      <li><BsTwitter/></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        

      </div>
      </>
    );
}
 
export default Card;