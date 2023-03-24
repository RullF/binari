import prd1 from '../assets/lay1.png'
import prd2 from '../assets/lay2.png'
import prd3 from '../assets/lay3.png'
import prd4 from '../assets/lay4.jpg'
import prd5 from '../assets/lay5.png'
import prd6 from '../assets/lay6.png'

const Lay = () => {
    return ( 
        <>
        <div className='flex flex-col justify-center items-center gap-10 my-9'> 
          <p className='text-[40px] font-bold mx-32 text-center my-20 '> Kami menyediakan berbagai macam layanan bisnis.</p>
        </div>
        <div class="mx-4 my-4  gap-10">
  
        <div class=" flex flex-row gap-10 justify-center items-center">
          <a href="/artikel_starup">
          <div class="mx-auto my-3 max-w-md rounded overflow-hidden shadow-lg">
            <img src={prd1}class="w-full" alt="a platter of cookies"/>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Program Inkubasi Startup</div>
              <p class="text-base text-gray-700">
              Satu tahun program Inkubator dengan kesempatan pendanaan sampai 350 juta rupiah / perusahaan.


              </p>
            </div>

          </div>
          </a>

          <a href="/artikel_workshop">
          <div class="mx-auto my-3 max-w-md rounded overflow-hidden shadow-lg">
            <img src={prd2}class="w-full" alt="a platter of cookies"/>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Kegiatan Workshop</div>
            <p class="text-base text-gray-700">
            Perdalam ilmu melalui Binari Startup Class dan Binari Startup Talk.
 

            </p>
          </div>

          </div>
          </a>

          <a href="/artikel_investor">
          <div class="mx-auto my-3 max-w-md rounded overflow-hidden shadow-lg">
            <img src={prd3}class="w-full" alt="a platter of cookies"/>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Jaringan Investor</div>
            <p class="text-base text-gray-700">
            Berkesempatan Networking dan Business Matching bersama Investor.
            </p>
          </div>
          
          </div>
          </a>

        </div>


        <div className='flex flex-row gap-10 justify-center items-center'>
        <a href="/artikel_workspace">
        <div class="mx-auto my-3 max-w-md rounded overflow-hidden shadow-lg">
  <img src={prd4}class="w-full" alt="a platter of cookies"/>
 <div class="px-6 py-4">
  <div class="font-bold text-xl mb-2">Workspace</div>
  <p class="text-base text-gray-700">
  Daptakan Ekosistem kerja nyaman di coworking space (Workspace 53).


  </p>
 </div>
 
</div>
</a>
<a href="/artikel_event">
<div class="mx-auto my-3 max-w-md rounded overflow-hidden shadow-lg">
  <img src={prd5}class="w-full" alt="a platter of cookies"/>
 <div class="px-6 py-4">
  <div class="font-bold text-xl mb-2">Konsultasi Event</div>
  <p class="text-base text-gray-700">
  Rencanakan eventmu dengan Binari sebagai Event Organizernya.


  </p>
 </div>
 
</div>
</a>

<a href="/artikel_lab">
<div class="mx-auto my-3 max-w-md rounded overflow-hidden shadow-lg">
  <img src={prd6}class="w-full" alt="a platter of cookies"/>
 <div class="px-6 py-4">
  <div class="font-bold text-xl mb-2">Lab Penelitian</div>
  <p class="text-base text-gray-700">
  Binari Lab Penelitian fokus dalam penelitian pada UMKM dan Startup.


  </p>
 </div>
 
</div>
</a>
        </div>

      </div>













  
</>
     );
}
 
export default Lay;