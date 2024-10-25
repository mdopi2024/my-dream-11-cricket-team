import banner from '../../public/img/banner-main.png'
import bannerBg from '../../public/img/bg-shadow.png'


const Banner = ({handleFreeCreadit}) => {
    return (
        <div className='border  container mx-auto p-9 bg-black rounded-xl my-10' style={{backgroundImage:`url(${bannerBg})`, backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
           {/* img here */}
           <div className='mx-auto w-64 h-52'>
           <img className='w-full h-full' src={banner} alt="" />
           </div>
           {/* text aria */}
           <div className='text-center mt-4'>
            <h1 className='text-3xl md:text-4xl text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className='text-[#FFFFFFB3] mt-4'>Beyond Boundaries Beyond Limits</p>
            <div className='border-2 rounded-lg inline-block border-[#E7FE29] p-1 mt-4'>
                <button onClick={handleFreeCreadit} className='bg-[#E7FE29] py-2 px-3 rounded-lg '>Claim Free Credit</button>
            </div>
           </div>
        </div>
    );
};

export default Banner;