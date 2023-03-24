import meet from '../assets/iwk1.png'
import meet2 from '../assets/iwk2.png'
import meet3 from '../assets/iwk3.png'
import meet4 from '../assets/iwk4.png'
import meet5 from '../assets/iwk5.png'
import meet6 from '../assets/iwk6.png'

const Cardstarup = () => {
    return ( 
        <>
                <div className='flex flex-col justify-center items-center  my-20'> 
            <h1 className='text-[30px]'>Startup Kebanggaan Kami</h1>
            <p className='text-[20px] font-thin mx-32 text-center text-gray-500'> “Any time is a good time to start a company.” - Ron Conway</p>

        </div>
        <div className="flex justify-center gap-5 pt-[50px]">
        <div className="w-[300px] h-[180px] mb-12 p-4">
                <img src={meet} alt="" className='w-[300px] h-[180px] rounded-
                lg bg-white shadow-md'/>

        </div>
        <div className="w-[300px] h-[180px] mb-12 p-4">
                <img src={meet2} alt="" className='w-[300px] h-[180px] rounded-lg bg-white shadow-md'/>
            
        </div>
        <div className="w-[300px] h-[180px] mb-12 p-4">
                <img src={meet3} alt="" className='w-[300px] h-[180px] rounded-lg bg-white shadow-md'/>
        
        </div>
        <div className="w-[300px] h-[180px] mb-12 p-4">
                <img src={meet4} alt="" className='w-[300px] h-[180px] rounded-lg bg-white shadow-md'/>
        </div>
    </div>

    <div className="flex flex-row justify-center items-center gap-5">
    <div className="w-[300px] h-[180px] mb-2 p-4">
                <img src={meet5} alt="" className='w-[300px] h-[180px] rounded-lg bg-white shadow-md'/>

        </div>
        <div className="w-[300px] h-[180px] mb-2 p-4">
                <img src={meet6} alt="" className='w-[300px] h-[180px] rounded-lg bg-white shadow-md'/>
            
        </div>
    </div>
    </>

     );
}
 
export default Cardstarup;