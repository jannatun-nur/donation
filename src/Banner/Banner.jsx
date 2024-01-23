import banner1 from '../../public/assets/images/banner-1.jpg'
import banner2 from '../../public/assets/images/banner-2.jpg'

const Banner = () => {
  return (
    <div className="p-6 py-12 bg-white text-[#602876]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          
          <div className="space-x-2 text-center py-2 lg:py-0">
            <p className='text-4xl w-5/12 font-bold'>SHARE YOUR SMILE,
             SHOW YOUR INNER KINDNESS.....</p>
             <p className='text-start font-serif text-[#602876]'>One step of yours can be the reason of other's smile.... </p>
            
           
          </div>
          <div>
            <img className='absolute lg:h-[150px] rounded-lg' src={banner1} alt="" />
            <img className='relative lg:h-[150px] top-24 right-20 rounded-lg' src={banner2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
