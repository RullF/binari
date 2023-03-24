import Nav from '../components/Navigation';
import Footer from '../components/Footer';
import '../css/starup.css'
import React, { useState } from 'react';
import axios, { Axios } from "axios";
import Swal from "sweetalert2";


const Kontak = () => {
  const [inputs, setInputs] = useState({})

const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
}
const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:80/binari/user/save', inputs);
    console.log(inputs);
    
    Swal.fire({  
        text: 'Pesan Terkirim',
        imageUrl: '../assets/logo.png',
        timer: 2000,
      }); 
}
    return (
        <>
        <Nav/>
        <div className='kontak flex flex-col justify-center items-center text-6xl font-bold text-white'>
            <p className='animate__animated animate__fadeIn animate__delay-0.8s'>Kontak Binari</p>
        </div> 
        <div>
        <div className="formbold-main-wrapper flex flex-row ">
          <div className='text-3xl font-sans  ml-32'>
            <p>Jangan ragu untuk</p>
            <p>mengontak kami untuk</p>
            <p>mendapatkan informasi</p>
            <p>tentang Binari</p>
            <div className='text-2xl font-thin mt-10'>
              <p>Kontak kami untuk segera mendapat bantuan</p>
            </div>
            <div className='text-3xl mt-10'>
              <p>admin@binari.id</p>
            </div>
            <div className='text-3xl mt-10'>
              <p>Jl. Pelajar Pejuang 45 No, 65 </p>
              <p>Bandung</p>
            </div>
          </div>
          <div className="formbold-form-wrapper pt-48 ">
            <form onSubmit={handleSubmit}>
              <div className="formbold-mb-5">
                <label htmlFor="name" className="formbold-form-label"> Nama </label>
                <input required onChange={handleChange} type="text" name="nama_pengguna"  id="name" placeholder="Nama" className="formbold-form-input" />
              </div>
              <div className="formbold-mb-5">
                <label htmlFor="subject" className="formbold-form-label"> Nomor Handphone </label>
                <input required onChange={handleChange} type="text" name="no_telp" id="subject" placeholder="+62 " className="formbold-form-input" />
              </div> 
              <div className="formbold-mb-5">
                <label htmlFor="email" className="formbold-form-label"> Alamat Email </label>
                <input required onChange={handleChange} type="email" name="email" id="email" placeholder="binari@Gmail.com" className="formbold-form-input" />
              </div>
              <div className="subject mb-5 space-y-[10px]">
            <label htmlFor="subject">Pilih</label>
            <select onChange={handleChange} placeholder="Subject line" name="option" id="subject_input" required className='w-full p-2 rounded-sm'>
              <option value='Saya memiliki proposal kerjasama'>Saya memiliki proposal kerjasama</option>
              <option value='Saya ingin berkolaborasi dengan binari'>Saya ingin berkolaborasi dengan binari</option>
              <option value='Saya mau bergabung dengan binari'>Saya mau bergabung dengan binari</option>
            </select>
          </div>
              <div className="formbold-mb-5">
                <label htmlFor="message" className="formbold-form-label"> Pesan Anda </label>
                <textarea required onChange={handleChange} rows="6" name="massage" id="message" placeholder="Pesan Anda" className="formbold-form-input" defaultValue="" />
              </div>
              <div>
                <button className="formbold-btn">Kirim Pesan</button>
              </div>
              
            </form>
          </div>
          </div>
        <Footer/>
        </div>
        </>
     );
}
 
export default Kontak;