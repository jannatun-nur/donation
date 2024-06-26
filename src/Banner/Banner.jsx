
import slider from '../../public/assets/images/slider.jpg'

const Banner = () => {
  return (
    <div className="p-6 py-12 bg-white text-[#602876]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          
          <div className="space-x-2 text-center py-2 lg:py-0">
            <p className='text-xl lg:text-4xl lg:w-5/12 w-11/12 font-bold'>SHARE YOUR SMILE,
             SHOW YOUR INNER KINDNESS.....</p>
             <p className='text-start font-serif text-[#602876] py-4'>One step of yours can be the reason of other's smile.... </p>
            
           
          </div>
          <div>
           
            <img className='h-[150px] md:h-full lg:h-[250px] top-14 lg:top-24 right-20 rounded-lg' src={slider} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
